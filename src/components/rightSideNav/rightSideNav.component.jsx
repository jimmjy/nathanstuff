import React from 'react';
import { Link } from 'react-router-dom';

import './rightSideNav.styles.scss';

const RightSideNav = () => <div className="right-side-nav">
    <ul className="nav-links">
        <li className="nav-item-link">
            <Link to='/'>Home</Link>
        </li>
        <li className="nav-item-link">
            <Link to='/about'>About</Link>
        </li>
        <li className="nav-item-link">
            <Link to='/services'>Services</Link>
        </li>
        <li className="nav-item-link">
            <Link to='/employment'>Employment</Link>
        </li>
        <li className="nav-item-link">
            <Link to='/contact'>Contact</Link>
        </li>
        <li className="nav-item-link">
            <a href="tel:555-555-1212">555-555-1212</a>
        </li>
    </ul>
</div>;

export default RightSideNav;