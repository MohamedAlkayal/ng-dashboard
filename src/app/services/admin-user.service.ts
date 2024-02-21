import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TokenUtilsService } from './token/token-utils.service';
@Injectable({
  providedIn: 'root',
})
export class AdminUserServices {
  private usersUrl = 'http://localhost:8000';
  constructor(private http: HttpClient, private token: TokenUtilsService) {}

  getAllUsers(
    page: number = 1,
    limit: number = 10,
    search?: string,
    gender?: string,
    state?: string,
    city?: string,
    val1?: number,
    val2?: number,
    sortBy?: string,
    order?: string
  ) {
    const headers = this.token.getHeader();
    let url = `${this.usersUrl}/api/dashboard/users/?page=${page}&limit=${limit}`;

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
    if (sortBy) {
      url += `&sortBy=${sortBy}`;
    }

    // Send HTTP GET request with constructed URL and headers
    return this.http.get(url, { headers: headers });
  }

  getUser(id: string) {
    const headers = this.token.getHeader();
    return this.http.get(this.usersUrl + `/api/dashboard/users/${id}`, {
      headers: headers,
    });
  }

  updateUser(id: string, userObj: object) {
    const headers = this.token.getHeader();
    const payload = userObj;
    return this.http.patch(
      this.usersUrl + `/api/dashboard/users/update/${id}`,
      payload,
      {
        headers: headers,
      }
    );
  }
  deleteUsers(ids: string[]) {
    const headers = this.token.getHeader();
    const payload = { userIds: ids };
    return this.http.put(
      this.usersUrl + `/api/dashboard/users/delete`,
      payload,
      {
        headers: headers,
      }
    );
  }
  deactivateUsers(ids: string[]) {
    const headers = this.token.getHeader();
    const payload = { userIds: ids };
    return this.http.patch(
      this.usersUrl + `/api/dashboard/users/deactivate`,
      payload,
      {
        headers: headers,
      }
    );
  }
  activateUsers(ids: string[]) {
    const headers = this.token.getHeader();
    const payload = { userIds: ids };
    return this.http.patch(
      this.usersUrl + `/api/dashboard/users/activate`,
      payload,
      {
        headers: headers,
      }
    );
  }
}
