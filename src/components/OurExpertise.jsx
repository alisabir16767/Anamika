import React, { Component } from 'react';
import './OurExpertise.css';
import ProjectExpertiseImage from '../assets/images/ProjectExpertiseGraph.png';
import ExperttiseFilter from './ExpertiseFilter';


class OurExpertise extends Component {
   state = {  } 
   render() { 
      return (
         
 <div className="OurExpertise">
      <div className="OurExpertise-header">
         <h1>OUR <span className='quality'> EXPERTISE</span></h1>
      </div>
      <div className="ProjectExpertise">
         <h1>DIVERSE <span className='quality'>PROJECT EXPERTISE </span> </h1>
         <p>"My matric for success can be summed up in one phrase: earn customer for life."
            <br />
            <b><i>~Mary Barra</i></b>
         </p>
          <img src={ProjectExpertiseImage} alt="ProjectExpertiseImage" />
      </div>
<ExperttiseFilter/>
 </div>
         
      );
   }
}
 
export default OurExpertise;