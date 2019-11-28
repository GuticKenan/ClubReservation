import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
@Injectable()
export class AuthService {
  constructor(public jwtHelper: JwtHelperService,private router: Router) {}
  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    // Check whether the token is expired and return
    // true or false
    return !this.jwtHelper.isTokenExpired(token);
  }
  logout() {
    localStorage.clear();
    this.router.navigate(['login']);
  }
}