import React from "react";
import './App.css';
import Home from './pages/home';
import Signup from './pages/signup';
import Login from './pages/login';
import Explore from './pages/explore';
import Error from './pages/error';
import Payment from './pages/payment';
import Profile from './pages/profile';
import About from './pages/aboutus';
import FAQ from './pages/FAQ';
import tutorial2 from './pages/tutorial2';
import SingleCompany from './pages/single-company';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import NavBar from './components/navbar'
function App() {
  return (
    <>
    <Router>
    <NavBar/>
  
      <div>
        <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/explore/" component={Explore} />
        <Route exact path="/explore/:slug" component={SingleCompany} />
        <Route exact path="/FAQ" component={FAQ} />
        <Route exact path="/tutorial2" component={tutorial2} />
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
