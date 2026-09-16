import {TBookingState} from './type';
import {RequestStatus} from '../../services/api/const';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {StoreSlice} from '../const';
import {fetchBookings} from './api-actions';
import {TBooking, TBookings} from '../../types/booking';

const initialState: TBookingState = {
  bookings: [],
  currentBooking: null,
  loadingStatus: RequestStatus.Idle,
};

const bookingSlice = createSlice({
  name: StoreSlice.Booking,
  initialState,
  reducers: {
    setCurrentBooking: (state, action: PayloadAction<TBooking | null>) => {
      state.currentBooking = action.payload;
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
      });
  }
});

export const {setCurrentBooking} = bookingSlice.actions;

export default bookingSlice;
