import {TUserState} from './type';
import {AuthorizationStatus, RequestStatus} from '../../services/api/const';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {StoreSlice} from '../const';
import {TUser} from '../../types/user';
import {fetchUserStatus, loginUser, logoutUser} from './api-actions';

const initialState: TUserState = {
  user: null,
  authorizationStatus: AuthorizationStatus.Unknown,
  loginStatus: RequestStatus.Idle
};

const userSlice = createSlice({
  name: StoreSlice.User,
  initialState,
  reducers: {
    setLoginStatus: (state, action: PayloadAction<RequestStatus>) => {
      state.loginStatus = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserStatus.fulfilled, (state, action: PayloadAction<TUser>) => {
        state.user = action.payload;
        state.authorizationStatus = AuthorizationStatus.Auth;
      })
      .addCase(fetchUserStatus.pending, (state) => {
        state.authorizationStatus = AuthorizationStatus.Unknown;
      })
      .addCase(fetchUserStatus.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(loginUser.fulfilled, (state, action: PayloadAction<TUser>) => {
        state.user = action.payload;
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.loginStatus = RequestStatus.Success;
      })
      .addCase(loginUser.pending, (state) => {
        state.loginStatus = RequestStatus.Pending;
      })
      .addCase(loginUser.rejected, (state) => {
        state.loginStatus = RequestStatus.Error;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.user = null;
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      });
  }
});

export const {setLoginStatus} = userSlice.actions;

export default userSlice;
