import {StoreSlice} from '../const';
import {State} from '../../types/state';

const storeSlice = StoreSlice.Reservations;

export const getReservations = (state: State) => state[storeSlice].reservations;

export const getReservationsLoadingStatus = (state: State) =>
  state[storeSlice].loadingStatus;
