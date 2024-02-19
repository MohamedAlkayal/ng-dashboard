import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UsersControlServicesService {
  private usersUrl = 'http://localhost:8000';
  constructor(private http: HttpClient) {}

  getUsers(page: string, limit: string) {
    return this.http.get(this.usersUrl + `/users?page=${page}&limit=${limit}`);
  }
}
