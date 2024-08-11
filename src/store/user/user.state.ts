export interface User {
  id: number;
  name: string;
  email: string;
}

export interface UserState {
  users: User[];
  selectedUser?: User;
  loading: boolean;
  error?: string;
}

export const initialUserState: UserState = {
  users: [],
  loading: false,
  error: undefined,
};
