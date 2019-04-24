import { IRepos } from 'src/app/shared/interfaces/repos';

export interface IReposState {
  repos: IRepos;
}

export const initialReposState: IReposState = {
  repos: null
}
