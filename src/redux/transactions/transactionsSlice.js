import { createSlice } from '@reduxjs/toolkit';
import {
  addTransaction,
  fetchCategories,
  fetchTransactionsSummary,
  getAllTransactions,
} from './operations';

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState: {
    allTransactions: [],
    categories: [],
    categoriesSummary: [],
    expenseSummary: 0,
    incomeSummary: 0,
    periodTotal: 0,
    isLoading: false,
    error: null,
    colors: [
      '#FED057',
      '#FFD8D0',
      '#FD9498',
      '#C5BAFF',
      '#6E78E8',
      '#4A56E2',
      '#81E1FF',
      '#24CCA7',
      '#00AD84',
    ],
  },
  reducers: {
    addColors: state => {
      state.categories = state.categories.map((el, i) => ({
        ...el,
        color: state.colors[i],
      }));
    },
  },
  extraReducers: builder =>
    builder
      .addCase(fetchCategories.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state = action.payload;
      })
      .addCase(fetchTransactionsSummary.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(fetchTransactionsSummary.fulfilled, (state, action) => {
        state.categoriesSummary = action.payload.categoriesSummary;
        state.expenseSummary = action.payload.expenseSummary;
        state.incomeSummary = action.payload.incomeSummary;
        state.periodTotal = action.payload.periodTotal;
        state.isLoading = false;
        state.error = null;
      })

      .addCase(addTransaction.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addTransaction.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.allTransactions = [...state.allTransactions, payload];
      })
      .addCase(addTransaction.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(getAllTransactions.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getAllTransactions.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.allTransactions = payload;
        state.error = null;
      })
      .addCase(getAllTransactions.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      }),
});

export const transactionsReducer = transactionsSlice.reducer;

export const selectCategories = state => state.transactions.categories;
export const selectSummary = state => state.transactions.categoriesSummary;
export const selectExpenseSum = state => state.transactions.expenseSummary;
export const selectIncomeSum = state => state.transactions.incomeSummary;
export const selectPeriodTotal = state => state.transactions.periodTotal;
export const selectAllTransactions = state =>
  state.transactions.allTransactions;

export const { addColors } = transactionsSlice.actions;
