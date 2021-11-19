import { Component } from "react/cjs/react.production.min";
import './../../index.css';
import './landing.css';
import logo from './../../images/logo.png';

class Landing extends Component {
    render() {
        return(
            <>
            <div className="nav-parent">
                <div className="nav-content">
                    <div className="header">
                        <div className="logo">
                            <img className="logo-pic" src={logo} alt="logo"/>
                        </div>
                        <div className="logo-name">
                            <p>InstaFood</p>
                        </div>
                    </div>
                    <div className="links-menu">
                        <ul className="nav-links">
                            <li>About Us</li>
                            <li>Menu</li>
                            <li>Reviews</li>
                            <li>Blog</li>
                            <li>Contacts</li>
                        </ul>
                    </div>
                    <div className="menu-btn">
                        <button onClick='function()'>Reserve Table</button>
                    </div>
                </div>
            </div>
            </>
        )
    }
};

export default Landing;