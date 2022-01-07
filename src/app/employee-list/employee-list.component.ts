import { Component, ErrorHandler, OnInit } from '@angular/core';
import { EmployeesService } from 'src/services/employees.service';

@Component({
  selector: 'app-employee-list',
  template: `

    <h2>Employee List</h2>
    {{errorMessage}}
    <ul *ngFor="let emp of employees">
      <li>{{emp.name}}</li>
    </ul>   

    <h2>Employee Detailst</h2>
    <ul *ngFor="let emp of employees">
      <li>{{emp.id}} - {{emp.name}} - {{emp.height}}</li>
    </ul>   


  `,
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  public employees: any;
  public errorMessage : string ="";

  constructor(private _employeeService : EmployeesService) { }

  ngOnInit(): void {

   this._employeeService.getEmployees()
   .subscribe(data => this.employees = data,
              error => this.errorMessage = error
    );
  }

 
}
