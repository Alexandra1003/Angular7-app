import { IUser } from 'src/app/shared/interfaces/user';

export interface IUserState {
  selectedUser: IUser;
}

export const initialUserState: IUserState = {
  selectedUser: null
}
