import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BillListComponent } from './bill-list/bill-list.component';
import { LoginComponent } from './login/login.component';
import { FormComponent } from './form/form.component';
import { PrintComponent } from './print/print.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  { path: 'form', component: FormComponent, canActivate: [AuthGuard] },
  { path: 'billing', component: BillListComponent, canActivate: [AuthGuard] },
  { path: 'print/:billNo', component: PrintComponent, canActivate: [AuthGuard] },
  { path: 'edit/:id', component: FormComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'billing', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
