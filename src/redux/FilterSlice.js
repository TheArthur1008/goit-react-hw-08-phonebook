import { createSlice } from '@reduxjs/toolkit';

const initialState = '';

export const FilterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilter(state, { payload }) {
      return (state = payload);
    },
  },
});

export const { setFilter } = FilterSlice.actions;
