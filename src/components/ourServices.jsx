import React, { Component } from 'react';
import './OurServices.css';
import MissionFullStop from './MissionFullStop';
import ServicePortfolio from './ServicePortfolio';
import FeasibilityStudies from './FeasibilityStudies';
import MasterPlaning from './MasterPlaning';
import ConceptEngineering from './ConceptEngineering';
import BasicEngineering from './BasicEngineering';
import DetailedEngineering from './DetailedEngineering';
import ProjectManagement from './ProjectManagement';
import RegulatoryComplianceSupport from './RegulatoryComplianceSupport';
import TechnologyTransfer from './TechnologyTransfer';


class OurServices extends Component {
   state = {  } 
   render() { 
      return (
         <div className='OurServices'>
        <div className="OurServices-items">
       <h1>SERVICES FOR <span  className='quality'>TURNKEY PROJECT</span> </h1>
        </div>
        <MissionFullStop/>
        <ServicePortfolio/>
        <FeasibilityStudies/>
        < MasterPlaning/>
        <ConceptEngineering/>
        <BasicEngineering/>
        <DetailedEngineering/>
        <ProjectManagement/>
        <RegulatoryComplianceSupport/>
        <TechnologyTransfer/>
         </div>

      );
   }
}
 
export default OurServices;