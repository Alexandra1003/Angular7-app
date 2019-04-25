import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { switchMap, map, withLatestFrom } from 'rxjs/operators';


import { GetRepos, EReposActions } from '../actions/repos.actions';
import { IAppState } from '../state/app.state';
import { ReposService } from 'src/app/pages/users/user/repos/repos.service';
import { selectReposList } from '../selectors/repos.selectors';

@Injectable()
export class ReposEffects {
  @Effect()
  getRepos$ = this._actions$.pipe(
    ofType<GetRepos>(EReposActions.GetRepos),
    map(action => action.payload),
    withLatestFrom(this._store.pipe(select(selectReposList))),
    switchMap(() => {
      return null;
    })
  );

  constructor(
    private _reposService: ReposService,
    private _actions$: Actions,
    private _store: Store<IAppState>
  ) {}
}
