import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Home from './containers/Home';
import AuthenticatedContent from './containers/AuthenticatedContent';
import LoginPage from './containers/LoginPage';
import SignupPage from './containers/SignupPage';
import App from './containers/App';
import NotFound from './containers/NotFound';


export default (
  <Route>
    <Route component={App}>
      <Route path="/" component={Home} />
    </Route>
    <Route path="*" status={404} component={NotFound} />
  </Route>
);
