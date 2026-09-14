import {StoreSlice} from './const';
import {combineReducers} from '@reduxjs/toolkit';
import questsSlice from './quests/slice';
import userSlice from './user/slice';
import questSlice from './quest/slice';
import reservationsSlice from './reservations/slice';

export const reducer = combineReducers({
  [StoreSlice.Quest]: questSlice.reducer,
  [StoreSlice.Quests]: questsSlice.reducer,
  [StoreSlice.Reservations]: reservationsSlice.reducer,
  [StoreSlice.User]: userSlice.reducer,
});
