import {createAsyncThunk} from '@reduxjs/toolkit';
import {TQuestDetailed} from '../../types/quest';
import {AxiosError, AxiosInstance, HttpStatusCode} from 'axios';
import {AppDispatch} from '../../types/state';
import {StoreSlice} from '../const';
import {ApiRoute} from '../../services/api/api-route';
import {AppRoute} from '../../const';
import {redirectToRoute} from '../action';

export const fetchQuest = createAsyncThunk<TQuestDetailed, TQuestDetailed['id'], {
  extra: AxiosInstance;
  dispatch: AppDispatch;
}>(
  `${StoreSlice.Quest}/fetch`,
  async (id, {extra: api, dispatch}) => {
    try {
      const {data} = await api.get<TQuestDetailed>(`${ApiRoute.Quest}/${id}`);

      return data;
    } catch (error) {
      const axiosError = error as AxiosError;

      if (axiosError.response?.status === HttpStatusCode.NotFound) {
        dispatch(redirectToRoute(AppRoute.NotFound));
      }

      return Promise.reject(error);
    }
  }
);
