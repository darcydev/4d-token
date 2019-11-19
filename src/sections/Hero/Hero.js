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
                    <h4 className="title-md title-thin">
                      Distribution Ends In
                    </h4>
                    <div
                      className="countdown-s2 countdown"
                      data-date="2019/12/26"
                    />
                    <div className="token-info token-info-s1">
                      <div className="token-info-item token-info-item-s1">
                        <div className="token-info-item-list">
                          <span>Public Round 1:</span>
                          <h4>1,600,000 $0.34</h4>
                        </div>
                        <div className="token-info-item-list">
                          <span>Public Round 2:</span>
                          <h4>2,500,000 $0.29</h4>
                        </div>
                        <div className="token-info-item-list">
                          <span>Final Round:</span>
                          <h4>4,000,000 -</h4>
                        </div>
                      </div>
                      <div className="token-info-item token-info-item-s1">
                        <span>
                          Total Supply
                          <br className="d-none d-md-block" />
                        </span>
                        <h4>9,000,000</h4>
                      </div>
                      <div className="token-info-item token-info-item-s1">
                        <span>
                          Circulating Supply
                          <br className="d-none d-md-block" />
                        </span>
                        <h4>8,100,000</h4>
                      </div>
                      <div className="token-info-item token-info-item-s1">
                        <span>
                          Development Holding
                          <br className="d-none d-md-block" />
                        </span>
                        <h4>900,000</h4>
                      </div>
                    </div>
                    <div className="token-action token-action-s2 flex-wrap flex-sm-nowrap">
                      <a href="#" className="btn btn-md btn-secondary">
                        Buy Tokens
                      </a>
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
                        The token has been created to utilize the technology,
                        behind blockchain & smart contracts for business favor.
                      </h1>
                    </div>
                    <div className="cpn-text">
                      <p className="lead-s2">
                        By buying our token, you should be aware of the risks.
                        We are not here to develop price of our token. We are
                        here truly to finish our already started use case, which
                        don’t require any Crypto Currency holdings. It’s
                        honestly, well planned, a one of a kind. Limited info
                        until release of DINT Platform, thanks for
                        understanding. (You do not need to buy our token to use
                        our DINT Platform once it’s ready to begin used)
                      </p>
                    </div>
                    <div className="cpn-action">
                      <ul className="cpn-links">
                        <li>
                          <a href="#" className="btn btn-outline btn-primary">
                            Enter Exchange
                          </a>
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
