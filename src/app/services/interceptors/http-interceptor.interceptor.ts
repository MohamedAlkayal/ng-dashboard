import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { TokenUtilsService } from '../token/token-utils.service';

export const httpInterceptor: HttpInterceptorFn = (req, next) => {
  inject(TokenUtilsService).cheackForTokenExpiration();
  return next(req);
};
