import React from 'react';

const DangerousContent = ({ content }) => {
  const createMarkup = text => {
    return { __html: text }
  }

  return (
    <div dangerouslySetInnerHTML={createMarkup(content)} />
  )
}

export default DangerousContent;