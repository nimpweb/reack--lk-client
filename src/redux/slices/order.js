import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import $api from '../../http'

export const totalSteps = 3;
export const ORDER_DRAFT = { id: 1, title: 'Черновик' }
export const ORDER_ACTIVE = { id: 2, title: 'В работе'}

const fetchOrder = createAsyncThunk('order/fetch', async ( orderId ) => {
  const { data } = await $api.get(`/order/${orderId}`);
  return data;
})

const initialState = {
  state: ORDER_DRAFT,
  currentStep: 1,
  loading: false,
  error: '',

  sid: 1 /* 1 - физическое лицо, 2 - юридическое лицо, 3 - ИП */,
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

  devicesName: '',
  kadNum: '',
  devicesPlace: '',
  reason: '',

  pointsCount: 1,
  requestedMaxPower: '',
  oldMaxPower: '',
  reliabilityCategory: '',
  unn: '',
  CharacterOfLoad: '',
  degignDeadlines: [],

  guaranteeSupplier: '',
  comment: '',

  documents: [],
};

const orderSlice = createSlice({
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
    push: (state, action) => {
      state = { ...state, ...action.payload }
    }
  },
  extraReducers: {
    [fetchOrder.pending] : (state) => {
      state.order = initialState
      state.status = 'loading'
    },
    [fetchOrder.fulfilled] : (state, action) => {
      state.order = action.payload
      state.status = 'loaded'
    },
    [fetchOrder.rejected] : (state) => {
      state.order = initialState
      state.status = 'error'
    },
  }
})

export const { nextStep, prevStep, pushStep, push } = orderSlice.actions;
export default orderSlice.reducer;