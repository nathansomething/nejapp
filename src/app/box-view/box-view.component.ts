import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'box-view',
  templateUrl: './box-view.component.html',
  styleUrls: ['./box-view.component.scss']
})
export class BoxViewComponent implements OnInit {

  @Input('title') title:string;

  constructor() { }

  ngOnInit() {
  }

}
