import {StoreSlice} from '../const';
import {State} from '../../types/state';

const storeSlice = StoreSlice.SiteProcess;

export const getQuestType = (state: State) => state[storeSlice].questType;

export const getQuestLevel = (state: State) => state[storeSlice].questLevel;
