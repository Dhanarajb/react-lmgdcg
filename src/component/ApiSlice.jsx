import { createSlice } from '@reduxjs/toolkit';

export const ApiSlice = createSlice({
  name: 'api',
  initialState: {
    isLoading: false,
    data: null,
    error: null,
  },
  reducers: {
    fetchDataStart: (state) => {
      state.isLoading = true;
    },
    fetchDataSuccess: (state, action) => {
      state, (isLoading = false);
      state.data = action.payload;
      state.error = null;
    },
    fetchDataFailure: (state, action) => {
      state, (isLoading = false);
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const { fetchDataStart, fetchDataSuccess, fetchDataFailure } =
  ApiSlice.actions;

export const selectData = (state) => state.api.data;
export const selectIsLoading = (state) => state.api.isLoading;
export const selectError = (state) => state.api.error;

export default ApiSlice.reducer;
