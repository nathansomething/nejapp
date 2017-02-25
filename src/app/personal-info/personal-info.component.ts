import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent implements OnInit {

  id:string;

  constructor() {
    this.id = "0011335";
  }

  ngOnInit() { }

}
