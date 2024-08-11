import { Component } from '@angular/core';
// biome-ignore lint/style/useImportType: <explanation>
import { Observable } from 'rxjs';

// biome-ignore lint/style/useImportType: <explanation>
// biome-ignore lint/style/useImportType: <explanation>
import { AppEffects } from '../../store/effects';
// biome-ignore lint/style/useImportType: <explanation>
import { Store } from '../../store/store';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
// biome-ignore lint/style/useImportType: <explanation>
import { Todo } from '../../store/todo/todo.state';
import {
  LOAD_TODOS,
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_TODO,
} from '../../store/todo/todo.action-types';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [FormsModule, CommonModule],
  template: `
    <div>
      <h1>Todo App</h1>
      <input [(ngModel)]="newTodoTitle" placeholder="Add a new todo" />
      <button (click)="addTodo()">Add Todo</button>

      <ul>
        <li *ngFor="let todo of todos$ | async">
          <input
            type="checkbox"
            [checked]="todo.completed"
            (change)="toggleTodo(todo.id)"
          />
          {{ todo.title }}
          <button (click)="removeTodo(todo.id)">Remove</button>
        </li>
      </ul>
    </div>
  `,
  styleUrl: './todo.component.css',
})
export class TodoComponent {
  todos$: Observable<Todo[]>;
  newTodoTitle = 'Test';

  constructor(private store: Store, private effects: AppEffects) {
    // this.todos$ = this.store.getState().pipe(map((state) => state.todo.todos));
    this.todos$ = this.store.select((state) => state.todo.todos);
  }

  ngOnInit() {
    this.store.dispatch({ type: LOAD_TODOS });
  }

  addTodo() {
    if (this.newTodoTitle.trim()) {
      this.store.dispatch({ type: ADD_TODO, payload: this.newTodoTitle });
      this.newTodoTitle = '';
    }
  }

  removeTodo(id: number) {
    this.store.dispatch({ type: REMOVE_TODO, payload: id });
  }

  toggleTodo(id: number) {
    this.store.dispatch({ type: TOGGLE_TODO, payload: id });
  }
}
