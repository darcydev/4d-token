import React, { useState } from "react";
import styled from "styled-components";
import { FaAngleDoubleDown, FaAngleDoubleUp } from "react-icons/fa";

// Data
import { NAV_BAR_LINKS } from "../../Data/NavLinks";
// Styles
import "./NavBar.css";
// Items
import NavBarItem from "./NavBarItem";
// Components
import Logo from "../Logo/Logo";

export default function NavBar({ backgroundTransparent }) {
  const [isOpen, toggleOpen] = useState(false);

  const BUTTON_MARKUP = isOpen ? <FaAngleDoubleUp /> : <FaAngleDoubleDown />;
  const BACKGROUND_COLOR_MARKUP = backgroundTransparent
    ? "transparent"
    : "#0d42b2";

  const ITEMS_MARKUP = NAV_BAR_LINKS.map((v) => (
    <NavBarItem key={v.title} title={v.title} link={v.link} />
  ));

  return (
    <Container
      style={{ background: BACKGROUND_COLOR_MARKUP }}
      className="Navbar"
    >
      <div className="logo-and-button">
        <Logo />
        <Button className="toggle" onClick={(_) => toggleOpen(!isOpen)}>
          {BUTTON_MARKUP}
        </Button>
      </div>
      <Links className={"navbar-links " + (isOpen ? "opened" : "closed")}>
        {ITEMS_MARKUP}
      </Links>
    </Container>
  );
}

const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  min-height: 70px;

  .logo-and-button {
    display: flex;
    align-items: center;
  }
`;

const Links = styled.ul`
  display: flex;
`;

const Button = styled.button`
  background-color: transparent;
  border: none;
  color: white;
  &:focus {
    outline: 0;
  }
`;
