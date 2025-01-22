import React from 'react';

function Header() {
  return (
    <header>
      <h1><a href="/">Aplikasi Catatan</a></h1>
      <nav className="navigation">
        <ul>
          <li><a href="/archieves">Arsip</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;