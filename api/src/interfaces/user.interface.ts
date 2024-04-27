export interface RegisterUser {
  username: string;
  password: string;
  email: string;
}

export interface LoginUser {
  username: string | undefined;
  email: string | undefined;
}