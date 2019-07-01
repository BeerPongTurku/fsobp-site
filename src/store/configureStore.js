import { createStore, applyMiddleware, combineReducers } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router'
import thunk from 'redux-thunk';

import rootReducer from '../reducers'

// Initial state is not currently used
const configureStore = (history, initialState) => {
  const middlewares = [thunk, routerMiddleware(history)]
  const store = createStore(
    combineReducers(
      rootReducer,
      { router: connectRouter(history) }
    ),
    applyMiddleware(...middlewares)
  )

  return store;
}

export default configureStore;
