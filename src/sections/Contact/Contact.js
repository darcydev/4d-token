import React from "react";

export default function Contact() {
  return (
    <section
      className="section section-contact bg-theme-alt tc-light ov-h"
      id="contact"
    >
      <div className="container">
        <div className="section-head section-head-s3 wide-auto-sm text-center">
          <h6 className="title title-xs title-xs-s3 tc-primary">Contact</h6>
          <h2 className="title">Get In Touch</h2>
        </div>
        {/* Block @s */}
        <div className="nk-block block-contact">
          <div className="row justify-content-center gutter-vr-30px">
            <div className="col-lg-4">
              <div className="pdt-s">
                <div className="d-flex flex-column h-100">
                  <p className="tc-white">
                    Any question? Reach out to us and we’ll get back to you
                    shortly.
                  </p>
                  <ul className="contact-list contact-list-s3">
                    <li>
                      <em className="contact-icon contact-icon-s3 fas fa-phone" />
                      <div className="contact-text">
                        <span>+44 0123 4567</span>
                      </div>
                    </li>
                    <li>
                      <em className="contact-icon contact-icon-s3 fas fa-envelope" />
                      <div className="contact-text">
                        <span>info@company.com</span>
                      </div>
                    </li>
                    <li>
                      <em className="contact-icon contact-icon-s3 fas fa-paper-plane" />
                      <div className="contact-text">
                        <span>Join us on Telegram</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* .col */}
            <div className="col-lg-6">
              <div className>
                <form
                  id="contact-form"
                  className="nk-form-submit"
                  action="form/contact.php"
                  method="post"
                >
                  <div className="field-item">
                    <input
                      name="contact-name"
                      type="text"
                      className="input-line required"
                    />
                    <label className="field-label field-label-line">
                      Your Name
                    </label>
                  </div>
                  <div className="field-item">
                    <input
                      name="contact-email"
                      type="email"
                      className="input-line required email"
                    />
                    <label className="field-label field-label-line">
                      Your Email
                    </label>
                  </div>
                  <div className="field-item">
                    <textarea
                      name="contact-message"
                      className="input-line input-textarea required"
                      defaultValue={""}
                    />
                    <label className="field-label field-label-line">
                      Your Message
                    </label>
                  </div>
                  <input
                    type="text"
                    className="d-none"
                    name="form-anti-honeypot"
                    defaultValue
                  />
                  <div className="row">
                    <div className="col-sm-4">
                      <button type="submit" className="btn btn-md btn-grad">
                        Submit
                      </button>
                    </div>
                    <div className="col-sm-8">
                      <div className="form-results" />
                    </div>
                  </div>
                </form>
              </div>
            </div>
            {/* .col */}
          </div>
          {/* .row */}
        </div>
        {/* .block @e */}
      </div>
      <div className="ui-mask-right ui-mask-s6" />
    </section>
  );
}
