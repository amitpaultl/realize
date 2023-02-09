import React from 'react';
import './Skills.css'
import ProgressBar from 'react-bootstrap/ProgressBar';
const Skills = () => {
    const now = 60;
    return (
        <div>
            <div className="skills-area">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="skills-text">
                                <h2>Our skills & expertise</h2>
                                <p>We help company set up business strategy including design brand identiy or product design service. So company can focus on their core business.  Morbi accumsan ipsum velit. Nam nec tellus.</p>
                                <div className="but-area">
                                    <button className='bg-btu'>We are in the press</button>

                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="skills">

                                <div className='progess'>
                                    <div className="d-flex">
                                        <p>Branding</p>
                                        <span>96%</span>
                                    </div>

                                    <ProgressBar now={96} />
                                </div>
                                <div className='progess'>
                                    <div className="d-flex">
                                        <p>Design & Development</p>
                                        <span>81%</span>
                                    </div>

                                    <ProgressBar now={81} />
                                </div>
                                <div className='progess'>
                                    <div className="d-flex">
                                        <p>PR & Marketing</p>
                                        <span>90%</span>
                                    </div>

                                    <ProgressBar now={90} />
                                </div>
                                <div className='progess'>
                                    <div className="d-flex">
                                        <p>Design & Development</p>
                                        <span>85%</span>
                                    </div>

                                    <ProgressBar now={85} />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="build">
                <div className="container">
                    <div className="d-flex">
                        <h2>Build your successful business with us. Want to know how to do this?</h2>
                        <button>Contact us</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Skills;