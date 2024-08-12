import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { CommonModule } from '@angular/common';
import { UserManagmentComponent } from './user-managment/user-managment.component';
import { UserSearchComponent } from './user-search/user-search.component';
import { providers } from '../store/providers';

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
  providers,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'gmdt-rxjs-store';
}
