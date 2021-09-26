import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { studentInterface } from './Student';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class studentService {

  constructor(private _http: HttpClient) { }
  private _url = "../assets/data/student.json";
  getStudent(): Observable<studentInterface[]> {
    return this._http.get<studentInterface[]>(this._url)
      
    
    .pipe(catchError(this.errorHandler));


  }
  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || "Unknown Server Error");

  }

}
