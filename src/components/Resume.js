import React, { Component } from 'react';
export default  class Resume extends Component {
  render() {
    return (
      <section id="resume">
         <div className="row skill">
            <div className="three columns header-col">
               <h1><span>Skills</span></h1>
            </div>
            <div className="nine columns main-col">
               <p>
                 <h2>Front End Experience</h2>
                <ul>
                    <li>HTML5</li>
                    <li>CSS3(Bootstrap)</li>
                    <li>JavaScript ES6+</li>
                    <li>jQuery</li>
                    <li>React.js</li>
                 </ul>
               </p>
               <h2>Back End Experience</h2>
                <ul>
                    <li>Node.js</li>
                    <li>PWAs</li>
                    <li>Express.js</li>
                    <li>SQL</li>
                    <li>mySQL</li>
                    <li>Sequelize</li>
                    <li>NoSQL(MongoDB, Mongoose)</li>
                    <li>IndexedDB</li>
                    <li>API's</li>
                    <li>Handlebars</li>
                 </ul>
   			</div>
         </div>
      </section>
    );
  }
}