import React, { Component } from 'react';
import Link from 'next/link';
import * as Icons from 'react-feather';

class Pricing extends Component {
    render() {
        return (
            <section className="pricing-area ptb-80 bg-f7fafd">
                <div className="container">
                    <div className="section-title">
                        <h2>Web Hosting Plans</h2>
                        <div className="bar"></div>
                        <p>Meet the offers you can't refuse.</p>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-pricing-table">
                                <div className="pricing-header">
                                    <Icons.Coffee />
                                    <h3>Hobby Pixel</h3>
                                </div>
                                <div className="price">
                                    <span><sup>$</sup>1.49<span>/mo</span></span>
                                </div>
                                <div className="pricing-footer">
                                    <Link href="/contact">
                                        <a className="btn btn-primary">Get Started</a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-4 col-md-6">
                            <div className="single-pricing-table active-plan">
                                <div className="pricing-header">
                                    <Icons.Sunrise />
                                    <h3>Beginner Pixel</h3>
                                </div>
                                <div className="price">
                                    <span><sup>$</sup>4.95<span>/mo</span></span>
                                </div>
                                <div className="pricing-footer">
                                    <Link href="/contact">
                                        <a className="btn btn-primary">Get Started</a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                            <div className="single-pricing-table">
                                <div className="pricing-header">
                                    <Icons.Sun />
                                    <h3>Business Pixel</h3>
                                </div>
                                <div className="price">
                                    <span><sup>$</sup>14.95<span>/mo</span></span>
                                </div>
                                <div className="pricing-footer">
                                    <Link href="/contact">
                                        <a className="btn btn-primary">Get Started</a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="shape8 rotateme"><img src={require("../../images/shape2.svg")} alt="shape" /></div>
                <div className="shape2 rotateme"><img src={require("../../images/shape2.svg")} alt="shape" /></div>
                <div className="shape7"><img src={require("../../images/shape4.svg")} alt="shape" /></div>
                <div className="shape4"><img src={require("../../images/shape4.svg")} alt="shape" /></div>
            </section>
        );
    }
}

export default Pricing;
