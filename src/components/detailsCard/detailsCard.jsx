import React, { useState, useEffect } from "react";
import { withFirebase } from "../../components/Firebase";

//components
import Modal from "../modal/modal";

//styles
import "./detailsCard.scss";

const DetailsCard = ({ message, firebase }) => {
	const [isModalShowing, setIsModalShowing] = useState(false);

	useEffect(() => {
		return () => setIsModalShowing(false);
	}, []);

	//remove from firebase
	const removeDataEntry = id => {
		firebase.message(id).remove();
	};

	return (
		<li className='comment-card' onClick={() => setIsModalShowing(true)}>
			{/* put li event inside a div in li and button separate so I can remove also */}
			<span>
				<strong>Name:</strong> {message.name}
			</span>
			<span>
				<strong>Email:</strong> {message.email}
			</span>
			<span>
				<strong>phone:</strong> {message.phone}
			</span>
			<span>
				<strong>Comment:</strong> {message.comment}
			</span>
			<button onClick={() => removeDataEntry(message.id)}>Remove</button>
			{isModalShowing && (
				<Modal setIsModalShowing={setIsModalShowing}>
					<div className='modal-body'>{message.name}</div>
				</Modal>
			)}
		</li>
	);
};

export default withFirebase(DetailsCard);
