import { Component } from "react/cjs/react.production.min";
import './../../index.css';
import './footer.css';

class Footer extends Component{
    render(){
        return(
            <>
            <div className="footer-parent">
                <div className="footer-content">
                    <hr/>
                    <div className="menu">
                        <div className="letter">
                            <div className="heading">
                                Subscribe to our Newsletter
                            </div>
                            <input type="email" placeholder="Enter Your Email"></input>
                            <button className="primary-btn"><i class="fas fa-arrow-right"></i></button>
                        </div>
                        <div className="card">
                            <div className="heading">
                                Service
                            </div>
                            <div className="menu-item">
                                <p>Online order</p>
                                <p>Online Reservations</p>
                                <p>24/7 Service</p>
                                <p>Foodie Place</p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="heading">
                                Quick Links
                            </div>
                            <div className="menu-item">
                                <p>Menu</p>
                                <p>Reviews</p>
                                <p>Blogs</p>
                                <p>Order Food</p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="heading">
                                About
                            </div>
                            <div className="menu-item">
                                <p>Our Story</p>
                                <p>Benefits</p>
                                <p>Carrer</p>
                                <p>Contact</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </>
        )
    }
};

export default Footer;