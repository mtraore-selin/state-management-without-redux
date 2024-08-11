import {
  LOAD_TODOS,
  LOAD_TODOS_SUCCESS,
  LOAD_TODOS_FAILURE,
} from './todo.action-types';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
// biome-ignore lint/style/useImportType: <explanation>
import { Actions } from '../actions';

export class TodoEffects {
  constructor(private actions: Actions) {
    this.actions
      .select(LOAD_TODOS)
      .pipe(
        switchMap(() => {
          // Simulate an API call
          return of([{ id: 1, title: 'Learn Angular', completed: false }]).pipe(
            map((todos) => ({ type: LOAD_TODOS_SUCCESS, payload: todos })),
            catchError((error) =>
              of({ type: LOAD_TODOS_FAILURE, payload: error })
            )
          );
        })
      )
      .subscribe((action) => this.actions.dispatch(action));
  }
}
