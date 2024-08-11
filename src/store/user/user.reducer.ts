import {
  ADD_USER,
  UPDATE_USER,
  DELETE_USER,
  LOAD_USERS_SUCCESS,
  LOAD_USERS_FAILURE,
  LOAD_USER_BY_EMAIL_FAILURE,
  LOAD_USER_BY_EMAIL_SUCCESS,
  LOAD_USERS,
} from './user.action-types';
// biome-ignore lint/style/useImportType: <explanation>
import { initialUserState, UserState } from './user.state';

export function userReducer(
  // biome-ignore lint/style/useDefaultParameterLast: <explanation>
  state: UserState = initialUserState,
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  action: any
): UserState {
  switch (action.type) {
    case LOAD_USERS:
      return {
        ...state,
        loading: true,
      };
    case LOAD_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case LOAD_USERS_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case ADD_USER:
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case UPDATE_USER:
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.payload.id ? action.payload : user
        ),
      };
    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload),
      };
    case LOAD_USER_BY_EMAIL_SUCCESS:
      return {
        ...state,
        selectedUser: action.payload,
        loading: false,
      };
    case LOAD_USER_BY_EMAIL_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}
