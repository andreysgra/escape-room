import {TReservationsState} from './type';
import {RequestStatus} from '../../services/api/const';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {StoreSlice} from '../const';
import {cancelReservation, fetchReservations} from './api-actions';
import {TReservations} from '../../types/reservation';

const initialState: TReservationsState = {
  reservations: [],
  loadingStatus: RequestStatus.Idle,
  cancelingStatus: RequestStatus.Idle,
};

const reservationsSlice = createSlice({
  name: StoreSlice.Reservations,
  initialState,
  reducers: {
    setCancelingStatus: (state, action: PayloadAction<RequestStatus>) => {
      state.cancelingStatus = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchReservations.fulfilled, (state, action: PayloadAction<TReservations>) => {
        state.reservations = action.payload;
        state.loadingStatus = RequestStatus.Success;
      })
      .addCase(fetchReservations.pending, (state) => {
        state.loadingStatus = RequestStatus.Pending;
      })
      .addCase(fetchReservations.rejected, (state) => {
        state.reservations = [];
        state.loadingStatus = RequestStatus.Error;
      })
      .addCase(cancelReservation.fulfilled, (state) => {
        state.cancelingStatus = RequestStatus.Success;
      })
      .addCase(cancelReservation.pending, (state) => {
        state.cancelingStatus = RequestStatus.Pending;
      })
      .addCase(cancelReservation.rejected, (state) => {
        state.cancelingStatus = RequestStatus.Error;
      });
  }
});

export const {setCancelingStatus} = reservationsSlice.actions;

export default reservationsSlice;
