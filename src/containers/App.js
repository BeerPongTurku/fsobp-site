import React from 'react';
import PropTypes from 'prop-types'
import Header from './Header';
import Footer from './Footer';

const App = ({ children }) => (
  <div className="app-container">
    <Header />
    {children}
    <Footer />
  </div>
)

App.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default App;
