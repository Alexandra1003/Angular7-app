import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { switchMap, map } from 'rxjs/operators';

import { GetRepos, EReposActions, GetReposSuccess } from '../actions/repos.actions';
import { IAppState } from '../state/app.state';
import { ReposService } from 'src/app/pages/users/user/repos/repos.service';

@Injectable()
export class ReposEffects {
  @Effect()
  getRepos$ = this._actions$.pipe(
    ofType<GetRepos>(EReposActions.GetRepos),
    map(action => action.payload),
    switchMap(reposUrl => {
      return this._reposService.getAllRepos(reposUrl);
    }),
    map(repos => {
      return new GetReposSuccess(repos);
    })
  );

  constructor(
    private _reposService: ReposService,
    private _actions$: Actions,
    private _store: Store<IAppState>
  ) {}
}
