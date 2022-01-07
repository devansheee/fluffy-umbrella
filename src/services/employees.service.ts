import { HttpClient, HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IEmployee } from 'src/app/models/employee';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  private _url:string = "../assets/data/employee.json";

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<IEmployee[]>{
    //this will return observable of type employee array. we used catched operator on the observable.
    return this.http.get<IEmployee[]>(this._url)
                    .pipe(catchError(this.errorHandler));
                    

  }

  errorHandler(error : HttpErrorResponse){

    return throwError(error.message || "Server Error");

  }
}
