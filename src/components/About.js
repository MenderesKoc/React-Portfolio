import React, { Component } from 'react';
import Resumepdf from '../assets/menderes_koc_resume.pdf'; 

export default class About extends Component {
  render() {
    return (
      <section id="about">
         <div className="row">
            <div className="nine columns main-col">
               <h2 id="aboutme">About Me</h2>
               Full-stack web developer. Recently earned a certificate in full-stack web development from the Columbia University Coding Bootcamp, with newly developed skills in JavaScript, CSS, React.js, Node.js, Bootstrap, and more have knowledge of the back-and also responsive web design. Known as an innovative problem solver passionate about developing apps, with a focus on user interface and development. With each project, my aim is to best engage my audience for an impactful user experience I’m excited to leverage my skills as part of a fast-paced, quality-driven team to build better experiences on the web.
            </div>
            <p className="columns download" >
               <a href={Resumepdf} className="button" target="_blank" rel="noopener noreferrer"><i className="fa fa-download"></i>Download Resume</a>
               </p>
         </div>
      </section>
    );
  }
}