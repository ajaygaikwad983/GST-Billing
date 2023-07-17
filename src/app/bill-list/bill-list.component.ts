import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { BillService } from '../bill.service';
import { IBill } from '../IBill';

@Component({
  selector: 'app-bill-list',
  templateUrl: './bill-list.component.html',
  styleUrls: ['./bill-list.component.css'],
})
export class BillListComponent implements OnInit {
  public error = '';

  constructor(private routes: Router, private billService: BillService) {}

  public Records: IBill[];
  ngOnInit(): void {
    this.billService
      .getBillList()
      .then((listBill) => (this.Records = listBill))
      .catch((err) => (this.error = err));
  }

  addBillClick(): void {
    this.routes.navigate(['form']);
  }

  trackByBillNo(index: number, record: any) {
    return record.BillNo;
  }

  public showBill(billno) {
    this.routes.navigate(['print', billno]);
  }

  editBill(id: number) {
    this.routes.navigate(['/edit', id]);
  }

  deleteBill(id: number) {
    if (confirm('Are you sure want to delete this bill')) {
      this.billService
        .deleteBill(id)
        .then(() => {
          console.log(`bill with ID ${id} is deleted`);
          this.ngOnInit();
        })
        .catch((err) => (this.error = err));
    }
  }
}
