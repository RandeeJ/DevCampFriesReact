import React from "react";
import { Parallax } from 'react-parallax';
import parallaximage from "../../../../static/assets/images/background/fries-hero-bg.jpg";



const ParallaxImage = () => (
    <div>
      <Parallax bgImage={parallaximage} className="bgparallax" strength={500}>
          <div style={{height:400}}>
              <div className="texts">
          <div className="text1">HTML Styled Fries</div>
          <div className="text2"> Coding Fuel </div>
          </div>
          </div>
      </Parallax>
      </div>)

export default ParallaxImage;