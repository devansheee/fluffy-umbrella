import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `

    <!-- <h2> {{"Hello" + parentData}}</h2> -->
    <h2>{{"Hello" + name}}</h2>
  `,
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

  // @Input() public parentData = "";
  @Input('parentData') public name = ""; 
 
  ngOnInit(): void {
  }

}
