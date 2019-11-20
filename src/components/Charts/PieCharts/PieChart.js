import React from "react";
import styled from "styled-components";
import media from "styled-media-query";
import { ResponsivePie } from "@nivo/pie";

import "./PieChart.css";

export default function PieChart({ data, color }) {
  return (
    <>
      {/* THE FULL WHEEL PIE - displays adjust on media */}
      <FullWheel>
        <Container>
          <ResponsivePie
            data={data}
            margin={{ top: 40, right: 80, bottom: 40, left: 80 }}
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
      </FullWheel>
      <HalfWheel>
        <Container>
          <ResponsivePie
            data={data}
            startAngle={180}
            sortByValue={true}
            margin={{ top: 40, right: 40, bottom: 40, left: 200 }}
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
      </HalfWheel>
    </>
  );
}

const FullWheel = styled.div`
  ${media.lessThan("medium")`
    display: none;
  `}
`;

const HalfWheel = styled.div`
  display: none;

  ${media.lessThan("medium")`
    display: block;
  `}
`;

const Container = styled.div`
  height: 400px;

  g text {
    font-family: "Poppins", sans-serif !important;
    font-size: 14px !important;
    text-transform: capitalize !important;
  }
`;
