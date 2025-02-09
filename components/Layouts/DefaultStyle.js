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
                <div id="navbar" className={`pixelstocode-nav ${layOutCls}`}>
                    <div className="container">
                        <nav className="navbar navbar-expand-md navbar-light">
                            <Link href="/">
                                <a className="navbar-brand">
                                    <img src={require("../../images/pixelstocode_without_slogan.png")} alt="pixelstocode logo" width="200" />
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
                                        <Link activeClassName="active" href="/portfolio">
                                            <a className="nav-link">Portfolio </a>
                                        </Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link activeClassName="active" href="/about">
                                            <a className="nav-link">About Us</a>
                                        </Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link activeClassName="active" href="/contact">
                                            <a className="nav-link">Contact Us</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
    
                        </nav>
                    </div> 
                </div>
    
            </header>
        )
    }
}

export default withRouter(DefaultStyle);