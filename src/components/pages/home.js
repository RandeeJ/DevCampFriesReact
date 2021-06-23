import React from "react";
import GoogleMap from "./homepage/googleMaps";



export default function() {
    return (
        <div>
          <div className="background">
                <h1> HTML Styled Fries</h1>
                <h3>Coding Fuel</h3>
            </div>

            <div className="features-section">
                <div className="column-wrapper">
                    <div className="column">
                        {/* <FontAwesomeIcon icon="fa-truck-monster" /> */}
                        {/* <i class="fas fa-truck-monster"></i> */}
                        <p> We Deliver!</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                    </div>
                    <div className="column">
          {/* <i className="fas fa-wifi"></i> */}
          <p>You can code from here!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="column">
          {/* <i className="fas fa-chart-line"></i> */}
          <p>100+ types of fries!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
                </div>

            </div>

            <GoogleMap/>


{/* I installed  "npm install --save google-maps-react"*/}
{/* GOOGLE MAPS IN REACT DOCUMENTATION: https://www.npmjs.com/package/google-maps-react */}
        </div>
    )
}