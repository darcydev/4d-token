import React from "react";
import Zoom from "react-reveal/Zoom";

export default function About() {
  return (
    <section
      className="section section-intro  bg-theme-alt tc-light pb-0 ov-h"
      id="ico"
    >
      <div className="container">
        <div className="nk-block nk-block-about">
          <div className="row align-items-center justify-content-center justify-content-lg-between gutter-vr-30px">
            <Zoom>
              <div className="col-lg-6 col-sm-9 pdb-m">
                <div className="nk-block-text text-center text-lg-left">
                  <h6 className="title title-xs title-xs-s3 tc-primary">
                    DINT TOKEN
                  </h6>
                  <h2 className="title title-semibold">
                    Welcome to the World's first a without an acton vision which
                    change things that's needed.
                  </h2>
                  <p className="lead-s2">
                    DINT Token has been created to take advantage of blockchain
                    & smart contracts. Our aim is a platform for the future of
                    creative opportunities in businesses.
                  </p>
                  <p>
                    While existing solutions offer to solve just one problem at
                    a time, our team is up to build a secure, useful, &
                    easy-to-use product based on Ethereum blockchain. Begin
                    online global. It will include cryptocurrency investors and
                    even a digital arbitration system.
                  </p>
                  <p>
                    At the end, our aim is to integrate a modern Proof of Work,
                    POW model into business, giving businesses less need of
                    relaying on traditional trust based model. From a unified
                    blockchain ecosystem, which will make business truly
                    efficient, transparent, and reliable, for everyone's use.
                  </p>
                </div>
              </div>
            </Zoom>
            <Zoom>
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
            </Zoom>
          </div>
        </div>
      </div>
      <div className="ui-mask-left ui-mask-s1" />
    </section>
  );
}
