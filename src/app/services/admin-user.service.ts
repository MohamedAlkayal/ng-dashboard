import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TokenUtilsService } from './token/token-utils.service';
@Injectable({
  providedIn: 'root',
})
export class AdminUserServices {
  private usersUrl = 'http://localhost:8000/api/dashboard/users/';
  constructor(private http: HttpClient, private token: TokenUtilsService) {}

  getAllUsers(
    page: number = 1,
    limit: number = 10,
    sortBy?: string,
    order?: string,
    search?: string,
    gender?: string,
    state?: string,
    city?: string,
    val1?: number,
    val2?: number
  ) {
    const headers = this.token.getHeader();
    let url = `${this.usersUrl}?page=${page}&limit=${limit}`;

    // Construct query parameters based on provided options
    if (search) {
      url += `&search=${search}`;
    }
    if (gender) {
      url += `&gender=${gender}`;
    }
    if (state) {
      url += `&state=${state}`;
    }
    if (city) {
      url += `&city=${city}`;
    }
    if (val1 && val2) {
      url += `&val1=${val1}&val2=${val2}`;
    }
    if (sortBy) {
      url += `&sortBy=${sortBy}`;
    }
    if (order) {
      url += `&order=${order}`;
    }

    // Send HTTP GET request with constructed URL and headers
    return this.http.get(url, { headers: headers });
  }

  getUser(id: string) {
    const headers = this.token.getHeader();
    return this.http.get(this.usersUrl + `${id}`, {
      headers: headers,
    });
  }

  updateUser(id: string, userObj: object) {
    const headers = this.token.getHeader();
    const payload = userObj;
    return this.http.patch(this.usersUrl + `update/${id}`, payload, {
      headers: headers,
    });
  }
  deleteUsers(ids: string[]) {
    const headers = this.token.getHeader();
    const payload = { userIds: ids };
    return this.http.put(this.usersUrl + `delete`, payload, {
      headers: headers,
    });
  }
  deactivateUsers(ids: string[]) {
    const headers = this.token.getHeader();
    const payload = { userIds: ids };
    return this.http.patch(this.usersUrl + `deactivate`, payload, {
      headers: headers,
    });
  }
  activateUsers(ids: string[]) {
    const headers = this.token.getHeader();
    const payload = { userIds: ids };
    return this.http.patch(this.usersUrl + `activate`, payload, {
      headers: headers,
    });
  }
}
