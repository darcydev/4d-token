import React from "react";
import { ResponsiveBubble } from "@nivo/circle-packing";

export default function BubbleChart({ data, color }) {
  return (
    <div className="nivo-responsive-chart bubble-chart">
      <ResponsiveBubble
        root={data}
        margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
        identity="name"
        value="loc"
        colors={{ scheme: "nivo" }}
        padding={6}
        labelTextColor="black"
        borderWidth={2}
        borderColor={{ from: "color" }}
        fill={[{ match: { depth: 1 }, id: "lines" }]}
        animate={true}
        motionStiffness={90}
        motionDamping={12}
        isZoomable={false}
      />
    </div>
  );
}
