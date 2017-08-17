import * as types from '../actions/actionTypes';
import teamsList from './teams.json';

const initialState = {
  teams: []
}

export default function teamReducer(state = initialState, action) {
  switch (action.type) {
    case types.REQUEST_TEAMS_LIST:
      if (teamsList && teamsList.length > 0) {
        return {
          ...state,
          teams: teamsList
        }
      }
      return { ...state }
    case types.LOAD_CONTENT:
    default:
      return state;
  }
}
