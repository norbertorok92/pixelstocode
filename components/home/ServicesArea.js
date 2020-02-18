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
                                    <h2>Development Services</h2>
                                    <div className="bar"></div>
                                    <Link href="/dev-services">
                                        <a className="btn btn-primary btn-small">More Info</a>
                                    </Link>
                                </div>

                                <div className="row">
                                    <div className="col-lg-6 col-md-6">
                                        <div className="box">
                                            <Icon.Percent /> UX/UI design
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6">
                                        <div className="box">
                                            <Icon.Layout /> Responsive Design
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6">
                                        <div className="box">
                                            <Icon.Code /> Web Development
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6">
                                        <div className="box">
                                            <Icon.ShoppingCart /> E-commerce
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6">
                                        <div className="box">
                                            <Icon.CheckCircle /> Print Ready Design
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

                <section className="services-area ptb-80">
                    <div className="container">
                        <div className="row h-100 justify-content-center align-items-center">
                            <div className="col-lg-6 col-md-12 services-content">
                                <div className="section-title">
                                    <h2>Web Hosting Services</h2>
                                    <div className="bar"></div>

                                    <p>Starting at <strike>$9.99</strike> $4.95/month</p>
                                    <Link href="/web-hosting-services">
                                        <a className="btn btn-primary">More Info</a>
                                    </Link>
                                </div>

                                <div className="row">

                                    <div className="col-lg-6 col-md-6">
                                        <div className="box">
                                            <Icon.Globe /> FREE .com Domain for 1st Year
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6">
                                        <div className="box">
                                            <Icon.Shield /> FREE SSL Certificate Included
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6">
                                        <div className="box">
                                            <Icon.Server /> 99% Server Uptime
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6">
                                        <div className="box">
                                            <Icon.Database /> Cloud databases
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6">
                                        <div className="box">
                                            <Icon.Folder /> Back-ups
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6">
                                        <div className="box">
                                            <Icon.PhoneCall /> 24/7 Support
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className="col-lg-6 col-md-12 services-right-image">
                                <ReactWOW delay='0.6s' animation='fadeInDown'>
                                    <img 
                                        src={require("../../images/services-right-image/book-self.png")} 
                                        className="wow fadeInDown" 
                                        data-wow-delay="0.6s" 
                                        alt="book-self"
                                    />
                                </ReactWOW>
                                <ReactWOW delay='0.6s' animation='fadeInUp'>
                                    <img 
                                        src={require("../../images/services-right-image/box.png")} 
                                        className="wow fadeInUp" 
                                        data-wow-delay="0.6s" 
                                        alt="box"
                                    />
                                </ReactWOW>
                                <ReactWOW delay='0.6s' animation='fadeInLeft'>
                                    <img 
                                        src={require("../../images/services-right-image/chair.png")} 
                                        className="wow fadeInLeft" 
                                        data-wow-delay="0.6s" 
                                        alt="chair"
                                    />
                                </ReactWOW>
                                <ReactWOW delay='0.6s' animation='zoomIn'>
                                    <img 
                                        src={require("../../images/services-right-image/cloud.png")} 
                                        className="wow zoomIn" 
                                        data-wow-delay="0.6s" 
                                        alt="cloud"
                                    />
                                </ReactWOW>
                                <ReactWOW delay='0.6s' animation='bounceIn'>
                                    <img 
                                        src={require("../../images/services-right-image/cup.png")} 
                                        className="wow bounceIn" 
                                        data-wow-delay="0.6s" 
                                        alt="cup"
                                    />
                                </ReactWOW>
                                <ReactWOW delay='0.6s' animation='fadeInDown'>
                                    <img 
                                        src={require("../../images/services-right-image/flower-top.png")} 
                                        className="wow fadeInDown" 
                                        data-wow-delay="0.6s" 
                                        alt="flower"
                                    />
                                </ReactWOW>
                                <ReactWOW delay='0.6s' animation='zoomIn'>
                                    <img 
                                        src={require("../../images/services-right-image/head-phone.png")} 
                                        className="wow zoomIn" 
                                        data-wow-delay="0.6s" 
                                        alt="head-phone"
                                    />
                                </ReactWOW>
                                <ReactWOW delay='0.6s' animation='fadeInUp'>
                                    <img 
                                        src={require("../../images/services-right-image/monitor.png")} 
                                        className="wow fadeInUp" 
                                        data-wow-delay="0.6s" 
                                        alt="monitor"
                                    />
                                </ReactWOW>
                                <ReactWOW delay='0.6s' animation='rotateIn'>
                                    <img 
                                        src={require("../../images/services-right-image/mug.png")} 
                                        className="wow rotateIn" 
                                        data-wow-delay="0.6s" 
                                        alt="mug"
                                    />
                                </ReactWOW>
                                <ReactWOW delay='0.6s' animation='fadeInUp'>
                                    <img 
                                        src={require("../../images/services-right-image/table.png")} 
                                        className="wow fadeInUp" 
                                        data-wow-delay="0.6s" 
                                        alt="table"
                                    />
                                </ReactWOW>
                                <ReactWOW delay='0.6s' animation='zoomIn'>
                                    <img 
                                        src={require("../../images/services-right-image/tissue.png")} 
                                        className="wow zoomIn" 
                                        data-wow-delay="0.6s" 
                                        alt="tissue"
                                    />
                                </ReactWOW>
                                <ReactWOW delay='0.6s' animation='zoomIn'>
                                    <img 
                                        src={require("../../images/services-right-image/water-bottle.png")} 
                                        className="wow zoomIn" 
                                        data-wow-delay="0.6s" 
                                        alt="water-bottle"
                                    />
                                </ReactWOW>
                                <ReactWOW delay='0.6s' animation='fadeInLeft'>
                                    <img 
                                        src={require("../../images/services-right-image/wifi.png")} 
                                        className="wow fadeInLeft" 
                                        data-wow-delay="0.6s" 
                                        alt="wifi"
                                    />
                                </ReactWOW>
                                <img 
                                    src={require("../../images/services-right-image/cercle-shape.png")} 
                                    className="bg-image rotateme" 
                                    alt="shape"
                                />
                                <ReactWOW delay='0.6s' animation='fadeInUp'>
                                    <img 
                                        src={require("../../images/services-right-image/main-pic.png")} 
                                        className="wow fadeInUp" 
                                        data-wow-delay="0.6s" 
                                        alt="main-pic"
                                    />
                                </ReactWOW>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

export default ServicesArea