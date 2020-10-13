import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../assets/css/style.css'
import '../assets/css/slick.css'
import '../assets/css/responsive.css'
import '../assets/css/animate.css'

import React from 'react'
import { Preloader, Placeholder } from 'react-preloading-screen'
import Link from 'next/link'

class Error extends React.Component {
    static getInitialProps({ res, err }) {
        const statusCode = res ? res.statusCode : err ? err.statusCode : null;
        return { statusCode };
    }
  
    render() {
        return (
            <Preloader>
                <Placeholder>
                    <div className="preloader">
                        <div className="spinner"></div>
                    </div>
                </Placeholder>
                <section className="error-area">
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="container">
                                <div className="error-content">
                                    <div className="notfound-404">
                                        <h1>Oops!</h1>
                                    </div>
                                    <h3>
                                        {this.props.statusCode
                                            ? `An error ${this.props.statusCode} occurred on server`
                                            : 'An error occurred...'
                                        }
                                    </h3>
                                    <p>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
                                    <Link href="/">
                                        <a className="btn btn-primary">
                                            Go to Homepage
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Preloader>
        );
    }
}
  
export default Error;
