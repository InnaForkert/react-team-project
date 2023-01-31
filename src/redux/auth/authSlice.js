import { createSlice } from '@reduxjs/toolkit';

import { signUp, signIn, currentUser, signOut } from './operations';

const handlePending = state => {
  state.status = 'loading';
  state.error = null;
};

const handleRejected = (state, {payload}) => {
  state.status = 'error';
  state.error = Array.isArray(payload)? payload[0] : payload
};

const initialState = {
  user: {
    id: null,
    username: null,
    email: null,
    balance: 0,
  },
  token: null,
  status: null,
  isAuth: false,
  isRefreshing: false,
  error: null
};

const authSlice = createSlice({
  name: 'auth',

  initialState,

  extraReducers: builder =>
    builder
      .addCase(signUp.pending, handlePending)
      .addCase(signIn.pending, handlePending)
      .addCase(currentUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(signOut.pending, handlePending)

      .addCase(signUp.rejected, handleRejected)
      .addCase(signIn.rejected, handleRejected)
      .addCase(currentUser.rejected, state => {
        state.isRefreshing = false;
      })
      .addCase(signOut.rejected, handleRejected)

      .addCase(signUp.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isAuth = true;
        state.status = 'success';
        state.error = null
      })

      .addCase(signIn.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isAuth = true;
        state.status = 'success';
        state.error = null
      })

      .addCase(currentUser.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isAuth = true;
        state.isRefreshing = false;
        state.error = null
      })

      .addCase(signOut.fulfilled, state => {
        state.user = initialState.user;
        state.token = null;
        state.status = null;
        state.isAuth = false;
        state.isRefreshing = false;
        state.error = null
      }),
});

export const authReducer = authSlice.reducer;
