import {createAsyncThunk} from '@reduxjs/toolkit';
import {AxiosInstance} from 'axios';
import {StoreSlice} from '../const';
import {ApiRoute} from '../../services/api/api-route';
import {TReservation, TReservations} from '../../types/reservation';
import {AppDispatch} from '../../types/state';

export const fetchReservations = createAsyncThunk<TReservations, undefined, {extra: AxiosInstance}>(
  `${StoreSlice.Reservations}/fetch`,
  async (_, {extra: api}) => {
    const {data} = await api.get<TReservations>(ApiRoute.Reservation);

    return data;
  }
);

export const cancelReservation = createAsyncThunk<void, TReservation['id'], {
  dispatch: AppDispatch;
  extra: AxiosInstance;
}>(
  `${StoreSlice.Reservations}/delete`,
  async (id, {extra: api, dispatch}) => {
    await api.delete<void>(`${ApiRoute.Reservation}/${id}`);

    dispatch(fetchReservations());
  }
);
