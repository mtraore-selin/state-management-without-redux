import {
  LOAD_USERS,
  LOAD_USERS_SUCCESS,
  LOAD_USERS_FAILURE,
  LOAD_USER_BY_EMAIL,
  LOAD_USER_BY_EMAIL_FAILURE,
  LOAD_USER_BY_EMAIL_SUCCESS,
} from './user.action-types';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
// biome-ignore lint/style/useImportType: <explanation>
import { User } from './user.state';
// biome-ignore lint/style/useImportType: <explanation>
import { Actions } from '../actions';

const users = [
  { id: 1, name: 'M. TRAORE', email: 'm.traore@tdf.com' },
  { id: 2, name: 'M. XXX', email: 'xx.yy@tdf.com' },
];

export class UserEffects {
  constructor(private actions: Actions) {
    this.actions
      .select(LOAD_USERS)
      .pipe(
        switchMap(() => {
          // Simulate an API call to load users
          return of(users).pipe(
            map((users: User[]) => ({
              type: LOAD_USERS_SUCCESS,
              payload: users,
            })),
            catchError((error) =>
              of({ type: LOAD_USERS_FAILURE, payload: error })
            )
          );
        })
      )
      .subscribe((action) => this.actions.dispatch(action));

    this.actions
      .select(LOAD_USER_BY_EMAIL)
      .pipe(
        switchMap((action: { type: string; payload: string }) => {
          // Simulate an API call to load a specific user by email
          const email = action.payload;
          return of(users).pipe(
            map((users: User[]) => {
              const user = users.find((u) => u.email === email);
              if (user) {
                return { type: LOAD_USER_BY_EMAIL_SUCCESS, payload: user };
                // biome-ignore lint/style/noUselessElse: <explanation>
              } else {
                return {
                  type: LOAD_USER_BY_EMAIL_FAILURE,
                  payload: `User with email ${email} not found`,
                };
              }
            }),
            catchError((error) =>
              of({ type: LOAD_USER_BY_EMAIL_FAILURE, payload: error })
            )
          );
        })
      )
      .subscribe((action) => this.actions.dispatch(action));
  }
}
