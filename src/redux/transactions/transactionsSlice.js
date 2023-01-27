import { createSlice } from '@reduxjs/toolkit';
import { fetchCategories, fetchTransactionsSummary } from './operations';

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState: {
    categories: [],
    categoriesSummary: [],
    expenseSummary: 0,
    incomeSummary: 0,
    periodTotal: 0,
  },
  extraReducers: builder =>
    builder
      .addCase(fetchCategories.pending)
      .addCase(fetchCategories.rejected, () => {
        console.log('fetchCategories failed');
      })

      .addCase(fetchCategories.fulfilled, (state, action) => {
        state = action.payload;
      })
      .addCase(fetchTransactionsSummary.pending)
      .addCase(fetchTransactionsSummary.rejected, () => {
        console.log('fetchTransactionsSummary failed');
      })

      .addCase(fetchTransactionsSummary.fulfilled, (state, action) => {
        state.categoriesSummary = action.payload.categoriesSummary;
        state.expenseSummary = action.payload.expenseSummary;
        state.incomeSummary = action.payload.incomeSummary;
        state.periodTotal = action.payload.periodTotal;
      }),
});

export const transactionsReducer = transactionsSlice.reducer;

export const selectCategories = state => state.transactions.categories;
export const selectSummary = state => state.transactions.categoriesSummary;
export const selectExpenseSum = state => state.transactions.expenseSummary;
export const selectIncomeSum = state => state.transactions.incomeSummary;
export const selectPeriodTotal = state => state.transactions.periodTotal;
