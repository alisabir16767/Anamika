import React from 'react';
import './DetailedEngineering.css';
import DetailedEngineeringImage from "../assets/images/Detailed-Engineering-Services.png";

const DetailedEngineering = () => {
   return ( 
      <div className="DetailedEngineering">
         <h1>DETAILED <span className='quality'>ENGINEERING</span></h1>
         <div className="DetailedEngineering-items1">
            <p>Detailed Engineering is the essential bridge between the basic engineering and construction phase of a project. It is "Converting Thoughts into reality".
               <br />
               <br />
               <b>   We provide detailed engineering services for a project as follows:</b>
               <br />
               <ul>
                  <li>Process Engineering including selection of the right equipment Electrical Engineering</li>
                  <li>HVAC</li>
                  <li>Instrumentation</li>
                  <li>Building Management and Automation Systems</li>
                  <li>Preparation of Detailed Specifications, Data Sheets and Bill of Quantities for various Plants, Equipment, Machinery and System</li>
                  <li>Supply of various Plant Equipment, Machinery and Systems</li>
               </ul>
            </p>
            <img src={DetailedEngineeringImage} alt="DetailedEngineeringImage" />
         </div>
         <div className="DetailedEngineering-items">
            <div className="DetailedEngineering-list">
               <p><b>Civil Layouts</b>
                  <ul>
                     <li>Plot Layout</li>
                     <li>Area/Layout</li>
                     <li>Men/Material Movement, etc.</li>
                  </ul>
                  <b>Electrical</b>
                  <ul>
                     <li>Electrical Load Data</li>
                     <li>Electrical Layouts</li>
                     <li>Cabling Details</li>
                     <li>Bill Of Quantities (BOQ), etc.</li>
                  </ul>
               </p>
            </div>
            <div className="DetailedEngineering-list">
               <p><b>Drainage Layouts</b>
                  <ul>
                     <li>Industrial Drainage</li>
                     <li>Domestic Drainage, etc.</li>
                     <li>Soil Drainage, etc.</li>
                  </ul>
                  <b>HVAC (Heating Ventilation and Air Conditioning)</b>
                  <ul>
                     <li>HVAC Design</li>
                     <li>Air Handling Unit (AHU) Locations</li>
                     <li>Air Flow Diagrams</li>
                     <li>Ducting Layouts</li>
                     <li>BOQ, etc.</li>
                  </ul>
               </p>
            </div>
            <div className="DetailedEngineering-list">
               <p><b>Lighting</b>
                  <ul>
                     <li>Illumination Design</li>
                     <li>Lighting Layout, etc.</li>
                  </ul>
                  <b>Schematic Pipeline</b>
                  <ul>
                     <li>Purified Water Generation System</li>
                     <li>Water for Injection (WFI)</li>
                     <li>Compressed Air</li>
                     <li>Pure Steam</li>
                     <li>Plant Steam</li>
                  </ul>
               </p>
            </div>
         </div>
      </div>
   );
}

export default DetailedEngineering;
