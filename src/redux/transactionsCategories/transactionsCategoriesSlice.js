import { createSlice } from '@reduxjs/toolkit';
import { fetchCategories } from './operations';

const transactionsCategoriesSlice = createSlice({
  name: 'transactionsCategories',
  initialState: [],
  extraReducers: builder =>
    builder
      .addCase(fetchCategories.pending)
      .addCase(fetchCategories.rejected, () => {
        console.log('sry');
      })

      .addCase(fetchCategories.fulfilled, (state, action) => {
        state = action.payload;
      }),
});

export const transactionsCategoriesReducer =
  transactionsCategoriesSlice.reducer;

export const selectCategories = state => state.transactionsCategories.data;
