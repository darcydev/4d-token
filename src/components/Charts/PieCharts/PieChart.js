import React from "react";
import styled from "styled-components";
import { ResponsivePie } from "@nivo/pie";

import "./PieChart.css";

export default function PieChart({ data, color }) {
  // const COLORS_MARKUP = `{ scheme: ${color} }`;

  return (
    <Container>
      <ResponsivePie
        data={data}
        margin={{ top: 40, right: 10, bottom: 40, left: 10 }}
        innerRadius={0.4}
        padAngle={2}
        cornerRadius={10}
        colors={{ scheme: color }}
        borderWidth={1}
        borderColor={{ from: "color", modifiers: [["darker", 1]] }}
        radialLabel={e => `${e.id} (${e.value}%)`}
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
        isInteractive={false}
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
    </Container>
  );
}

const Container = styled.div`
  height: 400px;
`;
