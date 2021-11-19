import { Component } from "react/cjs/react.production.min";
import image1 from './../../images/phone.png';
import './../../index.css';
import './testimonial.css';

class Testimonial extends Component{
    render(){
        return(
            <>
            <div className="test-parent">
                <div className="test-content">
                    <div className="left-content">
                        <div className="heading">
                            Never feel Hungry! <br/>Download our Mobile App<br/>Enjoy Delicious Foods.
                        </div>
                        <div className="description">
                        <p>Make online reservations, read restraurant reviews and earn points for free meals.<br/> open table is a real time online reservations.</p>
                        </div>
                        <div className="btn-menu">
                            <button className="primary-btn"><i class="fab fa-google-play"></i>Google Play</button>
                            <button className="secondary-btn"><i class="fab fa-apple"></i>Apple Store</button>
                        </div>
                    </div>
                    <img src={image1} alt="img"></img>
                </div>
            </div>
            </>
        )
    }
};

export default Testimonial;