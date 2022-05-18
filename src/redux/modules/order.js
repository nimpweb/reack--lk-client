const moduleName = "order";

const CREATE_NEW = `${moduleName}/CREATE_NEW`;

const defaultState = {};

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case CREATE_NEW:
      return { ...state, order: payload };
    default:
      return state;
  }
};

export const createOrder = () => async (dispatch) => {
  dispatch({ type: CREATE_NEW, payload: { sid: 1, toa: 3, agree: false } });
};
