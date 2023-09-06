import Cookies from 'js-cookie';

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IAuthState } from './auth.types';

const initialState: IAuthState = {
  token: Cookies.get('token') || null,
  role: Cookies.get('role') || '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signIn(state, { payload }: PayloadAction<IAuthState>) {
      Cookies.set('token', `${(state.token = payload.token)}`, { expires: 7 });
      Cookies.set('role', `${(state.role = payload.role)}`, { expires: 7 });
    },
    logOut(state) {
      Cookies.remove('token');
      Cookies.remove('role');
      state.token = null;
    },
  },
});
export const { reducer, actions } = authSlice;
