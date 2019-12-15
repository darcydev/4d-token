import React from "react";
import Zoom from "react-reveal/Zoom";
import { Timeline, Events, UrlButton, TextEvent } from "@merc/react-timeline";

import "./HorTimeline.css";

import { TIMELINE_DATA } from "../Data/TimelineData";

import SectionHeading from "../../Headings/SectionHeading";

export default function HorTimeline() {
  const TIMLINE_ITEM_MARKUP = TIMELINE_DATA.map((v) => (
    <TextEvent date={v.date} text={v.description} />
  ));

  return (
    <section className="section bg-theme tc-light ov-h">
      <SectionHeading
        topHeading="What We've Achieved"
        mainHeading="Achieved Milestones"
      />
      <Timeline>
        <Events>
          {TIMLINE_ITEM_MARKUP}
          {/* <TextEvent date="January 2015" text="The planning started" />
          <TextEvent date="March 2018" text="4D Investments" />
          <TextEvent date="October 2018" text="4D Markets" />
          <TextEvent date="November 2019" text="4D Investments Finland" />
          <TextEvent date="December 2019" text="DINT - Investment Token" />
          <TextEvent
            date="Coming soon..."
            text="Our Blockchain Product & Whitepaper"
          />
          <TextEvent date="Coming soon..." text="4DIndex.com" />
          <TextEvent date="Coming soon..." text="Partnerships Announced" />
          <TextEvent
            date="Coming soon..."
            text="Networking and Expansion Plans"
          /> */}
        </Events>
      </Timeline>
    </section>
  );
}
