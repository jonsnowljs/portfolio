import React from 'react';
import './WebHeader.css';
function WebHeader(props) {
  
  return (
    <div className="web">
      <div className="web-option">
        <a href="#projects">
          <i className="fi fi-rr-keyboard option-icon"></i>Projects
        </a>
      </div>
      <div className="web-option">
        <a href="#skills">
          <i className="fi fi-rr-dashboard option-icon"></i>Skills
        </a>
      </div>
      <div className="web-option">
        <a href="#work">
          <i className="fi fi-rr-dashboard option-icon"></i>Work
        </a>
      </div>
      <div className="web-option">
        <a href="#contact" >
          <i className="fi fi-rr-portrait option-icon"></i>Contact
        </a>
      </div>
    </div>
  );
}

export default WebHeader;
