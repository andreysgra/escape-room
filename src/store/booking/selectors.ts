import {StoreSlice} from '../const';
import {State} from '../../types/state';

const storeSlice = StoreSlice.Booking;

export const getBookings = (state: State) => state[storeSlice].bookings;

export const getBookingsLoadingStatus = (state: State) =>
  state[storeSlice].loadingStatus;

export const getCurrentBooking = (state: State) => state[storeSlice].currentBooking;
