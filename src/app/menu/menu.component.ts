import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(public loginService: LoginService, private route: Router) { }

  ngOnInit(): void {
  }
  onLoginClick() {
    this.route.navigate(['login']);
  }

  onBillingClick() {
    this.route.navigate(['billing']);
  }

  onLogoutClick() {
    sessionStorage.removeItem('token');
    this.route.navigate(['login']);
  }
}
