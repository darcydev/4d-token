import React from "react";
import Zoom from "react-reveal/Zoom";

import { CARDS_TEXT } from "./Data/CardsText";

import SectionHeading from "../../components/Headings/SectionHeading";
import FlexWrapCards from "../../components/Cards/Containers/FlexWrapCards";
import LinkButton from "../../components/Buttons/LinkButton";

export default function Advantage() {
  return (
    <section className="section bg-theme-alt tc-light pb-0 ov-v">
      <div className="container">
        <Zoom>
          <SectionHeading
            topHeading="why DINT"
            mainHeading="competitve advantage"
            subHeading="We are here to deliver our own vision and it's mission to make it. With our own 4DMarkets, DINT Token and our very own use case which was developed to solve a one unique problem, but we solved and created something more."
          />
        </Zoom>
        <div className="nk-block">
          <div className="row justify-content-center gutter-vr-30px">
            <Zoom>
              <FlexWrapCards flexWidth={32} content={CARDS_TEXT} />
            </Zoom>
          </div>
          <div className="text-center pdt-r">
            <LinkButton
              link="https://trade.4dmarkets.com/"
              classes="btn-grad btn-md mag-s"
              text="Enter Exchange"
            />
            <LinkButton
              link="#"
              classes="btn-grad btn-md mag-s"
              text="Download Whitepaper"
            />
            <LinkButton
              link="#"
              classes="btn-grad btn-md mag-s"
              text="Download Platform"
            />
          </div>
        </div>
      </div>
      <div className="ui-mask-right ui-mask-s2" />
    </section>
  );
}
