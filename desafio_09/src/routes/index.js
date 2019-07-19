import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Meetups from '../pages/Meetups';
import MeetupsNew from '../pages/Meetups/New';
import MeetupsEdit from '../pages/Meetups/Edit';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Meetups} />
      <Route path="/meetups" component={MeetupsNew} isPrivate />
      <Route path="/meetups/:id" component={MeetupsEdit} isPrivate />

      <Route path="/login" component={SignIn} screenLR />
      <Route path="/register" component={SignUp} screenLR />

      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />

      <Route path="*" component={() => <div />} NotFound />
    </Switch>
  );
}
