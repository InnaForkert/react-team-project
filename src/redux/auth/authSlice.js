import { createSlice } from "@reduxjs/toolkit";

import { signUp, signIn, currentUser } from "./operations";

const handlePending = (state) => {
  state.status = 'loading'
}

const handleRejected = (state) => {
  state.status = 'error'
}

const authSlice = createSlice({
  name: 'auth',

  initialState: {
    user: {
      id: null,
      username: null,
      email: null,
      balance: 0
    },
    token: null,
    status: null,
    isAuth: false,
    isRefreshing: false
  },

  extraReducers: builder => builder
  .addCase(signUp.pending, handlePending)
  .addCase(signIn.pending, handlePending)
  .addCase(currentUser.pending, handlePending)

  .addCase(signUp.rejected, handleRejected)
  .addCase(signIn.rejected, handleRejected)
  .addCase(currentUser.rejected, handleRejected)

  .addCase(signUp.fulfilled, (state, {payload}) => {
    state.user = payload.user;
    state.token = payload.token;
    state.isAuth = true;
    state.status = 'success';
  })

  .addCase(signIn.fulfilled, (state, {payload}) => {
    state.user = payload.user;
    state.token = payload.token;
    state.isAuth = true;
    state.status = 'success';
  })

  .addCase(currentUser.fulfilled, (state, {payload}) => {
      state.user = payload.user;
      state.isAuth = true;
      state.isRefreshing = false;
  })
})

export const authReducer = authSlice.reducer
