import { RouterReducerState } from '@ngrx/router-store';
import { IUserState, initialUserState } from './user.state';
import { IReposState, initialReposState } from './repos.state';

export interface IAppState {
  router?: RouterReducerState;
  users: IUserState;
  repos: IReposState;
}

export const initialAppState: IAppState = {
  users: initialUserState,
  repos: initialReposState
};

export function getInitialState(): IAppState {
  return initialAppState;
}
