import React from "react";
import { withFirebase } from "../Firebase";
import { withRouter } from "react-router-dom";

//styles
import "./signout.scss";

const SignOut = ({ firebase: { doSignOut }, history }) => {
	const onClick = () => {
		doSignOut();
		history.push("/admin");
	};

	return (
		<div className='sign-out-btn'>
			<button onClick={onClick}>Sign Out</button>
		</div>
	);
};

export default withRouter(withFirebase(SignOut));
