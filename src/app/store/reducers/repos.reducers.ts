import { ReposActions, EReposActions } from '../actions/repos.actions';
import { IReposState, initialReposState } from '../state/repos.state';

export const reposReducers = (
  state = initialReposState,
  action: ReposActions
): IReposState => {
  switch(action.type) {
    case EReposActions.GetReposSuccess: {
      return {
        ...state,
        repos: action.payload
      };
    }
    default: return state;
  }
};
