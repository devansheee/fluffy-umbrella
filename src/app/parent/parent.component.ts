import { Component, OnInit } from '@angular/core';
import { ChildComponent } from '../child/child.component';
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor() { }
  public name = "Devansheeeeee speaking from parent component to child component.";

  ngOnInit(): void {
  }

}
