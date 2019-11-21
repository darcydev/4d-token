import React from "react";
import Zoom from "react-reveal/Zoom";

import {
  DISTRIBUTION_DATA,
  SALE_PROCEED_DATA
} from "./Data/TokenDistributionData";

import "./Sale.css";

import SectionHeading from "../../components/Headings/SectionHeading";
import ExtraSmallHeading from "../../components/Headings/ExtraSmallHeading";
import Countdown from "../../components/Countdown/Countdown";
import WholePie from "../../components/Charts/PieCharts/WholePie";
import HalfPie from "../../components/Charts/PieCharts/HalfPie";
import WaffleChart from "../../components/Charts/WaffleCharts/WaffleChart";

export default function Sale() {
  return (
    <section
      className="section section-tokensale bg-grad-vr-alt-to-theme tc-light pb-0 ov-v"
      id="ico-section"
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
                    <WholePie color="category10" data={DISTRIBUTION_DATA} />
                    <HalfPie color="category10" data={DISTRIBUTION_DATA} />
                    <WaffleChart color="category10" data={DISTRIBUTION_DATA} />
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
                    <WholePie color="category10" data={SALE_PROCEED_DATA} />
                    <HalfPie color="category10" data={SALE_PROCEED_DATA} />
                    <WaffleChart color="category10" data={SALE_PROCEED_DATA} />
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
