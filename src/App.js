import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.scss";

//components
import HomePage from "./pages/homepage/homepage.component";
import NavBar from "./components/navigation/navigation.component";
import About from "./pages/about/about.component";
import Contact from "./pages/contact/contact.component";
import Employment from "./pages/employment/employment.component";
import Services from "./pages/services/services.component";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/employment" component={Employment} />
          <Route path="/services" component={Services} />
        </Switch>
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;
