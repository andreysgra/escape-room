import {createAsyncThunk} from '@reduxjs/toolkit';
import {TQuests} from '../../types/quest';
import {AxiosInstance} from 'axios';
import {StoreSlice} from '../const';
import {ApiRoute} from '../../services/api/api-route';

export const fetchQuests = createAsyncThunk<TQuests, undefined, {extra: AxiosInstance}>(
  `${StoreSlice.Quests}/fetch`,
  async (_, {extra: api}) => {
    const {data} = await api.get<TQuests>(ApiRoute.Quest);

    return data;
  }
);
