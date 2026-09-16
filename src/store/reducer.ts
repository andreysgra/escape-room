import {StoreSlice} from './const';
import {combineReducers} from '@reduxjs/toolkit';
import questsSlice from './quests/slice';
import userSlice from './user/slice';
import questSlice from './quest/slice';
import reservationsSlice from './reservations/slice';
import siteProcessSlice from './site-process/slice';
import bookingSlice from './booking/slice';

export const reducer = combineReducers({
  [StoreSlice.Booking]: bookingSlice.reducer,
  [StoreSlice.Quest]: questSlice.reducer,
  [StoreSlice.Quests]: questsSlice.reducer,
  [StoreSlice.Reservations]: reservationsSlice.reducer,
  [StoreSlice.SiteProcess]: siteProcessSlice.reducer,
  [StoreSlice.User]: userSlice.reducer,
});
