import React, { Component } from 'react';
import './AboutUs.css';
import AboutUsDescription from './aboutUsDescription';
import OurStrengthOurPresence from './OurStrengthOurPresence';
import LeaderTeam from './LeaderTeam';
import PolicyIntegration from './PolicyIntegration';

class AboutUsContent extends Component {
  render() {
    return (
      <div>
        <div className='aboutus'>
          <h1>About <span className='quality'>US</span></h1>
         
        </div>
        <AboutUsDescription />
        <OurStrengthOurPresence />
        <LeaderTeam />
        <PolicyIntegration />
      </div>
    );
  }
}

export default AboutUsContent;
