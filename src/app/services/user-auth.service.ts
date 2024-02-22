import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserAuthService {
  private userAuthUrl = 'http://localhost:8000/api/users';

  constructor(private http: HttpClient) {}
  login(email: string, password: string) {
    const payload = { email, password };
    return this.http.post(this.userAuthUrl + '/login', payload);
  }
}
