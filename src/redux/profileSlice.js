import { createSlice } from '@reduxjs/toolkit';

export const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    profile: {
      id: null,
      name: 'Максим П. Нестеров',
      avatar: '',
      email: 'nimpweb@yandex.ru',
      emailSuccess: false,
      emailSuccessCode: '',
      phone: '',
      phoneSuccess: false,
      phoneSuccessCode: '',
      firstName: 'Нестеров',
      middleName: 'Максим',
      lastName: 'Петрович',
    },
    pending: false,
    error: false,
    errorMessage: '',
  },
  reducers: {
    updateStart: (state) => {
      state.pending = true;
      state.error = false;
      state.errorMessage = '';
    },
    updateSuccess: (state, action) => {
      state.pending = false;
      state.profile = action.payload;
    },
    updateError: (state, action) => {
      state.pending = false;
      state.error = true;
      state.errorMessage = action.payload;
    },
  },
});

export const updateProfile = async (profile, dispatch) => {
  dispatch(updateStart());
  try {
    dispatch(updateSuccess(profile));
  } catch (error) {
    dispatch(updateError(error));
  }
};

export const { updateStart, updateSuccess, updateError } = profileSlice.actions;
export default profileSlice.reducer;
