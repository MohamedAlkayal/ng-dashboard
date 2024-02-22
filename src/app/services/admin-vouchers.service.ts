import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TokenUtilsService } from './token/token-utils.service';

@Injectable({
  providedIn: 'root',
})
export class AdminVouchersService {
  private vouchersUrl = 'http://localhost:8000/api/dashboard/vouchers';

  constructor(private http: HttpClient, private token: TokenUtilsService) {}
  create(
    voucherCode: string,
    discount: number,
    type: string,
    expiryDate: Date,
    maxUsage: number
  ) {
    const headers = this.token.getHeader();
    const payload = { voucherCode, discount, type, expiryDate, maxUsage };
    return this.http.post(this.vouchersUrl, payload, { headers: headers });
  }
}
