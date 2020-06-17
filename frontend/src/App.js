import React, {Fragment, useState} from "react";
import './App.css';
import Home from './pages/home';
import Signup from './pages/signup';
import Login from './pages/login';
import Explore from './pages/explore';
import Error from './pages/error';
import Payment from './pages/payment';
import Profile from './pages/profile';
import Extension from './pages/extension';
import FAQ from './pages/FAQ';
import tutorial2 from './pages/tutorial2';
import SingleCompany from './pages/single-company';
import Discussion from './pages/discussion'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import NavBar from './components/navbar'

toast.configure();

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const setAuth = boolean => {
    setIsAuthenticated(boolean);
  };

  return (
    <Fragment>
    <Router>
    <NavBar/>
  
      <div>
        <Switch>
        <Route exact path="/" render={props => <Home {...props} isAuthenticated={isAuthenticated} />}/>
        <Route exact path="/signup" render={props => !isAuthenticated ? (<Signup {...props} setAuth={setAuth} />) : (<Redirect to="/" />)} />
        <Route exact path="/login" render={props => !isAuthenticated ? (<Login {...props} setAuth={setAuth}/>) : (<Redirect to="/" />)} />
        <Route exact path="/profile" render={props => isAuthenticated ? (<Profile {...props} setAuth={setAuth}/>) : (<Redirect to="/login" />)} />
        <Route exact path="/explore/" render={props => isAuthenticated ? (<Explore {...props} setAuth={setAuth}/>) : (<Redirect to="/login" />)} />
        <Route exact path="/explore/:slug" component={SingleCompany} />
        <Route exact path="/discussion" render={props => isAuthenticated ? (<Discussion {...props} setAuth={setAuth}/>) : (<Redirect to="/login" />)} />
        <Route exact path="/FAQ" component={FAQ} />
        <Route exact path="/tutorial2" component={tutorial2} />
        <Route exact path="/extension" component={Extension} />
        <Route exact path="/payment" component={Payment} />
        <Route component={Error} />
      </Switch>
      </div>
    </Router>
    </Fragment>
  );
}

export default App;
