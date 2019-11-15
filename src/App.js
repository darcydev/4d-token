import React from "react";
import "./App.css";
import Header from "./sections/Header/Header";
import VideoHero from "./sections/Hero/VideoHero";
import Hero from "./sections/Hero/Hero";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./sections/Footer/Footer";
import Contact from "./sections/Contact/Contact";
import FAQs from "./sections/FAQs/FAQs";
import Timeline from "./components/Timeline/Timeline";
import Team from "./sections/Team/Team";
import Countdown from "./components/Countdown/Countdown";
import PreLoader from "./components/Loaders/PreLoader";

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
        <VideoHero />
        <main className="nk-pages bg-transparent">
          {/* Start Section */}
          <section
            className="section section-intro  bg-theme-alt tc-light pb-0 ov-h"
            id="ico"
          >
            <div className="container">
              <div className="nk-block nk-block-about">
                <div className="row align-items-center justify-content-center justify-content-lg-between gutter-vr-30px">
                  <div className="col-lg-6 col-sm-9 pdb-m">
                    <div className="nk-block-text text-center text-lg-left">
                      <h6 className="title title-xs title-xs-s3 tc-primary">
                        4D Token ICO
                      </h6>
                      <h2 className="title title-semibold">
                        blah blah blah blah <br />
                        some more introduction text
                      </h2>
                      <p className="lead-s2">
                        ICO Crypto is a platform for the future of funding that
                        powering dat for the new equity blockchain.
                      </p>
                      <p>
                        While existing solutions offer to solve just one problem
                        at a time, our team is up to build a secure, useful,
                        &amp; easy-to-use product based on private blockchain.
                        It will include easy cryptocurrency payments
                        integration, and even a digital arbitration system.
                      </p>
                      <p>
                        At the end, Our aims to integrate all companies,
                        employees, and business assets into a unified blockchain
                        ecosystem, which will make business truly efficient,
                        transparent, and reliable.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-5 col-sm-9">
                    <div className="nk-block-video">
                      <img src="images/azure/gfx-y-dark.png" alt="image" />
                      <a
                        href="https://www.youtube.com/watch?v=SSo_EIwHSd4"
                        className="nk-block-video-play video-popup btn-play-wrap btn-play-wrap-s2"
                      >
                        <div className="btn-play btn-play-sm btn-play-s2">
                          <em className="btn-play-icon" />
                        </div>
                        <div className="btn-play-text">How it works</div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* .block @e */}
            </div>
            {/* .conatiner  */}
            <div className="ui-mask-left ui-mask-s1" />
          </section>
          {/* // */}
          <section className="section  bg-theme-alt tc-light pb-0 ov-v">
            <div className="container">
              <div className="section-head section-head-s3 wide-auto-sm text-center">
                <h6 className="title title-xs title-xs-s3 tc-primary">
                  Why ICO Crypto
                </h6>
                <h2 className="title">Competitive Advantage</h2>
                <p>
                  With help from our teams, contributors and investors these are
                  the milestones we are looking forward to achieve.
                </p>
              </div>
              <div className="nk-block">
                <div className="row justify-content-center gutter-vr-30px">
                  <div className="col-lg-4 col-sm-8">
                    <div className="feature text-center">
                      <div className="feature-icon feature-icon-s8">
                        <img src="images/gfx/gfx-sm-e.png" alt="feature" />
                      </div>
                      <div className="feature-text">
                        <h5 className="title title-md">
                          Blockchain Infrastructure
                        </h5>
                        <p>
                          Integrates blockchain technology to provide unique
                          identities for each node.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-8">
                    <div className="feature text-center">
                      <div className="feature-icon feature-icon-s8">
                        <img src="images/gfx/gfx-sm-f.png" alt="feature" />
                      </div>
                      <div className="feature-text">
                        <h5 className="title title-md">
                          Easy Token Integration
                        </h5>
                        <p>
                          Every node has its own token. You can earn tokens by
                          doing work.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-8">
                    <div className="feature text-center">
                      <div className="feature-icon feature-icon-s8">
                        <img src="images/gfx/gfx-sm-g.png" alt="feature" />
                      </div>
                      <div className="feature-text">
                        <h5 className="title title-md">
                          Global System and Secure
                        </h5>
                        <p>
                          An efficient global system covering all corners,
                          provides best data security.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center pdt-r">
                  <ul className="btn-grp">
                    <li>
                      <a href="#" className="btn btn-grad btn-md">
                        Download Whitepaper
                      </a>
                    </li>
                    <li>
                      <a href="#" className="btn btn-grad btn-md">
                        Enter Exchange
                      </a>
                    </li>
                  </ul>
                  <div className="pdt-r">
                    <a href="#" className="link link-light link-xs">
                      <em className="link-icon fa fa-paper-plane" />
                      <span>Join us on Discord</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="ui-mask-right ui-mask-s2" />
          </section>
          {/* // */}
          <section
            className="section section-tokensale bg-grad-vr-alt-to-theme tc-light pb-0 ov-v"
            id="tokens"
          >
            <div className="container">
              {/* Block @s */}
              <div className="nk-block nk-block-token">
                <div className="section-head section-head-s3 wide-auto-sm text-center">
                  <h6 className="title title-xs title-xs-s3 tc-primary">
                    Token
                  </h6>
                  <h2 className="title">Pre-Sale &amp; Values</h2>
                  <p>
                    ICO Crypto token will be released on the basis of Ethereum
                    and Bitocin platform. It’s compatibility of the token with
                    third-party services wallets, exchanges etc, and provides
                    easy-to-use integration.
                  </p>
                </div>
                <div className="row align-items-center justify-content-between gutter-vr-30px">
                  <div className="col-lg-6">
                    <div className="row gutter-vr-30px">
                      <div className="col-sm-6">
                        <div className="stage-info">
                          <h6 className="title title-s6 title-xs-s2">Start</h6>
                          <p>Feb 8, 2018 (9:00AM GMT)</p>
                        </div>
                      </div>
                      {/* .col  */}
                      <div className="col-sm-6">
                        <div className="stage-info">
                          <h6 className="title title-s6 title-xs-s2">
                            Number of tokens for sale
                          </h6>
                          <p>900,000 ICC (9%)</p>
                        </div>
                      </div>
                      {/* .col  */}
                      <div className="col-sm-6">
                        <div className="stage-info">
                          <h6 className="title title-s6 title-xs-s2">End</h6>
                          <p>Feb 20, 2018 (11:00AM GMT)</p>
                        </div>
                      </div>
                      {/* .col  */}
                      <div className="col-sm-6">
                        <div className="stage-info">
                          <h6 className="title title-s6 title-xs-s2">
                            Tokens exchange rate
                          </h6>
                          <p>1 ETH = 650 ICC, 1 BTC = 1940 ICC</p>
                        </div>
                      </div>
                      {/* .col  */}
                      <div className="col-sm-6">
                        <div className="stage-info">
                          <h6 className="title title-s6 title-xs-s2">
                            Acceptable currencies
                          </h6>
                          <p>ETH, BTC, LTC</p>
                        </div>
                      </div>
                      {/* .col  */}
                      <div className="col-sm-6">
                        <div className="stage-info">
                          <h6 className="title title-s6 title-xs-s2">
                            Minimal transaction amount
                          </h6>
                          <p>1 ETH/ 1 BTC/ 1 LTC</p>
                        </div>
                      </div>
                      {/* .col  */}
                    </div>
                    {/* .row  */}
                  </div>
                  <div className="col-lg-5">
                    <Countdown />
                  </div>
                </div>
              </div>
              <div className="nk-block">
                <div className="row gutter-vr-40px justify-content-center">
                  <div className="col-lg-6 col-mb-10">
                    <div className="single-chart text-center">
                      <h3 className="title title-lg pdb-l">
                        Initial Token Distribution
                      </h3>
                      <div className="chart">
                        <img src="images/azure/chart-k-dark.png" alt="chart" />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-mb-10">
                    <div className="single-chart text-center">
                      <h3 className="title title-lg pdb-l">
                        Sale Proceed Allocation
                      </h3>
                      <div className="chart">
                        <img src="images/azure/chart-l-dark.png" alt="chart" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* .block @e */}
            </div>
            {/* .section-tokensale */}
            <div className="ui-mask-left ui-mask-s3" />
          </section>
          <Timeline />
          <Team />
          <FAQs />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
