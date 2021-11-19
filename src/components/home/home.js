import { Component } from "react/cjs/react.production.min";
import './../../index.css';
import './home.css';
import image1 from './../../images/Frame 2.png';
import menu1 from './../../images/menu1.png';
import menu2 from './../../images/menu2.png';
import menu3 from './../../images/menu3.png';
import menu4 from './../../images/menu4.png';
import menu5 from './../../images/menu5.png';


class Home extends Component {
    render() {
        return(
            <>
            <div className="home-parent">
                <div className="home-content">
                    <div className="left-content">
                        <div className="heading">
                            We Serve The taste<br /> You love
                        </div>
                        <div className="description">
                            This a Perfect Destination where you will get typical food and drinks.<br></br> Just a click away from your favourite food and drink. This a Perfect <br/>Destination where you will get typical food and drinks. Just a click away<br/> from your favourite food and drink.
                        </div>
                        <div className="btn-menu">
                            <button className="primary-btn">Explore Food</button>
                            <button className="secondary-btn"><i class="fas fa-search"></i>Search</button>
                        </div>
                    </div>
                    <div className="right-content">
                        <div className="menu">
                            <div className="menu-item">
                                <img src={menu1} alt="menu1"></img>
                                <p>Dishes</p>
                            </div>
                            <div className="menu-item">
                                <img src={menu3} alt="menu1"></img>
                                <p>Dessert</p>
                            </div>
                            <div className="menu-item">
                                <img src={menu2} alt="menu1"></img>
                                <p>Drinks</p>
                            </div>
                            <div className="menu-item">
                                <img src={menu4} alt="menu1"></img>
                                <p>Platter</p>
                            </div>
                            <div className="menu-item">
                                <img src={menu5} alt="menu1"></img>
                                <p>Snacks</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main-pic">
                       <img src={image1} alt="main-img"></img>
                </div>
            </div>
            </>
        )
    }
};

export default Home;