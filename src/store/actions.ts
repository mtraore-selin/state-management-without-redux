// biome-ignore lint/style/useImportType: <explanation>
import { Subject, Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

export class Actions {
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  private actionSubject = new Subject<any>();

  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  dispatch(action: any) {
    this.actionSubject.next(action);
  }

  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  select(actionType: string): Observable<any> {
    return this.actionSubject
      .asObservable()
      .pipe(
        filter((action) => action.type === actionType || actionType === '*')
      );
  }
}
