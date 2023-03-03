import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export default FetchApiData = createAsyncThunk('api/fetchData', async () => {
  const response = await axios.get(
    'https://admin.gifinfinity.com/products/api/client/v1/products-list/'
  );
  return response.data;
});
