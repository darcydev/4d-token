import React from "react";
import { ResponsivePie } from "@nivo/pie";

import "./PieChart.css";

export default function HalfPie({ data, color }) {
  return (
    <div className="nivo-responsive-chart half-pie">
      <ResponsivePie
        data={data}
        startAngle={180}
        sortByValue={true}
        margin={{ top: 40, right: 10, bottom: 40, left: 100 }}
        innerRadius={0.4}
        padAngle={2}
        cornerRadius={10}
        colors={{ scheme: color }}
        borderWidth={1}
        borderColor={{ from: "color", modifiers: [["darker", 1]] }}
        radialLabel={(e) => `${e.id} (${e.value}%)`}
        radialLabelsSkipAngle={10}
        radialLabelsTextXOffset={6}
        radialLabelsTextColor="#41faa4"
        radialLabelsLinkDiagonalLength={10}
        radialLabelsLinkHorizontalLength={16}
        radialLabelsLinkStrokeWidth={2.5}
        radialLabelsLinkColor={{ from: "color" }}
        enableSlicesLabels={false}
        animate={true}
        motionStiffness={90}
        motionDamping={15}
        defs={[
          {
            id: "dots",
            type: "patternDots",
            background: "inherit",
            color: "rgba(255, 255, 255, 0.3)",
            size: 4,
            padding: 1,
            stagger: true
          },
          {
            id: "lines",
            type: "patternLines",
            background: "inherit",
            color: "rgba(255, 255, 255, 0.3)",
            rotation: -45,
            lineWidth: 6,
            spacing: 10
          }
        ]}
      />
    </div>
  );
}
