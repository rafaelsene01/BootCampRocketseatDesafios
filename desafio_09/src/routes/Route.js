import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import AuthLayout from '~/pages/_layouts/auth';
import PublicLayout from '~/pages/_layouts/public';
import DefaultLayout from '~/pages/_layouts/default';

import { store } from '~/store';

export default function RouteWrapper({
  component: Component,
  isPrivate,
  screenLR,
  ...rest
}) {
  const { signed } = store.getState().auth;

  if (!signed && isPrivate) {
    return <Redirect to="/" />;
  }

  if (signed && screenLR) {
    return <Redirect to="/" />;
  }

  let Layout = screenLR ? AuthLayout : null;
  if (!Layout && !isPrivate) {
    Layout = PublicLayout;
  }
  if (!Layout && isPrivate) {
    Layout = signed ? DefaultLayout : AuthLayout;
  }

  return (
    <Route
      {...rest}
      render={props => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  screenLR: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
  screenLR: false,
};
