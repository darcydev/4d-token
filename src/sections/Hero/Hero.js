import React from 'react';
import LinkButton from '../../components/Buttons/LinkButton';

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
                    <h4 className="title-md title-thin">
                      PUBLIC ROUND 1 STARTS
                    </h4>
                    <div
                      className="countdown-s2 countdown"
                      data-date="2020/02/01"
                    />
                    <div className="token-info token-info-s1">
                      <div className="token-info-item token-info-item-s1">
                        <span>
                          Total Supply
                          <br className="d-none d-md-block" />
                        </span>
                        <h4>9,000,000 DINT</h4>
                      </div>
                      <div className="token-info-item token-info-item-s1">
                        <span>
                          Already Sold
                          <br className="d-none d-md-block" />
                        </span>
                        <h4>180,000 DINT</h4>
                      </div>
                      <div className="token-info-item token-info-item-s1">
                        <span>
                          Circulating Supply
                          <br className="d-none d-md-block" />
                        </span>
                        <h4>8,100,000 DINT</h4>
                      </div>
                      <div className="token-info-item token-info-item-s1">
                        <span>
                          Development Holding
                          <br className="d-none d-md-block" />
                        </span>
                        <h4>900,000 DINT</h4>
                      </div>
                    </div>
                    <div className="token-action token-action-s2 flex-wrap flex-sm-nowrap">
                      <LinkButton
                        link="https://trade.4dmarkets.com/"
                        classes="btn-md btn-secondary"
                        text="Buy Tokens"
                      />
                      <div className="token-min-s2">
                        <span>Maximum Purchase:</span>
                        <span>10,000 DINT</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-sm-10 text-center text-lg-left">
                  <div className="banner-caption cpn tc-light">
                    <div className="cpn-head">
                      <h1 className="title title-xl-2 title-semibold">
                        Introducing DINToken: a next-level token that solves
                        real problems for businesses!
                      </h1>
                    </div>
                    <div className="cpn-text">
                      <p className="lead-s2">
                        DINToken has been created to help businesses utilize the
                        technology of blockchain and smart contracts! DINToken
                        is unique in its approach: you don't require any
                        CryptoCurrency holdings to use our platform. Welcome to
                        the next-level of Tokens: secure, well-planned and
                        unique!
                      </p>
                    </div>
                    <div className="cpn-action">
                      <ul className="cpn-links">
                        <li>
                          <LinkButton
                            link="https://trade.4dmarkets.com/"
                            classes="btn-outline btn-primary"
                            text="Enter Exchange"
                          />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
