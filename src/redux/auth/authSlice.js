import { createSlice } from "@reduxjs/toolkit";

import { signUp, signIn, currentUser, signOut } from "./operations";

const handlePending = (state) => {
  state.status = 'loading'
}

const handleRejected = (state) => {
  state.status = 'error'
}

const initialState = {
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
}

const authSlice = createSlice({
  name: 'auth',

  initialState,

  extraReducers: builder => builder
  .addCase(signUp.pending, handlePending)
  .addCase(signIn.pending, handlePending)
  .addCase(currentUser.pending, (state) => {state.isRefreshing = true})
  .addCase(signOut.pending, handlePending)

  .addCase(signUp.rejected, handleRejected)
  .addCase(signIn.rejected, handleRejected)
  .addCase(currentUser.rejected, (state) => { state.isRefreshing = false})
  .addCase(signOut.rejected, handleRejected)

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

  .addCase(signOut.fulfilled, (state) => {
    state.user = initialState.user;
    state.token = null;
    state.status = null;
    state.isAuth = false;
    state.isRefreshing = false;
  })
})

export const authReducer = authSlice.reducer
