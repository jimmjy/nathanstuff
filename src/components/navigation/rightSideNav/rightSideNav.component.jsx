import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

//components
import AdminButton from "../../adminButton/admin-button";

//styles
import "./rightSideNav.styles.scss";

//data
import { navLinks } from "../../../data/links";

const RightSideNav = ({ authUser, onSignOutClick, onConsoleClick }) => {
  const [menuToggle, setMenuToggle] = useState(false);

  const closeNav = (e) => {
    setMenuToggle(false);
  };

  useEffect(() => {
    menuToggle && window.addEventListener("click", closeNav);
    menuToggle && window.addEventListener("resize", closeNav);

    return () => {
      window.removeEventListener("click", closeNav);
      window.removeEventListener("resize", closeNav);
    };
  }, [menuToggle]);

  const toggleMenu = () => {
    setMenuToggle((toggle) => !toggle);
  };

  return (
    <div className={`right-side-nav ${menuToggle ? "show-nav" : ""}`}>
      <div className='nav-toggle-container'>
        <button className='nav-toggle' onClick={toggleMenu}>
          <span
            className={`toggle-icon ${menuToggle ? "toggle-icon-one" : ""}`}
          >
            &#8212;
          </span>
          <span
            className={`toggle-icon ${menuToggle ? "toggle-icon-two" : ""}`}
          >
            &#8212;
          </span>
          <span
            className={`toggle-icon ${menuToggle ? "toggle-icon-three" : ""}`}
          >
            &#8212;
          </span>
        </button>
      </div>
      {/* move these to data file */}
      <ul className='nav-links'>
        {navLinks.map(({ name, link }) => {
          return (
            <li className='nav-item-link' key={link + name}>
              <Link to={link}>{name}</Link>
            </li>
          );
        })}
        {/* make proper number */}
        <li className='nav-item-link'>
          <a href='tel:555-555-1212'>555-555-1212</a>
        </li>
        {authUser && (
          <>
            <li className='nav-item-link'>
              {/* <AdminButton onClick={onConsoleClick} title={"Console"} /> */}
              <Link to='/console'>Console</Link>
            </li>
            <li className='nav-item-link'>
              <AdminButton onClick={onSignOutClick} title={"Sign Out"} />
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default RightSideNav;
