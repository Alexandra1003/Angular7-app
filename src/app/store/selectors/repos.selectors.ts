import { IAppState } from '../state/app.state';
import { createSelector } from '@ngrx/store';
import { IReposState } from '../state/repos.state';

const selectRepos = (state: IAppState) => state.repos;

export const selectReposList = createSelector(
  selectRepos,
  (state: IReposState) => state.repos
);
