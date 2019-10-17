import sortBy from 'lodash/sortBy'
import * as types from '../actions/actionTypes';
import tournament from '../tournament/data/gamesPerTeam'

const initialState = {
  originalTournament: sortBy(tournament, [team => team.team]),
  tournament,
  inputValue: ''
}

export default function teamReducer(state = initialState, action) {
  switch (action.type) {
    case types.FILTER_TEAMS:
      const searchTerm = action.searchTerm.toLowerCase();
      const filteredResult = state.originalTournament.filter(games => {
        const teamName = games[0].team.toLowerCase();
        return teamName.includes(searchTerm);
      });
      console.log(filteredResult)
      return {
        ...state,
        tournament: filteredResult,
        inputValue: action.searchTerm
      }
    // case types.REQUEST_TEAMS_LIST:
    //   if (action.tournament) {
    //     return {
    //       ...state,
    //       originalTournament: sortBy(action.tournament, [team => team.team]),
    //       tournament: action.tournament
    //     }
    //   }
    //   return { ...state }
    // case types.LOAD_CONTENT:
    default:
      return state;
  }
}
