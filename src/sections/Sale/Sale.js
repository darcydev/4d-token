import React from "react";

import { DISTRIBUTION_DATA } from "./Data/DistributionData";

import Countdown from "../../components/Countdown/Countdown";
// import PieChart from "../../components/Charts/Victory/PieCharts/PieChart";
import PieChart from "../../components/Charts/Nivo/PieChart";

export default function Sale() {
  /* const DISTRIBUTION_CHART_DATA = DISTRIBUTION_DATA.map((v) => {}); */

  return (
    <section
      className="section section-tokensale bg-grad-vr-alt-to-theme tc-light pb-0 ov-v"
      id="tokens"
    >
      <div className="container">
        <div className="nk-block nk-block-token">
          <div className="section-head section-head-s3 wide-auto-sm text-center">
            <h6 className="title title-xs title-xs-s3 tc-primary">Token</h6>
            <h2 className="title">Pre-Sale &amp; Values</h2>
            <p>
              All sales are public sales. Reason for higher pricing is simply,
              because our use case development has already started and it's to
              be finished.
            </p>
          </div>
          <div className="row align-items-center justify-content-between gutter-vr-30px">
            <div className="col-lg-6">
              <div className="row gutter-vr-30px">
                <div className="col-sm-6">
                  <div className="stage-info">
                    <h6 className="title title-xs-s2">Start</h6>
                    <p>Feb 8, 2018 (9:00AM GMT)</p>
                  </div>
                </div>
                {/* .col  */}
                <div className="col-sm-6">
                  <div className="stage-info">
                    <h6 className="title title-xs-s2">
                      Number of tokens for sale
                    </h6>
                    <p>900,000 ICC (9%)</p>
                  </div>
                </div>
                {/* .col  */}
                <div className="col-sm-6">
                  <div className="stage-info">
                    <h6 className="title title-xs-s2">End</h6>
                    <p>Feb 20, 2018 (11:00AM GMT)</p>
                  </div>
                </div>
                {/* .col  */}
                <div className="col-sm-6">
                  <div className="stage-info">
                    <h6 className="title title-xs-s2">Tokens exchange rate</h6>
                    <p>1 ETH = 650 ICC, 1 BTC = 1940 ICC</p>
                  </div>
                </div>
                {/* .col  */}
                <div className="col-sm-6">
                  <div className="stage-info">
                    <h6 className="title title-xs-s2">Acceptable currencies</h6>
                    <p>FIAT, ETH, BTC, LTC</p>
                  </div>
                </div>
                {/* .col  */}
                <div className="col-sm-6">
                  <div className="stage-info">
                    <h6 className="title title-xs-s2">
                      Maximum transaction amount
                    </h6>
                    <p>10,000 DINT</p>
                  </div>
                </div>
                {/* .col  */}
              </div>
              {/* .row  */}
            </div>
            <div className="col-lg-5">
              <Countdown />
            </div>
          </div>
        </div>
        <div className="nk-block">
          <div className="row gutter-vr-40px justify-content-center">
            <div className="col-mb-10">
              <div className="single-chart text-center">
                <h3 className="title title-lg pdb-l">
                  Initial Token Distribution
                </h3>
                <div className="chart">
                  <PieChart
                    color="blues"
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
                        value: 25,
                        color: "hsl(299, 70%, 50%)"
                      },
                      {
                        id: "Expanding",
                        label: "Expanding",
                        value: 30,
                        color: "hsl(299, 70%, 50%)"
                      },
                      {
                        id: "unknown",
                        label: "unknown",
                        value: 5,
                        color: "hsl(299, 70%, 50%)"
                      }
                    ]}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-mb-10">
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
                        value: 25,
                        color: "hsl(299, 70%, 50%)"
                      },
                      {
                        id: "Expanding",
                        label: "Expanding",
                        value: 30,
                        color: "hsl(299, 70%, 50%)"
                      },
                      {
                        id: "unknown",
                        label: "unknown",
                        value: 5,
                        color: "hsl(299, 70%, 50%)"
                      }
                    ]}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* .section-tokensale */}
      <div className="ui-mask-left ui-mask-s3" />
    </section>
  );
}
