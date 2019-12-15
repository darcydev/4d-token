import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export default function VerTimelineItem({ date, title, subtitle, text, logo }) {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
      date={date}
      icon={logo}
    >
      <h4 className="vertical-timeline-element-title">{title}</h4>
      <h6 className="vertical-timeline-element-subtitle">{subtitle}</h6>
      <p>{text}</p>
    </VerticalTimelineElement>
  );
}
