export interface TodoState {
  todos: Todo[];
  loading: boolean;
  error?: string;
}

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export const initialTodoState: TodoState = {
  todos: [],
  loading: false,
  error: undefined,
};
