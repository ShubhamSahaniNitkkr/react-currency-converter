/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import { Loader } from "../layout";
import CurrencyConverterContext from "../../service/context";

export const Home = () => {
  const {
    loading,
    currencyInfo,
    fethCurrencyInfo,
    currencyCountryList,
  } = useContext(CurrencyConverterContext);

  const [amount, setAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState("AE");
  const [toCurrency, setToCurrency] = useState("IND");

  useEffect(() => {
    // fethCurrencyInfo();
  }, []);

  // if (loading) return <Loader />;

  const renderDropdown = () => {
    const options = [];

    for (const [key, value] of Object.entries(currencyCountryList)) {
      options.push(
        <option
          className="currency-option"
          style={{
            backgroundImage: `url(imgs/bg.jpg)`,
          }}
          value={key}
          key={value}
        >
          {key}
        </option>
      );
    }

    return options;
  };

  return (
    <>
      <div className="card p-4 mx-2 home-wrapper">
        <div className="card-header header">Currency Converter</div>
        <form action="#">
          <div className="amount">
            <p>Enter Amount</p>
            <input type="text" value="1" />
          </div>
          <div className="drop-list">
            <div className="from">
              <p>From</p>
              <div className="select-box">
                <img src="https://flagcdn.com/48x36/us.png" alt="flag" />
                <select>{renderDropdown()}</select>
              </div>
            </div>
            <div className="icon px-4">
              <i className="fas fa-exchange-alt"></i>
            </div>
            <div className="to">
              <p>To</p>
              <div className="select-box">
                <img src="https://flagcdn.com/48x36/in.png" alt="flag" />
                <select>{renderDropdown()}</select>
              </div>
            </div>
          </div>
          <div className="exchange-rate">Getting exchange rate...</div>
          <button>Convert</button>
        </form>
      </div>
    </>
  );
};
export default Home;
