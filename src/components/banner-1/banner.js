import { Component } from 'react/cjs/react.production.min';
import './../../index.css';
import './banner.css';
import image1 from './../../images/Frame-1.png';

class Banner extends Component{
    render() {
        return(
            <>
                <div className="banner-parent">
                    <div className="banner-content">
                        <div className="left-content">
                            <img src={image1} alt="img"></img>
                        </div>
                        <div className="right-content">
                            <div className="heading">
                                <p>We are More Than <br/>Multiple Service</p>
                            </div>
                            <div className="description">
                                <p>This a Perfect Destination where you will get typical food and drinks.<br></br> Just a click away from your favourite food and drink. This a Perfect <br/>Destination where you will get typical food and drinks. Just a click away<br/> from your favourite food and drink.</p>
                            </div>
                            <div className="btn">
                                <button className="primary-btn">Order Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
};

export default Banner;