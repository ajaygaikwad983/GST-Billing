import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BillListComponent } from './bill-list/bill-list.component';
import { LoginComponent } from './login/login.component';
import { DataService } from './data.service';
import { FormComponent } from './form/form.component';
import { PrintComponent } from './print/print.component';
import { ConsumerDataService } from './consumerData.service';
import { DatePipe } from '@angular/common';
import { BillService } from './bill.service';
import { LoginService } from './login.service';
import { AuthGuard } from './auth.guard';
import { MenuComponent } from './menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatAutocomplete, MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ElectronService } from 'ngx-electron';

@NgModule({
  declarations: [
    AppComponent,
    BillListComponent,
    LoginComponent,
    FormComponent,
    PrintComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatFormFieldModule
  ],
  exports: [
    MatAutocompleteModule,
    MatFormFieldModule
  ],
  providers: [DataService, ConsumerDataService, DatePipe, BillService, LoginService, AuthGuard, ElectronService],
  bootstrap: [AppComponent]
})
export class AppModule { }
