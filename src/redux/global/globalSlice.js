import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isModalLogoutOpen: false,
  isModalAddTransactionOpen: false,
};

const globalSlice = createSlice({
  name: 'global',
  initialState: initialState,

  reducers: {
    toggleModalLogoutOpen(state) {
      state.isModalLogoutOpen = !state.isModalLogoutOpen;
    },
    toggleModalAddTransactionOpen(state) {
      state.isModalAddTransactionOpen = !state.isModalAddTransactionOpen;
    },
  },
});

export const { toggleModalLogoutOpen, toggleModalAddTransactionOpen } =
  globalSlice.actions;

export const globalReducer = globalSlice.reducer;

export const selectModalLogoutOpen = state => state.global.isModalLogoutOpen;
export const selectModalAddTransactionOpen = state =>
  state.global.isModalAddTransactionOpen;
