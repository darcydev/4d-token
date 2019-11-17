import React from "react";

export default function Countdown() {
  return (
    <div className="token-status token-status-s5 bg-grad no-bd round tc-light">
      <div className="token-box token-box-s3">
        <h4 className="title title-sm">DISTRIBUTION STARTING IN</h4>
        <div
          className="countdown-s3 countdown-s4 countdown"
          data-date="2020/01/15"
        />
      </div>
      <div className="token-action">
        <a className="btn btn-md btn-grad btn-grad-alternet btn-round" href="#">
          BUY TOKENS NOW
        </a>
      </div>
    </div>
  );
}
