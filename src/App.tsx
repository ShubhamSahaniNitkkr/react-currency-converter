import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CurrencyConverterState from "./service/actions";

import { Header, Footer } from "./components/layout";
import { CurrencyCalculator, NotFound } from "./components/pages";
import getBasename from "./getBasename";

const App = () => {
  return (
    <CurrencyConverterState>
      <Router basename={getBasename()}>
        <Header title="Currency Converter" />
        <Routes>
          <Route path="/" element={<CurrencyCalculator />} />
          <Route element={<NotFound />} />
        </Routes>
      </Router>
      <Footer title="Currency Converter" />
    </CurrencyConverterState>
  );
};

export default App;
