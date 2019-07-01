import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { changeLanguage } from '../actions/contentActions';


const Home = ({ content }) => {
  const { bodyText, organizers, abpLink, bptLink } = content;

  return (
    <div className="page-wrapper text-center line-height-high" >
      <div className="row center-xs" >
        <div className="col-sm-8 col-md-6">
          <Link to="/"><img className="img img-responsive margin-auto margin-2" alt="FSOBP" src="/images/fsobp_logo_border_500.png" /></Link>
          <h1 className="text-center margin-1">Finnish Series of Beer Pong 2018</h1>
          {bodyText.map((paragraph, index) => (
            <div
              key={index}
              className="text-left"
            >
              <p>{paragraph}</p>
              {index === bodyText.length - 1 ? '' : <hr />}
            </div>
          ))}
          <div className="row center-xs margin-top-2">
            <div className="text-center">
              <h3 className="title">{organizers}</h3>
              <div className="flex-container">
                {/*Aalto Beer Pong*/}
                <div className="flex-column">
                  <a className=" margin-1" href={abpLink} target="_blank" rel="noopener noreferrer">
                    <img className="bp-images" src="/images/aalto_logo_500.png" />
                  </a>
                </div>
                <div className="flex-column">
                  <a className="margin-1" href={bptLink} target="_blank" rel="noopener noreferrer">
                    <img className="bp-images" src="/images/bpt_logo.png" />
                  </a>
                </div>
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
