import axios from "axios";

import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://wallet.goit.ua'

const token = {
  set(token){
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },

  unset(){
    axios.defaults.headers.common.Authorization = '';
  }
}

const signUp = createAsyncThunk('auth/signUp', async (authData, thunkApi) => {
  try{
    const {data} = await axios.post('/api/auth/sign-up', authData)
    token.set(data.token)
    return data
  }
  catch(err){
    return thunkApi.rejectWithValue(err.message)
  }
})

const signIn = createAsyncThunk('auth/signIn', async (authData, thunkApi) => {
  try{
    const {data} = await axios.post('/api/auth/sign-in', authData)
    token.set(data.token)
    return data
  }
  catch(err){
    return thunkApi.rejectWithValue(err.message)
  }
})

export {signUp, signIn}
