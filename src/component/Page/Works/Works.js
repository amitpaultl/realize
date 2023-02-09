import React from 'react';
import './Works.css'
import play from '../../Image/play-button.png'
const Works = () => {
    return (
        <div>
            <div className="Works-area">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="Works-text">
                                <img src={play} alt="" />
                                <h3>How it works</h3>
                                <p>This app does everything you could want it <br /> to do it is beautifully and extremely intuitive to use.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Works;