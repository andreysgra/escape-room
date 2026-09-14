import {StoreSlice} from './const';
import {combineReducers} from '@reduxjs/toolkit';
import questsSlice from './quests/slice';
import userSlice from './user/slice';

export const reducer = combineReducers({
  [StoreSlice.Quests]: questsSlice.reducer,
  [StoreSlice.User]: userSlice.reducer,
});
