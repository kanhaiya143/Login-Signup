import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignUp from "./components/TrainerSignup";
import SignIn from "./components/ClientSignup";
import Home from "./components/home";
import DashBoard from "./components/dashboard";
const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact strict path="/" component={Home} />
        <Route exact strict path="/signup" component={SignUp} />
        <Route exact strict path="/signin" component={SignIn} />
        <Route exact strict path="/dashboard" component={DashBoard} />
      </Switch>
    </Router>
  );
};

export default App;
