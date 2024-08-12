import { Actions } from './actions';
import { Store } from './store';
import { UserEffects } from './user/user.effects';
import { TodoEffects } from './todo/todo.effects';

const actions = new Actions();
const userEffects = new UserEffects(actions);
const todoEffects = new TodoEffects(actions);

export const providers = [
  { provide: Store, useFactory: () => new Store(actions) },
  { provide: UserEffects, useFactory: () => userEffects },
  { provide: TodoEffects, useFactory: () => todoEffects },
];
