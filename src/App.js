import React from 'react';
import './App.css';
import SideDrawer from './components/Sidedrawer/SideDrawer';
import Home from './pages/home';
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
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/explore">
            <Explore />
          </Route>
          <Route exact path="/companies/facebook">
            <Facebook />
          </Route>
        
        </Switch>
      </div>
    </Router>
    </>
    //  <NavBar/>
    //  <SideDrawer/> 
   
    //  <Route path="/" components={Home}/>
    //  <Route path="/explore" components={Explore}/>
    //  <Route path="/facebook" components={Facebook}/>
     

//  <div style={{height:'100%'}}>
//      <main style={{marginTop: '64px'}}>
//       <p> This is page content</p>
//      </main>
  
//     </div> 
  );
}

export default App;
