import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import authService from '../api/userServices';

// Async thunk to fetch access token
export const fetchAccessToken = createAsyncThunk(
  'token/fetchAccessToken',
  async (_, { rejectWithValue }) => {
    try {
      const response = await authService.accessToken();
      return response.data; // Store the full response
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Failed to fetch token');
    }
  }
);

const tokenSlice = createSlice({
  name: 'token',
  initialState: {
    accessToken: null,
    scope: null,
    tokenType: null,
    expiresIn: null,
    loading: false,
    error: null,
  },
  reducers: {
    clearToken: (state) => {
      state.accessToken = null;
      state.scope = null;
      state.tokenType = null;
      state.expiresIn = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAccessToken.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAccessToken.fulfilled, (state, action) => {
        state.loading = false;
        state.accessToken = action.payload.access_token;
        state.scope = action.payload.scope;
        state.tokenType = action.payload.token_type;
        state.expiresIn = action.payload.expires_in;
      })
      .addCase(fetchAccessToken.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearToken } = tokenSlice.actions;
export default tokenSlice.reducer;
