import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TokenUtilsService } from './token/token-utils.service';

@Injectable({
  providedIn: 'root',
})
export class AdminCategoriesService {
  private categoryUrl = 'http://localhost:8000/api/dashboard/categories';

  constructor(private http: HttpClient, private token: TokenUtilsService) {}

  create(name: string, description: string, subCategories: string[]) {
    const headers = this.token.getHeader();
    const payload = { name, description, subCategories };
    return this.http.post(this.categoryUrl, payload, {
      headers: headers,
    });
  }

  getAll() {
    const headers = this.token.getHeader();
    return this.http.get(this.categoryUrl, {
      headers: headers,
    });
  }

  getOne(name: string) {
    const headers = this.token.getHeader();
    return this.http.get(this.categoryUrl + `/${name}`, {
      headers: headers,
    });
  }

  delete(id: string) {
    const headers = this.token.getHeader();
    return this.http.delete(this.categoryUrl + `/${id}`, {
      headers: headers,
    });
  }
  edit(
    name: string,
    categoryObj: { description: string; subCategories: string[] }
  ) {
    const headers = this.token.getHeader();
    const payload = categoryObj;
    return this.http.put(this.categoryUrl + `/${name}`, payload, {
      headers: headers,
    });
  }
}
