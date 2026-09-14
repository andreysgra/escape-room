import {State} from '../../types/state';
import {StoreSlice} from '../const';

const storeSlice = StoreSlice.Quests;

export const getQuests = (state: State) => state[storeSlice].quests;

export const getQuestsLoadingStatus = (state: State) =>
  state[storeSlice].loadingStatus;
