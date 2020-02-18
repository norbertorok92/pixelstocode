import React, { Component } from 'react';
import Link from 'next/link';
import ReactWOW from 'react-wow';

class MainBanner extends Component {
    render() {
        return (
            <div className="hosting-main-banner">
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-md-12">
                                    <div className="hosting-banner-content">
                                        <h1>The Best Web Hosting</h1>
                                        <ul>
                                            <li>FREE Domain Name for 1st Year</li>
                                            <li>FREE SSL Certificate Included</li>
                                            <li>1-Click Wordpress Install</li>
                                            <li>24/7 Support</li>
                                        </ul>
                                        <p>Starting at <span>$9.99</span> $4.95/month</p>
                                        <Link href="/contact">
                                            <a className="btn btn-primary">Get Started</a>
                                        </Link>
                                    </div>
                                </div>
                                
                                <div className="col-lg-6 col-md-12">
                                    <div className="hosting-banner-image">
                                        <ReactWOW delay='0.7s' animation='fadeInDown'>
                                            <img 
                                                src={require("../../images/hosting-banner-image/1.png")}
                                                alt="image"
                                            />
                                        </ReactWOW>
                                        <ReactWOW delay='0.7s' animation='fadeInDown'>
                                            <img 
                                                src={require("../../images/hosting-banner-image/2.png")}
                                                alt="image"
                                            />
                                        </ReactWOW>
                                        <ReactWOW delay='0.7s' animation='fadeInDown'>
                                            <img 
                                                src={require("../../images/hosting-banner-image/3.png")} 
                                                alt="image"
                                            />
                                        </ReactWOW>
                                        <ReactWOW delay='0.7s' animation='fadeInDown'>
                                            <img 
                                                src={require("../../images/hosting-banner-image/4.png")}
                                                alt="image"
                                            />
                                        </ReactWOW>
                                        <ReactWOW delay='0.7s' animation='fadeInDown'>
                                            <img 
                                                src={require("../../images/hosting-banner-image/5.png")} 
                                                alt="image"
                                            />
                                        </ReactWOW>
                                        <ReactWOW delay='0.7s' animation='fadeInDown'>
                                            <img 
                                                src={require("../../images/hosting-banner-image/6.png")}
                                                alt="image"
                                            />
                                        </ReactWOW>
                                        <ReactWOW delay='0.7s' animation='fadeInDown'>
                                            <img 
                                                src={require("../../images/hosting-banner-image/7.png")}
                                                alt="image"
                                            />
                                        </ReactWOW>
                                        <ReactWOW delay='0.7s' animation='fadeInDown'>
                                            <img 
                                                src={require("../../images/hosting-banner-image/8.png")}
                                                alt="image"
                                            />
                                        </ReactWOW>
                                        <ReactWOW delay='0.7s' animation='fadeInDown'>
                                            <img 
                                                src={require("../../images/hosting-banner-image/9.png")}
                                                alt="image"
                                            />
                                        </ReactWOW>
                                        <ReactWOW delay='0.5s' animation='fadeInUp'>
                                            <img 
                                                src={require("../../images/hosting-banner-image/static-main.png")}
                                                alt="image"
                                            />
                                        </ReactWOW>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="shape1"><img src={require("../../images/shape1.png")} alt="shape" /></div>
                <div className="shape2 rotateme"><img src={require("../../images/shape2.svg")} alt="shape" /></div>
                <div className="shape3"><img src={require("../../images/shape3.svg")} alt="shape" /></div>
                <div className="shape4"><img src={require("../../images/shape4.svg")} alt="shape" /></div>
                <div className="shape5"><img src={require("../../images/shape5.png")} alt="shape" /></div>
                <div className="shape6 rotateme"><img src={require("../../images/shape4.svg")} alt="shape" /></div>
                <div className="shape7"><img src={require("../../images/shape4.svg")} alt="shape" /></div>
                <div className="shape8 rotateme"><img src={require("../../images/shape2.svg")} alt="shape" /></div>
            </div>
        );
    }
}

export default MainBanner;
