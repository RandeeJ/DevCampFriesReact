import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { GoogleMap, withScriptjs, withGoogleMap } from "google-maps-react";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTruckMonster } from '@fortawesome/fontawesome-free-solid'

import NavigationContainer from "./navigation/navigation-container";
import Home from "./pages/home";
import About from "./pages/about";
import Menu from "./pages/menu";
import Contact from "./pages/contact";
import NoMatch from "./pages/no-match";
import FooterContainer from "./navigation/footer-container";


// function Map() {
//   return <GoogleMap
//   defaultZoom={10}
//   defaultCenter={{lat:40.764510, lng: -73.988640}} />
// }

// const WrappedMap= withScriptjs(withGoogleMap(Map));


export default class App extends Component {
  render() {
    return (
      <div className='container'>
        <Router>
          <div>
            <NavigationContainer />

            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/menu" component={Menu} />
              <Route component={NoMatch} />
            </Switch>
          
          {/* <div style={{width: "100vw", height: "100vh"}}>
            <WrappedMap googleMapURL={"https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"}
            loadingElement={<div  style={{height:"100%"}}/>}
            containerElement={<div  style={{height:"100%"}}/>}
            mpaElement={<div  style={{height:"100%"}}/>}
            />
            </div> */}


            <FooterContainer/>
          </div>
        </Router>
      </div>
    );
  }
}
