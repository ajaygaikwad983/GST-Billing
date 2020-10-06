import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private route: Router, private loginService: LoginService) { }

  canActivate(): boolean {
    if (this.loginService.logIn()) {
      return true;
    } else {
      this.route.navigate(['/login']);
      return false;
    }
  }
}
