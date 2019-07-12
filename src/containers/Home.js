import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { changeLanguage } from '../actions/contentActions';
import DangerousContent from '../components/DangerousContent';
import { getYear } from '../helpers'

import fsobpLogoBorder from '../public/images/fsobp_logo_border_500.png'
import aaltoLogo from '../public/images/aalto_logo_500.png'
import bptLogo from '../public/images/bpt_logo.png'
import mmPingisLogo from '../public/images/mm-pingis_logo.jpg'

const organizerLogos = {
  ABP: aaltoLogo,
  BPT: bptLogo,
  'MM-Pingis': mmPingisLogo
}

const contentText = (paragraph, index, array) => (
  <div
    key={index}
    className="text-left markup-container"
  >
    <DangerousContent content={paragraph} />
    {index === array.length - 1 ? '' : <hr />}
  </div>
)

const Home = ({ content }) => {
  const { bodyText, organizers, organizersTitle } = content;
  return (
    <div className="page-wrapper text-center line-height-high" >
      <div className="row center-xs" >
        <div className="col-xs-12 col-sm-8 col-md-5 padding-1">
          <Link to="/"><img className="img img-responsive margin-top-2 margin-bottom-2" alt="FSOBP" src={fsobpLogoBorder} /></Link>
          <h1 className="text-center margin-1">Finnish Series of Beer Pong {getYear()}</h1>
          {bodyText.map(contentText)}
          <div className="row center-xs margin-top-2">
            <div className="text-center">
              <h3 className="title">{organizersTitle}</h3>
              <div className="row center middle-xs">
                {organizers.map((organizer, index) => {
                  let divMediumWidth;
                  if(index === organizers.length - 1 && organizers.length % 2 !== 0) {
                    divMediumWidth = 'col-sm-4';
                  } else {
                    divMediumWidth = 'col-sm-4';
                  }
                  return (
                    <div
                      key={organizer.id}
                      className={`col-xs-12 ${divMediumWidth}`}
                    >
                      <a href={organizer.link} target="_blank" rel="noopener noreferrer">
                        <img alt={organizer.name} className="bp-images margin-1" src={organizerLogos[organizer.name]} />
                      </a>
                    </div>
                  )
                })
                }
              </div>
            </div>
          </div>
        </div>
      </div >
    </div >
  )
}

const mapStateToProps = state => ({
  content: state.content.siteContent
});


export default connect(mapStateToProps, { changeLanguage })(Home);
