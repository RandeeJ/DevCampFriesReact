import React from "react";
import NavigationContainer from "../navigation/navigation-container";

import FeaturesSection from "./homepage/features-section";
import ParallaxImage from "./homepage/bgparallax";
import GoogleMap from "./homepage/googleMaps";




export default function() {
    return (
      <div>
            <NavigationContainer />


<div className="section3">
            <ParallaxImage/>
            </div>

        <div className="section2">
          <FeaturesSection/>
          </div>
         
            
            <div className="section4">
            <GoogleMap/>
            </div>



        </div>
    )
}