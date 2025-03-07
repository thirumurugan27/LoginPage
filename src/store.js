import { configureStore, createSlice } from '@reduxjs/toolkit';

// Authentication slice
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { login, logout } = authSlice.actions;

// Configure store
const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
});

export default store;
