import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import Header from "./navigation/header";

import Home from "./pages/home";
import About from "./pages/about";
import Menu from "./pages/menu";
import Contact from "./pages/contact";
import NoMatch from "./pages/no-match";
import FooterContainer from "./navigation/footer-container";

// import aboutImage from "../../../static/assets/images/background/about-us.jpg"
// import menuImage from "../../../static/assets/images/background/menujpg"
// import contactImage from "../../../static/assets/images/background/contact.jpg"


export default class App extends Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {backgroundImage : {aboutImage}};
  // }

  // changeHeaderBackground = backgroundImage => {
  //   this.setState({ backgroundImage});
  // };

  render() {
    return (
      <div className='container' >
        <Router>
          <div>

            <div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/menu" component={Menu} />
              <Route component={NoMatch} />
            </Switch>
            </div>
        
            <div>
            <FooterContainer/>
            </div>

          </div>
        </Router>
      </div>
    );
  }
}
