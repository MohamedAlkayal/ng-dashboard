import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TokenUtilsService } from './token/token-utils.service';

@Injectable({
  providedIn: 'root',
})
export class AdminServices {
  private Url = 'http://localhost:8000/api/dashboard/admins';
  constructor(private http: HttpClient, private token: TokenUtilsService) {}

  loginAdmin(username: any, password: any) {
    const payload = {
      username: username,
      password: password,
    };

    return this.http.post(
      'http://localhost:8000/api/dashboard' + `/login`,
      payload
    );
  }
  create(
    username: string | null | undefined,
    password: string | null | undefined,
    authorities: {
      users: Boolean;
      orders: Boolean;
      products: Boolean;
      categories: Boolean;
      vouchers: Boolean;
      admin: Boolean;
    }
  ) {
    const headers = this.token.getHeader();
    const payload = { username, password, authorities };
    return this.http.post(this.Url, payload, { headers });
  }
  getAll() {
    const headers = this.token.getHeader();
    return this.http.get(this.Url, { headers });
  }
  update(
    adminId: string,
    authorities: {
      users: Boolean;
      orders: Boolean;
      products: Boolean;
      categories: Boolean;
      vouchers: Boolean;
      admin: Boolean;
    }
  ) {
    const headers = this.token.getHeader();
    return this.http.patch(this.Url + `/${adminId}`, authorities, { headers });
  }
  delete(adminId: string) {
    const headers = this.token.getHeader();
    return this.http.delete(this.Url + `/${adminId}`, { headers });
  }
}
