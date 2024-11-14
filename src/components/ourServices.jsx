import React, { Component } from 'react';
import './OurServices.css';
import MissionFullStop from './MissionFullStop';
import ServicePortfolio from './ServicePortfolio';
import FeasibilityStudies from './FeasibilityStudies';
import MasterPlaning from './MasterPlaning';
import ConceptEngineering from './ConceptEngineering';
import BasicEngineering from './BasicEngineering';

import ProjectManagement from './ProjectManagement';

import TechnologyTransfer from './TechnologyTransfer';


class OurServices extends Component {
   state = {  } 
   render() { 
      return (
         <div className='OurServices'>
        <div className="OurServices-items">
       <h1>SERVICES FOR <span  className='quality'>QUALITY PROJECT</span> </h1>
        </div>
        <MissionFullStop/>
        <ServicePortfolio/>
        <ConceptEngineering/>
        <FeasibilityStudies/>
        < MasterPlaning/>
        
        <BasicEngineering/>
        
        <ProjectManagement/>
        
        <TechnologyTransfer/>
         </div>

      );
   }
}
 
export default OurServices;