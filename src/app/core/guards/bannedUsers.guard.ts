import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild, Router } from '@angular/router';

@Injectable()
export class BannedUsers implements CanActivateChild {

  constructor( private router: Router) { }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const isAllowed = localStorage.getItem(route.params.login) !== route.params.login;

    if (!isAllowed) {
      this.router.navigate([`/user/${route.params.login}`]);
    }
    return isAllowed;
  }
}
