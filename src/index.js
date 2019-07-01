import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history'
import { ConnectedRouter } from 'connected-react-router'

import { Router } from 'react-router';
import * as serviceWorker from './serviceWorker';

import configureStore from './store/configureStore';
import initialState from './reducers/initialState';
import { loadContent } from './actions/contentActions'
// import { loadTeams } from './actions/teamActions';
import './styles/main.scss';
import routes from './routes';

const history = createBrowserHistory()
const store = configureStore(history, initialState);

store.dispatch(loadContent());
// store.dispatch(loadTeams());

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Component />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('app')
);

serviceWorker.unregister();
