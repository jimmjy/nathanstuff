import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

//components
import AdminButton from "../adminButton/admin-button";

//styles
import "./rightSideNav.styles.scss";

const RightSideNav = ({ authUser, onSignOutClick, onConsoleClick }) => {
	const [menuToggle, setMenuToggle] = useState(false);

	const closeNav = e => {
		console.log(e.target);
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
		setMenuToggle(toggle => !toggle);
	};

	return (
		<div className={`right-side-nav ${menuToggle ? "show-nav" : ""}`}>
			<div className='nav-toggle-container'>
				<button className='nav-toggle' onClick={toggleMenu}>
					<span
						className={`toggle-icon ${menuToggle ? "toggle-icon-one" : ""}`}>
						&#8212;
					</span>
					<span
						className={`toggle-icon ${menuToggle ? "toggle-icon-two" : ""}`}>
						&#8212;
					</span>
					<span
						className={`toggle-icon ${menuToggle ? "toggle-icon-three" : ""}`}>
						&#8212;
					</span>
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
