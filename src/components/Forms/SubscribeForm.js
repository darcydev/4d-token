import React from "react";

export default function SubscribeForm() {
  return (
    <div className="wgs wgs-subscribe-form wgs-subscribe-form-s1">
      <h6 className="wgs-title wgs-title-s2 ttc tc-white">
        Subscribe to our newsleter
      </h6>
      <div className="wgs-body">
        <form
          action="form/subscribe.php"
          className="nk-form-submit"
          method="post"
        >
          <div className="field-inline field-inline-s4">
            <div className="field-wrap">
              <input
                className="input-solid round required email bg-theme-alt"
                type="text"
                name="contact-email"
                placeholder="Enter your email"
              />
              <input
                type="text"
                className="d-none"
                name="form-anti-honeypot"
                defaultValue
              />
            </div>
            <div className="submit-wrap">
              <button className="btn btn-round btn-md btn-auto btn-primary">
                Subscribe
              </button>
            </div>
          </div>
          <div className="form-results" />
        </form>
      </div>
    </div>
  );
}
