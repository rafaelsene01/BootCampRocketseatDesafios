import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { signOut } from '~/store/modules/auth/actions';

import logo from '~/assets/logo.svg';

import { Container, Content, Profile } from '../styles';

export default function Header() {
  const profile = useSelector(state => state.user.profile);
  const dispatch = useDispatch();

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="gobarber" />
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>

        <aside>
          {profile ? (
            <>
              <Profile>
                <div>
                  <div>
                    <strong>{profile.name}</strong>
                    <Link to="/profile">Meu perfil</Link>
                  </div>
                </div>

                <button type="button" onClick={() => dispatch(signOut())}>
                  <Link to="/">Sair</Link>
                </button>
              </Profile>
            </>
          ) : (
            <Link to="/login">LOGIN</Link>
          )}
        </aside>
      </Content>
    </Container>
  );
}
