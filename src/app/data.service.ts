import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  public getRecords() {
    return [
      {Name: 'navoday Printers', City: 'Aurangabad', Date: new Date('1/5/2020')},
      {Name: 'ajay Printers', City: 'Aurangabad', Date: new Date('2/25/2020')}
    ];
  }
}
