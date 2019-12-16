import React from 'react';

import './App.css';

import Hero from './sections/Hero/Hero';
import NavBar from './components/NavBar/NavBar';
import Footer from './sections/Footer/Footer';
import Contact from './sections/Contact/Contact';
import FAQs from './sections/FAQs/FAQs';
import Timeline from './components/Timeline/Timeline';
import PreLoader from './components/Loaders/PreLoader';
import Sale from './sections/Sale/Sale';
import About from './sections/About/About';
import Advantage from './sections/Advantage/Advantage';
import VerTimeline from './components/Timeline/VerTimeline/VerTimeline';

function App() {
  return (
    <div className="App">
      <PreLoader />
      <div className="nk-wrap">
        <header
          className="nk-header page-header is-transparent is-sticky is-shrink is-dark"
          id="header"
        >
          <NavBar />
        </header>
        <main className="nk-pages bg-transparent">
          <Hero />
          <About />
          <Advantage />
          <Sale />
          <section
            id="faq-section"
            className="section bg-theme-alt tc-light pb-0 ov-v"
          >
            <FAQs />
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
