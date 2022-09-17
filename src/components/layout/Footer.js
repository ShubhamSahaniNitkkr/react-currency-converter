/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { isMobile } from "react-device-detect";
import PropTypes from "prop-types";
import CurrencyConverterContext from "../../service/context";

const Footer = ({ title }) => {
  const CurrencyConverterCont = useContext(CurrencyConverterContext);

  return (
    <div className="footer text-navy p-1 mt-3 fixed-bottom shadow text-center bg-whitesmoke ">
      <div className={isMobile ? "" : ""}>
        <span>{title}</span> &nbsp;
        <i className="fas fa-copyright"></i> &nbsp;
        <span>{new Date().getFullYear()}</span>
      </div>
    </div>
  );
};

Footer.defaultProps = {
  companyName: "company name",
};

Footer.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Footer;
