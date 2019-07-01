import React from 'react';
import { Route } from 'react-router';
import App from './containers/App';
import Home from './containers/Home';
import Teams from './containers/Teams';
import NotFound from './containers/NotFound';


export default () =>
  <>
    <Route component={App}>
      <Route path="/" component={Home} />
      <Route path="/teams" component={Teams} />
    </Route>
    <Route path="*" status={404} component={NotFound} />
  </>

