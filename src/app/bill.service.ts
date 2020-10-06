import { Injectable } from '@angular/core';
import { IBill } from './IBill';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

@Injectable()

export class BillService {

  constructor( private httpClient: HttpClient) { }

  baseUrl = 'http://localhost:3000/bills';

  public getBillList(): Observable<IBill[]>{
    return this.httpClient.get<IBill[]>(this.baseUrl)
                .pipe(catchError(this.handleError));
  }

  private handleError(errorResponse: HttpErrorResponse) {
    if (errorResponse.error instanceof ErrorEvent){
      console.error('Client Side Error: ', errorResponse.error.message);
    } else {
      console.error('Server Side Error: ', errorResponse);
    }
    return throwError('There is problem with the service. Please try again later.');
  }

  public getBill(id: number): Observable<IBill> {
    return this.httpClient.get<IBill>(`${this.baseUrl}/${id}`)
                .pipe(catchError(this.handleError));
  }

  addBill(bill: IBill): Observable<IBill> {
    return this.httpClient.post<IBill>(this.baseUrl, bill, {
              headers: new HttpHeaders({
                'Content-Type': 'application/json'
              })
          })
          .pipe(catchError(this.handleError));
  }

  updateBill(bill: IBill): Observable<IBill> {
    return this.httpClient.put<IBill>(`${this.baseUrl}/${bill.id}`, bill , {
              headers: new HttpHeaders({
                'Content-Type': 'application/json'
              })
          })
          .pipe(catchError(this.handleError));
  }

  deleteBill(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.baseUrl}/${id}`)
          .pipe(catchError(this.handleError));
  }
}
