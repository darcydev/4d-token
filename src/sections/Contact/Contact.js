import React from "react";

import { CONTACT_DATA } from "../../Data/ContactData";
import SectionHeading from "../../components/Headings/SectionHeading";
import ContactForm from "../../components/Forms/ContactForm";

export default function Contact() {
  return (
    <section
      className="section section-contact bg-theme-alt tc-light ov-h"
      id="contact"
    >
      <div className="container">
        <SectionHeading topHeading="contact" mainHeading="get in touch" />
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
                        <span>{CONTACT_DATA.email}</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </div>
      <div className="ui-mask-right ui-mask-s6" />
    </section>
  );
}
