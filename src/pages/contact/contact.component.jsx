import React, { useState, useContext } from 'react';
import { v4 as uuid } from 'uuid';

//context
import { FirebaseContext } from '../../components/Firebase';

const INITIAL_STATE = {
	name: '',
	email: '',
	message: '',
};

const Contact = () => {
	const [userData, setUserData] = useState(INITIAL_STATE);

	const { messages } = useContext(FirebaseContext);

	const onInputChange = e => {
		e.preventDefault();
		setUserData({ ...userData, [e.target.name]: e.target.value });
	};

	const onFormSubmit = e => {
		messages().push(userData);
	};

	return (
		<div>
			<form onSubmit={onFormSubmit}>
				<div className='contact-user'>
					<label htmlFor='name'>Name:</label>
					<input
						id='name'
						name='name'
						type='text'
						required
						value={userData.name}
						onChange={onInputChange}
					/>
				</div>
				<div className='contact-email'>
					<label htmlFor='email'>Email:</label>
					<input
						type='email'
						id='email'
						name='email'
						value={userData.email}
						onChange={onInputChange}
						required
					/>
				</div>
				<div className='contact-user-message'>
					<label htmlFor='text-area'>message:</label>
					<textarea
						name=''
						id='text-area'
						cols='30'
						rows='10'
						value={userData.message}
						onChange={onInputChange}
						name='message'></textarea>
				</div>
				<button type='submit'>Submit</button>
			</form>
		</div>
	);
};

export default Contact;
