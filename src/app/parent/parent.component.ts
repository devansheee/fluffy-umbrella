import { Component, OnInit } from '@angular/core';
import { ChildComponent } from '../child/child.component';
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor() { }
  //sending data from parent to child like data binding
  public name = "Devansheeeeee speaking from parent component to child component.";

  //sending data from parent to child is like event binding.
  public message="";

  //pipes
  public variable = "testing";
  public person = {
    firstname : "Devanshee",
    lastname : "Vankani"
  }

  ngOnInit(): void {
  }

}
