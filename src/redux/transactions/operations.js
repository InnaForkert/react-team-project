import axios from 'axios';

import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://wallet.goit.ua';

const addTransaction = createAsyncThunk(
  'transactions/add',
  async (newTransaction, thunkApi) => {
    try {
      const { data } = await axios.post('/api/transactions', newTransaction);
      // token.set(data.token);
      return data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);

const getAllTransactions = createAsyncThunk(
  'transactions/getAll',
  async (_, thunkApi) => {
    try {
      const { data } = await axios.get('/api/transactions');
      // token.set(data.token);
      return data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);

const getTransactionsCategories = createAsyncThunk(
  'transactions/getCategories',
  async (_, thunkApi) => {
    try {
      const { data } = await axios.get('/api/transaction-categories');
      // token.set(data.token);
      return data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);

const getTransactionsByMonth = createAsyncThunk(
  'transactions/getTransactionsByMonth',
  async (params, thunkApi) => {
    try {
      const { month, year } = params;
      const { data } = await axios.get(
        `/api/transactions-summary?month=${month}&year=${year}`
      );
      // token.set(data.token);
      return data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);

export {
  addTransaction,
  getAllTransactions,
  getTransactionsCategories,
  getTransactionsByMonth,
};
