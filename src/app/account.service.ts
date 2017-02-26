import { Injectable } from '@angular/core';
import { Account } from '../pojo/account';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AccountService {

  constructor(private http : Http) { }

  getAccounts():Promise<Account[]> {
    return this.http.get('../json/accounts.json', {headers: this.getHeaders()})
                        .toPromise().then(response => response.json() as Account[])
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
