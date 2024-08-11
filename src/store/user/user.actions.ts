import {
  LOAD_USERS,
  LOAD_USERS_SUCCESS,
  LOAD_USERS_FAILURE,
  ADD_USER,
  UPDATE_USER,
  DELETE_USER,
  LOAD_USER_BY_EMAIL,
  LOAD_USER_BY_EMAIL_FAILURE,
  LOAD_USER_BY_EMAIL_SUCCESS,
} from './user.action-types';
// biome-ignore lint/style/useImportType: <explanation>
import { User } from './user.state';

// biome-ignore lint/complexity/noStaticOnlyClass: <explanation>
export class LoadUsers {
  static readonly type = LOAD_USERS;
}

export class LoadUsersSuccess {
  static readonly type = LOAD_USERS_SUCCESS;
  constructor(public payload: User[]) {}
}

export class LoadUsersFailure {
  static readonly type = LOAD_USERS_FAILURE;
  constructor(public payload: string) {}
}

export class AddUser {
  static readonly type = ADD_USER;
  constructor(public payload: User) {}
}

export class UpdateUser {
  static readonly type = UPDATE_USER;
  constructor(public payload: User) {}
}

export class DeleteUser {
  static readonly type = DELETE_USER;
  constructor(public payload: number) {}
}

export class LoadUserByEmail {
  static readonly type = LOAD_USER_BY_EMAIL;
  constructor(public payload: string) {} // Payload is the user's email
}

export class LoadUserByEmailSuccess {
  static readonly type = LOAD_USER_BY_EMAIL_SUCCESS;
  constructor(public payload: User) {}
}

export class LoadUserByEmailFailure {
  static readonly type = LOAD_USER_BY_EMAIL_FAILURE;
  constructor(public payload: string) {}
}
