import React from 'react'
import { Preloader, Placeholder } from 'react-preloading-screen'
import NoSSR from 'react-no-ssr'
import Header from '../components/Layouts/Header'
import Footer from '../components/Layouts/Footer'
import GoTop from '../components/Layouts/GoTop'
import MainBanner from '../components/web-hosting-services/MainBanner';
import WhyChoose from '../components/web-hosting-services/WhyChoose';
import Pricing from '../components/web-hosting-services/Pricing';
import Partner from '../components/common/Partner';
import Cta from '../components/web-hosting-services/Cta';

export default () => (
    <NoSSR>
        <Preloader>
            <Placeholder>
                <div className="preloader">
                    <div className="spinner"></div>
                </div>
            </Placeholder>
            <Header />
            <MainBanner />
            <WhyChoose />
            <Cta />
            <Pricing />
            <Partner />
            <Footer />
            <GoTop scrollStepInPx="50" delayInMs="16.66" />
        </Preloader>
    </NoSSR>
)