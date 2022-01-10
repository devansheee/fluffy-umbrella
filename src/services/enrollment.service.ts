import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { User } from 'src/app/models/user';
import { catchError } from 'rxjs';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {

  _url = "http://localhost:3000/enroll";
  constructor(private http: HttpClient) { }

  enroll(user : User){
    return this.http.post<any>(this._url, user)
              .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse){
    return throwError(error);
  }

}
