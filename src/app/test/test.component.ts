import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
  <h1>All about data binding : Data flows from class to template</h1>
  <div>
    <h2>Welcome {{name}} from test component</h2></div> 
    2+2

    <!-- interpolation : only works with string values -->
    <h2>{{name.length}}</h2>   
    <h2>{{greetUser()}}</h2>
    <h2>{{siteUrl}}</h2>

    <!-- property binding  -->
    <input [id]="myId" type="text"/>  <br> <br> <br>  
    <input [disabled]="isDisabled" type="text"/>   

    <!-- class binding -->
    <h2 class="text-success">Devanshee Vankani :)</h2>
    <h2 [class]="success">Devanshee Vankani :)</h2>
    <!-- both can also work together -->
    <h2 class="text-special" [class]="success" >Devanshee Vankani :)</h2>
    <!-- conditionally apply classes -->
    <h2 [class.text-failure]= "hasError">Devanshee</h2>
    <!-- ng class directive -->
    <h2 [ngClass]="messageClasses">Devs</h2>



    <!-- style binding  and conditional prop-->
    <h2 [style.color]="!hasError ? 'blue' : 'pink' " >Style binding</h2>
    <!-- assign componet class prop during binding -->
    <h2 [style.color]="highlightcolor">Style 2</h2>
    <h2 [ngStyle]="titleStyles">Style 3</h2>

  ` 

  ,  

  //class bindings
  styles: [`
      div{
        color: red;
      }

      .text-success{
        color: green;
      }

      .text-failure{
        color: red;
      }

      .text-special{
        font-style: italic;
      }
  `]
})
export class TestComponent implements OnInit {

  constructor() { }
  public name = "Devanshee";
  //accesss global js variables in the class and then bind it to the template.
  public siteUrl = window.location.href;

  //property binding
  public myId = "test-ID";
  public isDisabled = true;


  //class binding and ng class directive
  public success = "text-success";
  public hasError = true;
  public isSpecial = true;
  public messageClasses = {
    "text-success": !this.hasError,
    "text-failure": this.hasError,
    "text-speacial": this.isSpecial
  }

  //style binding
  public highlightcolor = "purple";
  public titleStyles = {
    color: 'violet',
    fontStyle: 'italic'
  };

  ngOnInit(): void {
  }

  greetUser(){
    return "Hello " + this.name;
  }

  logMessage(message: string){
    console.log("Message logged", message);
  }

}
