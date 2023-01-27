import { createSlice } from '@reduxjs/toolkit';

import {
  addTransaction,
  getAllTransactions,
  getTransactionsCategories,
  getTransactionsByMonth,
} from './operations';

const initialState = {
  transactions: [],
  transactionsByMonth: {},
  categories: [],
  isLoading: false,
  error: '',
};

const transactionsSlice = createSlice({
  name: 'transactions',

  initialState,

  extraReducers: builder =>
    builder
      //addTransaction
      .addCase(addTransaction.pending, (state, { payload }) => {
        state.isLoading = true;
        state.error = '';
      })
      .addCase(addTransaction.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.transactions = [...state.transactions, payload];
      })
      .addCase(addTransaction.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      //getAllTransactions
      .addCase(getAllTransactions.pending, (state, { payload }) => {
        state.isLoading = true;
        state.error = '';
      })
      .addCase(getAllTransactions.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.transactions = payload;
      })
      .addCase(getAllTransactions.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      //getTransactionsCategories
      .addCase(getTransactionsCategories.pending, (state, { payload }) => {
        state.isLoading = true;
        state.error = '';
      })
      .addCase(getTransactionsCategories.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.transactions = payload;
      })
      .addCase(getTransactionsCategories.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      //getTransactions by month/year
      .addCase(getTransactionsByMonth.pending, (state, { payload }) => {
        state.isLoading = true;
        state.error = '';
      })
      .addCase(getTransactionsByMonth.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.transactionsByMonth = payload;
      })
      .addCase(getTransactionsByMonth.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      }),
});

export const transactionsReducer = transactionsSlice.reducer;
