import axios from 'axios';

import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://wallet.goit.ua/api';

export const fetchCategories = createAsyncThunk(
  'transactionsCategories/fetchCategories',
  async (_, thunkApi) => {
    try {
      const { data } = await axios.get('/transaction-categories');
      return data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);
