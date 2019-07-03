import React from 'react';

import './Header.css';

import man from '../assets/man.svg';

export default function Header() {
  return (
    <header id="main-header">
      <div className="header-content">
        <h1>facebook.</h1>
        <div>
          <h3>Meu perfil</h3>
          <img src={man} alt="" />
        </div>
      </div>
    </header>
  );
}
