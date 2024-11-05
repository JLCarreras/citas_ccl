import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot,Router, CanActivate } from '@angular/router';


@Injectable()
export class AuthGuard implements CanActivate{
  constructor(
    private router: Router

  ) {}

  canActivate(next: ActivatedRouteSnapshot): boolean {
      return true;
      // this.router.navigate(['login'], {
      //   queryParams: { redirectTo: next.url[0].path },
      // });
      // return false;
  }

}
