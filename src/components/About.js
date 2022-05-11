import React, { Component } from 'react';
import Resumepdf from '../assets/MenderesKocResume.docx';

export default class About extends Component {
  render() {
    return (
      <section id="about">
         <div className="row">
            <div className="nine columns main-col">
               <h2 id="aboutme">About Me</h2>
               Front-end web developer leveraging a background in finance to provide unique perspectives on how end-users interact with websites and software platforms. Earned a certificate in Full Stack Web Development from the  Columbia University Coding Boot Camp. Innovative problem-solver who is passionate about developing apps with a focus on mobile-first design and development. Strengths in creativity, teamwork, and building projects from ideation to execution.
            </div>
            <p className="columns download" >
               <a href={Resumepdf} className="button" target="_blank" rel="noopener noreferrer"><i className="fa fa-download"></i>Download Resume</a>
               </p>
         </div>
      </section>
    );
  }
}