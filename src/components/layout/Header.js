import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Header = ({ title }) => {
  return (
    <React.Fragment>
      <nav
        className={`navbar navbar-expand-lg bg-white shadow-sm fixed-top pl-4`}
      >
        <Link className="navbar-brand font-weight-bolder text-navy" to="/">
          <span className="border border-info rounded-circle px-2 py-1 mr-2">
            <i className="fas fa-calculator"></i>
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
