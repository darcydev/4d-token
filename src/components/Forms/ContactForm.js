import React from "react";

export default function ContactForm() {
  return (
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
            <label className="field-label field-label-line">Your Name</label>
          </div>
          <div className="field-item">
            <input
              name="contact-email"
              type="email"
              className="input-line required email"
            />
            <label className="field-label field-label-line">Your Email</label>
          </div>
          <div className="field-item">
            <textarea
              name="contact-message"
              className="input-line input-textarea required"
              defaultValue={""}
            />
            <label className="field-label field-label-line">Your Message</label>
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
  );
}
