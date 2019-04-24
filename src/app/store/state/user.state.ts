import { IUser } from 'src/app/shared/interfaces/user';

export interface IUserState {
  users: IUser[];
  selectedUser: IUser;
}

export const inititalUserState: IUserState = {
  users: null,
  selectedUser: null
}
