import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import Footer from './Footer';
import Snackbar from '../components/Snackbar';

const App = ({ children }) => (
  <div className="app-container">
    <div className="body-container">
      <Header />
      {children}
      <Footer />
    </div>
    <Snackbar />
  </div>
)

App.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(React.PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default App;
