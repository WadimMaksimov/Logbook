export type UserState = {
  isLoggedIn: boolean;
  user: User | null;
};

export type User = {
  id: number;
  name: string;
};
