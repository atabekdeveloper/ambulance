export type TAuthLogin = {
  phone: string;
  password: string;
};
export type TAuthLoginGet = {
  user: TAuthUserItem;
  token: string;
};
export type TAuthUserItem = {
  id: number;
  first_name: string;
  last_name: string;
  phone: string;
  role_id: number;
  role_name: string;
};
