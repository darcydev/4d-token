import React from "react";
import "./App.css";
import Header from "./sections/Header/Header";
import Hero from "./sections/Hero/Hero";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./sections/Footer/Footer";
import Contact from "./sections/Contact/Contact";
import FAQs from "./sections/FAQs/FAQs";
import Timeline from "./components/Timeline/Timeline";

function App() {
  return (
    <div className="App">
      <div className="nk-wrap">
        <header
          className="nk-header page-header is-transparent is-sticky is-shrink is-dark"
          id="header"
        >
          <NavBar />
          <Hero />
        </header>
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
                        Apply To Get Whitelisted
                      </a>
                    </li>
                  </ul>
                  <div className="pdt-r">
                    <a href="#" className="link link-light link-xs">
                      <em className="link-icon fa fa-paper-plane" />
                      <span>Join us on Telegram</span>
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
                    <div className="token-status token-status-s5 bg-grad no-bd round tc-light">
                      <div className="token-box token-box-s3">
                        <h4 className="title title-sm">PRE SALE STARTING IN</h4>
                        <div
                          className="countdown-s3 countdown-s4 countdown"
                          data-date="2020/03/15"
                        />
                      </div>
                      <div className="token-action">
                        <a
                          className="btn btn-md btn-grad btn-grad-alternet btn-round"
                          href="#"
                        >
                          Join &amp; BUY TOKEN NOW
                        </a>
                      </div>
                    </div>
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

          <section
            className="section bg-theme-dark-alt tc-light pb-0 ov-h"
            id="apps"
          >
            <div className="container">
              <div className="section-head section-head-s3 wide-auto-sm text-center">
                <h6 className="title title-xs title-xs-s3 tc-primary">Token</h6>
                <h2 className="title">ICO Apps</h2>
                <p>
                  Once you’ve entered into our ecosystem, you can mange every
                  thing. Anyone with a smartphone and an internet connection can
                  participate in global marketplace.
                </p>
              </div>
              {/* Block @s */}
              <div className="nk-block nk-block-text-wrap">
                <div className="row align-items-center justify-content-center gutter-vr-40px">
                  <div className="col-md-6 col-sm-9">
                    <div className="nk-block-text pdb-l">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipis cing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exerc itation ullamco laboris nisi commodo
                        consequat.
                      </p>
                      <ul className="list list-dot pdb-r">
                        <li>Crypto-news curation</li>
                        <li>Natural Language Understanding</li>
                        <li>Wallet aggregation</li>
                        <li>Professional Network</li>
                        <li>No more expensive fees</li>
                      </ul>
                      <ul className="btn-grp justify-content-center justify-content-md-start">
                        <li>
                          <a href="#" className="btn btn-grad btn-md">
                            Get the app now
                          </a>
                        </li>
                        <li>
                          <ul className="btn-grp gutter-15px tc-secondary">
                            <li>
                              <a href="#">
                                <em className="fab fa-apple" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <em className="fab fa-android" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <em className="fab fa-windows" />
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-9 align-self-end">
                    <div className="nk-block-img mr-md-n5 mr-lg-0">
                      <img
                        src="images/app-screens/sc-large-o-dark.png"
                        alt="app"
                      />
                    </div>
                  </div>
                </div>
                {/* .row */}
              </div>
              {/* .block @e */}
            </div>
            <div className="ui-mask-right ui-mask-s7" />
          </section>
          {/* // */}
          <section
            className="section bg-theme-alt tc-light pb-0 ov-h"
            id="team"
          >
            <div className="container">
              <div className="section-head section-head-s3 wide-auto-sm text-center">
                <h6 className="title title-xs title-xs-s3 tc-primary">
                  Our Team
                </h6>
                <h2 className="title">The Leadership Team</h2>
                <p>
                  The ICO Crypto Team combines a passion for esports, industry
                  experise &amp; proven record in finance, development,
                  marketing &amp; licensing
                </p>
              </div>
              {/* Section Head @s */}
              {/* Block @s */}
              <div className="nk-block nk-block-team-list team-list">
                <div className="row justify-content-center">
                  <div className="col-lg-3 col-mb-6">
                    <div className="team team-s5">
                      <div className="team-photo team-photo-s1">
                        <img
                          src="images/team/sq-a.jpg"
                          alt="team"
                          className="no-bdrs"
                        />
                        <a
                          href="#team-popup-1"
                          className="team-show content-popup"
                          data-overlay="bg-grad-alt"
                        />
                      </div>
                      <h5 className="team-name title title-md">
                        Waylon <br />
                        Dalton
                      </h5>
                      <span className="team-position">
                        CEO &amp; Lead Blockchain
                      </span>
                      <ul className="team-social team-social-vr team-social-s2">
                        <li>
                          <a href="#">
                            <em className="fab fa-facebook-f" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <em className="fab fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <em className="fab fa-linkedin-in" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    {/* Start .team-profile  */}
                    <div id="team-popup-1" className="team-popup mfp-hide">
                      <a title="Close" className="mfp-close">
                        ×
                      </a>
                      <div className="row align-items-start">
                        <div className="col-md-6">
                          <div className="team-photo">
                            <img src="images/team/a-color.jpg" alt="team" />
                          </div>
                        </div>
                        {/* .col  */}
                        <div className="col-md-6">
                          <div className="team-popup-info pl-md-3">
                            <h3 className="team-name title title-lg pt-4">
                              Waylon Dalton
                            </h3>
                            <p className="team-position mb-1">
                              CEO &amp; Lead Blockchain{" "}
                            </p>
                            <ul className="team-social team-social-s2 mb-4">
                              <li>
                                <a href="#">
                                  <em className="fab fa-facebook-f" />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <em className="fab fa-linkedin-in" />
                                </a>
                              </li>
                            </ul>
                            <p>
                              He is a great man to work Lorem ipsum dolor sit
                              amet, consec tetur adipis icing elit. Simi lique,
                              autem.{" "}
                            </p>
                            <p>
                              Tenetur quos facere magnam volupt ates quas esse
                              Sedrep ell endus mole stiae tates quas esse Sed
                              repell endus molesti aela uda ntium quis quam
                              iusto minima thanks.
                            </p>
                            <div className="progress-list">
                              <div className="progress-wrap">
                                <div className="progress-title">
                                  Blockchain{" "}
                                  <span className="progress-amount">85%</span>
                                </div>
                                <div className="progress-bar progress-bar-xs bg-black-10">
                                  <div
                                    className="progress-percent bg-grad-alt"
                                    data-percent={85}
                                  />
                                </div>
                              </div>
                              <div className="progress-wrap">
                                <div className="progress-title">
                                  Decentralization{" "}
                                  <span className="progress-amount">68%</span>
                                </div>
                                <div className="progress-bar progress-bar-xs bg-black-10">
                                  <div
                                    className="progress-percent bg-grad-alt"
                                    data-percent={68}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* .col  */}
                      </div>
                      {/* .row  */}
                    </div>
                    {/* .team-profile  */}
                  </div>
                  {/* .col */}
                  <div className="col-lg-3 col-mb-6">
                    <div className="team team-s5">
                      <div className="team-photo team-photo-s1">
                        <img
                          src="images/team/sq-b.jpg"
                          alt="team"
                          className="no-bdrs"
                        />
                        <a
                          href="#team-popup-2"
                          className="team-show content-popup"
                          data-overlay="bg-grad-alt"
                        />
                      </div>
                      <h5 className="team-name title title-md">
                        Jonathan <br />
                        Rios
                      </h5>
                      <span className="team-position">
                        CTO &amp; Software Engineer
                      </span>
                      <ul className="team-social team-social-vr team-social-s2">
                        <li>
                          <a href="#">
                            <em className="fab fa-facebook-f" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <em className="fab fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <em className="fab fa-linkedin-in" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    {/* Start .team-popup  */}
                    <div id="team-popup-2" className="team-popup mfp-hide">
                      <a title="Close" className="mfp-close">
                        ×
                      </a>
                      <div className="row align-items-start">
                        <div className="col-md-6">
                          <div className="team-photo">
                            <img src="images/team/b-color.jpg" alt="team" />
                          </div>
                        </div>
                        {/* .col  */}
                        <div className="col-md-6">
                          <div className="team-popup-info pl-md-3">
                            <h3 className="team-name title title-lg pt-4">
                              Jonathan Rios
                            </h3>
                            <p className="team-position mb-1">
                              CTO &amp; Software Engineer
                            </p>
                            <ul className="team-social team-social-s2 mb-4">
                              <li>
                                <a href="#">
                                  <em className="fab fa-facebook-f" />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <em className="fab fa-linkedin-in" />
                                </a>
                              </li>
                            </ul>
                            <p>
                              He is a great man to work Lorem ipsum dolor sit
                              amet, consec tetur adipis icing elit. Simi lique,
                              autem.{" "}
                            </p>
                            <p>
                              Tenetur quos facere magnam volupt ates quas esse
                              Sedrep ell endus mole stiae tates quas esse Sed
                              repell endus molesti aela uda ntium quis quam
                              iusto minima thanks.
                            </p>
                          </div>
                        </div>
                        {/* .col  */}
                      </div>
                      {/* .row  */}
                    </div>
                    {/* .team-popup  */}
                  </div>
                  {/* .col */}
                  <div className="col-lg-3 col-mb-6">
                    <div className="team team-s5">
                      <div className="team-photo team-photo-s1">
                        <img
                          src="images/team/sq-c.jpg"
                          alt="team"
                          className="no-bdrs"
                        />
                        <a
                          href="#team-popup-3"
                          className="team-show content-popup"
                          data-overlay="bg-grad-alt"
                        />
                      </div>
                      <h5 className="team-name title title-md">
                        Jason <br />
                        Morales
                      </h5>
                      <span className="team-position">
                        Sr.Backend developer
                      </span>
                      <ul className="team-social team-social-vr team-social-s2">
                        <li>
                          <a href="#">
                            <em className="fab fa-facebook-f" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <em className="fab fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <em className="fab fa-linkedin-in" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    {/* Start .team-profile  */}
                    <div id="team-popup-3" className="team-popup mfp-hide">
                      <a title="Close" className="mfp-close">
                        ×
                      </a>
                      <div className="row align-items-start">
                        <div className="col-md-6">
                          <div className="team-photo">
                            <img src="images/team/c-color.jpg" alt="team" />
                          </div>
                        </div>
                        {/* .col  */}
                        <div className="col-md-6">
                          <div className="team-popup-info pl-md-3">
                            <h3 className="team-name title title-lg pt-4">
                              Jason Morales
                            </h3>
                            <p className="team-position mb-1">
                              Sr.Backend developer
                            </p>
                            <ul className="team-social team-social-s2 mb-4">
                              <li>
                                <a href="#">
                                  <em className="fab fa-facebook-f" />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <em className="fab fa-linkedin-in" />
                                </a>
                              </li>
                            </ul>
                            <p>
                              He is a great man to work Lorem ipsum dolor sit
                              amet, consec tetur adipis icing elit. Simi lique,
                              autem.{" "}
                            </p>
                            <p>
                              Tenetur quos facere magnam volupt ates quas esse
                              Sedrep ell endus mole stiae tates quas esse Sed
                              repell endus molesti aela uda ntium quis quam
                              iusto minima thanks.
                            </p>
                          </div>
                        </div>
                        {/* .col  */}
                      </div>
                      {/* .row  */}
                    </div>
                    {/* .team-profile  */}
                  </div>
                  {/* .col */}
                  <div className="col-lg-3 col-mb-6">
                    <div className="team team-s5">
                      <div className="team-photo team-photo-s1">
                        <img
                          src="images/team/sq-d.jpg"
                          alt="team"
                          className="no-bdrs"
                        />
                        <a
                          href="#team-popup-4"
                          className="team-show content-popup"
                          data-overlay="bg-grad-alt"
                        />
                      </div>
                      <h5 className="team-name title title-md">
                        Joseph <br />
                        Jordan
                      </h5>
                      <span className="team-position">Software Engineer</span>
                      <ul className="team-social team-social-vr team-social-s2">
                        <li>
                          <a href="#">
                            <em className="fab fa-facebook-f" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <em className="fab fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <em className="fab fa-linkedin-in" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    {/* Start .team-profile  */}
                    <div id="team-popup-4" className="team-popup mfp-hide">
                      <a title="Close" className="mfp-close">
                        ×
                      </a>
                      <div className="row align-items-start">
                        <div className="col-md-6">
                          <div className="team-photo">
                            <img src="images/team/d-color.jpg" alt="team" />
                          </div>
                        </div>
                        {/* .col  */}
                        <div className="col-md-6">
                          <div className="team-popup-info pl-md-3">
                            <h3 className="team-name title title-lg pt-4">
                              Joseph Jordan
                            </h3>
                            <p className="team-position mb-1">
                              Software Engineer
                            </p>
                            <ul className="team-social team-social-s2 mb-4">
                              <li>
                                <a href="#">
                                  <em className="fab fa-facebook-f" />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <em className="fab fa-linkedin-in" />
                                </a>
                              </li>
                            </ul>
                            <p>
                              He is a great man to work Lorem ipsum dolor sit
                              amet, consec tetur adipis icing elit. Simi lique,
                              autem.{" "}
                            </p>
                            <p>
                              Tenetur quos facere magnam volupt ates quas esse
                              Sedrep ell endus mole stiae tates quas esse Sed
                              repell endus molesti aela uda ntium quis quam
                              iusto minima thanks.
                            </p>
                          </div>
                        </div>
                        {/* .col  */}
                      </div>
                      {/* .row  */}
                    </div>
                    {/* .team-profile  */}
                  </div>
                  {/* .col */}
                </div>
                {/* .row */}
              </div>
              {/* .block @e */}
            </div>
            <div className="nk-ovm shape-r" />
            <div className="ui-mask-right ui-mask-s4" />
          </section>
          <FAQs />
          <Contact />
        </main>
        <Footer />
      </div>
      {/* Modal @s */}
      {/* // */}
      <div className="modal fade" id="login-popup">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <a
              href="#"
              className="modal-close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <em className="ti ti-close" />
            </a>
            <div className="ath-container m-0">
              <div className="ath-body">
                <h5 className="ath-heading title">
                  Sign in{" "}
                  <small className="tc-default">with your ICO Account</small>
                </h5>
                <form action="#">
                  <div className="field-item">
                    <div className="field-wrap">
                      <input
                        type="text"
                        className="input-bordered"
                        placeholder="Your Email"
                      />
                    </div>
                  </div>
                  <div className="field-item">
                    <div className="field-wrap">
                      <input
                        type="password"
                        className="input-bordered"
                        placeholder="Password"
                      />
                    </div>
                  </div>
                  <div className="field-item d-flex justify-content-between align-items-center">
                    <div className="field-item pb-0">
                      <input
                        className="input-checkbox"
                        id="remember-me-100"
                        type="checkbox"
                      />
                      <label htmlFor="remember-me-100">Remember Me</label>
                    </div>
                    <div className="forget-link fz-6">
                      <a
                        href="#"
                        data-toggle="modal"
                        data-dismiss="modal"
                        data-target="#reset-popup"
                      >
                        Forgot password?
                      </a>
                    </div>
                  </div>
                  <button className="btn btn-primary btn-block btn-md">
                    Sign In
                  </button>
                </form>
                <div className="sap-text">
                  <span>Or Sign In With</span>
                </div>
                <ul className="row gutter-20px gutter-vr-20px">
                  <li className="col">
                    <a href="#" className="btn btn-md btn-facebook btn-block">
                      <em className="icon fab fa-facebook-f" />
                      <span>Facebook</span>
                    </a>
                  </li>
                  <li className="col">
                    <a href="#" className="btn btn-md btn-google btn-block">
                      <em className="icon fab fa-google" />
                      <span>Google</span>
                    </a>
                  </li>
                </ul>
                <div className="ath-note text-center">
                  Don’t have an account?{" "}
                  <a
                    href="#"
                    data-toggle="modal"
                    data-dismiss="modal"
                    data-target="#register-popup"
                  >
                    {" "}
                    <strong>Sign up here</strong>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* .modal @e */}
      {/* Modal @s */}
      <div className="modal fade" id="register-popup">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <a
              href="#"
              className="modal-close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <em className="ti ti-close" />
            </a>
            <div className="ath-container m-0">
              <div className="ath-body">
                <h5 className="ath-heading title">
                  Sign Up{" "}
                  <small className="tc-default">
                    Create New TokenWiz Account
                  </small>
                </h5>
                <form action="#">
                  <div className="field-item">
                    <div className="field-wrap">
                      <input
                        type="text"
                        className="input-bordered"
                        placeholder="Your Name"
                      />
                    </div>
                  </div>
                  <div className="field-item">
                    <div className="field-wrap">
                      <input
                        type="text"
                        className="input-bordered"
                        placeholder="Your Email"
                      />
                    </div>
                  </div>
                  <div className="field-item">
                    <div className="field-wrap">
                      <input
                        type="password"
                        className="input-bordered"
                        placeholder="Password"
                      />
                    </div>
                  </div>
                  <div className="field-item">
                    <div className="field-wrap">
                      <input
                        type="password"
                        className="input-bordered"
                        placeholder="Repeat Password"
                      />
                    </div>
                  </div>
                  <div className="field-item">
                    <input
                      className="input-checkbox"
                      id="agree-term-2"
                      type="checkbox"
                    />
                    <label htmlFor="agree-term-2">
                      I agree to Icos <a href="#">Privacy Policy</a> &amp;{" "}
                      <a href="#">Terms</a>.
                    </label>
                  </div>
                  <button className="btn btn-primary btn-block btn-md">
                    Sign Up
                  </button>
                </form>
                <div className="sap-text">
                  <span>Or Sign Up With</span>
                </div>
                <ul className="btn-grp gutter-20px gutter-vr-20px">
                  <li className="col">
                    <a href="#" className="btn btn-md btn-facebook btn-block">
                      <em className="icon fab fa-facebook-f" />
                      <span>Facebook</span>
                    </a>
                  </li>
                  <li className="col">
                    <a href="#" className="btn btn-md btn-google btn-block">
                      <em className="icon fab fa-google" />
                      <span>Google</span>
                    </a>
                  </li>
                </ul>
                <div className="ath-note text-center">
                  Already have an account?{" "}
                  <a
                    href="#"
                    data-toggle="modal"
                    data-dismiss="modal"
                    data-target="#login-popup"
                  >
                    {" "}
                    <strong>Sign in here</strong>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* .modal @e */}
      {/* Modal @s */}
      <div className="modal fade" id="reset-popup">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <a
              href="#"
              className="modal-close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <em className="ti ti-close" />
            </a>
            <div className="ath-container m-0">
              <div className="ath-body">
                <h5 className="ath-heading title">
                  Reset <small className="tc-default">with your Email</small>
                </h5>
                <form action="#">
                  <div className="field-item">
                    <div className="field-wrap">
                      <input
                        type="text"
                        className="input-bordered"
                        placeholder="Your Email"
                      />
                    </div>
                  </div>
                  <button className="btn btn-primary btn-block btn-md">
                    Reset Password
                  </button>
                  <div className="ath-note text-center">
                    Remembered?{" "}
                    <a
                      href="#"
                      data-toggle="modal"
                      data-dismiss="modal"
                      data-target="#login-popup"
                    >
                      {" "}
                      <strong>Sign in here</strong>
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* .modal @e */}
      <div className="preloader">
        <span className="spinner spinner-round" />
      </div>
    </div>
  );
}

export default App;
