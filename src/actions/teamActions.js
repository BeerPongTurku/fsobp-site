import * as types from './actionTypes';

export const loadTeams = () => dispatch => {
  dispatch({
    type: types.REQUEST_TEAMS_LIST
  })
}
