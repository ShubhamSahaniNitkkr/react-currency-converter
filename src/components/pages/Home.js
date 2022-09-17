/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import CurrencyConverterContext from "../../service/context";

export const Home = () => {
  const CurrencyConverterCont = useContext(CurrencyConverterContext);
  return (
    <>
      <div>Home</div>
    </>
  );
};
export default Home;
