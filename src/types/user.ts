export type TUser = {
  email: string;
  token: string;
}

export type TUserAuth = Pick<TUser, 'email'> & {
  password: string;
}
