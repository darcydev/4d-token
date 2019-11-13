import React from "react";

export default function Footer() {
  return (
    <footer className="nk-footer bg-theme-dark">
      <hr className="hr hr-white-5 my-0" />
      <section className="section section-m bg-transparent tc-light ov-v">
        <div className="container">
          {/* Block @s */}
          <div className="nk-block block-footer">
            <div className="row justify-content-between gutter-vr-30px">
              <div className="col-lg-4 col-sm-6">
                <div className="wgs wgs-menu">
                  <a href="#" className="wgs-logo">
                    <img src="images/logo-full-white.png" alt="logo" />
                  </a>
                  <ul className="social">
                    <li>
                      <a href="#">
                        <em className="social-icon fab fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <em className="social-icon fab fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <em className="social-icon fab fa-medium-m" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <em className="social-icon fab fa-github" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <em className="social-icon fab fa-bitcoin" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* .col */}
              <div className="col-lg-4 col-sm-6">
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
              </div>
              {/* .col */}
              <div className="col-lg-4">
                <div className="wgs wgs-menu">
                  <div className="wgs-body ml-lg-n3">
                    <ul className="wgs-links wgs-links-s4 wgs-links-3clumn">
                      <li>
                        <a href="#">What is ICO</a>
                      </li>
                      <li>
                        <a href="#">ICO Apps</a>
                      </li>
                      <li>
                        <a href="#">Join Us</a>
                      </li>
                      <li>
                        <a href="#">Tokens</a>
                      </li>
                      <li>
                        <a href="#">Whitepaper</a>
                      </li>
                      <li>
                        <a href="#">Contact</a>
                      </li>
                      <li>
                        <a href="#">Roadmap</a>
                      </li>
                      <li>
                        <a href="#">Teams</a>
                      </li>
                      <li>
                        <a href="#">FAQ</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* .col */}
            </div>
            {/* .row */}
            <div className="footer-bottom pdt-l">
              <div className="row justify-content-center">
                <div className="col-lg-7">
                  <div className="copyright-text copyright-text-s3">
                    <p>
                      <span className="d-block">
                        Copyright © 2019, ICO Crypto. Template Made By{" "}
                        <a href="#">Softnio</a> &amp; Handcrafted by iO.
                      </span>{" "}
                      All trademarks and copyrights belong to their respective
                      owners.
                    </p>
                  </div>
                </div>
                <div className="col-lg-5 text-lg-right">
                  <ul className="footer-links">
                    <li>
                      <a href="#">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="#">Terms &amp; Conditions</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* .row */}
          </div>
          {/* .block @e */}
        </div>
      </section>
      <div className="nk-ovm shape-t h-75" />
    </footer>
  );
}
