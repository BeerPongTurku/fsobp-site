import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { changeLanguage } from '../actions/contentActions';

const Header = ({ content, languageCode, languages, changeLanguage }) => {

  const { navItems } = content;
  return (
    <div className="navbar-fsobp margin-clear">
      <div className="nav-container row middle-xs between-xs start-xs around-sm">
        <div className="col-xs-6 col-sm-3" >
          <ul className="list-inline">
            {navItems.map(item => (
              <li key={item.text}><Link to={item.location} className="hvr-underline-reveal active">{item.text}</Link></li>
            ))}
          </ul>
        </div>
        <div className="col-xs-6 col-sm-3 end-xs">
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
  content: PropTypes.object.isRequired
}


const mapStateToProps = state => ({
  languageCode: state.content.languageCode,
  languages: state.content.languages,
  content: state.content.siteContent
});

export default connect(mapStateToProps, { changeLanguage })(Header);
