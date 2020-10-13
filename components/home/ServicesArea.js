import React from 'react'
import Link from 'next/link';
import * as Icon from 'react-feather';
import ReactWOW from 'react-wow'

class ServicesArea extends React.Component {
    render() {
        return (
            <React.Fragment>

                <section className="services-area ptb-80 bg-f7fafd">
                    <div className="container">
                        <div className="row h-100 justify-content-center align-items-center">
                            <div className="col-lg-6 col-md-12 services-left-image">
                                <ReactWOW delay='0.6s' animation='fadeInDown'>
                                    <img 
                                        src={require("../../images/services-left-image/big-monitor.png")} 
                                        className="wow fadeInDown" 
                                        data-wow-delay="0.6s" 
                                        alt="big-monitor"
                                    />
                                </ReactWOW>
                                <ReactWOW delay='0.6s' animation='fadeInUp'>
                                    <img 
                                        src={require("../../images/services-left-image/creative.png")} 
                                        className="wow fadeInUp" 
                                        data-wow-delay="0.6s" 
                                        alt="creative"
                                    />
                                </ReactWOW>
                                <ReactWOW delay='0.6s' animation='fadeInLeft'>
                                    <img 
                                        src={require("../../images/services-left-image/developer.png")} 
                                        className="wow fadeInLeft" 
                                        data-wow-delay="0.6s" 
                                        alt="developer"
                                    />
                                </ReactWOW>
                                <ReactWOW delay='0.6s' animation='zoomIn'>
                                    <img 
                                        src={require("../../images/services-left-image/flower-top.png")} 
                                        className="wow zoomIn" 
                                        data-wow-delay="0.6s" 
                                        alt="flower-top"
                                    />
                                </ReactWOW>
                                <ReactWOW delay='0.6s' animation='bounceIn'>
                                    <img 
                                        src={require("../../images/services-left-image/small-monitor.png")} 
                                        className="wow bounceIn" 
                                        data-wow-delay="0.6s" 
                                        alt="small-monitor"
                                    />
                                </ReactWOW>
                                <ReactWOW delay='0.6s' animation='fadeInDown'>
                                    <img 
                                        src={require("../../images/services-left-image/small-top.png")} 
                                        className="wow fadeInDown" 
                                        data-wow-delay="0.6s" 
                                        alt="small-top"
                                    />
                                </ReactWOW>
                                <ReactWOW delay='0.6s' animation='zoomIn'>
                                    <img 
                                        src={require("../../images/services-left-image/table.png")} 
                                        className="wow zoomIn" 
                                        data-wow-delay="0.6s" 
                                        alt="table"
                                    />
                                </ReactWOW>
                                <ReactWOW delay='0.6s' animation='fadeInUp'>
                                    <img 
                                        src={require("../../images/services-left-image/target.png")} 
                                        className="wow fadeInUp" 
                                        data-wow-delay="0.6s" 
                                        alt="target"
                                    />
                                </ReactWOW>
                                
                                <img 
                                    src={require("../../images/services-left-image/cercle-shape.png")} 
                                    className="bg-image rotateme" 
                                    alt="shape"
                                />
                                <ReactWOW delay='0.6s' animation='fadeInUp'>
                                    <img 
                                        src={require("../../images/services-left-image/main-pic.png")} 
                                        className="wow fadeInUp" 
                                        data-wow-delay="0.6s" 
                                        alt="main-pic"
                                    />
                                </ReactWOW>
                            </div>

                            <div className="col-lg-6 col-md-12 services-content">
                                <div className="section-title">
                                    <h2>How can we help you...</h2>
                                    <div className="bar"></div>
                                </div>

                                <div className="row">
                                    <div className="col-lg-6 col-md-6">
                                        <div className="box">
                                            <Icon.Monitor /> UX/UI design
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6">
                                        <div className="box">
                                            <Icon.Layout /> Presentation Websites
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6">
                                        <div className="box">
                                            <Icon.Code /> Web Development
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6">
                                        <div className="box">
                                            <Icon.ShoppingCart /> E-commerce stores
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6">
                                        <div className="box">
                                            <Icon.Crosshair /> Online Marketing
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6">
                                        <div className="box">
                                            <Icon.Settings /> Maintenance
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6">
                                        <div className="box">
                                            <Icon.FileText /> Technology Consulting
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6">
                                        <div className="box">
                                            <Icon.PhoneCall /> 24/7 Support
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
               
            </React.Fragment>
        )
    }
}

export default ServicesArea