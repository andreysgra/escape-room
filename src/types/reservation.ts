import {TBookingQuest} from './booking';
import {TLocation} from './location';
import {TQuest} from './quest';

export type TReservation = Omit<TBookingQuest, 'placeId'> & {
  id: string;
  location: TLocation;
  quest: TQuest;
}

export type TReservations = TReservation[];
