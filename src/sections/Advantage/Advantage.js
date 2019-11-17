import React from "react";
import Zoom from "react-reveal/Zoom";

import { CARDS_TEXT } from "./Data/CardsText";

import FlexWrapCards from "../../components/Cards/Containers/FlexWrapCards";
import SectionHeading from "../../components/Headings/SectionHeading/SectionHeading";
import ImageCard from "../../components/Cards/ImageCards/ImageCard";

export default function Advantage() {
  return (
    <section className="section  bg-theme-alt tc-light pb-0 ov-v">
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
            <FlexWrapCards flexWidth={32} content={CARDS_TEXT} />
          </div>
          <div className="text-center pdt-r">
            <ul className="btn-grp">
              <li>
                <a href="#" className="btn btn-grad btn-md">
                  Enter Exchange
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="ui-mask-right ui-mask-s2" />
    </section>
  );
}
