import React, { useContext } from "react";

//styles
import "./navigation.styles.scss";

//components
import LeftSideNav from "../leftSideNav/leftSideNav.component";
import RightSideNav from "../rightSideNav/rightSideNav.component";
import SignOut from "../signOut/signout";

//context
import { AuthUserContext } from "../sessions";

const Navigation = () => {
	const { authUser } = useContext(AuthUserContext);

	return (
		<nav className='nav-bar'>
			{console.log("auth", authUser)}
			<LeftSideNav />
			<RightSideNav />
			{authUser && <SignOut />}
		</nav>
	);
};

export default Navigation;
