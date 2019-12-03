import React from "react";
import Zoom from "react-reveal/Zoom";

import { FAQ_HEADINGS } from "./Data/FAQData";

import SectionHeading from "../../components/Headings/SectionHeading";
import FAQItem from "./FAQItem";

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

  return (
    <section
      className="section bg-theme-alt tc-light pb-0 ov-v"
      id="faq-section"
    >
      <div className="container">
        <Zoom>
          <SectionHeading mainHeading="Questions & Answers" />
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
                    <FAQItem
                      question="What is DINT?"
                      answer="DINT was created to utilise the technology to create product for professional business management. 
                      DINT, and the entire 4D Platform, represent a core part of the unlimited possibilities in crypto services."
                    />
                    <FAQItem
                      question="What is the purpose of DINT?"
                      answer="The purpose of DINT is to solve problems without the need for owning crypto. The practical use of DINT is imperative to our vision."
                    />
                    <FAQItem
                      question="What can I purchase with DINT?"
                      answer="Whilst DINT is definitely an investment asset, it is not merely that! We offer a platform that can be used for
                      possibilities inside the platform while starting to add more options of crypto.
                      Thus, we are truly here to deliver an ultimate way of doing business in our modern world."
                    />
                    <FAQItem
                      question="What is the focus of DINT as a product?"
                      answer="We are not here to create a beautiful exchange or markets for our own token, or making it possible to get the top cryptos. 
                      We are here to deliver our kind of vision and mission in crypto. We always look forward with the use case. 
                      We must deliver to use, an alternative solution to moving from trust relaying model to proof in work in businesses."
                    />
                  </div>
                </div>
                <div className="tab-pane fade" id="faq-ico">
                  <div className="row gutter-vr-50px">
                    <FAQItem
                      question="How can I purchase DINT?"
                      answer="To purchase DINT, follow the instructions in the purchasing section.
                      <br />
                      You can also purchase by sending an email with the following information:
                      <li>DINT Amount</li>
                      <li>Your Deposit Address</li>
                      <li>Additional Payment Option</li>
                      <li>Name</li>
                      <li>Company</li>
                      <li>Mobile</li>
                      <li>Message</li>"
                    />
                    <FAQItem
                      question="How long will the ICO take?"
                      answer="Whilst we can't predict exactly how long it will take for DINT ICO to be completed, we can outline how many tokens have sold already in presale:
                      <li>10% we sell as (Pre-sale) 900,000 DINT</li>
                      <li>80% in 3 Public rounds 7,200,000 DINT</li>
                      <li>10% Development holds exclusively the project 900,000 DINT</li>"
                    />
                    <FAQItem
                      question="What is the price when listed?"
                      answer="The market will determine the value of DINT. Therefore, at this stage, we can't predict what the exact price will be."
                    />
                  </div>
                </div>
                <div className="tab-pane fade" id="faq-token">
                  <div className="row gutter-vr-50px">
                    <FAQItem
                      question="Token question 1"
                      answer="Token answer 1"
                    />
                    <FAQItem
                      question="Token question 2"
                      answer="Token answer 2"
                    />
                  </div>
                </div>
                <div className="tab-pane fade" id="faq-client">
                  <div className="row gutter-vr-50px">
                    <FAQItem
                      question="Who can use your platform?"
                      answer="The platform is open to anyone who is interested, specifically:
                      <li>Business Management</li>
                      <li>Business Networking</li>
                      <li>Business Development</li>
                      <li>Business Transformation into Digital</li>
                      <li>Business Professionals</li>"
                    />
                    <FAQItem
                      question="Business professionals"
                      answer="We aim to deliver a simple way for everyone’s benefit,
                    to just use it once it’s ready that’s what products are about."
                    />
                  </div>
                </div>
                <div className="tab-pane fade" id="faq-legal">
                  <div className="row gutter-vr-50px">
                    <FAQItem
                      question="What is the legal entity?"
                      answer="The legal entity for DINT is 4DInvestments Ltd (4DInvestments.org), headquarters located in Finland, Ireland and Seychelles, and an office in Barcelona.
                      Expanding to Estonia, UK, Portugal and UAE soon."
                    />
                    <FAQItem
                      question="Legal third-parties"
                      answer="We use regulated and well known, trusted third-parties to offer you an impressive & professional business management tool. 
                      Driven by you and performing by blockchain and smart contacts and a chain of the needed professional third-parties, to make it happen."
                    />
                    <FAQItem
                      question="Is 4DInvestments regulated?"
                      answer="We are currently in the process of getting Fiat permission for 4DMarkets, and traditional fund management permissions for assets, including crypto currencies.
                      In addition, DINToken and Platform will be regulated when required."
                    />
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
