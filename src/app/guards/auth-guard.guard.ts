import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  if (typeof localStorage !== 'undefined') {
    if (localStorage.getItem('currentUser')) {
      return true;
    } else {
      router.navigate(['login']);
      return false;
    }
  } else return false;
};

// @Injectable()
// export class CanActivateGuard implements CanActivate{
//   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
//     return true;
//   }
// }
