// biome-ignore lint/style/useImportType: <explanation>
import { AppState } from '../app.state';
// biome-ignore lint/style/useImportType: <explanation>
import { User } from './user.state';

// Selector to get the list of users
export const selectAllUsers = (state: AppState): User[] => state.user.users;

// Selector to get a specific user by email
export const selectUserByEmail =
  (email: string) =>
  (state: AppState): User | undefined =>
    state.user.users.find((user) => user.email === email);

// Selector to get loading state of users
export const selectUserLoading = (state: AppState): boolean =>
  state.user.loading;
