import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { changeLanguage } from '../actions/contentActions';
import DangerousContent from '../components/DangerousContent';
import { getYear } from '../helpers'

import fsobpLogoBorder from '../public/images/fsobp_logo_border_500.png'
import aaltoLogo from '../public/images/aalto_logo_500.png'
import bptLogo from '../public/images/bpt_logo.png'
import lbpLogo from '../public/images/lbp_logo.png'
import bpkauppalogo from '../public/images/Beerpongkauppa_Logo.png'

const logos = {
  ABP: aaltoLogo,
  BPT: bptLogo,
  LBP: lbpLogo,
  BPKauppa: bpkauppalogo
}

const contentText = (paragraph, index, array) => (
  <div
    key={index}
    className="text-center markup-container"
  >
    <DangerousContent content={paragraph} />
    {index === array.length - 1 ? '' : <hr />}
  </div>
)

const Home = ({ content }) => {
  const { bodyText, organizers, organizersTitle, locationHeader } = content;
  return (
    <div className="page-wrapper text-center line-height-high" >
      <div className="row center-xs" >
        <div className="col-xs-12 col-sm-8 col-md-5 padding-1">
          <Link to="/"><img className="img img-responsive margin-top-2 margin-bottom-2" alt="FSOBP" src={fsobpLogoBorder} /></Link>
          <h1 className="text-center margin-1">Finnish Series of Beer Pong {getYear()}</h1>
          <h2 className="text-center margin-1">{locationHeader}</h2>
          {bodyText.map(contentText)}

          <div className="row center-xs margin-top-2 margin-bottom-2">
            <div className="text-center margin-bottom-2">
              <h3 className="title">{partnersTitle}</h3>
              <div className="row center middle-xs">
                {partners.map((partner, index) =>
                  (
                    <div
                      key={partner.id}
                      className={`col-xs-12`}>
                      <a href={partner.link} target="_blank" rel="noopener noreferrer">
                        <img style={{maxWidth: 350}} alt={partner.name} className="bp-images margin-1" src={logos[partner.name]} />
                      </a>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>

          <div className="row center-xs margin-top-2">
            <div className="text-center">
              <h3 className="title">{organizersTitle}</h3>
              <div className="row center middle-xs">
                {organizers.map((organizer, index) =>
                  (
                    <div
                      key={organizer.id}
                      className={`col-xs-12 col-sm-4`}
                    >
                      <a href={organizer.link} target="_blank" rel="noopener noreferrer">
                        <img alt={organizer.name} className="bp-images margin-1" src={logos[organizer.name]} />
                      </a>
                    </div>
                  ))
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
