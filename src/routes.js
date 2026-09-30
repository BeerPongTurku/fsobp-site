import React from 'react';
import { Route, Switch } from 'react-router';
import App from './containers/App';
import Home from './containers/Home';
import Rules from './containers/Rules';
import Teams from './containers/Teams';
import NotFound from './containers/NotFound';


export default () =>
  <App >
    <Switch >
      <Route path="/" exact component={Home} />
      <Route apth="/rules" component={Rules} />
      <Route path="/teams" component={Teams} />
      <Route path="*" status={404} component={NotFound} />
    </Switch>
  </App>

