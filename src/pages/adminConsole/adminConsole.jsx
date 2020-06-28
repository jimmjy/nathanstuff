import React, { useState, useContext, useEffect } from "react";
import { withFirebase } from "../../components/Firebase";
import { Redirect } from "react-router-dom";

//components
import DetailsCard from "../../components/detailsCard/detailsCard";

//styles
import "./adminConsole.scss";

//context
import { AuthUserContext } from "../../components/sessions";

const AdminConsole = ({ firebase }) => {
	const { authUser } = useContext(AuthUserContext);
	const [messages, setMessages] = useState([]);
	const [showList, setShowList] = useState(false);

	useEffect(() => {
		firebase.messages().on("value", snapshot => {
			// setMessages(snapshot.val());
			const storedMessages = snapshot.val();
			const updatedMessages = [];
			for (let key in storedMessages) {
				updatedMessages.push({ ...storedMessages[key], id: key });
			}

			console.log("updated", updatedMessages);

			setMessages(updatedMessages);
		});
		return () => {
			firebase.messages().off();
		};
	}, [firebase]);

	//gets users comments
	const getUsers = () => {
		setShowList(true);
	};

	console.log("new message list", messages);

	return (
		<div>
			{authUser ? (
				<div>
					<h1>get Users</h1>
					<div>
						list:
						<button onClick={getUsers}>get list</button>
						<ul>
							{showList &&
								messages?.map(message => {
									return <DetailsCard message={message} />;
								})}
						</ul>
					</div>
				</div>
			) : (
				<Redirect to='/console' />
			)}
		</div>
	);
};

export default withFirebase(AdminConsole);
