import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'box-button',
  templateUrl: './box-button.component.html',
  styleUrls: ['./box-button.component.scss']
})
export class BoxButtonComponent {

  @Input('color') background_color:string;
  @Input('rounded') rounded:boolean;
  text_color:string;
  border_radius:string;
  button_style:any;

  constructor() {
    if (this.background_color == "gray") {
      this.button_style = {
        "background-color": "#b3b3b3",
        "color": "#000"
      }
    }
    else if (this.background_color == "lightgreen") {
      this.button_style = {
        "background-color": "#53c653",
        "color": "#000"
      }
    }
    else {
      this.button_style = {
        "background-color": "#2eb82e",
        "color": "#FFF"
      }
    }
  }

}
