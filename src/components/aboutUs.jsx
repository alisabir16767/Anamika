import React, { Component } from 'react';
import './AboutUs.css';
import AboutUsDescription from './aboutUsDescription';
import OurStrengthOurPresence from './OurStrengthOurPresence';
import LeaderTeam from './LeaderTeam';
import PolicyIntegration from './PolicyIntegration';
import DetailedEngineering from './DetailedEngineering';

class AboutUsContent extends Component {
  render() {
    return (
      <div>
        <div className='aboutus'>
          <h1>About <span className='quality'>US</span></h1>
         
        </div>
        <AboutUsDescription />
        <OurStrengthOurPresence />
        <DetailedEngineering />
        <LeaderTeam />
        <PolicyIntegration />
      </div>
    );
  }
}

export default AboutUsContent;
