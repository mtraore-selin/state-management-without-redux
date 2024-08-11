import { CommonModule } from '@angular/common';
// biome-ignore lint/style/useImportType: <explanation>
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
// biome-ignore lint/style/useImportType: <explanation>
import { Store } from '../../store/store';
// biome-ignore lint/style/useImportType: <explanation>
import { Observable } from 'rxjs';
import { selectUserByEmail } from '../../store/user/user.selectors';
// biome-ignore lint/style/useImportType: <explanation>
import { User } from '../../store/user/user.state';

@Component({
  selector: 'app-user-search',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div>
      <h1>User Search</h1>
      <input [(ngModel)]="email" placeholder="Enter user email" />
      <button (click)="searchUser()">Load User</button>

      <div *ngIf="user$ | async as user; else notFound">
        <h3>User Details:</h3>
        <p>Name: {{ user.name }}</p>
        <p>Email: {{ user.email }}</p>
      </div>
      <ng-template #notFound>
        <p>User not found</p>
      </ng-template>
    </div>
  `,
  styleUrl: './user-search.component.css',
})
export class UserSearchComponent {
  email = '';
  user$: Observable<User | undefined> | undefined;

  constructor(private store: Store) {}

  searchUser() {
    this.user$ = this.store.select(selectUserByEmail(this.email));
  }
}
