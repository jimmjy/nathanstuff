import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import './index.css';
import App from './App';
import Firebase, { FirebaseContext } from './components/Firebase';

ReactDOM.render(
	<Router>
		<FirebaseContext.Provider value={new Firebase()}>
			<App />
		</FirebaseContext.Provider>
	</Router>,
	document.getElementById('root')
);
