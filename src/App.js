import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//helpers
import { withAuthentication } from "./components/sessions";

//components
import HomePage from "./pages/homepage/homepage.component";
import NavBar from "./components/navigation/navigation.component";
import About from "./pages/about/about.component";
import Contact from "./pages/contact/contact.component";
import Employment from "./pages/employment/employment.component";
import Services from "./pages/services/services.component";
import Footer from "./components/footer/footer.component";
import Spacer from "./components/spacer/spacer.component";
import Admin from "./pages/admin/admin.component";
import Error from "./pages/404/error.component";
import AdminConsole from "./pages/adminConsole/adminConsole";
import ForgotPassword from "./pages/forgotPassword/forgotPassword";

const App = () => (
	<Router>
		<div>
			<NavBar />
			<Spacer />
			<Switch>
				<Route exact path='/' component={HomePage} />
				<Route path='/about' component={About} />
				<Route path='/contact' component={Contact} />
				<Route path='/employment' component={Employment} />
				<Route path='/services' component={Services} />
				<Route path='/admin' component={Admin} />
				<Route path='/console' component={AdminConsole} />
				<Route path='/reset' component={ForgotPassword} />
				<Route path='/' component={Error} />
			</Switch>
			<Footer />
		</div>
	</Router>
);

export default withAuthentication(App);
