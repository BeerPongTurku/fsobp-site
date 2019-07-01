import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { getYear } from '../helpers'

const Footer = ({ content }) => {
  return (
    <footer className="sticky-footer">
      <div className="flex-column text-center padding-2">
        <p>FSOBP | {getYear()}</p>
        <p><b>{content.contacts}:</b></p>
        <p><a className="mail-link" href={'mailto:' + content.contactInformation}>{content.contactInformation}</a></p>
      </div>
    </footer>
  )
}

Footer.propTypes = {
  content: PropTypes.object.isRequired
}


const mapStateToProps = state => ({
  content: state.content.siteContent,
});

export default connect(mapStateToProps)(Footer);
