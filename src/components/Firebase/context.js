import React, { createContext } from "react";

const FirebaseContext = createContext(null);
FirebaseContext.displayName = "Fire";

export const withFirebase = Component => props => (
	<FirebaseContext.Consumer>
		{firebase => <Component {...props} firebase={firebase} />}
	</FirebaseContext.Consumer>
);

export default FirebaseContext;
