import {createAsyncThunk} from '@reduxjs/toolkit';
import {AxiosInstance} from 'axios';
import {StoreSlice} from '../const';
import {ApiRoute} from '../../services/api/api-route';
import {TReservations} from '../../types/reservation';

export const fetchReservations = createAsyncThunk<TReservations, undefined, {extra: AxiosInstance}>(
  `${StoreSlice.Reservations}/fetch`,
  async (_, {extra: api}) => {
    const {data} = await api.get<TReservations>(ApiRoute.Reservation);

    return data;
  }
);
