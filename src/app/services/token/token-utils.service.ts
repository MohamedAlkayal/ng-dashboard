import { HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { StringDecoder } from 'string_decoder';
@Injectable({
  providedIn: 'root',
})
export class TokenUtilsService {
  constructor() { }
  router = inject(Router)

  getHeader() {
    const username: any = localStorage.getItem('currentUser');
    const userObject: any = JSON.parse(username);

    const headers = new HttpHeaders({
      Authorization: `Bearer ${userObject.token}`,
    });
    return headers;
  }

  cheackForTokenExpiration() {
    let token = localStorage.getItem('token');
    if (token) {

      let decodeToken = jwtDecode(token)
      const isExpiredToken = (decodeToken && decodeToken.exp )? decodeToken.exp < Date.now() / 1000 : false;
  
      if (isExpiredToken) {
        localStorage.removeItem('token');
        localStorage.removeItem('currentUser')
        this.router.navigate(['login']);
      }

    } else {
      console.log("first navigate")
      this.router.navigate(['']);
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
      localStorage.setItem('token', res.token)
    }
  }
}
