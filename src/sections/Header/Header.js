import React from "react";

export default function Header() {
  return (
    <div className="header-main">
      <div className="header-container container">
        <div className="header-wrap">
          {/* Logo @s */}
          <div className="header-logo header-logo-ls logo">
            <a href="./" className="logo-link">
              <img
                className="logo-dark"
                src="images/logo.png"
                srcSet="images/logo2x.png 2x"
                alt="logo"
              />
              <img
                className="logo-light"
                src="images/logo-white.png"
                srcSet="images/logo-white2x.png 2x"
                alt="logo"
              />
            </a>
          </div>
          {/* Menu Toogle @s */}
          <div className="header-nav-toggle">
            <a
              href="#"
              className="navbar-toggle"
              data-menu-toggle="example-menu-04"
            >
              <div className="toggle-line">
                <span />
              </div>
            </a>
          </div>
          {/* Menu @s */}
          <div className="header-navbar header-navbar-s3">
            <nav
              className="header-menu justify-content-between"
              id="example-menu-04"
            >
              <ul className="menu menu-s2">
                <li className="menu-item">
                  <a className="menu-link nav-link" href="#ico">
                    What is ICO
                  </a>
                </li>
                <li className="menu-item">
                  <a className="menu-link nav-link" href="#tokens">
                    Tokens
                  </a>
                </li>
                <li className="menu-item">
                  <a className="menu-link nav-link" href="#roadmap">
                    Roadmap
                  </a>
                </li>
                <li className="menu-item">
                  <a className="menu-link nav-link" href="#apps">
                    Apps
                  </a>
                </li>
                <li className="menu-item">
                  <a className="menu-link nav-link" href="#team">
                    Team
                  </a>
                </li>
                <li className="menu-item">
                  <a className="menu-link nav-link" href="#faq">
                    Faq
                  </a>
                </li>
                <li className="menu-item">
                  <a className="menu-link nav-link" href="#contact">
                    Contact
                  </a>
                </li>
              </ul>
              <ul className="menu-btns">
                <li>
                  <a
                    href="#"
                    data-toggle="modal"
                    data-target="#register-popup"
                    className="btn btn-rg btn-auto btn-outline btn-grad on-bg-theme-dark-alt"
                  >
                    <span>Sign Up</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    data-toggle="modal"
                    data-target="#login-popup"
                    className="btn btn-rg btn-auto btn-outline btn-grad on-bg-theme-dark-alt"
                  >
                    <span>Log In</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          {/* .header-navbar @e */}
        </div>
      </div>
    </div>
  );
}
