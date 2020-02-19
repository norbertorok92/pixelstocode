import React from 'react'
import Link from 'next/link'
import * as Icon from 'react-feather';
import OwlCarousel from 'react-owl-carousel3';

const slideOptions = {
    items: 4,
    loop: true,
    nav: false,
    autoplay: true,
    dots: true,
    responsive: {
        0: {
            items: 1
        },
        786: {
            items: 2
        },
        1200: {
            items: 3
        },
        1500: {
            items: 4
        }
    }
}

class RecentWork extends React.Component {
    render() {
        return (
            <section className="works-area ptb-80 bg-f7fafd">
                <div className="container">
                    <div className="section-title">
                        <h2>Proud Projects That Make Us Stand Out</h2>
                        <div className="bar"></div>
                        <h5>Some highlights of our favorite projects we've done for forward thinking clients.</h5>
                    </div>
                </div>

                <div className="row m-0">
                    {/* <div className="works-slides"> */}
                    <OwlCarousel 
                        className="owl-theme"
                        {...slideOptions}
                    >
                        <div className="item">
                            <div className="col-lg-12">
                                <div className="single-works">
                                    <img src={require("../../images/works-image/1.jpg")} alt="image" />

                                    <div className="works-content">
                                        <p>Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="item">
                            <div className="col-lg-12">
                                <div className="single-works">
                                    <img src={require("../../images/works-image/2.jpg")} alt="image" />

                                    <div className="works-content">
                                        <p>Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="item">
                            <div className="col-lg-12">
                                <div className="single-works">
                                    <img src={require("../../images/works-image/3.jpg")} alt="image" />

                                    <div className="works-content">
                                        <p>Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="item">
                            <div className="col-lg-12">
                                <div className="single-works">
                                    <img src={require("../../images/works-image/4.jpg")} alt="image" />

                                    <div className="works-content">
                                        <p>Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="item">
                            <div className="col-lg-12">
                                <div className="single-works">
                                    <img src={require("../../images/works-image/5.jpg")} alt="image" />
                                    
                                    <div className="works-content">
                                        <p>Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </OwlCarousel>

                    {/* </div> */}
                </div>

                <div className="shape8 rotateme">
                    <img src={require("../../images/shape2.svg")} alt="shape" />
                </div>
                <div className="shape2 rotateme">
                    <img src={require("../../images/shape2.svg")} alt="shape" />
                </div>
                <div className="shape7">
                    <img src={require("../../images/shape4.svg")} alt="shape" />
                </div>
                <div className="shape4">
                    <img src={require("../../images/shape4.svg")} alt="shape" />
                </div>
            </section>
        )
    }
}

export default RecentWork
