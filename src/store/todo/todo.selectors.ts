// biome-ignore lint/style/useImportType: <explanation>
import { AppState } from '../app.state';
// biome-ignore lint/style/useImportType: <explanation>
import { Todo } from './todo.state';

// Selector to get the list of todos
export const selectAllTodos = (state: AppState): Todo[] => state.todo.todos;

// Selector to get loading state of todos
export const selectTodoLoading = (state: AppState): boolean =>
  state.todo.loading;
