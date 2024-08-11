// biome-ignore lint/style/useImportType: <explanation>
import { initialTodoState, TodoState } from './todo/todo.state';
// biome-ignore lint/style/useImportType: <explanation>
import { initialUserState, UserState } from './user/user.state';

export interface AppState {
  todo: TodoState;
  user: UserState;
}

export const initialAppState: AppState = {
  todo: initialTodoState,
  user: initialUserState,
};
