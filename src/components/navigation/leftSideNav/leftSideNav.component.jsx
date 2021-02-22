import React from "react";
import "./leftSideNav.styles.scss";
import { Link } from "react-router-dom";

// svg logo
import { ReactComponent as Logo } from "../../../assets/site-logo.svg";

const LeftSideNav = () => (
  <div className='leftNav'>
    <Link className='leftNav-link' to='/'>
      <Logo className='nav-logo' />
    </Link>
  </div>
);

export default LeftSideNav;
