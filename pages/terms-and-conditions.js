import React from "react";
import { Preloader, Placeholder } from "react-preloading-screen";
import Header from "../components/Layouts/Header";
import Footer from "../components/Layouts/Footer";
import GoTop from "../components/Layouts/GoTop";
import PageTitle from "../components/terms-and-conditions/PageTitle";
import TermsAndConditionsBody from "../components/terms-and-conditions/TermsAndConditionsBody";

export default () => (
  <Preloader>
    <Placeholder>
      <div className="preloader">
        <div className="spinner"></div>
      </div>
    </Placeholder>
    <Header />
    <PageTitle />
    <TermsAndConditionsBody />
    <Footer />
    <GoTop scrollStepInPx="50" delayInMs="16.66" />
  </Preloader>
);
