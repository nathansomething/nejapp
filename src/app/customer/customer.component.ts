import { Component, OnInit, Input } from '@angular/core';
import { CustomerService } from '../customer.service';
import { AccountService } from '../account.service';
import { Customer } from '../../pojo/customer';
import { Account } from '../../pojo/account';

import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'customer-panel',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss'],
  providers: [ CustomerService, AccountService ]
})
export class CustomerComponent implements OnInit {

  @Input('customer-id') customer_id:string;
  customer:Customer;
  accounts:Account[];

  constructor(private customerService:CustomerService,
              private accountService:AccountService) {
                this.accounts = [];
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
  }

}
