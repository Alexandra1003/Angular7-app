import { Injectable, OnInit } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UsersService } from '../users.service';
import { IUser } from 'src/app/shared/interfaces/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserResolveService implements Resolve<IUser> {
  constructor(private userService: UsersService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IUser> {
      return this.userService.getUserById(route.params.id);
  }
}
