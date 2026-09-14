import {TReservationsState} from './type';
import {RequestStatus} from '../../services/api/const';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {StoreSlice} from '../const';
import {fetchReservations} from './api-actions';
import {TReservations} from '../../types/reservation';

const initialState: TReservationsState = {
  reservations: [],
  loadingStatus: RequestStatus.Idle,
};

const reservationsSlice = createSlice({
  name: StoreSlice.Quests,
  initialState,
  reducers: {},
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
      });
  }
});

export default reservationsSlice;
