import { createSlice } from '@reduxjs/toolkit';

import { signUp, signIn } from './operations';

const initialState = {
  user: {
    id: null,
    username: null,
    email: null,
    balance: 0,
  },
  token: null,
  status: null,
};

const authSlice = createSlice({
  name: 'auth',

  initialState,

  extraReducers: builder =>
    builder
      .addCase(signUp.pending)
      .addCase(signUp.rejected)

      .addCase(signUp.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.status = 'success';
      })

      .addCase(signIn.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.status = 'success';
      }),
});

export const authReducer = authSlice.reducer;
