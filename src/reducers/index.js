import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import auth, * as fromAuth from './authReducer';
import ui from './uiReducer';
import content from './siteContentReducer';
import team from './teamReducer';

const rootReducer = combineReducers(
  {
    auth,
    ui,
    content,
    team,
    routing: routerReducer
  }
);

export default rootReducer;
