import {StoreSlice} from '../const';
import {State} from '../../types/state';

const storeSlice = StoreSlice.Quest;

export const getQuest = (state: State) => state[storeSlice].quest;

export const getQuestLoadingStatus = (state: State) =>
  state[storeSlice].loadingStatus;
