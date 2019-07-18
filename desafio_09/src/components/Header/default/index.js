import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import logo from '~/assets/logo.svg';

import { Container, Content, Profile } from '../styles';

export default function Header() {
  const profile = useSelector(state => state.user.profile);

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="gobarber" />
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>

        <aside>
          <Profile>
            <div>
              <div>
                <strong>{profile.name}</strong>
                <Link to="/profile">Meu perfil</Link>
              </div>
            </div>

            <button type="button">
              <Link to="/">Voltar</Link>
            </button>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
