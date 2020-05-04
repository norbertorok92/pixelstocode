import React, { Component } from 'react';
import ReactWOW from 'react-wow';

class WhyChoose extends Component {
    render() {
        return (
            <section className="why-choose-us ptb-80 pt-0">
                <div className="container">
                    <div className="row align-items-center mt-10">
                        <div className="col-lg-6 col-md-12">
                            <div className="section-title">
                                <h2>Why Choose Us</h2>
                                <div className="bar"></div>
                                <p>The Internet is built on computers and servers, but there's no internet without people like you and people like us. In today's global market, having an online presence isn't just a nice thing to have, it's a necessity. We at Pixelstocode think it's a basic right.</p>
                                <br/>
                                <p>That's why we've made it our mission to provide affordable access to domains, along with the digital services that can help you make your mark online.</p>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="row">
                                <div className="col-lg-6 col-md-6">
                                    <div className="single-why-choose-us">
                                        <div className="icon">
                                            <i className="flaticon-team"></i>
                                        </div>
                                        <h3>Proficient & Friendly</h3>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="single-why-choose-us">
                                        <div className="icon">
                                            <i className="flaticon-money"></i>
                                        </div>
                                        <h3>No Hidden Fees</h3>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="single-why-choose-us">
                                        <div className="icon">
                                            <i className="flaticon-shield"></i>
                                        </div>
                                        <h3>100% Safe & Security</h3>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="single-why-choose-us">
                                        <div className="icon">
                                            <i className="flaticon-diamond"></i>
                                        </div>
                                        <h3>Top-Rated</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default WhyChoose;
