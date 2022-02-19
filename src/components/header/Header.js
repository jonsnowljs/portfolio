import React,{useState} from 'react';
import './Header.css';
import MobileHeader from './mobile/MobileHeader';
import WebHeader from './web/WebHeader';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="header">
      <div className='header-box'>
        <div className="logo">L.JS</div>
        <div className="menu">
          <div className="web-menu">
            <WebHeader />
          </div>
          <div onClick={() => {setIsOpen(!isOpen)}} className='mobile-menu'>
            <i class="fi fi-rr-apps menu-icon" hidden={isOpen}></i>
          </div>

          {isOpen && <MobileHeader isOpen={isOpen} setIsOpen={setIsOpen}/>}
        </div>
      </div>
    </div>
  );
}

export default Header;
