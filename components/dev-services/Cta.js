import React, { Component } from 'react';
import Link from 'next/link';
import ReactWOW from 'react-wow';

class Cta extends Component {
    render() {
        return (
            <section className="iot-cta-area bg-0f054b">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                        <div className="cta-iot-img">
                            <ReactWOW delay='0.6s' animation='fadeInUp'>
                                <img 
                                    src={require('../../images/cta-shape2.png')}
                                    className="wow fadeInUp" 
                                    data-wow-delay="0.6s" 
                                    alt="image" 
                                />
                            </ReactWOW>
                        </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="cta-iot-content">
                                <h3>We thrive on complexity.</h3>
                                <p>Finding solutions to complicated problems by solving the unsolvable. We're ready to turn your big idea into a reality, mobile or web applications, online stores, content-management-sistems, you name it, we make it.</p>
                                <Link href="/contact">
                                    <a className="btn btn-primary">Talk To Us</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="circle-box"><img src={require('../../images/circle.png')} alt="shape" /></div>
                <div className="cta-shape"><img src={require('../../images/cta-shape.png')} alt="shape" /></div>
            </section>
        );
    }
}

export default Cta;
