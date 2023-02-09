import React from 'react';
import './Price.css'
import { BsCheck } from "react-icons/bs";
import check from '../../Image/check.png'
import time from '../../Image/times.png'
import img from '../../Image/usd-circle.png'
import img2 from '../../Image/headset.png'
import { BsArrowRight, IconName } from "react-icons/bs";

const Price = () => {
    return (
        <div>
            <div className="price-area"  data-aos="fade-up">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-4">
                            <div className="price-text">
                                <div className="base">
                                    <h3>Basic</h3>
                                     <span>best choise </span>
                                </div>
                                <h2>15$</h2>
                                <p>Per month</p>

                                <ul>
                                    <li> <img src={check} alt="" /> 
                                    Free updates</li>
                                    <li> <img src={check} alt="" /> 
                                    Custom domain</li>
                                    <li> <img src={check} alt="" /> 
                                    Outstanding support</li>
                                    <li> <img src={time} alt="" /> 
                                    Unlimited storage</li>
                                    <li> <img src={time} alt="" /> 
                                    Build responsive website</li>
                                </ul>
                                <div className="but-area price-btu">
                                    <button className='bg-btu'>Getting started</button>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="price-text">
                                <div className="base">
                                    <h3>Standard</h3>
                                </div>
                                <h2>37$</h2>
                                <p>Per month</p>
                                <ul>
                                    <li> <img src={check} alt="" /> 
                                    Free updates</li>
                                    <li> <img src={check} alt="" /> 
                                    Custom domain</li>
                                    <li> <img src={check} alt="" /> 
                                    Outstanding support</li>
                                    <li> <img src={check} alt="" /> 
                                    Unlimited storage</li>
                                    <li> <img src={time} alt="" /> 
                                    Build responsive website</li>
                                </ul>
                                <div className="but-area price-btu">
                                    <button className='bg-btu'>Getting started</button>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="price-text">
                                <div className="base">
                                    <h3>Advance</h3>
                                </div>
                                <h2>42$</h2>
                                <p>Per month</p>

                                <ul>
                                    <li> <img src={check} alt="" /> 
                                    Free updates</li>
                                    <li> <img src={check} alt="" /> 
                                    Custom domain</li>
                                    <li> <img src={check} alt="" /> 
                                    Outstanding support</li>
                                    <li> <img src={check} alt="" /> 
                                    Unlimited storage</li>
                                    <li> <img src={check} alt="" /> 
                                    Build responsive website</li>
                                </ul>
                                <div className="but-area price-btu">
                                    <button className='bg-btu'>Getting started</button>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="common-area">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="common">
                                <img src={img} alt="" />
                                <div className="common-text">
                                    <h3>View common questions</h3>
                                    <p>Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi.</p>
                                    <div className="but-area">
                                    
                                    <button>Read more<BsArrowRight></BsArrowRight> </button>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="common">
                                <img src={img2} alt="" />
                                <div className="common-text">
                                    <h3>Looking for support?</h3>
                                    <p>On the other hand, we denounce with righteous dislike so men who are beguiled indignation and  they foresee.</p>
                                    <div className="but-area">
                                    
                                    <button>Read more<BsArrowRight></BsArrowRight> </button>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Price;