import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { changeLanguage } from '../actions/contentActions';
import DangerousContent from '../components/DangerousContent';
import { getYear } from '../helpers'

const Rules = () => {
  return (
    <div className="rule_page page-wrapper text-center line-height-high" >
      <div className="row center-xs" >
        <h1 className="text-center margin-1">Finnish Series of Beer Pong Rules</h1>
      </div>
    </div>
  )
}
export default Rules;
