import { HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { StringDecoder } from 'string_decoder';
@Injectable({
  providedIn: 'root',
})
export class TokenUtilsService {
  constructor() {}
  router = inject(Router);

  getHeader() {
    const currentUser: any = localStorage.getItem('currentUser');
    const userObject: any = JSON.parse(currentUser);

    const headers = new HttpHeaders({
      Authorization: `Bearer ${userObject.token}`,
    });

    return headers;
  }

  cheackForTokenExpiration() {
    if (typeof localStorage !== 'undefined') {
      let token = localStorage.getItem('token');
      if (token) {
        let decodeToken = jwtDecode(token);
        const isExpiredToken =
          decodeToken && decodeToken.exp
            ? decodeToken.exp < Date.now() / 1000
            : false;

        if (isExpiredToken) {
          localStorage.removeItem('token');
          localStorage.removeItem('currentUser');
          this.router.navigate(['login']);
        }
      } else {
        console.log('first navigate');
        this.router.navigate(['login']);
      }
    }
  }

  storeToken(res: any) {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(
        'currentUser',
        JSON.stringify({
          username: res.username,
          token: res.token,
          authorities: res.authorities,
          id: res.id,
        })
      );
      localStorage.setItem('token', res.token);
    }
  }
  storeTokenUser(res: any) {
    if (typeof localStorage !== 'undefined' && localStorage !== null) {
      localStorage.setItem(
        'currentUser',
        JSON.stringify({
          token: res.Token,
          active: res.Active,
        })
      );
    }
  }
}
