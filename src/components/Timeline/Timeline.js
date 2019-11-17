import React from "react";

export default function Timeline() {
  return (
    <section className="section bg-theme tc-light pb-0 ov-h" id="roadmap">
      <div className="container">
        <div className="section-head section-head-s3 wide-auto-sm text-center">
          <h6 className="title title-xs title-xs-s3 tc-primary">Achieved</h6>
          <h2 className="title">The Milestones</h2>
        </div>
        {/* Block @s */}
        <div className="nk-block">
          <div className="row justify-content-center">
            <div className="col">
              <div className="roadmap-carousel-container-s2 text-center">
                <div
                  className="has-carousel roadmap-carousel roadmap-carousel-s2 roadmap-carousel-nav-s2 owl-carousel"
                  data-items={5}
                  data-items-mobile-s={1}
                  data-navs="true"
                >
                  <div className="roadmap roadmap-s6 roadmap-s6-3-2 roadmap-done">
                    <div className="roadmap-head roadmap-head-s6">
                      <span className="roadmap-time roadmap-time-s6">
                        March 2018
                      </span>
                    </div>
                    <p>Start of the ICO Crypto Platform Development</p>
                  </div>
                  <div className="roadmap roadmap-s6 roadmap-s6-2-1 roadmap-done">
                    <div className="roadmap-head roadmap-head-s6">
                      <span className="roadmap-time roadmap-time-s6">
                        April 2018
                      </span>
                    </div>
                    <p>Start of the Preparation for the ICO Token Sale</p>
                  </div>
                  <div className="roadmap roadmap-s6 roadmap-s6-1-2">
                    <div className="roadmap-head roadmap-head-s6">
                      <span className="roadmap-time roadmap-time-s6">
                        October 2019
                      </span>
                    </div>
                    <p>ICO Platform Launched with full solutions</p>
                  </div>
                  <div className="roadmap roadmap-s6 roadmap-s6-2-3">
                    <div className="roadmap-head roadmap-head-s6">
                      <span className="roadmap-time roadmap-time-s6">
                        January 2019
                      </span>
                    </div>
                    <p>Partnership for the future EcoSystem</p>
                  </div>
                  <div className="roadmap roadmap-s6 roadmap-s6-3-1">
                    <div className="roadmap-head roadmap-head-s6">
                      <span className="roadmap-time roadmap-time-s6">
                        June 2019
                      </span>
                    </div>
                    <p>ICO Wallet full version release</p>
                  </div>
                  <div className="roadmap roadmap-s6 roadmap-s6-1-3">
                    <div className="roadmap-head roadmap-head-s6">
                      <span className="roadmap-time roadmap-time-s6">
                        December 2019
                      </span>
                    </div>
                    <p>The firest product ready to goes live to all business</p>
                  </div>
                  <div className="roadmap roadmap-s6 roadmap-s6-3-2">
                    <div className="roadmap-head roadmap-head-s6">
                      <span className="roadmap-time roadmap-time-s6">
                        MarchQ2 2019
                      </span>
                    </div>
                    <p>Start of the ICO Crypto Platform Development.</p>
                  </div>
                  <div className="roadmap roadmap-s6 roadmap-s6-2-1">
                    <div className="roadmap-head roadmap-head-s6">
                      <span className="roadmap-time roadmap-time-s6">
                        April 2019
                      </span>
                    </div>
                    <p>Start of the Preparation for the ICO Token Sale</p>
                  </div>
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
  );
}
