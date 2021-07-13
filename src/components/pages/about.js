import React from "react";
import Header from "../navigation/header";
import aboutBackground from "../../../static/assets/images/background/about-us.jpg";
import {LoremIpsum} from "react-lorem-ipsum";
import aboutGridImage1 from "../../../static/assets/images/squares/fries-sq-1.jpg";
import aboutGridImage2 from "../../../static/assets/images/squares/fries-sq-2.jpg";



export default function() {

    // var headerBackground = { 
        // backgroundImage: url ("{headerBackground}")}

        const pageTitle="About Us";
        // const headerStyle = () => {
        //     <Header title= "About Us" headerBackground="url(' + {headerBackground} + ')"/>
        // };

    // this.props.backgroundImage = {aboutBackground};
    // this.pageTitle = "About Us";

    return (
        <div className="aboutPage">


            <div className="aboutHeader">
                <Header />
            </div>



            <div className="aboutContent">
                <h2 className = "aboutContentSummary">
                    <LoremIpsum p={3} />
                </h2>

                <div className = "aboutContentGrid">
                    <img src={aboutGridImage1}/>
                    <div className="aboutContentGridTop">
                        <h2>
                            <LoremIpsum p={1}/>
                        </h2>
                        <p>
                            <LoremIpsum p={2}/>
                        </p>
                    </div>
                    <img src={aboutGridImage2} />
                    <div className = "aboutContentGridBottom">
                    <h2>
                            <LoremIpsum p={1}/>
                        </h2>
                        <p>
                            <LoremIpsum p={2}/>
                        </p>
                    </div>
                </div>
            </div>




         </div>
    )
}