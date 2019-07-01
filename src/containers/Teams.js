import React from 'react';
import { connect } from 'react-redux';
import DangerousContent from '../components/DangerousContent';
import { filterTeams } from '../actions/teamActions';

import '../styles/teamPages.scss'

const Teams = ({ content, tournament, inputValue, filterTeams }) => {
  const { teamsPage, common } = content;
  const bodyText = teamsPage.showSchedule ? teamsPage.bodyText : teamsPage.bodyTextHiddenSchedule
  return (
    <div className="team-page page-wrapper line-height-high" >
      <div className="row center-xs" >
        <div className="col-xs-12 col-sm-10 col-md-9">
          <h1 className="margin-2">{teamsPage.header}</h1>
          <h4><DangerousContent content={bodyText} /></h4>
          {teamsPage.showSchedule &&
            <div>
              <p style={{ display: 'inline-block', fontWeight: 'bold' }}>{common.search}</p>
              <input
                className="search-input margin-1"
                type="text"
                value={inputValue}
                placeholder={teamsPage.inputPlaceholder}
                onChange={event => filterTeams(event.target.value)}
                style={{ display: 'inline-block' }}
              />
            </div>
          }
          <ul id="teams-list">
            {tournament.map(teamGames =>
              <li
                key={teamGames[0].team}
              >
                <h1>{teamGames[0].team}</h1>
                <div className="row start-xs">
                  <div className="col-xs-2">
                    <p className="margin-clear">Game (time)</p>
                  </div>
                  <div className="col-xs-2 col-xs-offset-8 end-xs">
                    <p className="margin-clear">Table</p>
                  </div>
                </div>

                {teamGames.map(game =>
                  <div
                    key={teamGames[0].team + game.gameNumber}
                    className="row margin-top-1"
                  >
                    <div className="col-xs-2 col-sm-2 margin-top-1 start-xs">
                      <p className="time">{`${game.gameNumber} (${game.time})`}</p>
                    </div>
                    <div className="col-xs-4 col-sm-3 start-xs">
                      <p>{game.team1}</p>
                    </div>
                    <div className="col-xs-1 col-sm-2 col-sm-2">
                      <p className="time" style={{ fontWeight: 'bold' }}>vs</p>
                    </div>
                    <div className="col-xs-4 col-sm-3 end-xs">
                      <p>{game.team2}</p>
                    </div>
                    <div className="col-xs-1 col-sm-2 margin-top-1 end-xs">
                      <p className="time">{calculateTable(game.gameNumber)}</p>
                    </div>
                  </div>
                )}
              </li>
            )}
          </ul>
        </div>
      </div >
    </div >
  )
}

const calculateTable = num => {
  const modulo = num % 16;
  if(modulo === 0) {
    return 16;
  }
  return modulo;
}
const mapStateToProps = state => ({
  content: state.content.siteContent,
  tournament: state.team.tournament,
  inputValue: state.team.inputValue
});

export default connect(mapStateToProps, { filterTeams })(Teams);
