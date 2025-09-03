export type BedType = 'General' | 'ICU' | 'Emergency' | 'Maternity';
export type BedStatus = 'Available' | 'Occupied' | 'Cleaning';

export interface Bed {
  id: string;
  ward: string;
  type: BedType;
  status: BedStatus;
}

export interface Appointment {
  id: string;
  patientName: string;
  phone: string;
  department: string;
  doctor: string;
  date: string; // ISO date
  time: string; // HH:mm
  notes?: string;
}

export interface Medicine {
  id: string;
  name: string;
  brand: string;
  stock: number;
  price: number; // INR
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon?: string;
}