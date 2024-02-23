import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenUtilsService } from './token/token-utils.service';

@Injectable({
  providedIn: 'root',
})
export class AdminOrdersService {
  private orderUrl = 'http://localhost:8000/api/dashboard/orders';

  constructor(private http: HttpClient, private token: TokenUtilsService) {}
  getAll(
    page: number = 1,
    limit: number = 20,
    sortBy?: string,
    order?: string,
    trackingNumber?: string,
    userId?: string,
    timePeriod?: string,
    status?: string,
    city?: string,
    price1?: number,
    price2?: number,
    itemsNumber1?: number,
    itemsNumber2?: number
  ) {
    const headers = this.token.getHeader();
    let url = `${this.orderUrl}?page=${page}&limit=${limit}`;
    if (trackingNumber) {
      url += `&trackingNumber=${trackingNumber}`;
    }
    if (userId) {
      url += `&userId=${userId}`;
    }
    if (timePeriod) {
      url += `&timePeriod=${timePeriod}`;
    }
    if (status) {
      url += `&status=${status}`;
    }
    if (city) {
      url += `&city=${city}`;
    }
    if (price1 && price2) {
      url += `&price1=${price1}&price2=${price2}`;
    }
    if (itemsNumber1 && itemsNumber2) {
      url += `&itemsNumber1=${itemsNumber1}&itemsNumber2=${itemsNumber2}`;
    }
    if (sortBy) {
      url += `&sortBy=${sortBy}`;
    }
    if (order) {
      url += `&order=${order}`;
    }
    return this.http.get(url, { headers: headers });
  }
}
