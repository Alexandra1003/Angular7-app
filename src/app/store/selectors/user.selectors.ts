import { IAppState } from '../state/app.state';
import { createSelector } from '@ngrx/store';
import { IUserState } from '../state/user.state';

const selectUsers = (state: IAppState) => state.users;

export const selectSelectedUser = createSelector(
  selectUsers,
  (state: IUserState) => state.selectedUser
);
