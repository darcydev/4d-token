import React from 'react';

import './App.css';

import Header from './sections/Header/Header';
import Hero from './sections/Hero/Hero';
import Footer from './sections/Footer/Footer';
import Contact from './sections/Contact/Contact';
import FAQs from './sections/FAQs/FAQs';
import Sale from './sections/Sale/Sale';
import About from './sections/About/About';
import Advantage from './sections/Advantage/Advantage';

import PreLoader from './components/Loaders/PreLoader';
import VerTimeline from './components/Timeline/VerTimeline/VerTimeline';

function App() {
  return (
    <div className="App">
      <PreLoader />
      <div className="nk-wrap">
        <Header />
        <main className="nk-pages bg-transparent">
          <Hero />
          <section
            id="about-section"
            className="section section-intro bg-theme-alt tc-light pb-0 ov-h"
          >
            <About />
            <div className="ui-mask-left ui-mask-s1" />
          </section>
          <section
            id="advantage-section"
            className="section bg-theme-alt tc-light pb-0 ov-v"
          >
            <Advantage />
            <div className="ui-mask-right ui-mask-s2" />
          </section>
          <section
            id="ico-section"
            className="section section-tokensale bg-grad-vr-alt-to-theme tc-light pb-0 ov-v"
          >
            <Sale />
            <div className="ui-mask-left ui-mask-s3" />
          </section>
          <section
            id="faq-section"
            className="section bg-theme-alt tc-light pb-0 ov-v"
          >
            <FAQs />
            <div className="ui-mask-left ui-mask-s4" />
          </section>
          <section
            id="timeline-section"
            className="section bg-theme tc-light ov-h"
          >
            <VerTimeline
              sectionTopHeading="What We've Achieved"
              sectionMainHeading="Achieved Milestones"
            />
          </section>
          {/* <Timeline /> */}
          {/* <Contact /> */}
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
