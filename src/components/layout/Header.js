import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { isMobile } from "react-device-detect";

const Header = ({ title }) => {
  return (
    <React.Fragment>
      <nav
        className={`navbar navbar-expand-lg bg-white shadow-sm fixed-top p-3 ${
          isMobile ? "" : "pl-5 pr-5"
        }`}
      >
        <Link className="navbar-brand font-weight-bolder text-navy" to="/">
          <span className="border px-2 py-1 mr-2 HeaderIcon">
            <i className="fas fa-code"></i>
          </span>
          &nbsp;
          {title}
        </Link>
      </nav>
    </React.Fragment>
  );
};

Header.defaultProps = {
  title: "Page Title",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;