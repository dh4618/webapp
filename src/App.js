import React from "react";
import './App.css';
import Home from './pages/home';
import Signup from './pages/signup';
import Login from './pages/login';
import Explore from './pages/explore';
import Company from './pages/company';
import Error from './pages/error';
import Payment from './pages/payment';
import Profile from './pages/profile';
import About from './pages/aboutus';
import Tutorial from './pages/Tutorial/basic'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import NavBar from './components/navbar'
function App() {
  return (
    <>
    <NavBar/>
    <Router>
      <div>
        <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/explore/" component={Explore} />
        <Route exact path="/company" component={Company} />
        <Route exact path="/tutorial/basic" component={Tutorial} />
        <Route exact path="/aboutus" component={About} />
        <Route exact path="/payment" component={Payment} />
        <Route component={Error} />
      </Switch>
      </div>
    </Router>
    </>
  );
}

export default App;
