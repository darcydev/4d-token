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
            subHeading="With help from our teams, contributors and investors these are the
              milestones we are looking forward to achieve."
          />
        </Zoom>
        <div className="nk-block">
          <div className="row justify-content-center gutter-vr-30px">
            <Zoom>
              <FlexWrapCards flexWidth={32} content={CARDS_TEXT} />
            </Zoom>
          </div>
          <div className="text-center pdt-r">
            <ul className="btn-grp">
              <li>
                <LinkButton
                  link="https://trade.4dmarkets.com/"
                  classes="btn-grad btn-md"
                  text="Enter Exchange"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="ui-mask-right ui-mask-s2" />
    </section>
  );
}
