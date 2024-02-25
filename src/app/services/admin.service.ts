import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AdminServices {
  private usersUrl = 'http://localhost:8000/api/dashboard';
  constructor(private http: HttpClient) {}

  loginAdmin(username: string, password: string) {
    const payload = {
      username: username,
      password: password,
    };

    return this.http.post(this.usersUrl + `/login`, payload);
  }
}
