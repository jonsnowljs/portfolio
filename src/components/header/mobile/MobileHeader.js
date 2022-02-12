import React from 'react'
import './MobileHeader.css'
function MobileHeader({isOpen, setIsOpen}) {
  return (
    <div className="mobile">
      <div className='close-icon' onClick={()=>{setIsOpen(!isOpen)}}>
        <i class="fi fi-rr-cross-circle"></i>
      </div>
      <div className='mobile-options'>
        <div className="mobile-option">
          <a href="#projects">
            <i class="fi fi-rr-keyboard option-icon"></i>Projects
          </a>
        </div>
        <div className="mobile-option">
          <a href="#skills">
            <i class="fi fi-rr-dashboard option-icon"></i>Skills
          </a>
        </div>
        <div className="mobile-option">
          <a href="#work">
            <i class="fi fi-rr-dashboard option-icon"></i>Work
          </a>
        </div>
        <div className="mobile-option">
          <a href="#contact">
            <i class="fi fi-rr-portrait option-icon"></i>Contact
          </a>
        </div>
      </div>
    </div>
  );
}

export default MobileHeader