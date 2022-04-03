import React, { useState, useEffect, useRef, useCallback } from 'react';
import './Header.css';
import MobileHeader from './mobile/MobileHeader';
import WebHeader from './web/WebHeader';
import { Sling as Hamburger } from 'hamburger-react';
import { useTransition, animated } from '@react-spring/web';
import useWindowSize from '../common/useWindowSize';
import useScroll from '../common/useScroll';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const size = useWindowSize();
  const { y, lastY } = useScroll();

  const ref = useRef();
  const [items, set] = useState([]);
  // close the menu when detect the scroll in vertical direction.
  useEffect(() => {
    if (Math.abs(y - lastY) > 10) {
      setIsOpen(false);
    }
  }, [y, lastY]);
  const transitions = useTransition(items, {
    from: {
      opacity: 0,
      height: 0,
      innerHeight: 0,
      transform: 'perspective(600px) rotateY(0deg)',
      color: '#0043d4',
    },
    enter: [
      { opacity: 1, height: 80, innerHeight: 80 },
      { transform: 'perspective(600px) rotateY(180deg)', color: '#28d79f' },
      { transform: 'perspective(600px) rotateY(0deg)' },
    ],
    leave: [
      { color: '#rgba(222,236,14,0.918)' },
      { innerHeight: 0 },
      { opacity: 0, height: 0 },
    ],
    update: { color: '#0043d4' },
  });

  const reset = useCallback(() => {
    ref.current?.forEach(clearTimeout);
    ref.current = [];
    set([]);
    ref.current.push(setTimeout(() => set(['Lu', ' Jia', ' Sheng']), 2000));
    ref.current.push(setTimeout(() => set(['L', 'J', 'S']), 5000));
    ref.current.push(setTimeout(() => set(['L', '.', 'JS']), 8000));
  }, []);

  useEffect(() => {
    reset();
    return () => ref.current.forEach(clearTimeout);
  }, []);

  return (
    <div className="header">
      <div className="header-box">
        <div className="logo">
          {transitions(({ innerHeight, ...rest }, item) => (
            <animated.span style={rest} onClick={reset}>
              {item}
            </animated.span>
          ))}
        </div>
        <div className="menu">
          <div className="web-menu">
            <WebHeader />
          </div>
          <div className="mobile-menu close-icon">
            {size.width < 720 && (
              <Hamburger toggled={isOpen} toggle={setIsOpen} />
            )}
          </div>

          {isOpen && size.width < 720 && <MobileHeader isOpen={isOpen} />}
        </div>
      </div>
    </div>
  );
}

export default Header;
