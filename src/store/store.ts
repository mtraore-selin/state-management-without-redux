// biome-ignore lint/style/useImportType: <explanation>
import { BehaviorSubject, Observable } from 'rxjs';
import { map, scan } from 'rxjs/operators';
// biome-ignore lint/style/useImportType: <explanation>
import { AppState, initialAppState } from './app.state';
// biome-ignore lint/style/useImportType: <explanation>
import { Actions } from './actions';
import { appReducer } from './reducer';

export class Store {
  private state$ = new BehaviorSubject<AppState>(initialAppState);

  constructor(private actions: Actions) {
    this.actions
      .select('*')
      .pipe(scan((state, action) => appReducer(state, action), initialAppState))
      .subscribe(this.state$);
  }

  getState(): Observable<AppState> {
    return this.state$.asObservable();
  }

  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  dispatch(action: any) {
    this.actions.dispatch(action);
  }

  // Selector method to get specific slices of the state
  select<T>(selector: (state: AppState) => T): Observable<T> {
    return this.state$.pipe(map(selector));
  }
}
