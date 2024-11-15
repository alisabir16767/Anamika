import React from 'react';
import './DetailedEngineering.css';
import DetailedEngineeringImage from "../assets/images/Detailed-Engineering-Services.png";

const DetailedEngineering = () => {
   return ( 
      <div className="OurMissionAndVision" style={{ textAlign: "center", margin: "0 auto", maxWidth: "800px" }}>
      <h1>
         OUR <span className='quality'>MISSION</span> & <span className='quality'>VISION</span>
      </h1>
      <div className="OurVision" style={{ margin: "20px 0" }}>
         <h2>Vision</h2>
         <p>
            To be the pioneers in handling the distribution of materials safely – in time and intact – by building a culture of efficiency, reliability, and total quality management within the organization. 
            <br />
            To transcend cultural and social barriers, thereby fostering a spirit of true partnership at the workplace, making us a trusted and reliable partner in the logistics industry.
         </p>
      </div>
      <div className="OurMission" style={{ margin: "20px 0" }}>
         <h2>Mission</h2>
         <p>
            To add value to the comprehensive range of logistics solutions globally on a broad platform by integrating proper business logic into client operations.
            <br />
            To adopt and excel in the ‘best of the breed’ technology, giving our customers a competitive and economical edge in their logistics operations.
         </p>
      </div>
   </div>
   
   
   );
}

export default DetailedEngineering;
