import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormArray, Validators, Form, NgForm, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { BillService } from '../bill.service';
import { ConsumerDataService } from '../consumerData.service';
import { IBill } from '../IBill';
import { IProduct } from '../IProduct';

@Component({
  selector: 'app-form',
  templateUrl: './new_invoice.html',
  styleUrls: ['./new_invoice.css'],
})
export class FormComponent implements OnInit {

  constructor(private fb: FormBuilder, private route: Router,
              private routes: ActivatedRoute,
              private billService: BillService) { }

  public amount: number[] = [];
  public title: string;
  public bill: IBill;
  public new;
  public consumerOptions = new Array();
  public consumer: IBill[];
  //tslint:disable
  ngOnInit(): void {
    this.routes.paramMap.subscribe(params => {
      const billId = +params.get('id')
      if (billId) {
        this.title = "Edit Invoice"
        this.getBillById(billId);
      } else {
        this.title = "Create Invoice"
        this.bill = {
          id: null,
          ConsumerName: '',
          ConsumerCity: '',
          ConsumerGST: '',
          BillNo: null,
          BillNoDate: '',
          DCNo: null,
          DCDate: '',
          PONo: null,
          PODate: '',
          Products: [],
          Total: null,
          CGSTP: null,
          SGSTP: null,
          CGST: null,
          SGST: null,
          GrandTotal: null,
        }
      }
    });
    this.billService.getBillList().subscribe(
      (res) => this.copyOptions(res),
      (err) => console.log(err)
    )
    this.billService.getBillList().subscribe(
      (res) => this.copyProductOptions(res),
      (err) => console.log(err)
    )
    this.filteredOptions = this.mycontrol.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
    this.frmConsumer.get('Name').valueChanges.subscribe(
      (value) => this.consumerNameChange(value)
    )
  }
  copyOptions(data: IBill[]) {
    this.consumer = data;
    for(let i=0; i<data.length; i++) {
      this.options[i] = data[i].ConsumerName;
    }
    this.consumerOptions = Array.from(new Set(this.options));
  }

  copyProductOptions(data: IBill[]) {
    data.forEach(a => a.Products.forEach(b => this.productOptions.push(b.ProductName)));
    this.new = Array.from(new Set(this.productOptions));
  }

  private _filter(value: string):string[] {
    const filterValue = value.toLowerCase();
    return this.consumerOptions.filter(option => option.toLowerCase().includes(filterValue))
  } 

  getBillById(id: number) {
    this.billService.getBill(id).subscribe(
      (res: IBill) => {
        this.editBill(res)
        this.bill = res;
      },
      (err) => console.log(err)
    )
  }

  editBill(data: IBill) {
    this.frmConsumer.get('Name').patchValue(data.ConsumerName);
    this.frmConsumer.get('City').patchValue(data.ConsumerCity);
    this.frmConsumer.get('GSTNo').patchValue(data.ConsumerGST);
    this.frmConsumer.get('Billno').patchValue(data.BillNo);
    this.frmConsumer.get('Date').patchValue(data.BillNoDate);
    this.frmConsumer.get('DCno').patchValue(data.DCNo);
    this.frmConsumer.get('DCDate').patchValue(data.DCDate);
    this.frmConsumer.get('POno').patchValue(data.PONo);
    this.frmConsumer.get('PODate').patchValue(data.PODate);
    this.frmConsumer.get('Total').patchValue(data.Total);
    this.frmConsumer.get('CGSTP').patchValue(data.CGSTP);
    this.frmConsumer.get('CGST').patchValue(data.CGST);
    this.frmConsumer.get('SGSTP').patchValue(data.SGSTP);
    this.frmConsumer.get('SGST').patchValue(data.SGST);
    this.frmConsumer.get('GrandTotal').patchValue(data.GrandTotal);

    this.frmConsumer.setControl('products', this.setExistingProducts(data.Products));
  }

  setExistingProducts(ProductSet: IProduct[]): FormArray {
    const formArray = new FormArray([]);
    ProductSet.forEach(s => {
      formArray.push(this.fb.group({
        ProductName: s.ProductName,
        HSNCode: s.HSNCode,
        Size: s.Size,
        Qty: s.Qty,
        RatePer: s.RatePer,
        Amount: s.Amount
      }));
    });
    return formArray;
  }

  public frmConsumer = this.fb.group({
    Name: ['', Validators.required],
    City: ['', Validators.required],
    GSTNo:[''],
    Billno: ['', Validators.required],
    Date: ['', Validators.required],
    DCno: [''],
    DCDate: [''],
    POno: [''],
    PODate: [''],
    products: this.fb.array([
      this.addProduct()
    ]),
    Total: ['', Validators.required],
    CGSTP: ['', Validators.required],
    SGSTP: ['', Validators.required],
    CGST: ['', Validators.required],
    SGST: ['', Validators.required],
    GrandTotal: ['', Validators.required]
  })

  mycontrol = this.frmConsumer.get('Name');
  options: string[] = [];
  filteredOptions: Observable<string[]>;

  productOptions: string[] = [];
  public addProduct() {
    return this.fb.group({
      ProductName: ['', Validators.required],
      HSNCode: [''],
      Size: [''],
      Qty: [''],
      RatePer: ['', Validators.required],
      Amount: ['', Validators.required]
    })
  }

  get Controls() {
    return <FormArray>this.frmConsumer.get('products');
  }
  public addMoreProducts() {
    (<FormArray>this.frmConsumer.get('products')).push(this.addProduct())
  }
  public removeProduct(index) {
    this.Controls.removeAt(index);
  }

  consumerNameChange(value) {
    let name = value.toLowerCase();
    let bill = this.consumer.find(data => data.ConsumerName.toLowerCase().includes(name));
    console.log(bill);
    if (bill.ConsumerName !== undefined && bill.ConsumerName === value) {
      let City = bill.ConsumerCity
      let GSTno = bill.ConsumerGST;
      this.frmConsumer.get('City').patchValue(City);
      this.frmConsumer.get('GSTNo').patchValue(GSTno);
    } else if(bill.ConsumerName !== undefined && bill.ConsumerName.toLowerCase() === value) {
      let City = bill.ConsumerCity
      let GSTno = bill.ConsumerGST;
      this.frmConsumer.get('City').patchValue(City);
      this.frmConsumer.get('GSTNo').patchValue(GSTno);
    } else {
      let City = '';
      let GSTno = '';
      this.frmConsumer.get('City').patchValue(City);
      this.frmConsumer.get('GSTNo').patchValue(GSTno);
    }
  }

  productNameChange(event) {
    let name = event.target.value.toLowerCase();
    let bill = this.consumer.find(data => data.Products.find(prod => prod.ProductName.toLowerCase() === name));
    let product = bill.Products.find(data => data.ProductName === event.target.value);
    let length = this.Controls.length;
    if (product.ProductName !== undefined && product.ProductName === event.target.value) {
      let HSNCode = product.HSNCode;
      this.Controls.at(length-1).get('HSNCode').patchValue(HSNCode);
    } else {
      console.log('nothing')
    }
  }
  
  public calAmount;
  public sum;
  public subAmount;

  public calculateAmount() {
    const formArray = this.frmConsumer.get('products').value;
    const control = this.frmConsumer.get('products') as FormArray;
    for (let i = 0; i<formArray.length; i++) {
      if(formArray[i].Qty){
        this.calAmount = (formArray[i].Qty) * (formArray[i].RatePer);
        this.amount[i] = this.calAmount;
        this.Controls.at(i).get('Amount').setValue(this.calAmount);
      } else {
        this.calAmount = (formArray[i].Size) * (formArray[i].RatePer);
        this.amount[i] = this.calAmount;
        this.Controls.at(i).get('Amount').setValue(this.calAmount);
      }
    }
  }

  public SubTotal() {
    this.subAmount = 0;
    this.sum = 0;
    for(let value of this.amount) {
      this.subAmount = this.sum + value;
      this.sum = this.subAmount;
    }
    this.subAmount = +this.subAmount.toFixed(2);
    this.frmConsumer.get('Total').patchValue(this.subAmount);
    this.calGST();
    this.calSGST();
  }

  public grandAmount;
  public cgstAmount;

  public calGST() {
    const per = this.frmConsumer.get('CGSTP').value;
    if (per){
      this.cgstAmount = this.subAmount*(per/100);
      this.cgstAmount = +this.cgstAmount.toFixed(2);
      this.frmConsumer.get('CGST').setValue(this.cgstAmount);
      this.grandAmount = (+this.subAmount) + (+this.cgstAmount) + (+this.sgstAmount);
      this.grandAmount = +Math.round(this.grandAmount.toFixed(2));
      this.frmConsumer.get('GrandTotal').setValue(this.grandAmount);
    }
  }

  public sgstAmount;

  public calSGST() {
    const per = this.frmConsumer.get('SGSTP').value;
    if (per) {
      this.sgstAmount = this.subAmount*(per/100);
      this.sgstAmount = +this.sgstAmount.toFixed(2);
      this.frmConsumer.get('SGST').setValue(this.sgstAmount);
      this.grandAmount = (+this.subAmount) + (+this.cgstAmount) + (+this.sgstAmount);
      this.grandAmount = +Math.round(this.grandAmount.toFixed(2));
      this.frmConsumer.get('GrandTotal').setValue(this.grandAmount);
    }
  }

  public onSubmit() {
    this.MapFormValuesToBillModel();
    if (this.bill.id) {
      this.billService.updateBill(this.bill).subscribe(
        () => this.route.navigate(['print', this.bill.BillNo]),
        (err) => console.log(err)
      );
    } else {
        this.billService.addBill(this.bill).subscribe(
          () => this.route.navigate(['print', this.bill.BillNo]),
          (err) => console.log(err)
        );
    }
  }

  MapFormValuesToBillModel() {
    this.bill.ConsumerName = this.frmConsumer.value.Name;
    this.bill.ConsumerCity = this.frmConsumer.value.City;
    this.bill.ConsumerGST = this.frmConsumer.value.GSTNo;
    this.bill.BillNo = +this.frmConsumer.value.Billno;
    this.bill.BillNoDate = this.frmConsumer.value.Date;
    this.bill.DCNo = this.frmConsumer.value.DCno;
    this.bill.DCDate = this.frmConsumer.value.DCDate;
    this.bill.PONo = this.frmConsumer.value.POno;
    this.bill.PODate = this.frmConsumer.value.PODate;
    this.bill.Total = +this.frmConsumer.value.Total;
    this.bill.CGST = +this.frmConsumer.value.CGST;
    this.bill.CGSTP = +this.frmConsumer.value.CGSTP;
    this.bill.SGST = +this.frmConsumer.value.SGST;
    this.bill.SGSTP = +this.frmConsumer.value.SGSTP;
    this.bill.GrandTotal = +this.frmConsumer.value.GrandTotal;
    this.bill.Products = this.frmConsumer.value.products;
  }

  public pathChange() {
    if(this.frmConsumer.dirty) {
      let locate = confirm("Are you sure to leave this page? All information will be discarded");
      if(locate == true){
        this.route.navigate(['/billing']);
      }
    } else {
      this.route.navigate(['/billing']);
    }
  }
  
}
