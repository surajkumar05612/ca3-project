import { Component } from "react/cjs/react.production.min";
import './../../index.css';
import './regular.css';
import image1 from './../../images/pasta.png';
import image2 from './../../images/noodles.png';
import image3 from './../../images/chicken.png';
import image4 from './../../images/biriyani.png';
import image5 from './../../images/fish.png';
import image6 from './../../images/french.png';
import image7 from './../../images/image-1.png';
import image8 from './../../images/main-2.png';


class Regular extends Component{
    render(){
        return(
            <>
                <div className="regular-parent">
                    <div className="regular-content">
                        <div className="heading">
                            Explore Our Menu
                        </div>
                        <div className="btn-menu">
                            <button className="secondary-btn">Indian</button>
                            <button className="secondary-btn">Mexican</button>
                            <button className="secondary-btn">Italian</button>
                            <button className="secondary-btn">Chinese</button>
                            <button className="secondary-btn">Deserts</button>
                            <button className="secondary-btn">Drinks</button>
                            <button className="secondary-btn">Meals</button>
                        </div>
                        <div className="dish-menu">
                            <div className="dish-item">
                                <div className="item-card">
                                    <div className="dish-img">
                                        <img src={image1} alt="pasta"></img>
                                    </div>
                                    <div className="dish-name">
                                        <p>Pasta</p>
                                    </div>
                                    <div className="dish-rating">
                                        <p> &#11088;  &#11088;  &#11088;  &#11088;</p>
                                    </div>
                                    <div className="dish-description">
                                        <p>Pasta is a type of food typically made from an unleavened dough</p>
                                    </div>
                                    <div className="dish-price">
                                        <div className="price">
                                            <p>$ 35.00</p>
                                        </div>
                                    <div className="btn">
                                        <button className="secondary-btn">
                                            Add To Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="item-card">
                                <div className="dish-img">
                                    <img src={image2} alt="pasta"></img>
                                </div>
                                <div className="dish-name">
                                    <p>Noodles</p>
                                </div>
                                <div className="dish-rating">
                                    <p> &#11088;  &#11088;  &#11088;  &#11088;</p>
                                </div>
                                <div className="dish-description">
                                    <p>Pasta is a type of food typically made from an unleavened dough</p>
                                </div>
                                <div className="dish-price">
                                    <div className="price">
                                        <p>$ 35.00</p>
                                    </div>
                                    <div className="btn">
                                        <button className="secondary-btn">
                                            Add To Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="item-card">
                                <div className="dish-img">
                                    <img src={image3} alt="pasta"></img>
                                </div>
                                <div className="dish-name">
                                    <p>Chicken</p>
                                </div>
                                <div className="dish-rating">
                                    <p> &#11088;  &#11088;  &#11088;  &#11088;</p>
                                </div>
                                <div className="dish-description">
                                    <p>Pasta is a type of food typically made from an unleavened dough</p>
                                </div>
                                <div className="dish-price">
                                    <div className="price">
                                        <p>$ 35.00</p>
                                    </div>
                                    <div className="btn">
                                        <button className="secondary-btn">
                                            Add To Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="item-card">
                                <div className="dish-img">
                                    <img src={image4} alt="pasta"></img>
                                </div>
                                <div className="dish-name">
                                    <p>Biriyani</p>
                                </div>
                                <div className="dish-rating">
                                    <p> &#11088;  &#11088;  &#11088;  &#11088;</p>
                                </div>
                                <div className="dish-description">
                                    <p>Pasta is a type of food typically made from an unleavened dough</p>
                                </div>
                                <div className="dish-price">
                                    <div className="price">
                                        <p>$ 35.00</p>
                                    </div>
                                    <div className="btn">
                                        <button className="secondary-btn">
                                            Add To Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="item-card">
                                <div className="dish-img">
                                    <img src={image5} alt="pasta"></img>
                                </div>
                                <div className="dish-name">
                                    <p>Fish</p>
                                </div>
                                <div className="dish-rating">
                                    <p> &#11088;  &#11088;  &#11088;  &#11088;</p>
                                </div>
                                <div className="dish-description">
                                    <p>Pasta is a type of food typically made from an unleavened dough</p>
                                </div>
                                <div className="dish-price">
                                    <div className="price">
                                        <p>$ 35.00</p>
                                    </div>
                                    <div className="btn">
                                        <button className="secondary-btn">
                                            Add To Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="item-card">
                                <div className="dish-img">
                                    <img src={image6} alt="pasta"></img>
                                </div>
                                <div className="dish-name">
                                    <p>French</p>
                                </div>
                                <div className="dish-rating">
                                    <p> &#11088;  &#11088;  &#11088;  &#11088;</p>
                                </div>
                                <div className="dish-description">
                                    <p>Pasta is a type of food typically made from an unleavened dough</p>
                                </div>
                                <div className="dish-price">
                                    <div className="price">
                                        <p>$ 35.00</p>
                                    </div>
                                    <div className="btn">
                                        <button className="secondary-btn">
                                            Add To Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="item-card">
                                <div className="dish-img">
                                    <img src={image7} alt="pasta"></img>
                                </div>
                                <div className="dish-name">
                                    <p>Non-veg Meal</p>
                                </div>
                                <div className="dish-rating">
                                    <p> &#11088;  &#11088;  &#11088;  &#11088;</p>
                                </div>
                                <div className="dish-description">
                                    <p>Pasta is a type of food typically made from an unleavened dough</p>
                                </div>
                                <div className="dish-price">
                                    <div className="price">
                                        <p>$ 35.00</p>
                                    </div>
                                    <div className="btn">
                                        <button className="secondary-btn">
                                            Add To Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="item-card">
                                <div className="dish-img">
                                    <img src={image8} alt="pasta"></img>
                                </div>
                                <div className="dish-name">
                                    <p>Veg Meal</p>
                                </div>
                                <div className="dish-rating">
                                    <p> &#11088;  &#11088;  &#11088;  &#11088;</p>
                                </div>
                                <div className="dish-description">
                                    <p>Pasta is a type of food typically made from an unleavened dough</p>
                                </div>
                                <div className="dish-price">
                                    <div className="price">
                                        <p>$ 35.00</p>
                                    </div>
                                    <div className="btn">
                                        <button className="secondary-btn">
                                            Add To Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
};

export default Regular;