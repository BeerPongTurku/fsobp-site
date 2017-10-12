import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import DangerousContent from '../components/DangerousContent';
import { filterTeams } from '../actions/teamActions';

import '../styles/teamPages.scss'

const Teams = ({ content, tournament, inputValue, filterTeams }) => {
  const { teamsPage, common } = content;
  return (
    <div className="team-page page-wrapper line-height-high" >
      <div className="row center-xs" >
        <div className="col-xs-12 col-sm-10 col-md-9">
          <h1 className="margin-2">{teamsPage.header}</h1>
          <h4><DangerousContent content={teamsPage.bodyText} /></h4>
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
                </div>

                {teamGames.map(game =>
                  <div
                    key={teamGames[0].team + game.gameNumber}
                    className="row between-xs center-xs margin-top-1"
                  >
                    <div className="col-xs-2 margin-top-1 start-xs">
                      <p className="time">{`${game.gameNumber} (${game.time})`}</p>
                    </div>
                    <div className="col-xs-3 start-xs">
                      <p>{game.team1}</p>
                    </div>
                    <div className="col-xs-1 col-sm-2">
                      <p style={{ fontWeight: 'bold', color: '#e50015' }}>vs</p>
                    </div>
                    <div className="col-xs-3 end-xs">
                      <p>{game.team2}</p>
                    </div>
                    <div className="col-xs-0 col-sm-2" />
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

const mapStateToProps = state => ({
  content: state.content.siteContent,
  tournament: state.team.tournament,
  inputValue: state.team.inputValue
});

export default connect(mapStateToProps, { filterTeams })(Teams);
