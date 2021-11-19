import { Component } from "react/cjs/react.production.min";
import './../../index.css';
import './review.css';
import image1 from './../../images/icon.png';

class Review extends Component{
    render(){
        return(
            <>
            <div className="review-parent">
                <div className="review-content">
                    <div className="heading">
                        What About Customer Say About Us?
                    </div>
                    <div className="review-menu">
                        <div className="card">
                            <div className="description">
                                <p>"This place is great! Atmosphere is chill and cool. The staff's are also freindly. They know about what they are doing and what they are talking about. Very good service.</p>
                            </div>
                            <div className="icon">
                                <img src={image1} alt="img"></img>
                            </div>
                            <div className="name">
                                <p>Savannah Ryomen</p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="description">
                                <p>"This place is great! Atmosphere is chill and cool. The staff's are also freindly. They know about what they are doing and what they are talking about. Very good service.</p>
                            </div>
                            <div className="icon">
                                <img src={image1} alt="img"></img>
                            </div>
                            <div className="name">
                                <p>Kakashi Senpai</p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="description">
                                <p>"This place is great! Atmosphere is chill and cool. The staff's are also freindly. They know about what they are doing and what they are talking about. Very good service.</p>
                            </div>
                            <div className="icon">
                                <img src={image1} alt="img"></img>
                            </div>
                            <div className="name">
                                <p>Itadori Yuji</p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="description">
                                <p>"This place is great! Atmosphere is chill and cool. The staff's are also freindly. They know about what they are doing and what they are talking about. Very good service.</p>
                            </div>
                            <div className="icon">
                                <img src={image1} alt="img"></img>
                            </div>
                            <div className="name">
                                <p>David John</p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="description">
                                <p>"This place is great! Atmosphere is chill and cool. The staff's are also freindly. They know about what they are doing and what they are talking about. Very good service.</p>
                            </div>
                            <div className="icon">
                                <img src={image1} alt="img"></img>
                            </div>
                            <div className="name">
                                <p>Trent Boult</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </>
        )
    }
};

export default Review;