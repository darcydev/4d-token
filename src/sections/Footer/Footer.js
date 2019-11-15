import React from "react";
import Logo from "../../components/Logo/Logo";

import { NAV_BAR_LINKS } from "../../Data/NavLinks";
import SubscribeForm from "../../components/Forms/SubscribeForm";
import NavBarItem from "../../components/NavBar/NavBarItem";

export default function Footer() {
  const ITEMS_MARKUP = NAV_BAR_LINKS.map((v) => (
    <NavBarItem key={v.title} title={v.title} href={v.link} />
  ));

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
                  <Logo />
                  {/* <ul className="social">
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
                  </ul> */}
                </div>
              </div>
              {/* .col */}
              <div className="col-lg-4 col-sm-6">
                <SubscribeForm />
              </div>
              {/* .col */}
              <div className="col-lg-4">
                <div className="wgs wgs-menu">
                  <div className="wgs-body ml-lg-n3">
                    <ul className="wgs-links wgs-links-s4 wgs-links-3clumn">
                      {ITEMS_MARKUP}
                    </ul>
                  </div>
                </div>
              </div>
              {/* .col */}
            </div>
          </div>
          {/* .block @e */}
        </div>
      </section>
      <div className="nk-ovm shape-t h-75" />
    </footer>
  );
}
