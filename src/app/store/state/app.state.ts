import { RouterReducerState } from '@ngrx/router-store';
import { IUserState, inititalUserState } from './user.state';
import { IReposState, initialReposState } from './repos.state';

export interface IAppState {
  router?: RouterReducerState;
  users: IUserState;
  repos: IReposState;
}

export const initialAppState: IAppState = {
  users: inititalUserState,
  repos: initialReposState
};

export function getInitialState(): IAppState {
  return initialAppState;
}
