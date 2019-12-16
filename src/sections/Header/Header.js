import React from 'react';

import NavBar from '../../components/NavBar/NavBar';

export default function Header() {
  return (
    <header
      className="nk-header page-header is-transparent is-sticky is-shrink is-dark"
      id="header"
    >
      <NavBar />
    </header>
  );
}
