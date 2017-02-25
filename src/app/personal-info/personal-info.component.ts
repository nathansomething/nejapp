import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss'],
  providers: [ CustomerService ]
})
export class PersonalInfoComponent implements OnInit {

  id:string;

  constructor() {
    this.id = "0011335";
  }

  ngOnInit() { }

}
