import { UserActions, EUserActions } from '../actions/user.actions';
import { IUserState, initialUserState } from '../state/user.state';

export const userReducers = (
  state = initialUserState,
  action: UserActions
): IUserState => {
  switch(action.type) {
    case EUserActions.GetUserSuccess: {
      return {
        ...state,
        selectedUser: action.payload
      };
    }
    default: return state;
  }
};
