import {TLocation} from './location';
import {TSlots} from './slot';

export type TBooking = {
  id: string;
  location: TLocation;
  slots: TSlots;
}

export type TBookings = TBooking[];

export type TBookingQuest = {
  date: string;
  time: string;
  contactPerson: string;
  phone: string;
  withChildren: boolean;
  peopleCount: number;
  placeId: string;
}
