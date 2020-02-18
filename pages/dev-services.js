import React from 'react'
import { Preloader, Placeholder } from 'react-preloading-screen'
import NoSSR from 'react-no-ssr'
import Header from '../components/Layouts/Header'
import Footer from '../components/Layouts/Footer'
import GoTop from '../components/Layouts/GoTop'
import MainBanner from '../components/dev-services/MainBanner';
import Partner from '../components/common/Partner';
import Services from '../components/dev-services/Services';
import Cta from '../components/dev-services/Cta';
import Funfacts from '../components/common/Funfacts';
import Features from '../components/dev-services/Features';
import Team from '../components/dev-services/Team';
import Feedback from '../components/dev-services/Feedback';
import WhyChoose from '../components/dev-services/WhyChoose';
import Blog from '../components/dev-services/Blog';

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
            <Partner />
            <Services />
            <Cta />
            <Funfacts />
            <Features />
            <WhyChoose />
            <Footer />
            <GoTop scrollStepInPx="50" delayInMs="16.66" />
        </Preloader>
    </NoSSR>
)
