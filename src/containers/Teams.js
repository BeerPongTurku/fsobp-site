import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import DangerousContent from '../components/DangerousContent';

import '../styles/teamPages.scss'


const Teams = ({ content, teams }) => {
  const { teamsPage } = content;

  return (
    <div className="team-page page-wrapper line-height-high" >
      <div className="row center-xs" >
        <div className="col-sm-8 col-md-6">
          <h1 className="margin-2">{teamsPage.header}</h1>
          <DangerousContent content={teamsPage.bodyText} />
          <ul id="teams-list">
            {teams.map(team =>
              <li
                key={team}
              >
                {team}
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
  teams: state.team.teams
});


export default connect(mapStateToProps)(Teams);
