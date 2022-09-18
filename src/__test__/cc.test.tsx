import React from "react";
import ReactDOM from "react-dom";
import { render, cleanup } from "@testing-library/react";
import { Loader } from "../components/layout";

/* Test cases 
1. After load , On updating amount , value should also update
2. On click of convert , Value should update
3. On click of swap , From currency and to currency should update
4. Selection of currency from fromCurrency dropdown
5. Selection of currency from toCurrency dropdown  */

afterEach(cleanup);

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Loader />, div);
});
