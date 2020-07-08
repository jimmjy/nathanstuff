import React, { useState, useContext, useEffect } from "react";
import { withFirebase } from "../../components/Firebase";
import { Redirect } from "react-router-dom";

//components
import DetailsCard from "../../components/detailsCard/detailsCard";

//styles
import "./adminConsole.scss";

//context
import { AuthUserContext } from "../../components/sessions";

//need to pass a prop on this for console button
const AdminConsole = ({ firebase, ...otherProps }) => {
	const { authUser } = useContext(AuthUserContext);
	const [messages, setMessages] = useState([]);
	const [showList, setShowList] = useState(false);

	console.log("other", authUser);

	useEffect(() => {
		firebase.messages().on("value", snapshot => {
			const storedMessages = snapshot.val();
			const updatedMessages = [];
			for (let key in storedMessages) {
				updatedMessages.push({ ...storedMessages[key], id: key });
			}

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
									return <DetailsCard message={message} key={message.id} />;
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
