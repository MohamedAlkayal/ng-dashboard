import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class TokenUtilsService {
  constructor() {}
  getHeader() {
    const currentUser: any = localStorage.getItem('currentUser');
    const userObject: any = JSON.parse(currentUser);

    const headers = new HttpHeaders({
      Authorization: `Bearer ${userObject.token}`,
    });
    return headers;
  }
  storeTokenAdmin(res: any) {
    if (typeof localStorage !== 'undefined' && localStorage !== null) {
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
