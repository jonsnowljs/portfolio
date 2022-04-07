import React from 'react';
import './WebHeader.css';
function WebHeader(props) {
  return (
    <div className="web">
      <div className="web-option">
        <a href="#projects" className="hover-underline-animation">
          <i className="fi fi-br-keyboard option-icon"></i>Projects
        </a>
      </div>
      <div className="web-option">
        <a href="#skills" className="hover-underline-animation">
          <i className="fi fi-br-dashboard option-icon"></i>Skills
        </a>
      </div>
      <div className="web-option">
        <a href="#contact" className="hover-underline-animation">
          <i className="fi fi-br-portrait option-icon"></i>Contact
        </a>
      </div>
    </div>
  );
}

export default WebHeader;
