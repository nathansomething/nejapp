import { Component, OnInit } from '@angular/core';
import { QueryService } from '../query.service';
import { Button } from '../../pojo/button';

@Component({
  selector: 'query-interface',
  templateUrl: './query-interface.component.html',
  styleUrls: ['./query-interface.component.scss'],
  providers: [ QueryService ]
})
export class QueryInterfaceComponent {

  employee_reminders:any;
  employee_scripts:any;
  state:string;
  buttons:Button[];

  constructor(private queryService:QueryService) {
    this.employee_reminders = {"init": "«How can I help you today?»",
                            "product": "«What are you looking for?»",
                            "borrowing": "«What are you using the loan for?»",
                            "not-house": "«What is our next best offer to you?»"};

    this.employee_scripts = {"init": `How can I help you today? Are you looking to know more
                            information on a product or service or are you looking
                            for technical support?`,
                            "product": `Great! Can I help you with investments,
                                        borrowing, or other services?`,
                            "borrowing": `What would be the loan used for?
                                          Are you looking to purchase a house?`,
                            "not-house": `Let me get you to our best offer.
                                          What amount are you needing? For how long?`};
    this.state = "init";
    this.queryService.changeState("init");
    this.buttons = [new Button("PRODUCT", "green", false, "product"),
                    new Button("TECHNICAL SUPPORT", "gray", false, "product")];
  }

  changeState(state_name:string):void {
    this.state = state_name;

    if (state_name == "init") {
      this.buttons = [new Button("PRODUCT", "green", false, "product"),
                      new Button("TECHNICAL SUPPORT", "gray", false, "product")];
    }

    if (state_name == "product") {
      this.buttons = [new Button("INVESTMENT", "green", false, "borrowing"),
                      new Button("BORROWING", "lightgreen", false, "borrowing"),
                      new Button("ACCOUNT SERVICES", "gray", false, "borrowing")];
    }
    if (state_name == "borrowing") {
      this.buttons = [new Button("HOUSE PURCHANCE", "green", false, "not-house"),
                      new Button("NO HOUSE PURCHACE", "lightgreen", false, "not-house")];
    }
    if (state_name == "not-house") {
      this.buttons = [new Button("PERSONAL SECURED LOAN", "green", false, "not-house"),
                      new Button("PERSONAL UNSECURED LOAN", "lightgreen", false, "not-house"),
                      new Button("TD EXPRESS LOAN", "gray", false, "not-house")];
    }
    this.queryService.changeState(state_name);
  }

}
