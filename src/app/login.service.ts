import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class LoginService {
  public id = 'passed';
  constructor(private httpClient: HttpClient) {}

  url = 'http://localhost:3000/user';

  public getUser(): Observable<any> {
    return this.httpClient
      .get<any>(this.url)
      .pipe(catchError(this.handleError));
  }

  private handleError(errorResponse: HttpErrorResponse) {
    if (errorResponse.error instanceof ErrorEvent) {
      console.error('Client Side Error: ', errorResponse.error.message);
    } else {
      console.error('Server Side Error: ', errorResponse);
    }
    return throwError(
      'There is problem with the service. Please try again later.'
    );
  }

  public logIn() {
    return !!sessionStorage.getItem('token');
  }
}
