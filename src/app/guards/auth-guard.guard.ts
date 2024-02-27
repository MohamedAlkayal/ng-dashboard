import { inject } from '@angular/core';
import { CanActivateFn, Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';



export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router)
  if (localStorage.getItem('currentUser')) {
    return true
  } else {
    router.navigate(['login'])
    return false;
  }
};
















// @Injectable()
// export class CanActivateGuard implements CanActivate{
//   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
//     return true;
//   }

// }