import React from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'

const Odometer = dynamic(import('react-odometerjs'),{
    ssr: false,
    loading: () => 0
});
import 'odometer/themes/odometer-theme-default.css';

class Funfacts extends React.Component {

    state = {
        projects: 0,
        happyClients: 0,
        ideas: 0,
        cups: 0
    };

    componentDidMount(){
        this.setState({ 
            projects: 27,
            happyClients: 23,
            ideas: 19,
            cups: 1368
        });
    }

    render(){
        const { projects, happyClients, ideas, cups } = this.state;
        return (
            <section className="funfacts-area ptb-80">
                <div className="container">
                    <div className="section-title">
                        <h2>Our company described with numbers</h2>
                        <div className="bar"></div>
                    </div>
    
                    <div className="row">
                        <div className="col-lg-3 col-md-3 col-6">
                            <div className="funfact">
                                <h3>
                                    <Odometer format="d" duration={500} value={projects} />
                                </h3>
                                <p>Projects Completed</p>
                            </div>
                        </div>
    
                        <div className="col-lg-3 col-md-3 col-6">
                            <div className="funfact">
                                <h3>
                                    <Odometer format="d" duration="500" value={happyClients} />
                                </h3>
                                <p>Happy Clients</p>
                            </div>
                        </div>
    
                        <div className="col-lg-3 col-md-3 col-6">
                            <div className="funfact">
                                <h3>
                                    <Odometer format="d" duration="500" value={ideas} />
                                </h3>
                                <p>Crazy Ideas</p>
                            </div>
                        </div>
    
                        <div className="col-lg-3 col-md-3 col-6">
                            <div className="funfact">
                                <h3>
                                    <Odometer format="d" duration="500" value={cups} />
                                </h3>
                                <p>Cups of coffee</p>
                            </div>
                        </div>
                    </div>
    
                    <div className="contact-cta-box">
                        <h3>Have any question?</h3>
                        <p>Don't hesitate to contact us. We're here to help you with any idea, crazy or not, it doesn't matter. Application - mobile or web, online store, presentation site, you name it, we make it.</p>
                        <Link activeClassName="active" href="/contact">
                            <a className="btn btn-primary">Contact Us</a>
                        </Link>
                        
                    </div>
    
                    <div className="map-bg">
                        <img src={require("../../images/map.png")} alt="map" />
                    </div>
                </div>
            </section>
        )
    }
}

export default Funfacts