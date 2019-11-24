import React from "react";

export default function Countdown({ date }) {
  return (
    <div className="token-status token-status-s5 bg-grad no-bd round tc-light">
      <div className="token-box token-box-s3">
        <h4 className="title title-sm">PUBLIC ROUND 1 STARTS</h4>
        <div className="countdown-s3 countdown-s4 countdown" data-date={date} />
      </div>
      <div className="token-action">
        <a
          className="btn btn-md btn-grad btn-grad-alternet btn-round"
          href="https://trade.4dmarkets.com/#/"
          target="_blank"
          rel="noopener noreferrer"
        >
          BUY TOKENS
        </a>
      </div>
    </div>
  );
}
