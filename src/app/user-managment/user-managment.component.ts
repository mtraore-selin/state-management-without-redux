import { Component } from '@angular/core';
// biome-ignore lint/style/useImportType: <explanation>
import { Observable, map } from 'rxjs';
// biome-ignore lint/style/useImportType: <explanation>
import { Store } from '../../store/store';
import {
  LOAD_USERS,
  UPDATE_USER,
  ADD_USER,
  DELETE_USER,
} from '../../store/user/user.action-types';
// biome-ignore lint/style/useImportType: <explanation>
import { User } from '../../store/user/user.state';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {
  selectAllUsers,
  selectUserLoading,
} from '../../store/user/user.selectors';

@Component({
  selector: 'app-user-managment',
  standalone: true,
  imports: [FormsModule, CommonModule],
  template: `
    <div>
      <h1>User Management</h1>
      <button (click)="loadUsers()">Load Users</button>
      <ul>
        <li *ngFor="let user of users$ | async">
          <span>{{ user.name }} ({{ user.email }})</span>
          <button (click)="editUser(user)">Edit</button>
          <button (click)="deleteUser(user.id)">Delete</button>
        </li>
      </ul>

      <div>
        <h2>{{ editingUser ? 'Edit User' : 'Add User' }}</h2>
        <input [(ngModel)]="userName" placeholder="Name" />
        <input [(ngModel)]="userEmail" placeholder="Email" />
        <button (click)="saveUser()">
          {{ editingUser ? 'Update' : 'Add' }}
        </button>
      </div>
    </div>
  `,
  styleUrl: './user-managment.component.css',
})
export class UserManagmentComponent {
  users$: Observable<User[]>;
  loading$: Observable<boolean>;
  userName = '';
  userEmail = '';
  editingUser: User | null = null;

  constructor(private store: Store) {
    // this.users$ = this.store.getState().pipe(map((state) => state.user.users));
    this.users$ = this.store.select(selectAllUsers);
    this.loading$ = this.store.select(selectUserLoading);
  }

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.store.dispatch({ type: LOAD_USERS });
  }

  saveUser() {
    if (this.editingUser) {
      const updatedUser = {
        ...this.editingUser,
        name: this.userName,
        email: this.userEmail,
      };
      this.store.dispatch({ type: UPDATE_USER, payload: updatedUser });
    } else {
      const newUser = {
        id: Math.random(),
        name: this.userName,
        email: this.userEmail,
      };
      this.store.dispatch({ type: ADD_USER, payload: newUser });
    }
    this.resetForm();
  }

  editUser(user: User) {
    this.editingUser = user;
    this.userName = user.name;
    this.userEmail = user.email;
  }

  deleteUser(id: number) {
    this.store.dispatch({ type: DELETE_USER, payload: id });
  }

  resetForm() {
    this.userName = '';
    this.userEmail = '';
    this.editingUser = null;
  }
}
