import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenUtilsService } from './token/token-utils.service';

@Injectable({
  providedIn: 'root',
})
export class AdminLogsService {
  private logsUrl = 'http://localhost:8000/api/dashboard/logs';

  constructor(private http: HttpClient, private token: TokenUtilsService) {}
  getAll() {
    const headers = this.token.getHeader();
    return this.http.get(this.logsUrl, {
      headers: headers,
    });
  }
}
