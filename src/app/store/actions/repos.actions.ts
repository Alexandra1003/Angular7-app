import { Action } from '@ngrx/store';
import { IRepos } from 'src/app/shared/interfaces/repos';
import { Observable } from 'rxjs';
import { Params } from '@angular/router';

export enum EReposActions {
  GetRepos = '[Repos] Get Repos',
  GetReposSuccess = '[Repos] Get Repos Success'
}

export class GetRepos implements Action {
  public readonly type = EReposActions.GetRepos;
  constructor(public payload: string /* Observable<Params> */) {}
}

export class GetReposSuccess implements Action {
  public readonly type = EReposActions.GetReposSuccess;

  constructor(public payload: IRepos) {}
}

export type ReposActions = GetRepos | GetReposSuccess;
