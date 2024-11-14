import React from 'react';
import './LeaderTeam.css';
import Image1 from '../assets/images/leader1.jpg';
import Image2 from '../assets/images/leader2.jpg';
import Image3 from '../assets/images/leader3.jpg';
import Image4 from '../assets/images/leader4.jpeg';

const LeaderTeam = () => {
   return ( 
      <div className='LeaderTeam'>
         <h1 className='LeaderTeam-Title'>LEADER <span className='quality'>TEAM</span> </h1>
         <div className="cards-container">
            <div className="card">
               <div className="card-img-top" style={{ backgroundImage: `url(${Image1})` }}></div>
               <div className="card-body">
                  <h3>PRADEEP KUMAR MISHRA</h3>
                  <p><b><span className='quality'>FOUNDER & DIRECTOR</span></b>
                     <br />EXPERIENCE 25+</p>
               </div>
            </div>
            <div className="card">
               <div className="card-img-top" style={{ backgroundImage: `url(${Image2})` }}></div>
               <div className="card-body">
                  <h3>ANAMIKA MISHRA</h3>
                  <p><b><span className='quality'> CO-FOUNDER</span></b>
                     <br />EXPERIENCE 3+</p>
               </div>
            </div>
            <div className="card">
               <div className="card-img-top" style={{ backgroundImage: `url(${Image3})` }}></div>
               <div className="card-body">
                  <h3>ARPIT MISHRA</h3>
                  <p><b><span className='quality'>EXECUTIVE DIRECTOR 1</span></b>
                     <br />EXPERIENCE 2+</p>
               </div>
            </div>
            <div className="card">
               <div className="card-img-top" style={{ backgroundImage: `url(${Image4})` }}></div>
               <div className="card-body">
                  <h3>SUMIT MISHRA</h3>
                  <p><b><span className='quality'>EXECUTIVE DIRECTOR 2</span></b>
                     <br />EXPERIENCE 1+</p>
               </div>
            </div>
         </div>
      </div>
   );
}
 
export default LeaderTeam;
