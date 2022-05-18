import { createSlice } from '@reduxjs/toolkit';
import $api from '../../http';

const initialState = {
  token: '',
  loading: false,
  error: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    loginStart: (state) => {
      state.loading = true;
      state.error = '';
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.token = action.payload.token;
    },
    loginError: (state, action) => {
      console.log('LOGIN_ERROR', action);
      state.loading = false;
      state.error = action.payload.response?.data ? action.payload.response.data : action.payload;
    },

    logoutStart: (state) => {
      state.loading = true;
      state.error = '';
    },
    logoutSuccess: (state) => {
      state.loading = false;
      state.token = '';
    },
    logoutError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const login = async (dispatch, payload) => {
  dispatch(loginStart());
  try {
    const response = await $api.post('/auth/login', payload);
    if (response.status === 200 && response.data && response.data.token) {
      return dispatch(loginSuccess(response.data));
    }
    if (!response.data.token) { return dispatch(loginError('Логин или пароль указаны не верно!')) }
    dispatch(loginError('Что-то пошло не так...'));
  } catch (error) {
    dispatch(loginError(error));
  }
};

export const logout = async (dispatch) => {
  dispatch(logoutStart());
  try {
    const response = await $api.post('/auth/logout');
    if (response.status === 200) {
      localStorage.removeItem(process.env.REACT_APP_LOCAL_STORAGE);
      localStorage.removeItem('persist:root');
      return dispatch(logoutSuccess());
    }
  } catch (error) {
    dispatch(logoutError(error));
  }
};

export const { loginStart, loginSuccess, loginError, logoutStart, logoutSuccess, logoutError } =
  authSlice.actions;
export default authSlice.reducer;
