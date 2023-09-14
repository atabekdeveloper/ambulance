export type TCallPatientItem = {
  id: number;
  first_name: string;
  last_name: string;
  patronymic: string;
  birthday: string;
  gender: string;
  description: string;
  callId?: number;
};
export type TCallPatientDeleteParams = {
  callId: number;
  patientId: number;
};
