import React from 'react';
import './Solutions.css'
import { BsArrowRight, IconName } from "react-icons/bs";
import img from '../../Image/file-invoice-dollar.png'
import img2 from '../../Image/usd-circle.png'
import img3 from '../../Image/hand-holding-usd.png'
const Solutions = () => {
    return (
        <div>
            <div className="solutions-area">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="row">
                                <div className="row">
                                    <div className=" col-md-6">
                                        <div className="Corporate-text">
                                            <img src={img} alt="" />
                                            <h2>Corporate finance</h2>
                                            <p>Leverage agile frameworks to provide a robust synopsis</p>
                                        </div>
                                    </div>
                                    <div className=" col-md-6 hello">
                                        <div className="Corporate-text ">
                                            <img src={img2} alt="" />
                                            <h2>Audit & Evaluation</h2>
                                            <p>Bring to the table win-win survival strategies to ensure proactive</p>
                                        </div>
                                    </div>
                                    <div className=" col-md-6 bg">
                                        <div className="Corporate-text-bg-ate">

                                            <h2>Market analysis</h2>
                                            <p>Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi …</p>
                                            <button>Read more <BsArrowRight></BsArrowRight></button>
                                        </div>
                                    </div>
                                    <div className=" col-md-6">
                                        <div className="Corporate-text">
                                            <img src={img3} alt="" />
                                            <h2>Sales & Trade</h2>
                                            <p>Bring to the table win-win survival strategies to ensure proactive</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="solutions-text">
                                <h2>Get a solutions to your businesses</h2>
                                <p>Our consultants help address your most challenging issues by providing strategic, financial, operational, and IT services.</p>
                                <div className="but-area">
                                    <button className='bg-btu'>View prices</button>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Solutions;