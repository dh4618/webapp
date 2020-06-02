import React from "react";
import './App.css';
import Home from './pages/home';
import Signup from './pages/signup';
import Login from './pages/login';
import Explore from './pages/explore';
import Facebook from './pages/facebook';
import Error from './pages/error';
import Payment from './pages/payment';

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
        <Route exact path="/login" component={Login} />
        <Route exact path="/explore/" component={Explore} />
        <Route exact path="/explore/:slug" component={Facebook} />
        <Route exact path="/payment" component={Payment} />
        <Route component={Error} />
      </Switch>
      </div>
    </Router>
    </>
  );
}

export default App;
