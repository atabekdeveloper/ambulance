export type TBrigadeItem = {
  id: number;
  name: string;
  user_id: number;
  vehicle_number: string;
  sumka: string;
  shift: null;
};
export type TBrigadeRouterItem = {
  id: number;
  name: string;
  user_id: number;
  user_full_name: string;
  medic_name: string;
  user_phone: string;
  vehicle_number: string;
  statuses: {
    id: number;
    name: string;
  }[];
  location: TBrigadeRouterLocation;
};
export type TBrigadeRouterLocation = {
  place: string;
  lat: number;
  lng: number;
  updated_at: string;
};
export type TBrigadeChange = {
  id: number;
  name: string;
  user_id: number;
  vehicle_number: string;
  sumka: string;
};
