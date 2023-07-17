import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConsumerDataService } from '../consumerData.service';

import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { DatePipe } from '@angular/common';
import { BillService } from '../bill.service';
import { IBill } from '../IBill';
import { environment } from 'src/environments/environment';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-print',
  templateUrl: './table.html',
  styleUrls: ['./table.css'],
})
export class PrintComponent implements OnInit {
  //tslint:disable
  constructor(
    private datepipe: DatePipe,
    private route: ActivatedRoute,
    private billService: BillService,
    private routes: Router
  ) {}

  public consumer: IBill[];
  public dd;
  public img;
  public billno = +this.route.snapshot.paramMap.get('billNo');
  public content = document.getElementsByClassName('print');
  public number;
  public word;
  public body = [];

  ngOnInit(): void {
    this.billService
      .getBillList()
      .then((listBill) => {
        const data = listBill;
        this.consumer = data.filter((a) => a.BillNo === this.billno);

        this.number = Math.floor(this.consumer[0].GrandTotal);
        this.word = convert(this.number);

        function fun(n): string {
          let str = '';
          let units: string[] = [
            '',
            'One',
            'Two',
            'Three',
            'Four',
            'Five',
            'Six',
            'Seven',
            'Eight',
            'Nine',
            'Ten',
            'Eleven',
            'Twelve',
            'Thirteen',
            'Fourteen',
            'Fifteen',
            'Sixteen',
            'Seventeen',
            'Eighteen',
            'Nineteen',
          ];
          let tens: string[] = [
            '',
            '',
            'Twenty ',
            'Thirty ',
            'Fourty ',
            'Fifty ',
            'Sixty ',
            'Seventy ',
            'Eighty ',
            'Ninety ',
          ];

          if (n < 20) {
            str = units[n];
          } else if (n >= 20 && n < 100) {
            str = tens[Math.floor(n / 10)] + units[n % 10];
          }

          return str;
        }

        function convert(num) {
          let ss = '';

          if (num < 100) {
            ss = fun(num);
          } else if (num >= 100 && num < 1000) {
            ss = fun(Math.floor(num / 100)) + ' Hundred ' + convert(num % 100);
          } else if (num >= 1000 && num < 100000) {
            ss =
              fun(Math.floor(num / 1000)) + ' Thousand ' + convert(num % 1000);
          } else if (num >= 100000 && num < 10000000) {
            ss =
              fun(Math.floor(num / 100000)) + ' Lakh ' + convert(num % 100000);
          } else if (num >= 10000000 && num < 1000000000) {
            ss =
              fun(Math.floor(num / 10000000)) +
              ' Crore ' +
              convert(num % 10000000);
          }

          return ss;
        }
      })
      .catch((err) => console.log(err));
  }

  public print() {
    const billDate = this.datepipe.transform(
      this.consumer[0].BillNoDate,
      'dd/MM/yyyy'
    );

    const DCDate = this.datepipe.transform(
      this.consumer[0].DCDate,
      'dd/MM/yyyy'
    );

    const PODate = this.datepipe.transform(
      this.consumer[0].PODate,
      'dd/MM/yyyy'
    );

    //Dynamically creating table body for pdfMake

    var productDetails = this.consumer[0].Products;
    var headers = {
      file_0: {
        col_1: { text: 'Sr.\nNo.', bold: true, fillColor: '#A9A9A9' },
        col_2: {
          text: 'Description',
          bold: true,
          alignment: 'center',
          fillColor: '#A9A9A9',
        },
        col_3: { text: 'HSN Code', bold: true, fillColor: '#A9A9A9' },
        col_4: { text: 'Sqft./Size', bold: true, fillColor: '#A9A9A9' },
        col_5: { text: 'Qty.', bold: true, fillColor: '#A9A9A9' },
        col_6: { text: 'Rate per', bold: true, fillColor: '#A9A9A9' },
        col_7: { text: 'Amount', bold: true, fillColor: '#A9A9A9' },
      },
    };

    var rows = productDetails;
    this.body = [];
    for (var key in headers) {
      if (headers.hasOwnProperty(key)) {
        var header = headers[key];
        var row = new Array();
        row.push(header.col_1);
        row.push(header.col_2);
        row.push(header.col_3);
        row.push(header.col_4);
        row.push(header.col_5);
        row.push(header.col_6);
        row.push(header.col_7);
        this.body.push(row);
      }
    }

    for (var i = 0; i < rows.length; i++) {
      var row = new Array();
      row.push(i + 1);
      row.push(rows[i].ProductName);
      row.push(
        rows[i].HSNCode == null || rows[i].HSNCode == '' ? '-' : rows[i].HSNCode
      );
      row.push(rows[i].Size == null || rows[i].Size == '' ? '-' : rows[i].Size);
      row.push(rows[i].Qty == null || rows[i].Qty == '' ? '-' : rows[i].Qty);
      row.push(
        rows[i].RatePer == null || rows[i].RatePer == ''
          ? '-'
          : `${rows[i].RatePer}/-`
      );
      row.push(
        rows[i].Amount == null || rows[i].Amount == ''
          ? '-'
          : `${rows[i].Amount}/-`
      );
      this.body.push(row);
    }

    // playground requires you to assign document definition to a variable called dd

    this.dd = {
      info: {
        title: `${this.consumer[0].ConsumerName}-${this.consumer[0].BillNo}.pdf`,
      },
      pageSize: 'A4',
      pageMargins: [20, 20, 20, 20],
      content: [
        {
          style: 'tableExample',
          layout: {
            hLineWidth: function (i, node) {
              return i === 0 || i === node.table.body.length ? 1 : 1;
            },
            vLineWidth: function (i, node) {
              return i === 0 || i === node.table.widths.length ? 1 : 1;
            },
            hLineColor: function (i, node) {
              return i === 0 || i === node.table.body.length
                ? 'black'
                : 'black';
            },
            vLineColor: function (i, node) {
              return i === 0 || i === node.table.widths.length
                ? 'black'
                : 'black';
            },
          },
          table: {
            widths: ['*', '*'],
            heights: ['auto', 'auto', 'auto', 380, 'auto', 50],
            body: [
              [
                {
                  image: environment.logo,
                  width: 180,
                  alignment: 'center',
                  margin: [10, 10, 10, 10],
                },
                {
                  type: 'none',
                  style: 'bold',
                  margin: [20, 22, 30, 10],
                  ol: [
                    'Address of the company',
                    'City',
                    'Tel. : 1234567890, 0123456789',
                    'E-mail : test@gmail.com',
                  ],
                },
              ],
              [
                {
                  text: 'INVOICE',
                  colSpan: 2,
                  alignment: 'center',
                  fontSize: 24,
                  bold: 'true',
                },
                '',
              ],
              [
                {
                  text: `To, \n ${this.consumer[0].ConsumerName}\n${this.consumer[0].ConsumerCity}\n\nGSTN ${this.consumer[0].ConsumerGST}`,
                  bold: true,
                  margin: 10,
                },
                {
                  bold: true,
                  margin: 10,
                  table: {
                    widths: [120, '*'],
                    body: [
                      [
                        `Bill No.   : ${
                          this.consumer[0].BillNo
                            ? this.consumer[0].BillNo
                            : ' '
                        }`,
                        `Date : ${
                          this.consumer[0].BillNoDate ? billDate : ' '
                        }`,
                      ],
                      [
                        `D.C. No. : ${
                          this.consumer[0].DCNo ? this.consumer[0].DCNo : ' '
                        }`,
                        `Date : ${this.consumer[0].DCDate ? DCDate : ' '}`,
                      ],
                      [
                        `P.O. No.  : ${
                          this.consumer[0].PONo ? this.consumer[0].PONo : ' '
                        }`,
                        `Date : ${this.consumer[0].PODate ? PODate : ' '}`,
                      ],
                    ],
                  },
                  layout: 'noBorders',
                },
              ],
              [
                {
                  style: 'tableExample',
                  table: {
                    headerRows: 1,
                    widths: ['auto', '*', 60, 60, 40, 40, 60],
                    body: this.body,
                  },
                  colSpan: 2,
                  margin: [5, 10, 5, 0],
                },
                '',
              ],

              [
                {
                  table: {
                    widths: [350, '*'],
                    body: [
                      [
                        {
                          text: `Rs in Words : ${this.word} Rupees`,
                          bold: true,
                          border: [false, false, true, false],
                          margin: [0, 0],
                        },
                        {
                          border: [false, false, false, false],
                          table: {
                            widths: ['auto', '*'],
                            body: [
                              [
                                {
                                  text: 'TOTAL',
                                  bold: true,
                                  border: [false, false, true, true],
                                },
                                {
                                  text: `${this.consumer[0].Total}/-`,
                                  bold: true,
                                  border: [true, false, false, true],
                                },
                              ],
                              [
                                {
                                  text: `CGST  ${this.consumer[0].CGSTP}%`,
                                  bold: true,
                                  border: [false, true, true, true],
                                },
                                {
                                  text: `${this.consumer[0].CGST}/-`,
                                  bold: true,
                                  border: [true, true, false, true],
                                },
                              ],
                              [
                                {
                                  text: `SGST  ${this.consumer[0].SGSTP}%`,
                                  bold: true,
                                  border: [false, true, true, true],
                                },
                                {
                                  text: `${this.consumer[0].SGST}/-`,
                                  bold: true,
                                  border: [true, true, false, true],
                                },
                              ],
                              [
                                {
                                  text: 'G TOTAL',
                                  bold: true,
                                  border: [false, true, true, false],
                                },
                                {
                                  text: `${this.consumer[0].GrandTotal}/-`,
                                  bold: true,
                                  border: [true, true, false, false],
                                },
                              ],
                            ],
                          },
                        },
                      ],
                    ],
                  },
                  colSpan: 2,
                },
                '',
              ],
              [
                {
                  table: {
                    widths: ['auto', 'auto', '*'],
                    body: [
                      [
                        {
                          text: [
                            {
                              text: 'Bank Details\n',
                              bold: true,
                              fontSize: 13,
                            },
                            { text: 'Bank Name   : **** ****\n', bold: true },
                            { text: 'Branch           : ', bold: true },
                            { text: '*** *** ***\n', bold: true, fontSize: 9 },
                            { text: 'A/C. No.        : ***\n', bold: true },
                            { text: 'IFSC Code     : ***', bold: true },
                          ],
                          bold: true,
                          margin: [5, 5, 5, 5],
                          border: [false, false, true, false],
                          fontSize: 10,
                        },
                        {
                          text: 'GSTN ************',
                          fontSize: 13,
                          alignment: 'center',
                          bold: true,
                          margin: [10, 20, 20, 20],
                          border: [true, false, true, false],
                        },
                        {
                          image: environment.img,
                          width: 90,
                          margin: [70, 30, 0, 0],
                          border: [true, false, false, false],
                        },
                      ],
                    ],
                  },
                  colSpan: 2,
                },
                '',
              ],
            ],
          },
        },
      ],
    };

    pdfMake.createPdf(this.dd).open();
    // pdfMake.createPdf(this.dd).download(`${this.consumer[0].ConsumerName}-${this.consumer[0].BillNo}.pdf`);
  }

  navigateToList() {
    this.routes.navigate(['billing']);
  }
}
