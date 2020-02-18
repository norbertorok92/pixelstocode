import React from 'react'
import { Preloader, Placeholder } from 'react-preloading-screen'
import NoSSR from 'react-no-ssr'
import Header from '../components/Layouts/Header'
import Footer from '../components/Layouts/Footer'
import GoTop from '../components/Layouts/GoTop'
import MainBanner from '../components/web-hosting-services/MainBanner';
import Boxes from '../components/web-hosting-services/Boxes';
import DomainSearch from '../components/web-hosting-services/DomainSearch';
import WhyChoose from '../components/web-hosting-services/WhyChoose';
import Pricing from '../components/web-hosting-services/Pricing';
import Feedback from '../components/web-hosting-services/Feedback';
import Partner from '../components/common/Partner';
import Blog from '../components/web-hosting-services/Blog';
import Features from '../components/web-hosting-services/Features';
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
            <Boxes />
            <WhyChoose />
            <Pricing />
            <Partner />
            <Features />
            <Cta />
            <Footer />
            <GoTop scrollStepInPx="50" delayInMs="16.66" />
        </Preloader>
    </NoSSR>
)


// <Header />
// <MainBanner />
// <Boxes />
// <DomainSearch />
// <WhyChoose />
// <Pricing />
// <Feedback />
// <Partner />
// <Features />
// <Blog />
// <Cta />
// <Footer />