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
      documents: [],
      accountPoint: [
        {
          id: 89880,
          address: '460000, Оренбургская область, г.Оренбург, ул.Советская, д.60, кв.75',
          num: '071181',
        },
      ],
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
