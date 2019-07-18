import React from 'react';
import { Link } from 'react-router-dom';

import logo from '~/assets/logo.svg';

import { Container, Content, Profile } from '../styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="gobarber" />
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>

        <aside>
          <nav>
            <Link to="/login">LOGIN</Link>
          </nav>
        </aside>
      </Content>
    </Container>
  );
}
