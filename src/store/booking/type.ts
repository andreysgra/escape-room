import {TBooking, TBookings} from '../../types/booking';
import {RequestStatus} from '../../services/api/const';

export type TBookingState = {
  bookings: TBookings;
  currentBooking: TBooking | null;
  loadingStatus: RequestStatus;
}
