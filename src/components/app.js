import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTruckMonster } from '@fortawesome/fontawesome-free-solid'

import Home from "./pages/home";
import About from "./pages/about";
import Menu from "./pages/menu";
import Contact from "./pages/contact";
import NoMatch from "./pages/no-match";
import FooterContainer from "./navigation/footer-container";




export default class App extends Component {
  render() {
    return (
      <div className='container'>
        <Router>
          <div>

            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/menu" component={Menu} />
              <Route component={NoMatch} />
            </Switch>
          
        

            <FooterContainer/>
          </div>
        </Router>
      </div>
    );
  }
}
