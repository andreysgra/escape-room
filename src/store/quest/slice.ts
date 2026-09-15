import {TQuestState} from './type';
import {RequestStatus} from '../../services/api/const';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {StoreSlice} from '../const';
import {TQuestDetailed} from '../../types/quest';
import {fetchQuest} from './api-actions';

const initialState: TQuestState = {
  quest: null,
  loadingStatus: RequestStatus.Idle
};

const questSlice = createSlice({
  name: StoreSlice.Quest,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuest.fulfilled, (state, action: PayloadAction<TQuestDetailed>) => {
        state.quest = action.payload;
        state.loadingStatus = RequestStatus.Success;
      })
      .addCase(fetchQuest.pending, (state) => {
        state.loadingStatus = RequestStatus.Pending;
      })
      .addCase(fetchQuest.rejected, (state) => {
        state.quest = null;
        state.loadingStatus = RequestStatus.Error;
      });
  }
});

export default questSlice;
