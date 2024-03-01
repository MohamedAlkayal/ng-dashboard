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

  updateUser(
    id: string,
    userObj: {
      age?: any;
      city_1?: any;
      city_2?: any;
      email?: any;
      firstName?: any;
      lastName?: any;
      gender?: any;
      phone_1?: any;
      phone_2?: any;
      state_1?: any;
      state_2?: any;
      street_1?: any;
      street_2?: any;
    }
  ) {
    const headers = this.token.getHeader();
    const dob: any = new Date(userObj.age);
    const now: any = new Date();
    const diffMs: any = now - dob;
    const newAge: any = Math.floor(diffMs / (1000 * 60 * 60 * 24 * 365.25));

    const payload: any = {
      firstName: userObj.firstName,
      lastName: userObj.lastName,
      age: newAge,
      gender: userObj.gender,
      phones: [userObj.phone_1],
      address_1: {
        city: userObj.city_1,
        state: userObj.state_1,
        street: userObj.street_1,
      },
    };

    if (userObj.state_2) {
      payload.address_2 = {
        city: userObj.city_2,
        state: userObj.state_2,
        street: userObj.street_2,
      };
    }
    if (userObj.phone_2) {
      payload.phones[1] = userObj.phone_2;
    }

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
