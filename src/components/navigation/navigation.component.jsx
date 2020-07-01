import React, { useContext } from "react";
import { withRouter } from "react-router-dom";

//styles
import "./navigation.styles.scss";

//components
import LeftSideNav from "../leftSideNav/leftSideNav.component";
import RightSideNav from "../rightSideNav/rightSideNav.component";
import AdminButton from "../adminButton/admin-button";

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
			<RightSideNav />
			{authUser && (
				<div className='admin-buttons'>
					<AdminButton onClick={onSignOutClick} title={"Sign Out"} />
					<AdminButton onClick={onConsoleClick} title={"console"} />
				</div>
			)}
		</nav>
	);
};

export default withRouter(withAuthentication(Navigation));
