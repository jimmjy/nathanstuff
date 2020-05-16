import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';

//components
import HomePage from './pages/homepage/homepage.component';
import NavBar from './components/navigation/navigation.component';
import About from './pages/about/about.component';
import Contact from './pages/contact/contact.component';
import Employment from './pages/employment/employment.component';
import Services from './pages/services/services.component';
import Footer from './components/footer/footer.component';
import Spacer from './components/spacer/spacer.component';
import Admin from './pages/admin/admin.component';
import Error from './pages/404/error.component';

class App extends Component {
	render() {
		return (
			<div>
				<NavBar />
				<Spacer />
				<Switch>
					<Route exact path='/' component={HomePage} />
					<Route exact path='/about' component={About} />
					<Route exact path='/contact' component={Contact} />
					<Route exact path='/employment' component={Employment} />
					<Route exact path='/services' component={Services} />
					<Route exact path='/admin' component={Admin} />
					<Route path='/' component={Error} />
				</Switch>
				<Footer />
			</div>
		);
	}
}

export default App;
