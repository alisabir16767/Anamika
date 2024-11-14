import React, { Component } from 'react';
import './ProjectManagement.css';
import ProjectManagementImage from "../assets/images/Project-Management.png";

const ProjectManagement = () => {
   return ( 
      <div className="ProjectManagement">
         <h1>PROJECT <span className='quality'>MANAGEMENT</span></h1>
         <div className="ProjectManagement-items">
         <p>
Project management in our field of operations consists of the
application of knowledge, abilities, tools and techniques which enables us to complete project activities in order to satisfy customer requirements and thus accomplish the final goal with efficacy and efficiency.
<br /><br />
<b>The Project Management Functions include:</b>
<ul>
   <li>Project Structure.</li>
   <li>Project Schedule and Monitoring.</li>
   <li>Propose Cost and Safety Measures during Detailed Engineering.</li>
   <li>Technical Assistance in getting Statutory Approvals.</li>
   <li>Checking availability of Design Information.</li>
   <li>Detailed Project Review.</li>
   <li>Propose cost and safety measure during Detailed Engineering.</li>
   <li>Conduct Periodic co-ordination meetings with Client to review actual progress of work as against planned work schedule and remove bottlenecks.</li>
   <li>Carrying out Mechanical Installations, Commissioning and Validation.</li>
</ul>
</p>
         </div>
         <div className="ProjectManagement-items">
            <img src={ProjectManagementImage} alt="ProjectManagementImag" />
         </div>

   <div className='ProjectManagement-items'>
      <p><b>Our project Management Team is geared up to monitor every individual
project with following key areas:</b>
<ul>
   <li>Project Scope Management</li>
   <li>Project Integration Management</li>
   <li>Project Time Management</li>
   <li>Project Communication Management</li>
   <li>Project Risk Management</li>
   <li> Project Procurement Management</li>
   <li>Project Human Resources Management</li>
   <li>Project Cost Management</li>
   <li>Project Quality Management</li>
</ul>
</p>

   </div>
   <div className='ProjectManagement-items'>
      <p><b>Commissioning Validation includes the following:</b>
      <ul>
         <li>Generation of User Requirement Sheets</li>
         <li>Design Qualification</li>
         
         <li> Installation Qualification</li>
         
         <li> Operation Qualification</li>
         <li>Performance Qualification</li>
         <li> VMP (Validation Master Plan)</li>
         <li>SMF (Site Master File)</li>
         <li>GMP Auditing and Gap Analysis</li>
         <li>Protocol Development & Execution</li>
         <li>Standard Operating Procedures (SOP) </li>
      </ul>
      </p>
   </div>
</div>

    );
}
 
export default ProjectManagement;