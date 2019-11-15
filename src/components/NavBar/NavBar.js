import React, { useState } from "react";
import styled from "styled-components";
import { FaAngleDoubleDown, FaAngleDoubleUp } from "react-icons/fa";
// components
import Logo from "../Logo/Logo";
import NavBarItem from "./NavBarItem";
// data
import { NAV_BAR_LINKS } from "../../Data/NavLinks";

export default function NavBar() {
  const ITEMS_MARKUP = NAV_BAR_LINKS.map((v) => (
    <NavBarItem key={v.title} title={v.title} link={v.link} />
  ));

  return (
    <div className="header-main">
      <div className="header-container container">
        <div className="header-wrap">
          <div className="header-logo header-logo-ls logo">
            <Logo />
          </div>
          {/* Menu Toogle @s */}
          {/* TODO navbar toggle button not working */}
          <div className="header-nav-toggle">
            <a href="#" className="navbar-toggle" data-menu-toggle="navbar">
              <div className="toggle-line">
                <span />
              </div>
            </a>
          </div>
          <div className="header-navbar header-navbar-s3">
            <nav id="navbar" className="header-menu justify-content-between">
              <ul className="menu menu-s2">{ITEMS_MARKUP}</ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
