import React, { useReducer } from "react";
import axios from "axios";
import CCcontext from "./context";
import CCreducer from "./reducer";
import {
  SET_CURRENCY_INFO,
  SET_LOADING,
  SET_CONVERTING,
  SET_CONVERTED_VALUE,
} from "./Types";
import { currencyCountryList } from "../constants";

const CCaction = (props) => {
  const initialState = {
    currencyInfo: {},
    loading: false,
    currencyCountryList,
    isConverting: false,
    convertedValue: null,
  };
  const [state, dispatch] = useReducer(CCreducer, initialState);

  const setLoading = () => dispatch({ type: SET_LOADING });
  const setConverting = () => dispatch({ type: SET_CONVERTING });
  const setConvetedValueFn = (value) =>
    dispatch({ type: SET_CONVERTED_VALUE, payload: value });

  async function fethCurrencyInfoFn(amount, from, to) {
    setLoading();
    let res = await axios.get(
      `https://api.apilayer.com/exchangerates_data/latest?base=${from}&apikey=BZ066WqFMOdlXmidLNCfGxuwgQHcoocz`
    );
    dispatch({ type: SET_CURRENCY_INFO, payload: res.data.rates });
    setConvetedValueFn(res.data.rates[to] * amount);
  }

  async function fetchConvertValueFn(amount, from, to) {
    setConverting();
    let res = await axios.get(
      `https://api.apilayer.com/exchangerates_data/convert?apikey=BZ066WqFMOdlXmidLNCfGxuwgQHcoocz&to=${to}&from=${from}&amount=${amount}`
    );
    setConvetedValueFn(res.data.result * amount);
  }

  return (
    <CCcontext.Provider
      value={{
        currencyCountryList,
        loading: state.loading,
        currencyInfo: state.currencyInfo,
        fethCurrencyInfoFn,
        isConverting: state.isConverting,
        convertedValue: state.convertedValue,
        fetchConvertValueFn,
        setConvetedValueFn,
      }}
    >
      {props.children}
    </CCcontext.Provider>
  );
};

export default CCaction;
