import React from 'react';

function Footer() {   
    return (
        <footer>
          <div className="row">
            <div className="twelve columns">
              
            <div class="footer" id="footer">
        <a href="https://github.com/glgberat"><img src="https://img.icons8.com/material-outlined/48/000000/github.png" alt="Github" class="icon"/></a>
        <a href="https://www.linkedin.com/in/mehmet-huyuk-0a822888"><img src="https://img.icons8.com/color/48/000000/linkedin.png" alt="LinkedIn" class="icon"/></a>
        <a href="https://twitter.com/glgbtr"><img src="https://img.icons8.com/color/48/000000/twitter.png" alt="Twitter" class="icon"/></a>
        
    </div>
              <ul className="copyright">
                <li>&copy; Copyright 2022</li>
              </ul>
  
            </div>
            <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open"></i></a></div>
          </div>
        </footer>
      );
}

export default Footer;