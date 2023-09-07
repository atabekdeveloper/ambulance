export type TProfileItem = {
  id: number;
  first_name: string;
  last_name: string;
  phone: string;
  role_id: number;
  role_name: string;
};
export type TEditProfile = {
  name: string;
  phone: string;
  password: string;
  new_password: string;
};
