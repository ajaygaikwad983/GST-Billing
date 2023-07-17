import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class LoginService {
  public id = 'passed';
  constructor(private httpClient: HttpClient) {}

  url = 'http://localhost:3000/user';

  public getUser() {
    const listOfUser = JSON.parse(localStorage.getItem('data'));
    return listOfUser.user.length
      ? Promise.resolve(listOfUser.user)
      : Promise.reject("There is problem with the service. Please try again later.");
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
