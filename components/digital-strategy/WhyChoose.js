import React, { Component } from 'react';
import ReactWOW from 'react-wow';
import * as Icon from 'react-feather';

class WhyChoose extends Component {
    render() {
        return (
            <section className="why-choose-us ptb-80 pt-0">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12 col-md-12">
                            <div className="row">
                                <div className="col-lg-3 col-sm-6 col-md-6">
                                    <div className="single-why-choose-us">
                                        <div className="icon">
                                            <Icon.FileText />
                                        </div>
                                        <h3>Consultancy</h3>
                                    </div>
                                </div>

                                <div className="col-lg-3 col-sm-6 col-md-6">
                                    <div className="single-why-choose-us">
                                        <div className="icon">
                                            <Icon.Search />
                                        </div>
                                        <h3>Strategy & Research</h3>
                                    </div>
                                </div>

                                <div className="col-lg-3 col-sm-6 col-md-6">
                                    <div className="single-why-choose-us">
                                        <div className="icon">
                                            <Icon.Star />
                                        </div>
                                        <h3>Branding</h3>
                                    </div>
                                </div>

                                <div className="col-lg-3 col-sm-6 col-md-6">
                                    <div className="single-why-choose-us">
                                        <div className="icon">
                                            <Icon.Activity />
                                        </div>
                                        <h3>Advertising</h3>
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
