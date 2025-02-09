import React from 'react'
import { Preloader, Placeholder } from 'react-preloading-screen'
import Header from '../components/Layouts/Header'
import Footer from '../components/Layouts/Footer'
import GoTop from '../components/Layouts/GoTop'
import PageTitle from '../components/services/PageTitle'
import Services from '../components/services/Services'
import Partner from '../components/common/Partner';

class Features extends React.Component {
    render() {
        return (
            <Preloader>
                <Placeholder>
                    <div className="preloader">
                        <div className="spinner"></div>
                    </div>
                </Placeholder>
                <Header />
                <PageTitle />
                <Services />
                <Partner />
                <Footer />
                <GoTop scrollStepInPx="50" delayInMs="16.66" />
            </Preloader>
        )
    }
}

export default Features