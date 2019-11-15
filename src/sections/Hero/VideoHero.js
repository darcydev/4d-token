import React from "react";

export default function VideoHero() {
  return (
    <div className="header-banner bg-theme-grad">
      <div className="nk-banner">
        <div className="banner banner-fs banner-single tc-light">
          <div className="banner-wrap">
            <div className="container">
              <div className="row align-items-center justify-content-center justify-content-lg-between">
                <div className="col-lg-6 col-xl-5 col-md-8 col-sm-9 order-last">
                  <div className="token-status token-status-s3 round bg-theme-alt tc-light">
                    <h4 className="title-md title-thin">Pre-Sale Ends In</h4>
                    <div
                      className="countdown-s2 countdown"
                      data-date="2019/12/26"
                    />
                    <div className="token-info token-info-s1">
                      <div className="token-info-item token-info-item-s1">
                        <div className="token-info-item-list">
                          <span>Token Price:</span>
                          <h4>1 ICOX=$0.02</h4>
                        </div>
                        <div className="token-info-item-list">
                          <span>We Accept:</span>
                          <h4>
                            <em className="fab fa-ethereum" /> ETH
                          </h4>
                        </div>
                      </div>
                      <div className="token-info-item token-info-item-s1">
                        <span>
                          Tokens Availablen <br className="d-none d-md-block" />{" "}
                          on Pre-Sale:
                        </span>
                        <h4>90,000,000 ICOX</h4>
                      </div>
                    </div>
                    <div className="token-action token-action-s2 flex-wrap flex-sm-nowrap">
                      <a href="#" className="btn btn-md btn-secondary">
                        Buy Tokens with 45% off
                      </a>
                      <div className="token-min-s2">
                        <span>Minimum Purchase:</span>
                        <span>10,000 ICOX</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* .col */}
                <div className="col-xl-6 col-lg-6 col-sm-10 text-center text-lg-left">
                  <div className="banner-caption cpn tc-light">
                    <div className="cpn-head">
                      <h1 className="title title-xl-2 title-semibold">
                        AMAZING INTRODUCTION TEXT
                      </h1>
                    </div>
                    <div className="cpn-text">
                      <p className="lead-s2">
                        a great opening sentence will be here!
                      </p>
                    </div>
                    <div className="cpn-action">
                      <ul className="cpn-links">
                        <li>
                          <a href="#" className="btn btn-outline btn-primary">
                            Token Distribution
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn btn-outline btn-primary">
                            Enter Exchange
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* .col */}
              </div>
              {/* .row */}
            </div>
          </div>
        </div>
      </div>
      {/* .nk-banner */}
      <div
        className="bg-video bg-video-youtube"
        data-video="W6qWLgLbjhk"
        data-overlay="theme"
        data-opacity={80}
        data-cover="images/bg/bg-b.jpg"
      />
    </div>
  );
}
