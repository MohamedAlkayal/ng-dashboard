import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class TokenUtilsService {
  constructor() {}
  getHeader() {
    const username: any = localStorage.getItem('currentUser');
    const userObject: any = JSON.parse(username);

    const headers = new HttpHeaders({
      Authorization: `Bearer ${userObject.token}`,
    });
    return headers;
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
    }
  }
}
