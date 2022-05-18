import { createSlice } from '@reduxjs/toolkit';
import $api from '../../http';
import { updateSuccess } from '../profileSlice';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    currentUser: null,
    orgList: [],
    loading: false,
    error: '',
  },
  reducers: {
    loadStart: (state) => {
      state.loading = true;
      state.error = '';
    },

    loadFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload.message ? action.payload.message : action.payload;
    },

    updateProfileSuccess: (state, action) => {
      state.loading = false;
      state.error = '';
      state.currentUser = action.payload;
    },

    meSuccess: (state, action) => {
      state.loading = false;
      state.error = '';
      state.currentUser = action.payload;
    },

    updateSuccess: (state, action) => {
      state.loading = false;
      state.error = '';
      state.currentUser = action.payload;
    },

    addNewOrgSuccess: (state, action) => {
      state.loading = false;
      state.error = '';
      state.orgList = [...state.orgList, {...action.payload}];
    },

    flushStateSuccess: (state) => {
      state.loading = false;
      state.error = '';
    }
  },
});

export const getMe = async (dispatch) => {
  dispatch(loadStart());
  try {
    const response = await $api.get('/user/me');
    dispatch(meSuccess(response.data));
  } catch (error) {
    dispatch(loadFailure(error));
  }
};

export const updateUser = async(dispatch, data) => {
  dispatch(loadStart())
  try {
    console.log('ACTION.PAYLOAD', data)
    const response = await $api.post('/user/do?o=u', data);
    if (response.status === 200)  { dispatch(updateSuccess(response.data)); }
    dispatch(loadFailure('Ответ не получен!'))
  } catch (error) {
    dispatch(loadFailure(error))
  }
}

export const addNewOrg = async (dispatch, action)  => {
  dispatch(loadStart());
  try {
    const response = await $api.post('/user/do?add=neworg', action.payload);
    if (response) {
      dispatch(addNewOrgSuccess(response.data));
    }
  } catch (error) {
    dispatch(loadFailure(error));
  }
}

export const flushState = async(dispatch) => {
  dispatch(flushStateSuccess());
}


// const updateProfile = (dispatch, payload) => {
//   dispatch(loadStart());
//   try {
//     const response = await $api.post('/user/update', payload);
//   } catch (error) {
//     dispatch(loadFailure(error));
//   }
// };

export const { loadStart, loadFailure, meSuccess, addNewOrgSuccess, flushStateSuccess } = userSlice.actions;
export default userSlice.reducer;
