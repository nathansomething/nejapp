import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class QueryService {

  private stateSource = new BehaviorSubject<string>("init");

  state = this.stateSource.asObservable();

  changeState(state:string) {
    this.stateSource.next(state);
  }

}
