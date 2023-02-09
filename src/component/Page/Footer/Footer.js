import React from 'react';
import './Footer.css'
import img from '../../Image/aheadset.png'
import img2 from './../../Image/paper-plane.png'
const Footer = () => {
    return (
        <div>
            <div className="footer-area">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-4">
                            <div className="Contacts">
                                <h2>Contacts</h2>
                                <div className="contacts-number">
                                    <img src={img} alt="" />
                                    <div>
                                        <p>Have questions?</p>
                                        <h3>+44 141 552 3000</h3>
                                    </div>
                                </div>
                                <p>Address: 2 St Gabriel Walk, London SE1 6FG, United Kingdom</p>
                                <div className="email">
                                    E-mail: info@betria.com
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="Links">
                                <h2>Links</h2>
                                <div className="row">
                                    <div className="col-md-6">
                                        <li><a href="">About company</a> </li>
                                        <li><a href="">Our services</a> </li>
                                        <li><a href="">Team members</a> </li>
                                        <li><a href="">Portfolio</a> </li>
                                    </div>
                                    <div className="col-md-6">
                                        <li><a href="">Pricing plans</a> </li>
                                        <li><a href="">Testimonials</a> </li>
                                        <li><a href="">Team members</a> </li>
                                        <li><a href="">Contact</a> </li>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="Links">
                                <h2>Subscribe</h2>
                                <div className="input-email">
                                    <input type="text" placeholder='Enter your email'/>
                                    <img src={img2} alt="" />
                                </div>
                                <p>Keep up to date with all new themes and updates.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <p className='copy-right'>© Elipso 2019. Landing Page Template by merkulove</p>
            </div>
        </div>
    );
};

export default Footer;