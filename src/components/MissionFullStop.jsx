import React from 'react';
import './MissionFullStop.css';
import OurStrengthImage from '../assets/images/OurStrength.png';

const MissionFullStop = () => {
  return (
    <div className='mission-full-stop'>
        <h1>MISSION <span className='quality'>FULL STOP</span></h1>
        <p>"Till The Full Stop Doesn't Come, The Sentence Is Not Complete."</p>
        <p><i><b>~ Pradeep Mishra</b></i></p>

        <div className="mission-full-stop-content">
          <div className="mission-full-stop-items">
            <ul>
                <li>Add value to the comprehensive range of logistics solutions globally on a broad platform.</li>
                <li>Build proper business logic into client operations.</li>
                <li>Adopt and excel in ‘best of the breed’ technology.</li>
                <li>Provide customers with a competitive and economical edge.</li>
            

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
