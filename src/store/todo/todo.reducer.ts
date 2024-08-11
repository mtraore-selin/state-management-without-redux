// biome-ignore lint/style/useImportType: <explanation>
import { AppState } from '../app.state';
import {
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_TODO,
  LOAD_TODOS_SUCCESS,
  LOAD_TODOS_FAILURE,
} from './todo.action-types';
// biome-ignore lint/style/useImportType: <explanation>
import { TodoState } from './todo.state';

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export function todoReducer(state: TodoState, action: any): TodoState {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: Math.random(),
            title: action.payload,
            completed: false,
          },
        ],
      };

    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };

    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };

    case LOAD_TODOS_SUCCESS:
      return {
        ...state,
        todos: action.payload,
        loading: false,
      };

    case LOAD_TODOS_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    default:
      return state;
  }
}
