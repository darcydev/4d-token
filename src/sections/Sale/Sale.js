import React from "react";
import Zoom from "react-reveal/Zoom";

import { DISTRIBUTION_DATA } from "./Data/DistributionData";

import SectionHeading from "../../components/Headings/SectionHeading";
import ExtraSmallHeading from "../../components/Headings/ExtraSmallHeading";
import Countdown from "../../components/Countdown/Countdown";
import PieChart from "../../components/Charts/PieCharts/PieChart";

export default function Sale() {
  /* const DISTRIBUTION_CHART_DATA = DISTRIBUTION_DATA.map((v) => {}); */

  return (
    <section
      className="section section-tokensale bg-grad-vr-alt-to-theme tc-light pb-0 ov-v"
      id="tokens"
    >
      <div className="container">
        <div className="nk-block nk-block-token">
          <Zoom>
            <SectionHeading
              topHeading="token"
              mainHeading="Pre-Sale Values"
              subHeading="All sales are public sales. Reason for higher pricing is simply,
              because our use case development has already started and it's to
              be finished."
            />
          </Zoom>
          <div className="row align-items-center justify-content-between gutter-vr-30px">
            <Zoom>
              <div className="col-lg-6">
                <div className="row gutter-vr-30px">
                  <ExtraSmallHeading
                    mainHeading="Public Round 1"
                    subHeading="1,600,000 DINT @ $0.34"
                  />
                  <ExtraSmallHeading
                    mainHeading="Public Round 2"
                    subHeading="2,500,000 DINT @ $0.29"
                  />
                  <ExtraSmallHeading
                    mainHeading="Final Round"
                    subHeading="4,000,000 DINT @ $-"
                  />
                  <ExtraSmallHeading
                    mainHeading="We Accept"
                    subHeading="FIAT, ETH, BTC, LTC"
                  />
                  <ExtraSmallHeading
                    mainHeading="Maximum transaction amount"
                    subHeading="10,000 DINT"
                  />
                </div>
              </div>
            </Zoom>
            <Zoom>
              <div className="col-lg-5">
                <Countdown />
              </div>
            </Zoom>
          </div>
        </div>
        <div className="nk-block">
          <div className="row gutter-vr-40px justify-content-center">
            <Zoom>
              <div className="col-12">
                <div className="single-chart text-center">
                  <h3 className="title title-lg pdb-l">
                    Initial Token Distribution
                  </h3>
                  <div className="chart">
                    <PieChart
                      color="reds"
                      data={[
                        {
                          id: "Public Round 1",
                          label: "Public Round 1",
                          value: 18,
                          color: "hsl(335, 70%, 50%)"
                        },
                        {
                          id: "Public Round 2",
                          label: "Public Round 2",
                          value: 28,
                          color: "hsl(116, 70%, 50%)"
                        },
                        {
                          id: "Final Round",
                          label: "Final Round",
                          value: 44,
                          color: "hsl(104, 70%, 50%)"
                        },
                        {
                          id: "Development Holding",
                          label: "Development Holding",
                          value: 10,
                          color: "hsl(104, 70%, 50%)"
                        }
                      ]}
                    />
                  </div>
                </div>
              </div>
            </Zoom>
            <Zoom>
              <div className="col-12">
                <div className="single-chart text-center">
                  <h3 className="title title-lg pdb-l">
                    Sale Proceed Allocation
                  </h3>
                  <div className="chart">
                    <PieChart
                      color="greens"
                      data={[
                        {
                          id: "Team",
                          label: "Team",
                          value: 15,
                          color: "hsl(335, 70%, 50%)"
                        },
                        {
                          id: "Legal",
                          label: "Legal",
                          value: 15,
                          color: "hsl(116, 70%, 50%)"
                        },
                        {
                          id: "Marketing",
                          label: "Marketing",
                          value: 10,
                          color: "hsl(104, 70%, 50%)"
                        },
                        {
                          id: "Platform Development",
                          label: "Platform Development",
                          value: 30,
                          color: "hsl(299, 70%, 50%)"
                        },
                        {
                          id: "Expanding",
                          label: "Expanding",
                          value: 30,
                          color: "hsl(299, 70%, 50%)"
                        }
                      ]}
                    />
                  </div>
                </div>
              </div>
            </Zoom>
          </div>
        </div>
      </div>
      <div className="ui-mask-left ui-mask-s3" />
    </section>
  );
}
