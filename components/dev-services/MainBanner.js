import React, { Component } from 'react';
import Link from 'next/link';
import ReactWOW from 'react-wow';

class MainBanner extends Component {
    render() {
        return (
            <section className="iot-main-banner">
                <div className="container">
                    <div className="iot-banner-content">
                        <span>Development Services</span>
                        <h2>Reach Users Across Platforms</h2>
                        <p>Our custom development service offers options for businesses who seek to provide a flexible, consistent experience for users across platforms. Leveraging new approaches to web development including progressive web apps, we bring front-end, back-end and architecture ability together to deliver on your business needs.</p>
                        <Link href="/contact">
                            <a className="btn btn-primary">Get In Touch</a>
                        </Link>
                    </div>

                    <div className="iot-banner-image">
                        <ReactWOW delay='0.8s' animation='fadeInUp'>
                            <img 
                                src={require('../../images/iot-banner-image/1.png')}
                                className="wow fadeInUp" 
                                data-wow-delay="0.8s" alt="image"
                            />
                        </ReactWOW>
                        <ReactWOW animation='zoomIn'>
                            <img 
                                src={require('../../images/iot-banner-image/2.png')} 
                                className="wow zoomIn" 
                                alt="image"
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
