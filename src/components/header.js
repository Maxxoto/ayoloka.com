import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, { useState } from "react";

function Header({ children }) {
  

  return (
     <div>
       {children}
     </div>
  );
}

Header.propTypes = {
  // siteTitle: PropTypes.string
  children: PropTypes.string
};

// Header.defaultProps = {
//   siteTitle: ``
// };

export default Header;
