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

  constructor(private customerService:CustomerService) {

  }

  getCustomers():Promise<Customer[]> {
    return this.customerService.getAllCustomers().then(customers => this.customers = customers);
  }

  getCustomerById(id:string):Customer {
    for (let customer of this.customers) {
      if (customer.customer_id == id) {
        return customer;
      }
    }
  }

  ngOnInit():void {
    let root = this;
    this.getCustomers().then(function() {
      root.customer = root.getCustomerById(root.customer_id);
    })
  }

}
