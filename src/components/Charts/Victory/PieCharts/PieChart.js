import React from "react";
import { VictoryPie } from "victory";

export default function PieChart({ data, colorScale }) {
  return (
    <VictoryPie
      data={data}
      colorScale={colorScale}
      responsive={true}
      innerRadius={80}
      padAngle={2}
    />
  );
}
