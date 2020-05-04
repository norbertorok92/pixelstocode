import React, { Component } from 'react';
import Link from 'next/link';
import * as Icon from 'react-feather';

class WhyChoose extends Component {
    render() {
        return (
            <section className="iot-why-choose-us ptb-80 pb-0">
                <div className="container">
                    <div className="section-title">
                        <h2>Why We Are Different From Others?</h2>
                        <div className="bar"></div>
                        <p>Technology is transforming the way we buy, sell, and do everything. We help clients unlock potential and help them grow with our software development services.</p>
                    </div>
                    
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-iot-box">
                                <div className="icon">
                                    <img src={require('../../images/icon1.png')} alt="technology" />
                                </div>
                                <h3>Technology</h3>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-iot-box">
                                <div className="icon">
                                    <img src={require('../../images/icon2.png')} alt="security" />
                                </div>
                                <h3>Security</h3>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                            <div className="single-iot-box">
                                <div className="icon">
                                    <img src={require('../../images/icon3.png')} alt="optimization" />
                                </div>
                                <h3>Optimization</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default WhyChoose;
