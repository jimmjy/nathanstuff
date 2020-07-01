import React from "react";
import "./leftSideNav.styles.scss";
import { Link } from "react-router-dom";

import logo from "../../assets/logo.png";

const LeftSideNav = () => (
	<div className='leftNav'>
		<Link className='leftNav-link' to='/'>
			<img className='nav-logo' src={logo} alt='Company logo' />
		</Link>
	</div>
);

export default LeftSideNav;
