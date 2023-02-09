import React from 'react';
import { BsArrowRight, IconName } from "react-icons/bs";
import image from '../../Image/Img.png'

const Offer = () => {
    return (
        <div>
            <div className='Ultimate-area'>
                <div className="container">
                    <div className="row">

                        <div className="col-md-6">
                            <div className="ultimate-text">
                                <h2>We offer a full range of digital marketing services</h2>
                                <p>Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free.</p>
                                <div className="but-area">
                                    <button className='bg-btu'>View prices</button>
                                    <button>Order similar <BsArrowRight></BsArrowRight> </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="Ultimate-img">
                                <img src={image} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Offer;