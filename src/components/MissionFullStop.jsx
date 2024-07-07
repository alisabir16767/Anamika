import React from 'react';
import './MissionFullStop.css';
import OurStrengthImage from '../assets/images/OurStrength.png';

const MissionFullStop = () => {
  return (
    <div className='mission-full-stop'>
        <h1>MISSION <span className='quality'>FULL STOP</span></h1>
        <p>"Till The Full Stop Doesn't Come, The Sentence Is Not Complete."</p>
        <p><i><b>- MS Dhoni</b></i></p>

        <div className="mission-full-stop-content">
          <div className="mission-full-stop-items">
            <ul>
                <li>Focus on energy-efficient and high-quality compliant solutions</li>
                <li>Architectural & Engineering Design.</li>
                <li>Tailored solutions for pharmaceuticals, API, bulk drugs, biotechnology, R&D, laboratories, food & cosmetics, logistics, residential, and other industries</li>
                <li>Accelerate drug discovery and development processes.</li>
                <li>Proficient in Greenfield and Brownfield projects
</li>
              </ul>
          </div>

          <div className="mission-full-stop-items">
              <img src={OurStrengthImage} alt="OurStrengthImage" />
          </div>
        </div>
      </div>
  );
}

export default MissionFullStop;
