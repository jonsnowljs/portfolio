import React, { useState, useEffect } from 'react';
import './Header.css';
import MobileHeader from './mobile/MobileHeader';
import WebHeader from './web/WebHeader';
import { Sling as Hamburger } from 'hamburger-react';
import useWindowSize from '../common/useWindowSize';
import useScroll from '../common/useScroll';

function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const size = useWindowSize();
  const { y, lastY } = useScroll();  

  // close the menu when detect the scroll in vertical direction.
  useEffect(() => {
    if ( Math.abs(y - lastY) > 10) {
      setIsOpen(false)
    }
  },[y, lastY])


  return (
    <div className="header">
      <div className="header-box">
        <div className="logo">L.JS</div>
        <div className="menu">
          <div className="web-menu">
            <WebHeader />
          </div>
          <div
            className="mobile-menu close-icon"
          >
            {size.width < 720  && (
              <Hamburger toggled={isOpen} toggle={setIsOpen}/>
            )}
          </div>

          {(isOpen && size.width < 720) && <MobileHeader isOpen={isOpen} />}

        </div>
      </div>
    </div>
  );
}

export default Header;
