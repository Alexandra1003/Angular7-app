import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { switchMap, map, withLatestFrom } from 'rxjs/operators';

import { GetUser, EUserActions, GetUserSuccess } from '../actions/user.actions';
import { UsersService } from 'src/app/pages/users/users.service';
import { IAppState } from '../state/app.state';
import { selectSelectedUser } from '../selectors/user.selectors';

@Injectable()
export class UserEffects {
  @Effect()
  getUser$ = this._actions$.pipe(
    ofType<GetUser>(EUserActions.GetUser),
    map(action => action.payload),
    switchMap(user => {
      return this._userService.getUserById(user);
    }),
    map((data) => {
      return new GetUserSuccess(data);
    })
  );

  constructor(
    private _userService: UsersService,
    private _actions$: Actions,
    private _store: Store<IAppState>
  ) {}
}
