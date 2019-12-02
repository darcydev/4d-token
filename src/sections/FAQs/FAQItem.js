import React from "react";
import parse from "html-react-parser";

export default function FAQItem({ question, answer }) {
  return (
    <div className="faq-item col-md-6">
      <div className="nk-block-text">
        <h5 className="title title-sm">{question}</h5>
        <p>{parse(answer)}</p>
      </div>
    </div>
  );
}
