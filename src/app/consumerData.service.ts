import { Injectable } from '@angular/core';
import { Consumer } from './consumerData';

@Injectable()
export class ConsumerDataService {
    public getRecords() {
        return [{
            ConsumerName: 'Navoday Printers',
            ConsumerCity: 'Aurangabad',
            ConsumerGST: '27AQFPP9778F1Z5',
            BillNo: 1,
            BillNoDate: '2017-07-05',
            DCNo: null,
            DCDate: '',
            PONo: null,
            PODate: '',
            Products: [
                { ProductName: '3 MM PVC FORM PESTING', HSNCode: '39201099', Size: 1560, Qty: null, RatePer: 25, Amount: 39000 },
                { ProductName: 'PVC FILM', HSNCode: '3919', Size: 1405.66, Qty: null, RatePer: 15, Amount: 21085 }
            ],
            Total: 60085,
            CGSTP: 9,
            SGSTP: 9,
            CGST: 5407.5,
            SGST: 5407.5,
            GrandTotal: 70500
         },
         {
         ConsumerName: 'Ajay Printers',
         ConsumerCity: 'Aurangabad',
         ConsumerGST: '27AQFPP9778F1Z5',
         BillNo: 2,
         BillNoDate: '2017-08-21',
         DCNo: null,
         DCDate: '',
         PONo: null,
         PODate: '',
         Products: [
             { ProductName: 'PVC Pesting', HSNCode: 39201099, Size: 1560, Qty: null, RatePer: 25, Amount: 30000 },
             { ProductName: '3 MM PVC FORM PESTING', HSNCode: 3919, Size: 1405.66, Qty: null, RatePer: 15, Amount: 20000 }
         ],
         Total: 50000,
         CGSTP: 10,
         SGSTP: 10,
         CGST: 5000,
         SGST: 5000,
         GrandTotal: 60000
        },
        {
            ConsumerName: 'asjdf Printers',
            ConsumerCity: 'pune',
            ConsumerGST: '27AQFPP9778F1Z5',
            BillNo: 3,
            BillNoDate: '2020-09-12',
            DCNo: null,
            DCDate: '',
            PONo: null,
            PODate: '',
            Products: [
                { ProductName: '3 MM PVC FORM PESTING', HSNCode: 39201099, Size: 1560, Qty: null, RatePer: 25, Amount: 39000 }
            ],
            Total: 60085,
            CGSTP: 9,
            SGSTP: 9,
            CGST: 5407.5,
            SGST: 5407.5,
            GrandTotal: 70500
           }
        ];
    }

    public newRecord(data) {
        let record = this.getRecords();
        record.unshift(data);
        return record;
    }
}



