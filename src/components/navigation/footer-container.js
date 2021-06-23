import React from "react";
import { withRouter } from "react-router";
import { NavLink } from "react-router-dom";

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
                logo
                </div>
                <div className="information">
                phone number
                hours
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
    Instagram
    Twitter
    Facebook
    </div>

<div className="copyright">
    copyright</div>
                
    
                
                </div>
    )
}

export default withRouter(FooterComponent);