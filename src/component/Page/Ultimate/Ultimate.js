import React from 'react';
import './Ultimate.css'
import image from '../../Image/db1.png'
import { BsArrowRight, IconName } from "react-icons/bs";

const Ultimate = () => {
    return (
        <div className='Ultimate-area'  data-aos="fade-up">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="Ultimate-img">
                            <img src={image} alt="" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="ultimate-text">
                            <h2>Get the ultimate tool and learn how to grow your audience</h2>
                            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque. Many desktop publishing packages and web.</p>
                            <div className="but-area">
                                <button className='bg-btu'>Contact us</button>
                                <button>Order similar <BsArrowRight></BsArrowRight> </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Ultimate;