import {
  ADD_TODO,
  LOAD_TODO,
  LOAD_TODOS,
  LOAD_TODOS_FAILURE,
  LOAD_TODOS_SUCCESS,
  REMOVE_TODO,
  UPDATE_TODO,
} from './todo.action-types';
// biome-ignore lint/style/useImportType: <explanation>
import { Todo } from './todo.state';

// biome-ignore lint/complexity/noStaticOnlyClass: <explanation>
export class LoadTodos {
  static readonly type = LOAD_TODOS;
}

export class LoadTodosSuccess {
  static readonly type = LOAD_TODOS_SUCCESS;
  constructor(public payload: Todo[]) {}
}

export class LoadTodosFailure {
  static readonly type = LOAD_TODOS_FAILURE;
  constructor(public payload: string) {}
}

// biome-ignore lint/complexity/noStaticOnlyClass: <explanation>
export class LoadTodo {
  static readonly type = LOAD_TODO;
}

export class AddTodo {
  static readonly type = ADD_TODO;
  constructor(public payload: Todo) {}
}

export class LoadRemoveTodo {
  static readonly type = REMOVE_TODO;
  constructor(public payload: number) {}
}

export class UpdateTodo {
  static readonly type = UPDATE_TODO;
  constructor(public payload: Todo) {}
}
