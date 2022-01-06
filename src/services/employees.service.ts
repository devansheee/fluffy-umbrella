import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor() { }

  getEmployees(){
    return [
      {"id" :  1, "name" : "Jwalit", "height": "170"},
      {"id" :  2, "name" : "Shlok", "height": "180"},
      {"id" :  3, "name" : "Devang", "height": "140"},
    ];
  }
}
