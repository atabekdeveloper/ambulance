export type TCallItem = {
  id: number;
  call_cause_id: number;
  call_cause_name: string;
  call_status_id: number;
  call_status_name: string;
  phone: string;
  comment: string;
  created_at: string;
  address: TCallAddressItem;
};
export type TCallAddressItem = {
  region: string;
  street: string;
  home: string;
  fullAddress: string;
  place: string;
  lat: number;
  lng: number;
};
export type TCallChange = {
  id: number;
  call_cause_id: number;
  phone: string;
  comment: string;
  first_name: string;
  last_name: string;
  patronymic: string;
  region: string;
  street: string;
  home: string;
  place: string;
  lat: number;
  lng: number;
};
