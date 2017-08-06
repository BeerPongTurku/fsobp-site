import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import auth, * as fromAuth from './authReducer';
import ui from './uiReducer';
import content from './siteContentReducer';

const rootReducer = combineReducers(
  {
    auth,
    ui,
    content,
    routing: routerReducer
  }
);

export default rootReducer;
