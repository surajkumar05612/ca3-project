import { Component } from "react/cjs/react.production.min";
import './../../index.css';
import './banner-2.css';
import image1 from './../../images/bg-1.png';

class Bannernew extends Component{
    render(){
        return(
            <>
            <div className="banner_2-parent">
                <div className="banner_2-content">
                    <div className="left-content">
                        <div className="heading">
                            Do You Have Any Dinner <br/> Plan Today? Reserve<br/> Your Table. 
                        </div>
                        <div className="description">
                            <p>Make online reservations, read restraurant reviews and earn points for free meals.<br/> open table is a real time online reservations.</p>
                        </div>
                        <div className="btn">
                            <button className="primary-btn">Make Reservation</button>
                        </div>
                    </div>
                    <div className="right-content">
                        <img src={image1} alt="img"></img>
                    </div>
                </div>
            </div>
            </>
        )
    }
};

export default Bannernew;