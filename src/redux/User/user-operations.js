import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { registerUser, loginUser, logOutUser } from 'services/api';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const register = createAsyncThunk('user/register', async data => {
  const result = await registerUser(data);
  token.set(result.token);
  return result;
});

export const login = createAsyncThunk('user/login', async data => {
  const result = await loginUser(data);
  token.set(result.token);
  return result;
});

export const logOut = createAsyncThunk('user/logout', async () => {
  await logOutUser();
  token.unset();
});

export const fetchCurrentUser = createAsyncThunk(
  'user/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.user.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }

    token.set(persistedToken);
    try {
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {
      // TODO: Добавить обработку ошибки error.message
    }
  }
);
