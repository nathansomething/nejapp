import { Component, OnInit, Input } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Customer } from '../../pojo/customer';

@Component({
  selector: 'customer-panel',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss'],
  providers: [ CustomerService ]
})
export class CustomerComponent implements OnInit {

  @Input('customer-id') customer_id:string;
  customer:Customer;
  customers:Customer[];

  constructor(private customerService:CustomerService) { }

  // getAllCustomers():void {
  //   this.customerService.getCustomers().then(customers => this.customers = customers);
  // }

  getCustomerById(customer_id:string):void {
    this.customerService.getCustomers().then(
      customers => this.customer = customers.filter(
        customer => customer.customer_id = customer_id)[0]
      );
  }

  ngOnInit():void {
    // this.getAllCustomers();
    this.getCustomerById(this.customer_id);
  }

}
