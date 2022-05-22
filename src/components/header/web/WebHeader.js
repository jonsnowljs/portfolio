import React from 'react';
import './WebHeader.css';
function WebHeader(props) {
  return (
    <div className="web">
      <div className="web-option">
        <a href="#projects" className="hover-underline-animation">
          Projects
        </a>
      </div>
      <div className="web-option">
        <a href="#skills" className="hover-underline-animation">
          Skills
        </a>
      </div>
      <div className="web-option">
        <a href="#contact" className="hover-underline-animation">
          Contact
        </a>
      </div>
    </div>
  );
}

export default WebHeader;
