import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AdminServices {
  private usersUrl = 'http://localhost:8000';
  constructor(private http: HttpClient) {}

  loginAdmin(username: any, password: any) {
    const payload = {
      username: username,
      password: password,
    };

    return this.http.post(this.usersUrl + `/api/dashboard/login`, payload);
  }
}
