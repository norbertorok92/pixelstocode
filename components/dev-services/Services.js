import React, { Component } from 'react';
import Link from 'next/link';
import * as Icon from 'react-feather';

class Services extends Component {
    render() {
        return (
            <section className="iot-services-area ptb-80">
                <div className="container">
                    <div className="section-title">
                        <h2>Our Featured Services that We Provide</h2>
                        <div className="bar"></div>
                    </div>
                    
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="single-repair-services bg1">
                                <div className="icon">
                                    <i className="flaticon-monitor"></i>
                                </div>

                                <h3>Presentation Website</h3>
                                <p>Professional presentation websites which are fully optimised and are responsive on any device.</p>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="single-repair-services bg2">
                                <div className="icon">
                                    <i className="flaticon-skyline"></i>
                                </div>

                                <h3>Online Store</h3>
                                <p>We develop efficient e-commerce platforms. Online stores that guide your customers to your products.</p>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="single-repair-services bg3">
                                <div className="icon">
                                    <i className="flaticon-software"></i>
                                </div>

                                <h3>Web Application</h3>
                                <p>The right custom web application can help your business grow exponentially.</p>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="single-repair-services bg4">
                                <div className="icon">
                                    <i className="flaticon-gear"></i>
                                </div>

                                <h3>Website Optimisation</h3>
                                <p>We are working towards the continuous optimisation of your online business.</p>
                                
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        );
    }
}

export default Services;
