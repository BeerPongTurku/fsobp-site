import { combineReducers } from 'redux';
import content from './siteContentReducer';
import team from './teamReducer';

const rootReducer = combineReducers(
  {
    content,
    team
  }
);

export default rootReducer;
