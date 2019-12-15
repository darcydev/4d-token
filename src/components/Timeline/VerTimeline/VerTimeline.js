import React from "react";
import { VerticalTimeline } from "react-vertical-timeline-component";
import { FaCalendarAlt } from "react-icons/fa";
import { MdDone } from "react-icons/md";

// CSS
import "react-vertical-timeline-component/style.min.css";
import "./VerTimeline.css";
// Data
import { TIMELINE_DATA } from "../Data/TimelineData";
// Components
import VerTimelineItem from "./VerTimelineItem";
import SectionHeading from "../../Headings/SectionHeading";

export default function VerTimeline({ sectionMainHeading, sectionTopHeading }) {
  const TIMELINE_ITEMS_MARKUP = TIMELINE_DATA.map((v) => (
    <VerTimelineItem
      date={v.date}
      title={v.description}
      subtitle={v.subtitle}
      logo={
        v.date === "Coming soon..." ? (
          <FaCalendarAlt color="#f1a7a7" size={50} />
        ) : (
          <MdDone color="green" size={30} />
        )
      }
    />
  ));

  return (
    <section className="section bg-theme tc-light ov-h">
      <SectionHeading
        topHeading={sectionTopHeading}
        mainHeading={sectionMainHeading}
      />
      <VerticalTimeline>{TIMELINE_ITEMS_MARKUP}</VerticalTimeline>
    </section>
  );
}
