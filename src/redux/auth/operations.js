import axios from 'axios';

import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://wallet.goit.ua/api';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },

  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const signUp = createAsyncThunk('auth/signUp', async (authData, thunkApi) => {
  try {
    const { data } = await axios.post('/auth/sign-up', authData);
    token.set(data.token);
    return data;
  } catch (err) {
    return thunkApi.rejectWithValue(err.response.data.message);
  }
});

const signIn = createAsyncThunk('auth/signIn', async (authData, thunkApi) => {
  try {
    const { data } = await axios.post('/auth/sign-in', authData);
    token.set(data.token);
    return data;
  } catch (err) {
    return thunkApi.rejectWithValue(err.response.data.message);
  }
});

const signOut = createAsyncThunk('auth/signOut', async (_, thunkApi) => {
  try {
    axios.delete('/auth/sign-out');
    token.unset();
  } catch (err) {
    return thunkApi.rejectWithValue(err.response.data.message);
  }
});

const currentUser = createAsyncThunk(
  'auth/currentUser',
  async (_, thunkApi) => {
    const { auth } = thunkApi.getState();
    const persistedToken = auth.token;

    if (!persistedToken) {
      return thunkApi.rejectWithValue('Unable to fetch user');
    }

    try {
      token.set(persistedToken);
      const { data } = await axios.get('/users/current');
      return data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);

export { signUp, signIn, currentUser, signOut };
