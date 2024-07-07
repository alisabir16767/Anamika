import React, { Component } from 'react';
import './AboutUs.css';
import AboutUsDescription from './aboutUsDescription';
import OurStrengthOurPresence from './OurStrengthOurPresence';
import LeaderTeam from './LeaderTeam';
import PolicyIntegration from './PolicyIntegration';
import Typewriter from 'typewriter-effect'; // Import Typewriter from 'typewriter-effect'

class AboutUsContent extends Component {
  render() {
    return (
      <div>
        <div className='aboutus'>
          {/* Apply Typewriter effect to this h1 element */}
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
