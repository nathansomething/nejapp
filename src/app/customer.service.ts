import { Injectable } from '@angular/core';
import { Customer } from '../pojo/customer';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class CustomerService {

  constructor(private http : Http) { }

  getAllCustomers() : Promise<Customer[]> {
    return this.http.get('../json/customers.json', {headers: this.getHeaders()})
                        .toPromise().then(response => response.json() as Customer[])
                        .catch(this.handleError);
  }

  private getHeaders() {
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
