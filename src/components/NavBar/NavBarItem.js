import React from "react";

export default function NavBarItem({ title, link }) {
  return (
    <li className="menu-item">
      <a className="menu-link nav-link" href={link}>
        {title}
      </a>
    </li>
  );
}
