import React from 'react';
import './Hero.css'
import { BsArrowRight, IconName } from "react-icons/bs";
import hero from '../../Image/Image.png'
const Hero = () => {
    return (
        <div>
            <div className="hero-area"  data-aos="fade-up">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <div className="hero-text">
                                <h2>Realize your full potential</h2>
                                <p>We help our clients make realize their most important business goals.</p>
                                <div className="but-area">
                                    <button className='bg-btu'>Contact us</button>
                                    <button>Order similar <BsArrowRight></BsArrowRight> </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="hero-img">
                                <img src={hero} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;