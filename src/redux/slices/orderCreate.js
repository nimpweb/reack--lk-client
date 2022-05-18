import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const totalSteps = 3;
export const ORDER_DRAFT = { id: 1, title: 'Черновик' }
export const ORDER_ACTIVE = { id: 2, title: 'В работе'}

const initialState =  {
  state: ORDER_DRAFT,
  currentStep: 1,
  loading: false,
  error: '',

  sid: 1, /* 1 - физическое лицо, 2 - юридическое лицо, 3 - ИП */
  toa: 1,

  applicantFio: '',
  applicantActualAddress: '',
  applicantEmail: '',
  applicantPhone: '',
  applicantInn: '',
  isRepresentative: false,
  representativeFio: '',
  representativePhone: '',
  representativeDocument: '',
}

const orderCreateSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    nextStep: (state) => {
      if (state.currentStep === totalSteps) return;
      state.currentStep++;
    },
    prevStep: (state) => {
      if (state.currentStep === 1) return;
      state.currentStep--;
    },
    pushStep: (state, action) => {
      state.applicantFio = action.payload.applicantFio
      state.applicantActualAddress = action.payload.applicantActualAddress
      state.applicantEmail = action.payload.applicantEmail
      state.applicantInn = action.payload.applicantInn
      state.isRepresentative = action.payload.isRepresentative
      state.representativeFio = action.payload.representativeFio
      state.representativePhone = action.payload.representativePhone
      state.representativeDocument = action.payload.representativeDocument
    },
    clearNewOrder: (state) => {
      state = initialState
    },
  }
})

export const { nextStep, prevStep, pushStep } = orderCreateSlice.actions;
export default orderCreateSlice.reducer;