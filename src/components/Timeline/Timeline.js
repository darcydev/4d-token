import React from "react";
import Zoom from "react-reveal/Zoom";

import { TIMELINE_DATA } from "./Data/TimelineData";

import SectionHeading from "../Headings/SectionHeading";

export default function Timeline() {
  const TIMELINE_ITEMS_MARKUP = TIMELINE_DATA.map(v => (
    <div className="roadmap roadmap-s6 roadmap-s6-3-2 roadmap-done">
      <div className="roadmap-head roadmap-head-s6">
        <span className="roadmap-time roadmap-time-s6">{v.date}</span>
      </div>
      <p>{v.description}</p>
    </div>
  ));

  return (
    <section className="section bg-theme tc-light ov-h" id="roadmap">
      <div className="container">
        <Zoom>
          <SectionHeading
            topHeading="what we've achieved"
            mainHeading="Achieved Milestones"
          />
        </Zoom>
        <div className="nk-block">
          <div className="row justify-content-center">
            <div className="col">
              <Zoom>
                <div className="roadmap-carousel-container-s2 text-center">
                  <div
                    className="has-carousel roadmap-carousel roadmap-carousel-s2 roadmap-carousel-nav-s2 owl-carousel"
                    data-items={5}
                    data-items-mobile-s={1}
                    data-navs="true"
                  >
                    {TIMELINE_ITEMS_MARKUP}
                    <div className="roadmap roadmap-s6 roadmap-s6-1-3">
                      <div className="roadmap-head roadmap-head-s6">
                        <span className="roadmap-time roadmap-time-s6">
                          TBA
                        </span>
                      </div>
                      <p>More coming soon...</p>
                    </div>
                  </div>
                </div>
              </Zoom>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
