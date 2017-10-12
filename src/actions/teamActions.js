import * as types from './actionTypes';

export const loadTeams = () => dispatch => {
  dispatch({
    type: types.REQUEST_TEAMS_LIST
  })
}

export const filterTeams = searchTerm => dispatch => {
  dispatch({
    type: types.FILTER_TEAMS,
    searchTerm
  })
}
