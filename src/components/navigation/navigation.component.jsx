import React, { useContext } from "react";
import { withRouter } from "react-router-dom";

//styles
import "./navigation.styles.scss";

//components
import LeftSideNav from "../leftSideNav/leftSideNav.component";
import RightSideNav from "../rightSideNav/rightSideNav.component";

//context
import { AuthUserContext, withAuthentication } from "../sessions";

const Navigation = ({ firebase: { doSignOut }, history }) => {
	const { authUser } = useContext(AuthUserContext);

	const onSignOutClick = () => {
		doSignOut();
		history.push("/admin");
	};

	const onConsoleClick = () => {
		history.push("/console");
	};

	return (
		<nav className='nav-bar'>
			<LeftSideNav />
			<RightSideNav
				authUser={authUser}
				onSignOutClick={onSignOutClick}
				onConsoleClick={onConsoleClick}
			/>
		</nav>
	);
};

export default withRouter(withAuthentication(Navigation));
