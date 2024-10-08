import { TCallPatientItem } from './patient/call-patient.types';

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
  brigade_name: string;
  brigade_id: number;
  patient: TCallPatientItem;
};
export type TCallAddressItem = {
  region: string;
  street: string;
  home: string;
  full_address: string;
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
  lat: number | null;
  lng: number | null;
};
