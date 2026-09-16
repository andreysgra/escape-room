import {TBooking, TBookings} from '../../types/booking';
import {RequestStatus} from '../../services/api/const';
import {TReservation} from '../../types/reservation';

export type TBookingState = {
  bookings: TBookings;
  booking: TReservation | null;
  currentBooking: TBooking | null;
  loadingStatus: RequestStatus;
  bookingStatus: RequestStatus;
}
