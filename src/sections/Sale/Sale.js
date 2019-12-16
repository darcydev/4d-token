import React from 'react';
import Zoom from 'react-reveal/Zoom';
import NumberFormat from 'react-number-format';

import {
  DISTRIBUTION_DATA,
  SALE_PROCEED_DATA,
  EXCHANGE_INCOME_DATA
} from './Data/TokenDistributionData';
import { SALES_DATES, AMOUNTS } from './Data/SalesData';

import './Sale.css';

import SectionHeading from '../../components/Headings/SectionHeading';
import ExtraSmallHeading from '../../components/Headings/ExtraSmallHeading';
import Countdown from '../../components/Countdown/Countdown';
import WholePie from '../../components/Charts/PieCharts/WholePie';
import HalfPie from '../../components/Charts/PieCharts/HalfPie';
import WaffleChart from '../../components/Charts/WaffleCharts/WaffleChart';
import BubbleChart from '../../components/Charts/BubbleCharts/BubbleChart';

export default function Sale() {
  const formatNumber = num => (
    <NumberFormat value={num} displayType={'text'} thousandSeparator={true} />
  );

  const SMALL_HEADINGS_MARKUP = Object.keys(AMOUNTS).map(key => {
    const amount = formatNumber(AMOUNTS[key].amount);

    return <ExtraSmallHeading mainHeading={key} subHeading={amount} />;
  });

  return (
    <div className="container">
      <div className="nk-block nk-block-token">
        <Zoom>
          <SectionHeading
            topHeading="token"
            mainHeading="Pre-Sale Values"
            subHeading="All sales are public sales. DINToken is a premium token due to our use-case development."
          />
        </Zoom>
        <div className="row align-items-center justify-content-between gutter-vr-30px">
          <Zoom>
            <div className="col-lg-6">
              <div className="row gutter-vr-30px">
                {SMALL_HEADINGS_MARKUP}
                <ExtraSmallHeading
                  mainHeading="Final Round"
                  subHeading={formatNumber(3200000)}
                />
                <ExtraSmallHeading
                  mainHeading="We Accept"
                  subHeading="ETH, BTC, LTC, XRP"
                />
                <ExtraSmallHeading
                  mainHeading="Max transaction amount"
                  subHeading="10,000 DINT"
                />
              </div>
            </div>
          </Zoom>
          <Zoom>
            <div className="col-lg-5">
              <Countdown date={SALES_DATES.publicRoundOneStartDate} />
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
  );
}
