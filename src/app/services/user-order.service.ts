import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenUtilsService } from './token/token-utils.service';

@Injectable({
  providedIn: 'root',
})
export class UserOrderService {
  private userAuthUrl = 'http://localhost:8000/api/users/orders';

  constructor(private http: HttpClient, private token: TokenUtilsService) {}
  create(
    trackingNumber: string,
    products: { product: string; quantity: number }[],
    address: { street: string; city: string; state: string },
    paymentMethod: string,
    finalPrice: number,
    voucher?: string
  ) {
    const payload = {
      trackingNumber,
      products,
      address,
      paymentMethod,
      finalPrice,
      voucher,
    };
    const headers = this.token.getHeader();
    return this.http.post(this.userAuthUrl, payload, { headers: headers });
  }
}
