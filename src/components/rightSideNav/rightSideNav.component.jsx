import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./rightSideNav.styles.scss";

const RightSideNav = () => {
	const [menuToggle, setMenuToggle] = useState(false);

	const closeNav = e => {
		console.log(e.target);
		setMenuToggle(false);
	};

	useEffect(() => {
		menuToggle && window.addEventListener("click", closeNav);

		return () => window.removeEventListener("click", closeNav);
	}, [menuToggle]);

	const toggleMenu = () => {
		setMenuToggle(toggle => !toggle);
	};

	return (
		<div className={`right-side-nav ${menuToggle ? "show-nav" : ""}`}>
			<div className='nav-toggle-container'>
				<button className='nav-toggle' onClick={toggleMenu}>
					X
				</button>
			</div>

			<ul className='nav-links'>
				<li className='nav-item-link'>
					<Link to='/'>Home</Link>
				</li>
				<li className='nav-item-link'>
					<Link to='/about'>About</Link>
				</li>
				<li className='nav-item-link'>
					<Link to='/services'>Services</Link>
				</li>
				<li className='nav-item-link'>
					<Link to='/employment'>Employment</Link>
				</li>
				<li className='nav-item-link'>
					<Link to='/contact'>Contact</Link>
				</li>
				<li className='nav-item-link'>
					<a href='tel:555-555-1212'>555-555-1212</a>
				</li>
			</ul>
		</div>
	);
};

export default RightSideNav;
