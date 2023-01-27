import { createSlice } from "@reduxjs/toolkit";

import { signUp } from "./operations";

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
    status: null
  },

  extraReducers: builder => builder

  .addCase(signUp.fulfilled, (state, {payload}) => {
    state.user = payload.user;
    state.token = payload.token;
    state.status = 'success';
  })
})

export const authReducer = authSlice.reducer
