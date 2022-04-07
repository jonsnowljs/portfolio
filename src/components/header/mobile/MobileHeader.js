import React from 'react';
import './MobileHeader.css';
function MobileHeader({ isOpen }) {
  return (
    <div className="mobile">
      <div className="mobile-options">
        <div className="mobile-option hover-underline-animation">
          <a href="#home">
            <i className="fi fi-br-home option-icon"></i>Home
          </a>
        </div>
        <div className="mobile-option hover-underline-animation">
          <a href="#projects">
            <i className="fi fi-br-keyboard option-icon"></i>Projects
          </a>
        </div>
        <div className="mobile-option hover-underline-animation">
          <a href="#skills">
            <i className="fi fi-br-dashboard option-icon"></i>Skills
          </a>
        </div>
        <div className="mobile-option hover-underline-animation">
          <a href="#contact">
            <i className="fi fi-br-portrait option-icon"></i>Contact
          </a>
        </div>
      </div>
    </div>
  );
}

export default MobileHeader;
