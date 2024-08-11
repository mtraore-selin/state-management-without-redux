// biome-ignore lint/style/useImportType: <explanation>
import { UserEffects } from './user/user.effects';
// biome-ignore lint/style/useImportType: <explanation>
import { TodoEffects } from './todo/todo.effects';

export class AppEffects {
  constructor(
    private userEffects: UserEffects,
    private todoEffects: TodoEffects
  ) {}
}
