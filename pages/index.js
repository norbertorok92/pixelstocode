import React from 'react'
import { Preloader, Placeholder } from 'react-preloading-screen';
import NoSSR from 'react-no-ssr';
import Header from '../components/Layouts/Header'
import MainBanner from '../components/home/MainBanner'
import BoxArea from '../components/home/BoxArea';
import ServicesArea from '../components/home/ServicesArea';
import RecentWork from '../components/home/RecentWork';
import Funfacts from '../components/common/Funfacts';
import Partner from '../components/common/Partner';
import Footer from '../components/Layouts/Footer';
import GoTop from '../components/Layouts/GoTop';

class Index extends React.Component {
    render() {
        return (
            <NoSSR>
                <Preloader>
                    <Placeholder>
                        <div className="preloader">
                            <div className="spinner"></div>
                        </div>
                    </Placeholder>
                    <Header />
                    <MainBanner />
                    <BoxArea />
                    <ServicesArea />
                    <RecentWork />
                    <Funfacts />
                    <Partner />
                    <Footer />
                    <GoTop scrollStepInPx="50" delayInMs="16.66" />
                </Preloader>
            </NoSSR>
        )
    }
}

export default Index