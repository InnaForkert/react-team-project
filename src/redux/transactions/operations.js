import axios from 'axios';

import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCategories = createAsyncThunk(
  'transactions/fetchCategories',
  async (_, thunkApi) => {
    try {
      const { data } = await axios.get('/transaction-categories');
      return data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);

export const addTransaction = createAsyncThunk(
  'transactions/add',
  async (newTransaction, thunkApi) => {
    try {
      const { data } = await axios.post('/api/transactions', newTransaction);
      return data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);

export const getAllTransactions = createAsyncThunk(
  'transactions/getAll',
  async (_, thunkApi) => {
    try {
      const { data } = await axios.get('/api/transactions');
      return data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);

const now = new Date();
const currentMonth = now.getMonth() + 1;
const currentYear = now.getFullYear();


export const fetchTransactionsSummary = createAsyncThunk(
  'transactions/fetchSummary',
  async (date = { month: currentMonth, year: currentYear }, thunkApi) => {
    try {
      const { data } = await axios.get(
        `transactions-summary?month=${date.month}&year=${date.year}`
      );
      return data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);
