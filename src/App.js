import React, { useEffect } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
// import { withFirebase } from "./components/Firebase";

//helpers
import { withAuthentication } from "./components/sessions";

//components
import {
  HomePage,
  About,
  Contact,
  Employment,
  Services,
  Admin,
  AdminConsole,
  ForgotPassword,
  Testimonials,
} from "./pages";
import NavBar from "./components/navigation/navigation.component";
import Footer from "./components/footer/footer.component";
import Spacer from "./components/spacer/spacer.component";

const App = ({ firebase: { doSignOut } }) => {
  useEffect(() => {
    return () => doSignOut();
    // eslint-disable-next-line
  }, []);

  return (
    <Router>
      <>
        <NavBar />
        <Spacer />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
          <Route path='/employment' component={Employment} />
          <Route path='/services' component={Services} />
          <Route path='/admin' component={Admin} />
          <Route path='/testimonials' component={Testimonials} />
          <Route path='/console' component={AdminConsole} />
          <Route path='/reset' component={ForgotPassword} />
          <Route path='/' component={Error} />
        </Switch>
        <Footer />
      </>
    </Router>
  );
};

export default withAuthentication(App);
