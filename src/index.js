import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import "./index.css";
import App from "./App";
import Firebase, { FirebaseContext } from "./components/Firebase";
import HasEnteredContext from "./components/hasEntered/hasEntered";

ReactDOM.render(
	<Router>
		<FirebaseContext.Provider value={new Firebase()}>
			<HasEnteredContext>
				<App />
			</HasEnteredContext>
		</FirebaseContext.Provider>
	</Router>,
	document.getElementById("root")
);
