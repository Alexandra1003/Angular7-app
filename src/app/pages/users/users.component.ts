import { Component, OnInit, ViewChild } from '@angular/core';
import { IUser } from '../../shared/interfaces/user';
import { UsersService } from './users.service';
import { Router } from '@angular/router';

import { GetUser } from 'src/app/store/actions/user.actions';
import { Store, select } from '@ngrx/store';
import { IAppState } from 'src/app/store/state/app.state';
import { selectSelectedUser } from 'src/app/store/selectors/user.selectors';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  userName: string;
  user$ = this._store.pipe(select(selectSelectedUser));

  constructor(private _store: Store<IAppState>, private userService: UsersService, private router: Router) { }

  ngOnInit() {
  }

  onUserChosen() {
    this._store.dispatch(new GetUser(this.userName));
    this.router.navigate(['/user/' + this.userName]);
  }
}
