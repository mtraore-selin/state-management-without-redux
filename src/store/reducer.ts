import type { AppState } from './app.state';
import { todoReducer } from './todo/todo.reducer';
import { initialTodoState } from './todo/todo.state';
import { userReducer } from './user/user.reducer';
import { initialUserState } from './user/user.state';

export function appReducer(
  // biome-ignore lint/style/useDefaultParameterLast: <explanation>
  state: AppState = { todo: initialTodoState, user: initialUserState },
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  action: any
): AppState {
  return {
    todo: todoReducer(state.todo, action),
    user: userReducer(state.user, action),
  };
}
