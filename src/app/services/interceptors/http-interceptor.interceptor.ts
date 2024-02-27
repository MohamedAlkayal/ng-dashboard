import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { TokenUtilsService } from '../token/token-utils.service';



export const httpInterceptor: HttpInterceptorFn = (req, next) => {
 
inject(TokenUtilsService).cheackForTokenExpiration()


  console.log(`first interceptor on the air ${req.url}`)
  return next(req);
};