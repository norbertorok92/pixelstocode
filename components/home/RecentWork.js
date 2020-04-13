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
                                    <img src={require("../../images/works-image/mdclimaterm.jpg")} alt="mdclimaterm" />

                                    <div className="works-content">
                                        <h3>MDClimaterm</h3>
                                        <p>A website for a plumbing and installations company based in Cluj-Napoca.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="item">
                            <div className="col-lg-12">
                                <div className="single-works">
                                    <img src={require("../../images/works-image/cryptoz.jpg")} alt="cryptoz" />

                                    <div className="works-content">
                                        <h3>Cryptoz</h3>
                                        <p>A multi-functional cryptocurrency mining platform, based in UK.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="item">
                            <div className="col-lg-12">
                                <div className="single-works">
                                    <img src={require("../../images/works-image/glowlissorganics.jpg")} alt="glowliss organics" />

                                    <div className="works-content">
                                        <h3>Glowliss Organic</h3>
                                        <p>An ecommerce store in the beaty and health industry. Based in NYC</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="item">
                            <div className="col-lg-12">
                                <div className="single-works">
                                    <img src={require("../../images/works-image/gphoto.jpg")} alt="gphoto" />

                                    <div className="works-content">
                                        <h3>GPhoto</h3>
                                        <p>A photo portfolio website for a true artist, based in Romania.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="item">
                            <div className="col-lg-12">
                                <div className="single-works">
                                    <img src={require("../../images/works-image/homecorner.jpg")} alt="homecorner" />
                                    
                                    <div className="works-content">
                                        <h3>Home Corner</h3>
                                        <p>An ecommerce store for a decor company, based in the USA.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="item">
                            <div className="col-lg-12">
                                <div className="single-works">
                                    <img src={require("../../images/works-image/norbertorok.jpg")} alt="norbertorok" />

                                    <div className="works-content">
                                        <h3>Portfolio website</h3>
                                        <p>A portfolio website for a web developer based in Romania.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="item">
                            <div className="col-lg-12">
                                <div className="single-works">
                                    <img src={require("../../images/works-image/pixelstocode.jpg")} alt="pixelstocode" />

                                    <div className="works-content">
                                        <h3>Pixelstocode</h3>
                                        <p>A company that's all about development and design.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="item">
                            <div className="col-lg-12">
                                <div className="single-works">
                                    <img src={require("../../images/works-image/rollins.jpg")} alt="rollins shoes" />

                                    <div className="works-content">
                                        <h3>Rollins shoes</h3>
                                        <p>A NYC based ecommerce store, that sells handmade shoes.</p>
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
