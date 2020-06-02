import React from "react";
import './App.css';
import Home from './pages/home';
import Signup from './pages/signup';
import Explore from './pages/explore';
import Facebook from './pages/facebook';
import Error from './pages/error';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import NavBar from './components/navbar'
function App() {
  return (
    <>
    <NavBar/>
    <Router>
      <div>
        <hr />
        <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/rooms/" component={Explore} />
        <Route exact path="/rooms/:slug" component={Facebook} />
        <Route component={Error} />
      </Switch>
      </div>
    </Router>
    </>
  );
}

export default App;
