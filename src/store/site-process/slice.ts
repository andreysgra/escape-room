import {TSiteProcessState} from './type';
import {QuestLevel, QuestType} from '../../const';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {StoreSlice} from '../const';
import {TQuest} from '../../types/quest';

const initialState: TSiteProcessState = {
  questType: QuestType.All,
  questLevel: QuestLevel.All,
};

const siteProcessSlice = createSlice({
  name: StoreSlice.SiteProcess,
  initialState,
  reducers: {
    setQuestType: (state, action: PayloadAction<TQuest['type'] | null>) => {
      state.questType = action.payload;
    },
    setQuestLevel: (state, action: PayloadAction<TQuest['level'] | null>) => {
      state.questLevel = action.payload;
    },
  }
});

export const {setQuestType, setQuestLevel} = siteProcessSlice.actions;

export default siteProcessSlice;
