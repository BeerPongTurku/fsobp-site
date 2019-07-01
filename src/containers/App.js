import React from 'react';
import PropTypes from 'prop-types'
import Header from './Header';
import Footer from './Footer';
import Snackbar from '../components/Snackbar';

const App = ({ children }) => (
  <div className="app-container">
    <Header />
    {children}
    <Footer />
    <Snackbar />
  </div>
)

App.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default App;
