import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Actions } from '../store/actions';
import { AppEffects } from '../store/effects';
import { Store } from '../store/store';
import { TodoComponent } from './todo/todo.component';
import { CommonModule } from '@angular/common';
import { UserManagmentComponent } from './user-managment/user-managment.component';
import { UserEffects } from '../store/user/user.effects';
import { TodoEffects } from '../store/todo/todo.effects';
import { UserSearchComponent } from './user-search/user-search.component';
const actions = new Actions();
const userEffects = new UserEffects(actions);
const todoEffects = new TodoEffects(actions);

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    TodoComponent,
    UserManagmentComponent,
    UserSearchComponent,
    CommonModule,
  ],
  providers: [
    { provide: Store, useFactory: () => new Store(actions) },
    {
      provide: AppEffects,
      useFactory: () => new AppEffects(userEffects, todoEffects),
    },
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'gmdt-rxjs-store';
}
