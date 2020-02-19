import React from 'react'
import { Preloader, Placeholder } from 'react-preloading-screen'
import NoSSR from 'react-no-ssr'
import Header from '../components/Layouts/Header'
import Footer from '../components/Layouts/Footer'
import GoTop from '../components/Layouts/GoTop'
import MainBanner from '../components/digital-strategy/MainBanner';
import Boxes from '../components/digital-strategy/Boxes';
import DomainSearch from '../components/digital-strategy/DomainSearch';
import WhyChoose from '../components/digital-strategy/WhyChoose';
import Pricing from '../components/digital-strategy/Pricing';
import Feedback from '../components/digital-strategy/Feedback';
import Partner from '../components/common/Partner';
import Blog from '../components/digital-strategy/Blog';
import Features from '../components/digital-strategy/Features';
import Cta from '../components/digital-strategy/Cta';

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