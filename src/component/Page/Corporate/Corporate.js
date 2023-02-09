import React from 'react';
import './Corporate.css'
import img from '../../Image/usd-circle.png'
import img2 from '../../Image/file-invoice-dollar.png'
import { BsArrowRight, IconName } from "react-icons/bs";

const Corporate = () => {
    return (
        <div>
            <div className="Corporate-area"  data-aos="fade-up">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="Corporate-text">
                                <img src={img} alt="" />
                                <h2>Corporate finance</h2>
                                <p>Leverage agile frameworks to provide a robust synopsis</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="Corporate-text">
                                <img src={img2} alt="" />
                                <h2>Audit & Evaluation</h2>
                                <p>Bring to the table win-win survival strategies to ensure proactive</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="Corporate-text-bg-ate">
                                
                                <h2>Market analysis</h2>
                                <p>Nibh vel velit auctor aliqunean sollicitudinlorem bibendum auci …</p>
                                <button>Read more <BsArrowRight></BsArrowRight></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Corporate;