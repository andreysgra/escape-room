import {StoreSlice} from './const';
import {combineReducers} from '@reduxjs/toolkit';
import questsSlice from './quests/slice';

export const reducer = combineReducers({
  [StoreSlice.Quests]: questsSlice.reducer,
});
