import { SET_CURRENCY_INFO, SET_LOADING } from "./Types";
export default (state, action) => {
  switch (action.type) {
    case SET_CURRENCY_INFO:
      return { ...state, currencyInfo: action.payload, loading: false };
    case SET_LOADING:
      return { ...state, loading: true };
    default:
      return state;
  }
};
