import React from "react";

export default function Team() {
  return (
    <section className="section bg-theme-alt tc-light pb-0 ov-h" id="team">
      <div className="container">
        <div className="section-head section-head-s3 wide-auto-sm text-center">
          <h6 className="title title-xs title-xs-s3 tc-primary">Our Team</h6>
          <h2 className="title">The Leadership Team</h2>
          <p>
            The ICO Crypto Team combines a passion for esports, industry
            experise &amp; proven record in finance, development, marketing
            &amp; licensing
          </p>
        </div>
        {/* Section Head @s */}
        {/* Block @s */}
        <div className="nk-block nk-block-team-list team-list">
          <div className="row justify-content-center">
            <div className="col-lg-3 col-mb-6">
              <div className="team team-s5">
                <div className="team-photo team-photo-s1">
                  <img
                    src="images/team/sq-a.jpg"
                    alt="team"
                    className="no-bdrs"
                  />
                  <a
                    href="#team-popup-1"
                    className="team-show content-popup"
                    data-overlay="bg-grad-alt"
                  />
                </div>
                <h5 className="team-name title title-md">
                  Waylon <br />
                  Dalton
                </h5>
                <span className="team-position">CEO &amp; Lead Blockchain</span>
                <ul className="team-social team-social-vr team-social-s2">
                  <li>
                    <a href="#">
                      <em className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <em className="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <em className="fab fa-linkedin-in" />
                    </a>
                  </li>
                </ul>
              </div>
              {/* Start .team-profile  */}
              <div id="team-popup-1" className="team-popup mfp-hide">
                <a title="Close" className="mfp-close">
                  ×
                </a>
                <div className="row align-items-start">
                  <div className="col-md-6">
                    <div className="team-photo">
                      <img src="images/team/a-color.jpg" alt="team" />
                    </div>
                  </div>
                  {/* .col  */}
                  <div className="col-md-6">
                    <div className="team-popup-info pl-md-3">
                      <h3 className="team-name title title-lg pt-4">
                        Waylon Dalton
                      </h3>
                      <p className="team-position mb-1">
                        CEO &amp; Lead Blockchain{" "}
                      </p>
                      <ul className="team-social team-social-s2 mb-4">
                        <li>
                          <a href="#">
                            <em className="fab fa-facebook-f" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <em className="fab fa-linkedin-in" />
                          </a>
                        </li>
                      </ul>
                      <p>
                        He is a great man to work Lorem ipsum dolor sit amet,
                        consec tetur adipis icing elit. Simi lique, autem.{" "}
                      </p>
                      <p>
                        Tenetur quos facere magnam volupt ates quas esse Sedrep
                        ell endus mole stiae tates quas esse Sed repell endus
                        molesti aela uda ntium quis quam iusto minima thanks.
                      </p>
                      <div className="progress-list">
                        <div className="progress-wrap">
                          <div className="progress-title">
                            Blockchain{" "}
                            <span className="progress-amount">85%</span>
                          </div>
                          <div className="progress-bar progress-bar-xs bg-black-10">
                            <div
                              className="progress-percent bg-grad-alt"
                              data-percent={85}
                            />
                          </div>
                        </div>
                        <div className="progress-wrap">
                          <div className="progress-title">
                            Decentralization{" "}
                            <span className="progress-amount">68%</span>
                          </div>
                          <div className="progress-bar progress-bar-xs bg-black-10">
                            <div
                              className="progress-percent bg-grad-alt"
                              data-percent={68}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* .col  */}
                </div>
                {/* .row  */}
              </div>
              {/* .team-profile  */}
            </div>
            {/* .col */}
            <div className="col-lg-3 col-mb-6">
              <div className="team team-s5">
                <div className="team-photo team-photo-s1">
                  <img
                    src="images/team/sq-b.jpg"
                    alt="team"
                    className="no-bdrs"
                  />
                  <a
                    href="#team-popup-2"
                    className="team-show content-popup"
                    data-overlay="bg-grad-alt"
                  />
                </div>
                <h5 className="team-name title title-md">
                  Jonathan <br />
                  Rios
                </h5>
                <span className="team-position">
                  CTO &amp; Software Engineer
                </span>
                <ul className="team-social team-social-vr team-social-s2">
                  <li>
                    <a href="#">
                      <em className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <em className="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <em className="fab fa-linkedin-in" />
                    </a>
                  </li>
                </ul>
              </div>
              {/* Start .team-popup  */}
              <div id="team-popup-2" className="team-popup mfp-hide">
                <a title="Close" className="mfp-close">
                  ×
                </a>
                <div className="row align-items-start">
                  <div className="col-md-6">
                    <div className="team-photo">
                      <img src="images/team/b-color.jpg" alt="team" />
                    </div>
                  </div>
                  {/* .col  */}
                  <div className="col-md-6">
                    <div className="team-popup-info pl-md-3">
                      <h3 className="team-name title title-lg pt-4">
                        Jonathan Rios
                      </h3>
                      <p className="team-position mb-1">
                        CTO &amp; Software Engineer
                      </p>
                      <ul className="team-social team-social-s2 mb-4">
                        <li>
                          <a href="#">
                            <em className="fab fa-facebook-f" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <em className="fab fa-linkedin-in" />
                          </a>
                        </li>
                      </ul>
                      <p>
                        He is a great man to work Lorem ipsum dolor sit amet,
                        consec tetur adipis icing elit. Simi lique, autem.{" "}
                      </p>
                      <p>
                        Tenetur quos facere magnam volupt ates quas esse Sedrep
                        ell endus mole stiae tates quas esse Sed repell endus
                        molesti aela uda ntium quis quam iusto minima thanks.
                      </p>
                    </div>
                  </div>
                  {/* .col  */}
                </div>
                {/* .row  */}
              </div>
              {/* .team-popup  */}
            </div>
            {/* .col */}
            <div className="col-lg-3 col-mb-6">
              <div className="team team-s5">
                <div className="team-photo team-photo-s1">
                  <img
                    src="images/team/sq-c.jpg"
                    alt="team"
                    className="no-bdrs"
                  />
                  <a
                    href="#team-popup-3"
                    className="team-show content-popup"
                    data-overlay="bg-grad-alt"
                  />
                </div>
                <h5 className="team-name title title-md">
                  Jason <br />
                  Morales
                </h5>
                <span className="team-position">Sr.Backend developer</span>
                <ul className="team-social team-social-vr team-social-s2">
                  <li>
                    <a href="#">
                      <em className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <em className="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <em className="fab fa-linkedin-in" />
                    </a>
                  </li>
                </ul>
              </div>
              {/* Start .team-profile  */}
              <div id="team-popup-3" className="team-popup mfp-hide">
                <a title="Close" className="mfp-close">
                  ×
                </a>
                <div className="row align-items-start">
                  <div className="col-md-6">
                    <div className="team-photo">
                      <img src="images/team/c-color.jpg" alt="team" />
                    </div>
                  </div>
                  {/* .col  */}
                  <div className="col-md-6">
                    <div className="team-popup-info pl-md-3">
                      <h3 className="team-name title title-lg pt-4">
                        Jason Morales
                      </h3>
                      <p className="team-position mb-1">Sr.Backend developer</p>
                      <ul className="team-social team-social-s2 mb-4">
                        <li>
                          <a href="#">
                            <em className="fab fa-facebook-f" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <em className="fab fa-linkedin-in" />
                          </a>
                        </li>
                      </ul>
                      <p>
                        He is a great man to work Lorem ipsum dolor sit amet,
                        consec tetur adipis icing elit. Simi lique, autem.{" "}
                      </p>
                      <p>
                        Tenetur quos facere magnam volupt ates quas esse Sedrep
                        ell endus mole stiae tates quas esse Sed repell endus
                        molesti aela uda ntium quis quam iusto minima thanks.
                      </p>
                    </div>
                  </div>
                  {/* .col  */}
                </div>
                {/* .row  */}
              </div>
              {/* .team-profile  */}
            </div>
            {/* .col */}
            <div className="col-lg-3 col-mb-6">
              <div className="team team-s5">
                <div className="team-photo team-photo-s1">
                  <img
                    src="images/team/sq-d.jpg"
                    alt="team"
                    className="no-bdrs"
                  />
                  <a
                    href="#team-popup-4"
                    className="team-show content-popup"
                    data-overlay="bg-grad-alt"
                  />
                </div>
                <h5 className="team-name title title-md">
                  Joseph <br />
                  Jordan
                </h5>
                <span className="team-position">Software Engineer</span>
                <ul className="team-social team-social-vr team-social-s2">
                  <li>
                    <a href="#">
                      <em className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <em className="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <em className="fab fa-linkedin-in" />
                    </a>
                  </li>
                </ul>
              </div>
              {/* Start .team-profile  */}
              <div id="team-popup-4" className="team-popup mfp-hide">
                <a title="Close" className="mfp-close">
                  ×
                </a>
                <div className="row align-items-start">
                  <div className="col-md-6">
                    <div className="team-photo">
                      <img src="images/team/d-color.jpg" alt="team" />
                    </div>
                  </div>
                  {/* .col  */}
                  <div className="col-md-6">
                    <div className="team-popup-info pl-md-3">
                      <h3 className="team-name title title-lg pt-4">
                        Joseph Jordan
                      </h3>
                      <p className="team-position mb-1">Software Engineer</p>
                      <ul className="team-social team-social-s2 mb-4">
                        <li>
                          <a href="#">
                            <em className="fab fa-facebook-f" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <em className="fab fa-linkedin-in" />
                          </a>
                        </li>
                      </ul>
                      <p>
                        He is a great man to work Lorem ipsum dolor sit amet,
                        consec tetur adipis icing elit. Simi lique, autem.{" "}
                      </p>
                      <p>
                        Tenetur quos facere magnam volupt ates quas esse Sedrep
                        ell endus mole stiae tates quas esse Sed repell endus
                        molesti aela uda ntium quis quam iusto minima thanks.
                      </p>
                    </div>
                  </div>
                  {/* .col  */}
                </div>
                {/* .row  */}
              </div>
              {/* .team-profile  */}
            </div>
            {/* .col */}
          </div>
          {/* .row */}
        </div>
        {/* .block @e */}
      </div>
      <div className="nk-ovm shape-r" />
      <div className="ui-mask-right ui-mask-s4" />
    </section>
  );
}
