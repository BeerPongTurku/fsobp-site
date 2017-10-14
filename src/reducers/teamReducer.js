import _ from 'lodash';
import * as types from '../actions/actionTypes';

const initialState = {
  tournament: [],
  inputValue: ''
}

export default function teamReducer(state = initialState, action) {
  switch (action.type) {
    case types.FILTER_TEAMS:
      const searchTerm = action.searchTerm.toLowerCase();
      const filteredResult = state.tournament.filter(games => {
        const teamName = games[0].team.toLowerCase();
        return teamName.includes(searchTerm);
      });
      return {
        ...state,
        tournament: filteredResult,
        inputValue: action.searchTerm
      }
    case types.REQUEST_TEAMS_LIST:
      const tournament = action.tournament;
      if (tournament) {
        return {
          ...state,
          tournament
        }
      }
      return { ...state }
    case types.LOAD_CONTENT:
    default:
      return state;
  }
}
