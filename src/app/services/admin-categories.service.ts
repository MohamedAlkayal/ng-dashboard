import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TokenUtilsService } from './token/token-utils.service';

@Injectable({
  providedIn: 'root',
})
export class AdminCategoriesService {
  private usersUrl = 'http://localhost:8000';

  constructor(private http: HttpClient, private token: TokenUtilsService) {}

  create(name: string, description: string, subCategories: string[]) {
    const headers = this.token.getHeader();
    const payload = { name, description, subCategories };
    return this.http.post(
      this.usersUrl + `/api/dashboard/categories`,
      payload,
      {
        headers: headers,
      }
    );
  }

  getAll() {
    const headers = this.token.getHeader();
    return this.http.get(this.usersUrl + `/api/dashboard/categories`, {
      headers: headers,
    });
  }

  getOne(name: string) {
    const headers = this.token.getHeader();
    return this.http.get(this.usersUrl + `/api/dashboard/categories/` + name, {
      headers: headers,
    });
  }

  delete(id: string) {
    const headers = this.token.getHeader();
    return this.http.delete(this.usersUrl + `/api/dashboard/categories/` + id, {
      headers: headers,
    });
  }
  edit(
    name: string,
    categoryObj: { description: string; subCategories: string[] }
  ) {
    const headers = this.token.getHeader();
    const payload = categoryObj;
    return this.http.put(
      this.usersUrl + `/api/dashboard/categories/` + name,
      payload,
      {
        headers: headers,
      }
    );
  }
}
