import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../assets/css/style.css'
import '../../assets/css/slick.css'
import '../../assets/css/responsive.css'
import '../../assets/css/animate.css'
import '../../assets/css/flaticon.css'
import React from 'react'
import { withRouter } from 'next/router';
import Link from '../common/ActiveLink'
import * as Icon from 'react-feather';

class DefaultStyle extends React.Component {

    state = {
        collapsed: true,
    };

    toggleNavbar = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    componentDidMount() {
        let elementId = document.getElementById("navbar");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elementId.classList.add("is-sticky");
            } else {
                elementId.classList.remove("is-sticky");
            }
        });
        window.scrollTo(0, 0);
    }

    render(){
        const { collapsed } = this.state;
        const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
        const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

        let { pathname } = this.props.router;
        let layOutCls = '';
        if (pathname == '/web-hosting-services'){
            layOutCls = 'p-relative';
        }
        return (
            <header id="header">
                <div id="navbar" className={`startp-nav ${layOutCls}`}>
                    <div className="container">
                        <nav className="navbar navbar-expand-md navbar-light">
                            <Link href="/">
                                <a className="navbar-brand">
                                    <img src={require("../../images/pixelstocode_without_slogan.png")} alt="logo" width="150" />
                                </a>
                            </Link>

                            <button 
                                onClick={this.toggleNavbar} 
                                className={classTwo}
                                type="button" 
                                data-toggle="collapse" 
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                                aria-expanded="false" 
                                aria-label="Toggle navigation"
                            >
                                <span className="navbar-toggler-icon"></span>
                            </button>
    
                            <div className={classOne} id="navbarSupportedContent">
                                <ul className="navbar-nav nav ml-auto">
                                    <li className="nav-item">
                                        <Link activeClassName="active" href="/">
                                            <a className="nav-link">Home</a>
                                        </Link>
                                    </li>
    
                                    <li className="nav-item">
                                        <Link activeClassName="active" href="/about">
                                            <a className="nav-link">About</a>
                                        </Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link activeClassName="active" href="/services">
                                            <a className="nav-link">Services <Icon.ChevronDown /></a>
                                        </Link>
                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <Link activeClassName="active" href="/dev-services">
                                                    <a className="nav-link">Development Services</a>
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link activeClassName="active" href="/web-hosting-services">
                                                    <a className="nav-link">Web Hosting Services</a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    
                                    <li className="nav-item">
                                        <Link activeClassName="active" href="#">
                                            <a href="#" className="nav-link">Pages <Icon.ChevronDown /></a>
                                        </Link>
                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <Link activeClassName="active" href="/about">
                                                    <a className="nav-link">About</a>
                                                </Link>
                                            </li>
    
                                            <li className="nav-item">
                                                <Link activeClassName="active" href="/features">
                                                    <a className="nav-link">Features</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link activeClassName="active" href="#">
                                                    <a className="nav-link">Services</a>
                                                </Link>
                                                <ul className="dropdown-menu">
                                                    <li className="nav-item">
                                                        <Link activeClassName="active" href="/services">
                                                            <a className="nav-link">Services</a>
                                                        </Link>
                                                    </li>
                                                    
                                                    <li className="nav-item">
                                                        <Link activeClassName="active" href="/service-details">
                                                            <a className="nav-link">Service Details</a>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            
                                            <li className="nav-item">
                                                <Link activeClassName="active" href="#">
                                                    <a className="nav-link">Project</a>
                                                </Link>
                                                <ul className="dropdown-menu">
                                                    <li className="nav-item">
                                                        <Link activeClassName="active" href="/project">
                                                            <a className="nav-link">Project</a>
                                                        </Link>
                                                    </li>
                                                    
                                                    <li className="nav-item">
                                                        <Link activeClassName="active" href="/project-details">
                                                            <a className="nav-link">Project Details</a>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
    
                                            <li className="nav-item">
                                                <Link activeClassName="active" href="/team">
                                                    <a className="nav-link">Team</a>
                                                </Link>
                                            </li>
    
                                            <li className="nav-item">
                                                <Link activeClassName="active" href="/pricing">
                                                    <a className="nav-link">Pricing</a>
                                                </Link>
                                            </li>
                                            
                                            <li className="nav-item">
                                                <Link activeClassName="active" href="/faq">
                                                    <a className="nav-link">FAQ</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link 
                                                    activeClassName="active" 
                                                    href="/coming-soon"
                                                >
                                                    <a className="nav-link">Coming Soon</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link 
                                                    activeClassName="active" 
                                                    href="/error"
                                                >
                                                    <a className="nav-link">Error Status</a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
    
                                    <li className="nav-item">
                                        <Link activeClassName="active" href="/blog">
                                            <a className="nav-link">Blog</a>
                                        </Link>
                                    </li>
    
                                    <li className="nav-item">
                                        <Link activeClassName="active" href="/contact">
                                            <a className="nav-link">Contact</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
    
                            <div className="others-option">
                                <Link href="#">
                                    <a className="btn btn-light">Support</a>
                                </Link>
                                <Link href="#">
                                    <a className="btn btn-primary">Login</a>
                                </Link>
                            </div>
                        </nav>
                    </div> 
                </div>
    
            </header>
        )
    }
}

export default withRouter(DefaultStyle);