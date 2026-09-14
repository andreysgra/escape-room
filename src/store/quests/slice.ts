import {TQuestsState} from './type';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {StoreSlice} from '../const';
import {TQuests} from '../../types/quest';
import {fetchQuests} from './api-actions';
import {RequestStatus} from '../../services/api/const';

const initialState: TQuestsState = {
  quests: [],
  loadingStatus: RequestStatus.Idle
};

const questsSlice = createSlice({
  name: StoreSlice.Quests,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuests.fulfilled, (state, action: PayloadAction<TQuests>) => {
        state.quests = action.payload;
        state.loadingStatus = RequestStatus.Success;
      })
      .addCase(fetchQuests.pending, (state) => {
        state.loadingStatus = RequestStatus.Pending;
      })
      .addCase(fetchQuests.rejected, (state) => {
        state.quests = [];
        state.loadingStatus = RequestStatus.Error;
      });
  }
});

export default questsSlice;
