import React from 'react'
import Link from 'next/link'
import * as Icon from 'react-feather'

export default class Footer extends React.Component {
    render() {
        return (
            <footer className="footer-area bg-f7fafd">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="single-footer-widget">
                                <div className="logo">
                                    <Link href="#">
                                        <a>
                                            <img src={require("../../images/pixelstocode_with_slogan.png")} alt="pixelstocode logo" width="225" />
                                        </a>
                                    </Link>
                                </div>
                                <p>We love finding solutions to complicated problems. So we're ready to turn your big idea into a reality. Web applications, online stores or presentation websites, we got you covered.</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="single-footer-widget pl-5">
                                <h3>Company</h3>
                                <ul className="list">
                                    <li>
                                        <Link href="/about">
                                            <a>About Us</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/contact">
                                            <a>Contact Us</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/services">
                                            <a>Services</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="single-footer-widget">
                                <h3>Support</h3>
                                <ul className="list">
                                    <li>
                                        <Link href="/privacy-policy">
                                            <a>Privacy Policy</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/terms-and-conditions">
                                            <a>Terms & Condition</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="single-footer-widget">
                                <h3>Address</h3>
                                
                                <ul className="footer-contact-info">
                                    <li> 
                                        <Icon.MapPin />
                                        Cluj-Napoca, Romania
                                    </li>
                                    <li>
                                        <Icon.Mail />
                                        Email: <Link href="mailto:contact@pixelstocode.com"><a>contact@pixelstocode.com</a></Link>
                                    </li>
                                </ul>
                                <ul className="social-links">
                                    <li>
                                        <Link href="https://www.facebook.com/hello.pixelstocode">
                                            <a className="facebook"><Icon.Facebook /></a>
                                        </Link>
                                    </li>
                                    {/* <li>
                                        <Link href="#">
                                            <a className="twitter"><Icon.Twitter /></a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a className="linkedin"><Icon.Linkedin /></a>
                                        </Link>
                                    </li> */}
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-12 col-md-12">
                            <div className="copyright-area">
                                <p>Copyright @2020 <Link href="https://www.pixelstocode.com/">PixelsToCode</Link>. All rights reserved.</p>
                                <p>Passion ❤️ Dedication 👨🏻‍💻 And a lot of coffee ☕️</p>
                            </div>
                        </div>
                    </div>
                </div>

                <img src={require("../../images/map.png")} className="map" alt="map" />
                <div className="shape1"><img src={require("../../images/shape1.png")} alt="shape" /></div>
                <div className="shape8 rotateme"><img src={require("../../images/shape2.svg")} alt="shape" /></div>
            </footer>
        )
    }
}
