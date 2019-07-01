import * as types from './actionTypes';
import Axios from 'axios';
import tournamentDummy from '../tournament/data/gamesPerTeam.json';

const isProd = process.env.NODE_ENV === 'production';

export const loadTeams = () => dispatch => {
  if (isProd) {
    Axios.get('https://fsobp.com/tournament')
      // Axios.get('http://localhost:3001/tournament')
      .then(result => {
        dispatch({
          type: types.REQUEST_TEAMS_LIST,
          tournament: result.data
        })
      })
  } else {
    dispatch({
      type: types.REQUEST_TEAMS_LIST,
      tournament: tournamentDummy
    })
  }
}

export const filterTeams = searchTerm => dispatch => {
  dispatch({
    type: types.FILTER_TEAMS,
    searchTerm
  })
}
