import React from "react";
import { withRouter } from "react-router";
import { NavLink } from "react-router-dom";

import logoImg from "../../../static/assets/images/logos/decamp-fantastic-fries-logo-white.png"


const FooterComponent = (props) => {
    const dynamicLink = (route, linkText) => {
        return (
            <div className="footer-link-wrapper">
            <NavLink to={route} activeClassName="footer-link-active">
                {linkText}
            </NavLink>
            </div>
        )
    }

    return (            
    <div className="footer-wrapper">
    <div className="banner">
            <div className="logo">
                <img src={logoImg}/>
                </div>
                <div className="information">
                    <div className="phone-number">
                        555 555 5555
                        </div>
                        <div className="hours"
>10 am - midnight</div>
                </div>
                </div>
            
            <div className="middle">

            <div className="footer-link-wrapper">
                    <NavLink exact to="/" activeClassName="footer-link-active">
                        Home
                    </NavLink>
               </div>


                <div className="footer-link-wrapper">
                    <NavLink exact to="/about" activeClassName="footer-link-active">
                        About
                    </NavLink>
                </div>

                <div className="footer-link-wrapper">
                    <NavLink exact to="/menu" activeClassName="footer-link-active">
                        Menu
                    </NavLink>
                </div>


                <div className="footer-link-wrapper">
                    <NavLink exact to="/contact" activeClassName="footer-link-active">
                        Contact
                    </NavLink>
                </div>
                </div>

<div className="bottom">
    <div className="ig">
    Instagram
    </div>
    <div className="tw">
    Twitter
    </div>
    <div className="fb">
    Facebook
    </div>
    </div>

<div className="copyright">
    copyright</div>
                
    
                
                </div>
    )
}

export default withRouter(FooterComponent);