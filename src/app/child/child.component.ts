import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child',
  template: `

    <!-- <h2> {{"Hello" + parentData}}</h2> -->
    <h2>{{"Hello" + name}}</h2>

    <button (click)="fireEvent()">Fire Event</button>
  `,
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

  // @Input() public parentData = "";
  @Input('parentData') public name = ""; 
  
  //for the communication of child to parent it can be done only through the event.
  @Output() public childEvent = new EventEmitter();
  ngOnInit(): void {
  }

  fireEvent(){
    this.childEvent.emit('Heyo from child component');
  }

}
