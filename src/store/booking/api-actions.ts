import {createAsyncThunk} from '@reduxjs/toolkit';
import {TBookings} from '../../types/booking';
import {AxiosInstance} from 'axios';
import {StoreSlice} from '../const';
import {ApiRoute} from '../../services/api/api-route';
import {TQuest} from '../../types/quest';

export const fetchBookings = createAsyncThunk<TBookings, TQuest['id'], {extra: AxiosInstance}>(
  `${StoreSlice.Booking}/fetch`,
  async (id, {extra: api}) => {
    const {data} = await api.get<TBookings>(`${ApiRoute.Quest}/${id}/booking`);

    return data;
  }
);
