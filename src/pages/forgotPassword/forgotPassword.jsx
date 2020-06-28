import React, { useState } from "react";
import { withRouter } from "react-router-dom";

//helper
import { withFirebase } from "../../components/Firebase";

const ForgotPassword = ({ history, firebase }) => {
	const [email, setEmail] = useState("");
	const [error, setError] = useState(null);
	const [isInvalid] = useState(null);

	const onSubmit = e => {
		e.preventDefault();
		firebase
			.doPasswordReset(email)
			.then(() => {
				setEmail("");
				setError(null);
				history.push("/admin");
			})
			.catch(error => {
				setError(error);
			});
	};

	const onChange = e => {
		setEmail(e.target.value);
	};

	return (
		<form onSubmit={onSubmit}>
			<input
				type='text'
				name='email'
				value={email}
				onChange={onChange}
				placeholder='Email Address'
			/>
			<button disabled={isInvalid} type='submit'>
				Reset My Password
			</button>
			{error && <p>{error.message}</p>}
		</form>
	);
};

export default withRouter(withFirebase(ForgotPassword));
