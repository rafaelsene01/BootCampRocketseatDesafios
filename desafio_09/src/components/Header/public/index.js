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
          <Link to="/">MEETUPS</Link>
        </nav>

        <aside>
          {profile ? (
            <>
              <Link id="dash" to="/dashboard">
                DASHBOARD
              </Link>
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
            <button type="button">
              <Link to="/login">LOGIN</Link>
            </button>
          )}
        </aside>
      </Content>
    </Container>
  );
}
