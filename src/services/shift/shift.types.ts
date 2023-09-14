export type TShiftItem = {
  id: number;
  brigade_id: number;
  brigade_name: string;
  brigade_type: string;
  brigade_vehicle_number: string;
  brigade_medic_name: string;
  sumka: string;
  date_from: string;
  time_from: string;
  date_to: string;
  time_to: string;
  admin_user_id: number;
  admin_user_full_name: string;
};
export type TShiftChange = {
  id?: number;
  brigade_id: number;
  date_from: string;
  date_to: string;
};
