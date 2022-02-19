import React from 'react';
import './WebHeader.css';
function WebHeader(props) {
  
  return (
    <div className="web">
      <div className="web-option">
        <a href="#projects">
          <i class="fi fi-rr-keyboard option-icon"></i>Projects
        </a>
      </div>
      <div className="web-option">
        <a href="#skills">
          <i class="fi fi-rr-dashboard option-icon"></i>Skills
        </a>
      </div>
      <div className="web-option">
        <a href="#work">
          <i class="fi fi-rr-dashboard option-icon"></i>Work
        </a>
      </div>
      <div className="web-option">
        <a href="#contact" >
          <i class="fi fi-rr-portrait option-icon"></i>Contact
        </a>
      </div>
    </div>
  );
}

export default WebHeader;
