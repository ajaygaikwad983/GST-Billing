import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public record;

  constructor(private loginService: LoginService, private route: Router) { }

  public notValid = false;

  ngOnInit(): void {
  }

  onSubmit(form) {
    this.loginService.getUser().subscribe(
      (listBill) => {
        if (listBill[0].name === form.txtUser && listBill[0].password === form.txtPassword) {
          sessionStorage.setItem('token', listBill[0].id);
          this.route.navigate(['/billing']);
        } else {
          this.notValid = true;
        }
      },
      (err) => console.log(err)
    );
  }

}
