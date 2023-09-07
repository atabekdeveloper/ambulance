export type TUserItem = {
  id: number;
  first_name: string;
  last_name: string;
  phone: string;
  role_id: number;
  role_name: string;
  brigade?: TUserBrigadeLocation;
};
export type TUserBrigadeLocation = {
  id: number;
  name: string;
  vehicle_number: string;
  sumka: string;
  location_place: string;
  location_lat: number;
  location_lng: number;
  location_updated_at: string;
};
export type TUserChange = {
  first_name: string;
  last_name: string;
  phone: string;
  password: string;
  role_id: number;
  id?: number;
};
