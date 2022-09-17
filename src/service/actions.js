import React, { useReducer } from "react";
import axios from "axios";
import CCcontext from "./context";
import CCreducer from "./reducer";
import { SET_CURRENCY_INFO, SET_LOADING } from "./Types";

const CCaction = (props) => {
  const initialState = {
    currencyInfo: {},
    loading: false,
  };
  const [state, dispatch] = useReducer(CCreducer, initialState);

  const setloading = () => dispatch({ type: SET_LOADING });

  async function fethCurrencyInfo() {
    setloading();
    let res = await axios.get(
      `https://api.apilayer.com/exchangerates_data/latest?apikey=BZ066WqFMOdlXmidLNCfGxuwgQHcoocz`
    );
    dispatch({ type: SET_CURRENCY_INFO, payload: res.data });
  }

  return (
    <CCcontext.Provider
      value={{
        loading: state.loading,
        currencyInfo: state.currencyInfo,
        fethCurrencyInfo,
      }}
    >
      {props.children}
    </CCcontext.Provider>
  );
};

export default CCaction;
