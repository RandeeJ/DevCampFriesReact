import React from "react";
import { withRouter } from "react-router";
import { NavLink } from "react-router-dom";
import logoImg from "../../../static/assets/images/logos/decamp-fantastic-fries-logo-white.png"

const NavigationComponent = (props) => {
    const dynamicLink = (route, linkText) => {
        return (
            <div className="nav-link-wrapper">
            <NavLink to={route} activeClassName="nav-link-active">
                {linkText}
            </NavLink>
            </div>
        )
    }

    return (<div className="banner">
            <div className="header">
                <div className="left-side">
                    <div className="image">
                    <div className="phone-image">phone image</div>
                    </div>
                    <div className="text">
                    <div className="phone-number">
                    555-5555
                    </div>
                    <div className="hours">
                  10 am - midnight
                    </div>
                    </div>
                </div>
                <div className="middle logo">
                    <img src={logoImg}/>
                </div>
                <div className="right-side">
                    <div className="address">
                    123 Any Street
                    <br/>
                    Scottsdale, AZ
                    <br/>
                    85251
                    </div>
                    <div className="location-icon">
                        location icon
                    </div>
                </div>
            </div>
            
            <div className="nav-wrapper">
            <div className="nav-link-wrapper">
                    <NavLink exact to="/" activeClassName="nav-link-active">
                        Home
                    </NavLink>
                </div>


                <div className="nav-link-wrapper">
                    <NavLink exact to="/about" activeClassName="nav-link-active">
                        About
                    </NavLink>
                </div>


                <div className="nav-link-wrapper">
                    <NavLink exact to="/contact" activeClassName="nav-link-active">
                        Contact
                    </NavLink>
                </div>


                <div className="nav-link-wrapper">
                    <NavLink exact to="/menu" activeClassName="nav-link-active">
                        Menu
                    </NavLink>
                </div>

                </div>
        </div>
    )
}

export default withRouter(NavigationComponent);