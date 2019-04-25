import { ActionReducerMap } from '@ngrx/store';

import { IAppState } from '../state/app.state';
import { routerReducer } from '@ngrx/router-store';
import { userReducers } from './user.reducers';
import { reposReducers } from './repos.reducers';

export const appReducers: ActionReducerMap<IAppState, any> = {
  router: routerReducer,
  users: userReducers,
  repos: reposReducers
};
