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
                                        <p>A presentation website for a plumbing and installations company based in Cluj-Napoca. We used wordpress to be easy for managing the content of the website.</p>
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
                                        <p>A multi-functional cryptocurrency mining platform, based in UK. We used Ruby on Rails for the backend and ReactJS for the frontend. Its a web application we are very proud of.</p>
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
                                        <p>An ecommerce store in the beaty and health industry. Based in NYC. This store is created in shopify, and we worked with the client to customize the theme.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="item">
                            <div className="col-lg-12">
                                <div className="single-works">
                                    <img src={require("../../images/works-image/gphoto.jpg")} alt="gphoto" />

                                    <div className="works-content">
                                        <h3>Gphoto Gallery | Fine Art Photography</h3>
                                        <p>A photo portfolio website for a true artist, based in Romania. This is a portfolio, but an online store as well. Its in shopify and uses a custom theme.</p>
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
                                        <p>An ecommerce store for a decor company, based in the USA. Shopify it is. Its easy to fulfill orders and to manage your whole business.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="item">
                            <div className="col-lg-12">
                                <div className="single-works">
                                    <img src={require("../../images/works-image/norbertorok.jpg")} alt="norbertorok" />

                                    <div className="works-content">
                                        <h3>Presentation website</h3>
                                        <p>A website for a web developer based in Romania. AngularJS is what we used for this website.</p>
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
                                        <p>A company that's all about development, design and online services. This is exactly the website you are looking at, right now. We used NextJS for this app.</p>
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
                                        <p>A NYC based ecommerce store, that sells handmade shoes. An online store built in shopify.</p>
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
