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
  getAll() {
    const headers = this.token.getHeader();
    return this.http.get(this.vouchersUrl, { headers: headers });
  }
  update(
    voucherId: string,
    discount?: number,
    type?: 'percentage' | 'flat',
    expiryDate?: Date,
    maxUsage?: number,
    active?: boolean
  ) {
    const headers = this.token.getHeader();
    const payload = { voucherId, discount, type, expiryDate, maxUsage, active };
    return this.http.patch(this.vouchersUrl + `/${voucherId}`, payload, {
      headers: headers,
    });
  }
}
