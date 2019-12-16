import React from "react";

import "./App.css";

import Hero from "./sections/Hero/Hero";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./sections/Footer/Footer";
import Contact from "./sections/Contact/Contact";
import FAQs from "./sections/FAQs/FAQs";
import Timeline from "./components/Timeline/Timeline";
import PreLoader from "./components/Loaders/PreLoader";
import Sale from "./sections/Sale/Sale";
import About from "./sections/About/About";
import Advantage from "./sections/Advantage/Advantage";

import HorTimeline from "./components/Timeline/HorTimeline/HorTimeline";
import VerTimeline from "./components/Timeline/VerTimeline/VerTimeline";

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
          <FAQs />
          <VerTimeline
            sectionTopHeading="What We've Achieved"
            sectionMainHeading="Achieved Milestones"
          />
          <div>
            <section className="section bg-light section-t-m">
              <div className="container">
                <div
                  className="section-head text-center wide-sm animated"
                  data-animate="fadeInUp"
                  data-delay=".1"
                >
                  <h3 className="title title-lg text-primary-alt">
                    Security Heading
                  </h3>
                  <p className="lead lead-regular lead-s2">
                    Security is important to us (content subheading)
                  </p>
                </div>
                {/* Block @s */}
                <div className="nk-block nk-block-features">
                  <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-4">
                      <div
                        className="feature feature-s8 feature-center card card-full card-md animated"
                        data-animate="fadeInUp"
                        data-delay=".2"
                      >
                        <div className="feature-icon feature-icon-xl">
                          <img
                            src="images/icons/icon-h-nobg.png"
                            alt="feature"
                          />
                        </div>
                        <div className="feature-text feature-text-s8">
                          <h4 className="title title-md mb-1 title-thin title-s7">
                            Ultra Fast &amp; Secure
                          </h4>
                          <p className=" mgb-s">Instant Private Transaction</p>
                        </div>
                      </div>
                    </div>
                    {/* .col */}
                    <div className="col-lg-4 col-md-4">
                      <div
                        className="feature feature-s8 feature-center card card-full card-md animated"
                        data-animate="fadeInUp"
                        data-delay=".3"
                      >
                        <div className="feature-icon feature-icon-xl">
                          <img
                            src="images/icons/icon-i-nobg.png"
                            alt="feature"
                          />
                        </div>
                        <div className="feature-text feature-text-s8">
                          <h4 className="title title-md mb-1 title-thin title-s7">
                            Highly Scalable
                          </h4>
                          <p className=" mgb-s">Limitless Applications</p>
                        </div>
                      </div>
                    </div>
                    {/* .col */}
                    <div className="col-lg-4 col-md-4">
                      <div
                        className="feature feature-s8 feature-center card card-full card-md animated"
                        data-animate="fadeInUp"
                        data-delay=".4"
                      >
                        <div className="feature-icon feature-icon-xl">
                          <img
                            src="images/icons/icon-j-nobg.png"
                            alt="feature"
                          />
                        </div>
                        <div className="feature-text feature-text-s8">
                          <h4 className="title title-md mb-1 title-thin title-s7">
                            Reliable &amp; Low Cost
                          </h4>
                          <p className=" mgb-s">Instant Private Transaction</p>
                        </div>
                      </div>
                    </div>
                    {/* .col */}
                  </div>
                  {/* .row */}
                </div>
                {/* .block @e */}
              </div>
            </section>
            {/* // */}
            <section className="bg-theme-alt">
              <section className="section bg-transparent no-pdy">
                <div className="container">
                  {/* Block @s */}
                  <div className="nk-block boxed boxed-xl bg-white round-lg">
                    <div className="row">
                      {/* Section Head @s */}
                      <div
                        className="section-head text-center wide-sm animated"
                        data-animate="fadeInUp"
                        data-delay=".1"
                      >
                        <h2 className="title">
                          Store All Digits Assets in a Secure Wallet
                        </h2>
                        <p className="lead lead-regular lead-s2">
                          We recommend that you store all digital assets in a
                          secure wallet
                        </p>
                      </div>
                      {/* Section Head @s */}
                    </div>
                    <div className="row gutter-vr-30px justify-content-between">
                      <div className="col-lg-5">
                        <div
                          className="feature feature-inline feature-s11 animated"
                          data-animate="fadeInUp"
                          data-delay=".2"
                        >
                          <div className="feature-icon feature-icon-s6-bg">
                            <em className="icon ikon ikon-cloud-org" />
                          </div>
                          <div className="feature-text">
                            <h5 className="title title-md">Cloud Wallet</h5>
                            <ul className="list list-check ml-0">
                              <li>
                                Designed for user convenience and worry-free
                                investing
                              </li>
                              <li>
                                Generate stable returns on your crypto assets
                              </li>
                              <li>Free, instant transfers between wallets</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-5">
                        <div
                          className="feature feature-inline feature-s11 animated"
                          data-animate="fadeInUp"
                          data-delay=".3"
                        >
                          <div className="feature-icon feature-icon-s6-bg">
                            <em className="icon ikon ikon-wallet-2" />
                          </div>
                          <div className="feature-text">
                            <h5 className="title title-md">HD Wallet</h5>
                            <ul className="list list-check ml-0">
                              <li>
                                Take full control of your assets and private
                                keys for maximum safety
                              </li>
                              <li>
                                Easily import your mnemonic seeds from other
                                wallets you may own
                              </li>
                              <li>EOS voting</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* .block @s */}
                </div>
                <div className="nk-ovm ovm-top ovm-h-50 bg-light" />
              </section>
              <section className="section bg-theme tc-light ov-h">
                <div className="container">
                  {/* Block @s */}
                  <div className="nk-block nk-block-text-grp mgb-m30">
                    <div className="row justify-content-center justify-content-lg-between">
                      <div className="col-lg-4 col-mb-9">
                        <div
                          className="feature feature-inline feature-s5 animated"
                          data-animate="fadeInUp"
                          data-delay=".4"
                        >
                          <div className="feature-icon feature-icon-sm feature-icon-s6">
                            <em className="icon ikon ikon-shield-5" />
                          </div>
                          <div className="feature-text">
                            <h4 className="title title-md">
                              Tearing down the barriers of securitization
                            </h4>
                            <p>
                              Lorem Ipsum is simply dummy text of the printing.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-mb-9">
                        <div
                          className="feature feature-inline feature-s5 animated"
                          data-animate="fadeInUp"
                          data-delay=".5"
                        >
                          <div className="feature-icon feature-icon-sm feature-icon-s6">
                            <em className="icon ikon ikon-wallet-org" />
                          </div>
                          <div className="feature-text">
                            <h4 className="title title-md">
                              Fast, inexpensive and secure value transfer
                            </h4>
                            <p>
                              Store, transfer, exchange instantly via mobile and
                              desktop.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-mb-9">
                        <div
                          className="feature feature-inline feature-s5 animated"
                          data-animate="fadeInUp"
                          data-delay=".6"
                        >
                          <div className="feature-icon feature-icon-sm feature-icon-s6">
                            <em className="icon ikon ikon-cash-2" />
                          </div>
                          <div className="feature-text">
                            <h4 className="title title-md">
                              Crowdfunding + smart contacts
                            </h4>
                            <p>
                              All the smart contact are lorem Ipsum is simply
                              dummy.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* .row */}
                  </div>
                  {/* .block @e */}
                </div>
              </section>
            </section>
            <section className="section bg-theme tc-light ov-h">
              <div className="container">
                {/* Block @s */}
                <div className="nk-block nk-block-text-wrap">
                  <div className="row align-items-center gutter-vr-30px justify-content-center justify-content-lg-between">
                    <div className="col-lg-5">
                      <div
                        className="gfx gfx-auto gfx-md animated"
                        data-animate="fadeInUp"
                        data-delay=".1"
                      >
                        <img src="images/gfx/gfx-z-e.png" alt="app" />
                      </div>
                    </div>
                    <div className="col-lg-6 col-mb-9">
                      <div className="nk-block-text">
                        <div
                          className="pb-5 animated"
                          data-animate="fadeInUp"
                          data-delay=".2"
                        >
                          <h2 className="title">High level of security</h2>
                          <p className="lead lead-regular lead-s2">
                            You can Exchange &amp; Transfer money securely.
                          </p>
                        </div>
                        <p
                          className="animated"
                          data-animate="fadeInUp"
                          data-delay=".2"
                        >
                          At ICO Crypto Wallet we apply extreme security
                          measures to Lorem Ipsum is simply dummy text of the
                          printing and typesetting industry. Lorem Ipsum has
                          been the industry's standard dummy text ever since the
                          1500s, when an unknown printer took a galley of type
                          and scrambled it to make a type specimen book.{" "}
                        </p>
                        <p
                          className="animated"
                          data-animate="fadeInUp"
                          data-delay=".3"
                        >
                          It has survived not only five centuries, but also the
                          leap into electronic typesetting, remaining
                          essentially unchanged. It was popularised in the 1960s
                          with the release of Letraset.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* .row */}
                </div>
                {/* .block @e */}
              </div>
            </section>
            {/* // */}
            <section className="section bg-theme tc-light ov-h">
              <div className="container">
                {/* Block @s */}
                <div className="nk-block nk-block-text-wrap">
                  <div className="row align-items-center gutter-vr-30px justify-content-center justify-content-lg-between">
                    <div className="col-lg-5 order-lg-last">
                      <div
                        className="gfx gfx-auto gfx-md animated"
                        data-animate="fadeInUp"
                        data-delay=".1"
                      >
                        <img src="images/gfx/gfx-z-f.png" alt="app" />
                      </div>
                    </div>
                    <div className="col-lg-6 col-mb-9">
                      <div className="nk-block-text">
                        <div
                          className="pb-5 animated"
                          data-animate="fadeInUp"
                          data-delay=".2"
                        >
                          <h2 className="title">
                            Multi-Chain <br />
                            Wallets Management
                          </h2>
                          <p className="lead lead-regular lead-s2">
                            Manage all wallets with this app.
                          </p>
                        </div>
                        <p
                          className="animated"
                          data-animate="fadeInUp"
                          data-delay=".3"
                        >
                          Create Bitcoin and Ethereum and other wallets for all
                          your tokens. Safely back them all up, in one click.
                        </p>
                        <p
                          className="animated"
                          data-animate="fadeInUp"
                          data-delay=".4"
                        >
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* .row */}
                </div>
                {/* .block @e */}
              </div>
            </section>
          </div>
          {/* <HorTimeline /> */}
          {/* <Timeline /> */}
          {/* <Contact /> */}
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
