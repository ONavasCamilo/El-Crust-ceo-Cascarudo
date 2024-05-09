export interface RegisterUser {
  username: string;
  password: string;
  email: string;
}

export interface LoginUser {
  username: string | undefined;
  email: string | undefined;
}

export interface DeleteUser {
  id: string | undefined;
  username: string | undefined;
  email: string | undefined;
}