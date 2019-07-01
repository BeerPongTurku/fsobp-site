import React from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { changeLanguage } from '../actions/contentActions';

// const Header = ({ content, languageCode, languages, changeLanguage, params }) => {
const Header = ({ content, languageCode, languages, changeLanguage, pathname }) => {

  const { navItems } = content;
  // Set nav item active when location matches item.location path
  // react-router Link component should handle case automatically but doesn't work when using lazy initialization
  return (
    <div className="navbar-fsobp margin-clear">
      <div className="nav-container row middle-xs between-xs start-xs around-sm">
        <div className="col-xs-12 col-sm-3 center-xs start-sm" >
          <ul className="list-inline">
            {navItems.map(item => (
              <li key={item.text}><Link to={item.location} className={'hvr-underline-reveal ' + (pathname === item.location && 'active')}>{item.text}</Link></li>
            ))}
          </ul>
        </div>
        <div className="col-xs-12 col-sm-3 center-xs end-sm">
          {languages.map(language => (
            <p
              className={'margin-clear language ' + (language === languageCode && 'active')}
              role="button"
              key={language}
              onClick={() => changeLanguage(language)}
            >
              {language}
            </p>
          ))}
        </div>
      </div>

    </div>
  )
}

Header.propTypes = {
  changeLanguage: PropTypes.func.isRequired,
  languageCode: PropTypes.string.isRequired,
  languages: PropTypes.arrayOf(PropTypes.string).isRequired,
  content: PropTypes.object.isRequired,
  pathname: PropTypes.string.isRequired
}


const mapStateToProps = state => ({
  languageCode: state.content.languageCode,
  languages: state.content.languages,
  content: state.content.siteContent,
  pathname: state.routing.locationBeforeTransitions.pathname
});

export default connect(mapStateToProps, { changeLanguage })(Header);
