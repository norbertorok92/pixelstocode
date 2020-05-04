import React, { Component } from 'react';
import Link from 'next/link';
import ReactWOW from 'react-wow';

class MainBanner extends Component {
    render() {
        return (
            <section className="iot-main-banner">
                <div className="container">
                    <div className="iot-banner-content">
                        <span>Web Development Services</span>
                        <h1>Reach Users Across Platforms</h1>
                        <p>Our custom development service offers  a wide variaty of options for businesses who are looking to provide a flexible, flawless experience for users across platforms. Leveraging new approaches to web development including progressive web apps, mobile or web applications, online stores, we bring frontend, backend and architecture together to deliver on your business needs.</p>
                        <Link href="/contact">
                            <a className="btn btn-primary">Get In Touch</a>
                        </Link>
                    </div>

                    <div className="iot-banner-image">
                        <ReactWOW delay='0.8s' animation='fadeInUp'>
                            <img 
                                src={require('../../images/iot-banner-image/1.png')}
                                className="wow fadeInUp" 
                                data-wow-delay="0.8s" alt="banner one"
                            />
                        </ReactWOW>
                        <ReactWOW animation='zoomIn'>
                            <img 
                                src={require('../../images/iot-banner-image/2.png')} 
                                className="wow zoomIn" 
                                alt="banner two"
                            />
                        </ReactWOW>
                    </div>

                    <div className="animate-border">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
        </section>
        );
    }
}

export default MainBanner;
