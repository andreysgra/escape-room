import {StoreSlice} from '../const';
import {State} from '../../types/state';

const storeSlice = StoreSlice.User;

export const getAuthorizationStatus = (state: State) =>
  state[storeSlice].authorizationStatus;

export const getLoginStatus = (state: State) => state[storeSlice].loginStatus;

export const getUser = (state: State) => state[storeSlice].user;
