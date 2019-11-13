import React from "react";

export default function Hero() {
  return (
    <div className="header-banner bg-theme-alt">
      <div className="nk-banner bg-grad-special">
        <div className="banner banner-fs banner-single bg-grad-special-alt tc-light">
          <div className="banner-wrap mt-auto">
            <div className="container">
              <div className="row align-items-center justify-content-center justify-content-lg-between">
                <div className="col-lg-6 order-lg-last">
                  <div className="banner-gfx banner-gfx-re-s5">
                    <img src="images/header/gfx-f.png" alt="header" />
                  </div>
                </div>
                {/* .col */}
                <div className="col-lg-6 text-center text-lg-left">
                  <div className="banner-caption cpn tc-light">
                    <div className="cpn-head">
                      <h1 className="title title-xl-2 title-lg title-semibold">
                        4D Token ICO - INTRODUCTION TEXT
                      </h1>
                    </div>
                    <div className="cpn-text">
                      <p className="lead-s2">
                        Nostrud enim culpa sit ad anim magna aute officia.
                      </p>
                    </div>
                    <div className="cpn-action">
                      <ul className="cpn-links">
                        <li>
                          <a href="#" className="btn btn-md btn-grad">
                            Enter Exchange
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn btn-md btn-grad">
                            Token Distribution
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
          <div className="nk-block mt-auto pdb-r">
            <div className="container">
              <ul className="partner-list-s3 row align-items-center justify-content-center">
                <li className="col-12 col-md-2 text-center text-md-left">
                  <h6 className="title title-xs tc-primary mb-md-0 mb-4">
                    Our <br /> Partners
                  </h6>
                </li>
                <li className="col-4 col-md-2">
                  <a href="#">
                    <img src="images/partners/a-xs-light.png" alt="partner" />
                  </a>
                </li>
                <li className="col-4 col-md-2">
                  <a href="#">
                    <img src="images/partners/b-xs-light.png" alt="partner" />
                  </a>
                </li>
                <li className="col-4 col-md-2">
                  <a href="#">
                    <img src="images/partners/c-xs-light.png" alt="partner" />
                  </a>
                </li>
                <li className="col-4 col-md-2">
                  <a href="#">
                    <img src="images/partners/d-xs-light.png" alt="partner" />
                  </a>
                </li>
                <li className="col-4 col-md-2">
                  <a href="#">
                    <img src="images/partners/e-xs-light.png" alt="partner" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* .block @e */}
          <div className="nk-ovm shape-u shape-contain shape-left-top" />
          {/* Place Particle Js */}
          <div
            id="particles-bg"
            className="particles-container particles-bg"
            data-pt-base="#00c0fa"
            data-pt-base-op=".3"
            data-pt-line="#2b56f5"
            data-pt-line-op=".5"
            data-pt-shape="#00c0fa"
            data-pt-shape-op=".2"
          />
        </div>
      </div>
      {/* .nk-banner */}
    </div>
  );
}
