import React from 'react';
import PropTypes from 'prop-types'

const dangerousHtml = text => ({ __html: text })

const DangerousContent = ({ content }) =>
  <div dangerouslySetInnerHTML={dangerousHtml(content)} />

DangerousContent.propTypes = {
  content: PropTypes.string.isRequired
}

export default DangerousContent;