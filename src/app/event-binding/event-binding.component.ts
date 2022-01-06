import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  template: `
    <div>
      <h1>Welcome {{ name }}</h1>
    </div>

    <!-- you can also send the event information from the template to the class  -->
    <button (click)="onClick($event)">greet</button> {{ greet }}
    <br /><br /><br />
    <!-- inline statement is what you wrote instead of going to the class  -->
    <button (click)="greet = 'Welcome Devanshee'">greet</button> {{ greet }}
    <br /><br /><br />

    <!-- template reference variables - DOM elems props and values-->

    <!-- reference variable to be created using # symbol and then use it to access its props and values in the class   -->
    <input #myInput type="text" />
    <button (click)="logMessage(myInput.value)">Log</button> <br /><br /><br />

    <!-- two way binding. view and class in aync -->
    <!-- [ for prop binding ] & () for event binding  -->
    <input [(ngModel)]="name" type="text" />{{ name }} <br /><br /><br />

    <!-- structural directives  : ngIf ngSwitch ngFor -->
    <!-- nfIf is false then the entire element is removed from the html DOM  -->
    CONTROL OVER RENDERING THE ELEMENTS USING DIRECTIVES. <br />

    <!-- SYNTEX 1  -->
    <h2 *ngIf="displayname ; else elseBlock" >Show Me</h2>
    <ng-template #elseBlock>
      <h2>Name is f hidden!</h2>
    </ng-template>
    <!-- SYNTEX 1 ENDS HERE -->

    <!-- SYNTEX 2  -->
    <div *ngIf="displayname ; then thenBlock; else elseBlock"></div>

    <!-- for if statement -->
    <ng-template #thenBlock>
      <h2>This is visible</h2>
    </ng-template>

    <!-- for else statement -->
    <ng-template #elseBlock>
      <h2>This is hidden again</h2>
    </ng-template>
    <!-- SYNTEX 2  ENDS-->
  
    <div [ngSwitch]="color">
      <div *ngSwitchCase="'red'">You choose red.</div>
      <div *ngSwitchCase="'blue'">You choose blue.</div>
      <div *ngSwitchCase="'green'">You choose green. </div>
      <div *ngSwitchDefault>Ops. Pick again</div>
    </div>

    <br><br>

    <div *ngFor="let colour of colors; index as i; first as f">
      {{f}} => {{i}} - {{colour}}
    </div>


  
  `,
  styleUrls: ['./event-binding.component.css'],
})
export class EventBindingComponent implements OnInit {
  constructor() {}

  //event binding
  public name = '';
  public greet = '';

  //directives : if, for, switch
  public displayname = true;
  public color = "violet";
  public colors = ["red", "green", "blue"];
  ngOnInit(): void {}

  onClick(event: any) {
    console.log(event);
    this.greet = 'Event : ' + event.type;
  }

  logMessage(value: any) {
    console.log(value);
  }
}
