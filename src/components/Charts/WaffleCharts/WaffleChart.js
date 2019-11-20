import React from "react";
import { ResponsiveWaffle } from "@nivo/waffle";

export default function WaffleChart({ data, color }) {
  return (
    <div className="nivo-responsive-chart waffle-chart">
      <ResponsiveWaffle
        data={data}
        total={100}
        rows={15}
        columns={15}
        margin={{ top: 150, right: 10, bottom: 20, left: 10 }}
        emptyColor="#c0c0c0"
        colors={{ scheme: color }}
        borderColor={{ from: "color", modifiers: [["darker", 0.3]] }}
        animate={true}
        motionStiffness={90}
        motionDamping={11}
        isInteractive={false}
        legends={[
          {
            anchor: "top",
            direction: "column",
            justify: false,
            translateX: -60,
            translateY: -130,
            itemWidth: 100,
            itemHeight: 20,
            itemsSpacing: 5,
            symbolSize: 15,
            itemDirection: "left-to-right",
            itemTextColor: "#ffffff",
            effects: [
              {
                on: "hover",
                style: {
                  itemTextColor: "#000",
                  itemBackground: "#f7fafb"
                }
              }
            ]
          }
        ]}
      />
    </div>
  );
}
