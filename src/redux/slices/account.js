import { createSlice } from '@reduxjs/toolkit';
import $api from '../../http'

export const accountSlice = createSlice({
  name: 'account',
  initialState: {
    account: {
      id: null,
      title: '',
      regions: [],
      state: 0,
      tarif: {
        moneryPerDay: 10,
        moneyPerMonth: 100,
        moneyPerYear: 1000,
      },
      mail: {
        host: '',
        port: 25,
        login: '',
        password: '',
        subject: '',
      },
      userMailList: [],
      sms: {
        serviceId: 0,
        apiKey: '',
      },
    },
    loading: false,
    error: '',
  },
  reducers: {
    doStart: (state) => {
      state.loading = true;
      state.error = '';
    },

    doError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    updateSuccess: (state, action) => {
      state.loading = false;
      state.error = '';
      state.account = action.payload;
    },

    loadSuccess: (state, action) => {
      state.loading = false;
      state.error = '';
      state.account = action.payload;
    }
  },
});

export const update = async (account, dispatch) => {
  dispatch(doStart());
  try {
    dispatch(updateSuccess(account));
  } catch (error) {
    dispatch(doError(error));
  }
};

export const load = async (accountId, dispatch) => {
  dispatch(doStart());
  try {
    const response = await $api.get(`/account/${accountId}`);
    dispatch(loadSuccess(response.data));
  } catch (error) {
    dispatch(doError(error))
  }
}

export const { doStart, doError, updateSuccess, loadSuccess  } = accountSlice.actions;
export default accountSlice.reducer;
