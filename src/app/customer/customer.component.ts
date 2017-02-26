import { Component, OnInit, Input } from '@angular/core';
import { CustomerService } from '../customer.service';
import { AccountService } from '../account.service';
import { QueryService } from '../query.service';
import { Customer } from '../../pojo/customer';
import { Account } from '../../pojo/account';
import { Subscription } from 'rxjs/Subscription';

import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'customer-panel',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss'],
  providers: [ CustomerService, AccountService, QueryService ]
})
export class CustomerComponent implements OnInit {

  @Input('customer-id') customer_id:string;
  customer:Customer;
  accounts:Account[];
  subscription:Subscription;
  state:string;

  constructor(private customerService:CustomerService,
              private accountService:AccountService,
              private queryService:QueryService) {
    this.accounts = [];
  }

  getCreditRatingColor():string {
    if (this.customer.credit_rating > 750) {
      return "#339933";
    }
    if (this.customer.credit_rating < 640) {
      return "#ff9999";
    }
    return "#ffff66";
  }

  getCustomerById(customer_id:string):Promise<Customer> {
    return this.customerService.getCustomers().then(
      customers => this.customer = customers.filter(
        customer => customer.customer_id = customer_id)[0]
      );
  }

  getAccountByAccountId(account_id:string, root:this):void {
    root.accountService.getAccounts().then(
      accounts => root.accounts.push(
        accounts.filter(account => account.id == account_id)[0]
      )
    )
  }

  ngOnInit():void {
    let root:this = this;
    this.getCustomerById(this.customer_id).then(
      function() {
        for(let account of root.customer.accounts) {
          root.getAccountByAccountId(account, root);
        }
      }
    );
    this.subscription = this.queryService.state
       .subscribe(state => this.state = state);
  }

  ngOnDestroy() {
    // prevent memory leak when component is destroyed
    this.subscription.unsubscribe();
  }

}
