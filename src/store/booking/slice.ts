import {TBookingState} from './type';
import {RequestStatus} from '../../services/api/const';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {StoreSlice} from '../const';
import {addBooking, fetchBookings} from './api-actions';
import {TBooking, TBookings} from '../../types/booking';
import {TReservation} from '../../types/reservation';

const initialState: TBookingState = {
  bookings: [],
  booking: null,
  currentBooking: null,
  loadingStatus: RequestStatus.Idle,
  bookingStatus: RequestStatus.Idle,
};

const bookingSlice = createSlice({
  name: StoreSlice.Booking,
  initialState,
  reducers: {
    setCurrentBooking: (state, action: PayloadAction<TBooking | null>) => {
      state.currentBooking = action.payload;
    },
    setBookingStatus: (state, action: PayloadAction<RequestStatus>) => {
      state.bookingStatus = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBookings.fulfilled, (state, action: PayloadAction<TBookings>) => {
        state.bookings = action.payload;
        state.currentBooking = action.payload[0];
        state.loadingStatus = RequestStatus.Success;
      })
      .addCase(fetchBookings.pending, (state) => {
        state.loadingStatus = RequestStatus.Pending;
      })
      .addCase(fetchBookings.rejected, (state) => {
        state.bookings = [];
        state.currentBooking = null;
        state.loadingStatus = RequestStatus.Error;
      })
      .addCase(addBooking.fulfilled, (state, action: PayloadAction<TReservation>) => {
        state.booking = action.payload;
        state.bookingStatus = RequestStatus.Success;
      })
      .addCase(addBooking.pending, (state) => {
        state.bookingStatus = RequestStatus.Pending;
      })
      .addCase(addBooking.rejected, (state) => {
        state.booking = null;
        state.bookingStatus = RequestStatus.Error;
      });
  }
});

export const {setCurrentBooking, setBookingStatus} = bookingSlice.actions;

export default bookingSlice;
