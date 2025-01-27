import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <h1><Link to="/">Aplikasi Catatan</Link></h1>
      <nav className="navigation">
        <ul>
          <li><Link to="/archieves">Arsip</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;