// import { AuthService } from './../services/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class BannedUsers implements CanActivateChild {


  constructor(/* private _authService: AuthService, private _router: Router */) {
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      console.log('banned ones1', route);
      console.log('banned ones2', state);
      console.log('banned ones3', JSON.parse(localStorage.getItem('bannedUsersList')));
      const bannedUsersList = JSON.parse(localStorage.getItem('bannedUsersList'));
      return !bannedUsersList.includes('mojombo');
  }
//   canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
//     if (this._authService.isAuthenticated()) {
//         return true;
//     }

//     // navigate to login page
//     this._router.navigate(['/login']);
//     // you can save redirect url so after authing we can move them back to the page they requested
//     return false;
//   }

}