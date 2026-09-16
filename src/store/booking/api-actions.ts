import {createAsyncThunk} from '@reduxjs/toolkit';
import {TBookingQuest, TBookings} from '../../types/booking';
import {AxiosError, AxiosInstance, HttpStatusCode} from 'axios';
import {StoreSlice} from '../const';
import {ApiRoute} from '../../services/api/api-route';
import {TQuest} from '../../types/quest';
import {TReservation} from '../../types/reservation';
import {AppDispatch} from '../../types/state';
import {redirectToRoute} from '../action';
import {AppRoute} from '../../const';

export const fetchBookings = createAsyncThunk<TBookings, TQuest['id'], {extra: AxiosInstance}>(
  `${StoreSlice.Booking}/fetch`,
  async (id, {extra: api}) => {
    const {data} = await api.get<TBookings>(`${ApiRoute.Quest}/${id}/booking`);

    return data;
  }
);

export const addBooking = createAsyncThunk<TReservation, {bookingData: TBookingQuest; id: TQuest['id']}, {
  extra: AxiosInstance;
  dispatch: AppDispatch;
}>(
  `${StoreSlice.Booking}/add`,
  async ({bookingData, id}, {extra: api, dispatch}) => {
    try {
      const {data} = await api.post<TReservation>(`${ApiRoute.Quest}/${id}/booking`, bookingData);

      dispatch(redirectToRoute(AppRoute.MyQuests));

      return data;
    } catch (error) {
      const axiosError = error as AxiosError;

      if (axiosError.response?.status === HttpStatusCode.Unauthorized) {
        dispatch(redirectToRoute(AppRoute.Login));
      }

      return Promise.reject(error);
    }
  }
);
