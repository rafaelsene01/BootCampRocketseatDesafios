import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Meetups from '../pages/Meetups';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Meetups} />
      <Route path="/login" component={SignIn} screenLR />
      <Route path="/register" component={SignUp} screenLR />

      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />
    </Switch>
  );
}
