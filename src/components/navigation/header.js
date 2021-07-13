import React, {Component} from "react";
import { NavLink } from "react-router-dom";
// import pageTitle from "react-router-dom";



class Header extends Component {
//         constructor(props) {
//             super(props)
//         ;

//         this.backgroundImage = this.backgroundImage.bind(this);
//         this.pageTitle = this.pageTitle.bind(this);
//         }

        // const pageTitle = "About Us";

        // const Header = (props) => (
        //     <div 
        //     className="pageHeader">
        //     style={props.headerBackground} >
        //         <div className="pageHeaderContent">
        //         <div className="pageTitle">
        //             {props.title}
        //             </div>
        //             </div>
        //             </div>)



        
        render() {

        return(
            <div> 
            {/* <div className="pageHeader" style= {{backgroundImage : this.backgroundImage}}/> */}
            
                <div className="pageHeaderContent">
                <div className="pageTitle">
                    {/* {this.pageTitle} */}
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
        
            </div>
        )
    }
}

export default Header;


