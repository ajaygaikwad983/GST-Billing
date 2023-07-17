import { Injectable } from '@angular/core';
import { IBill } from './IBill';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { ElectronService } from 'ngx-electron';

@Injectable()
export class BillService {
  constructor(
    private httpClient: HttpClient,
    private ElectronService: ElectronService
  ) {}

  baseUrl = 'http://localhost:3000/bills';

  public getBillList() {
    const listOfUser = JSON.parse(localStorage.getItem('data'));
    return listOfUser
      ? Promise.resolve(listOfUser.bills)
      : Promise.reject(
          'There is problem with the service. Please try again later.'
        );
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

  public getBill(id: number) {
    const listOfUser = JSON.parse(localStorage.getItem('data'));
    const bill = listOfUser.bills.filter((item) => item.id === id);
    return bill.length
      ? Promise.resolve(bill[0])
      : Promise.reject(
          'There is problem with the service. Please try again later.'
        );
  }

  addBill(bill: IBill) {
    try {
      const listOfUser = JSON.parse(localStorage.getItem('data'));
      bill.id = listOfUser.bills.length + 1;
      listOfUser.bills.push(bill);
      localStorage.setItem('data', JSON.stringify(listOfUser));
      this.ElectronService.ipcRenderer.send('changeInStore', listOfUser);
      return Promise.resolve();
    } catch (error) {
      return Promise.reject(
        'There is problem with the service. Please try again later.'
      );
    }
  }

  updateBill(bill: IBill) {
    try {
      const listOfUser = JSON.parse(localStorage.getItem('data'));
      const indexOfBill = listOfUser.bills.findIndex(
        (item) => item.id === bill.id
      );
      if (indexOfBill !== -1) {
        listOfUser.bills.splice(indexOfBill, 1, bill);
        localStorage.setItem('data', JSON.stringify(listOfUser));
        this.ElectronService.ipcRenderer.send('changeInStore', listOfUser);
      }
      return Promise.resolve();
    } catch (error) {
      return Promise.reject(
        'There is problem with the service. Please try again later.'
      );
    }
  }

  deleteBill(id: number) {
    try {
      const listOfUser = JSON.parse(localStorage.getItem('data'));
      const filteredData = listOfUser.bills.filter((item) => item.id !== id);
      listOfUser.bills = filteredData;
      localStorage.setItem('data', JSON.stringify(listOfUser));
      this.ElectronService.ipcRenderer.send('changeInStore', listOfUser);
      return Promise.resolve();
    } catch (error) {
      return Promise.reject(error.message);
    }
  }
}
