import React from "react";
import Zoom from "react-reveal/Zoom";

import {
  FAQ_HEADINGS,
  FAQ_GENERAL_ANSWERS,
  FAQ_ICO_ANSWERS,
  FAQ_TOKEN_ANSWERS,
  FAQ_CLIENT_ANSWERS,
  FAQ_LEGAL_ANSWERS
} from "./Data/FAQData";

import SectionHeading from "../../components/Headings/SectionHeading";

export default function FAQs() {
  const FAQ_HEADINGS_MARKUP = FAQ_HEADINGS.map((v, i) => (
    <li>
      <a
        className={i === 0 ? "active" : ""}
        data-toggle="tab"
        href={`#faq-${v}`}
      >
        {v}
      </a>
    </li>
  ));

  const getAnswersMarkup = obj =>
    Object.keys(obj).map(k => (
      <div className="col-md-6">
        <div className="nk-block-text">
          <h5 className="title title-sm">{k}</h5>
          <p>{FAQ_GENERAL_ANSWERS[k]}</p>
        </div>
      </div>
    ));

  const FAQ_GENERAL_ANSWERS_MARKUP = getAnswersMarkup(FAQ_GENERAL_ANSWERS);
  const FAQ_ICO_ANSWERS_MARKUP = getAnswersMarkup(FAQ_ICO_ANSWERS);
  const FAQ_TOKEN_ANSWERS_MARKUP = getAnswersMarkup(FAQ_TOKEN_ANSWERS);
  const FAQ_CLIENT_ANSWERS_MARKUP = getAnswersMarkup(FAQ_CLIENT_ANSWERS);
  const FAQ_LEGAL_ANSWERS_MARKUP = getAnswersMarkup(FAQ_LEGAL_ANSWERS);

  return (
    <section className="section bg-theme-alt tc-light pb-0 ov-v" id="faq">
      <div className="container">
        <Zoom>
          <SectionHeading
            topHeading="Faqs"
            mainHeading="Frequently Asked Questions"
          />
        </Zoom>
        <div className="nk-block">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <div className="row gutter-vr-50px">
                <ul className="margin-auto nav tab-nav tab-nav-s2 tab-nav-center mgb-r">
                  {FAQ_HEADINGS_MARKUP}
                </ul>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="tab-content">
                <div className="tab-pane fade show active" id="faq-general">
                  <div className="row gutter-vr-50px">
                    {FAQ_GENERAL_ANSWERS_MARKUP}
                  </div>
                </div>
                <div className="tab-pane fade" id="faq-ico">
                  <div className="row gutter-vr-50px">
                    {FAQ_ICO_ANSWERS_MARKUP}
                  </div>
                </div>
                <div className="tab-pane fade" id="faq-token">
                  <div className="row gutter-vr-50px">
                    {FAQ_TOKEN_ANSWERS_MARKUP}
                  </div>
                </div>
                <div className="tab-pane fade" id="faq-client">
                  <div className="row gutter-vr-50px">
                    {FAQ_CLIENT_ANSWERS_MARKUP}
                  </div>
                </div>
                <div className="tab-pane fade" id="faq-legal">
                  <div className="row gutter-vr-50px">
                    {FAQ_LEGAL_ANSWERS_MARKUP}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ui-mask-left ui-mask-s5" />
    </section>
  );
}
