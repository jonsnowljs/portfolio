'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 28, stiffness: 300, mass: 0.5 };
  const ringX = useSpring(cursorX, springConfig);
  const ringY = useSpring(cursorY, springConfig);

  useEffect(() => {
    document.body.classList.add('has-custom-cursor');

    const onMouseMove = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const onMouseLeave = () => setVisible(false);
    const onMouseEnter = () => setVisible(true);
    const onMouseDown = () => setClicked(true);
    const onMouseUp = () => setClicked(false);

    const addHover = () => setHovered(true);
    const removeHover = () => setHovered(false);

    window.addEventListener('mousemove', onMouseMove);
    document.documentElement.addEventListener('mouseleave', onMouseLeave);
    document.documentElement.addEventListener('mouseenter', onMouseEnter);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);

    const interactables = document.querySelectorAll(
      'a, button, [role="button"], input, textarea, select, label'
    );
    interactables.forEach((el) => {
      el.addEventListener('mouseenter', addHover);
      el.addEventListener('mouseleave', removeHover);
    });

    return () => {
      document.body.classList.remove('has-custom-cursor');
      window.removeEventListener('mousemove', onMouseMove);
      document.documentElement.removeEventListener('mouseleave', onMouseLeave);
      document.documentElement.removeEventListener('mouseenter', onMouseEnter);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      interactables.forEach((el) => {
        el.removeEventListener('mouseenter', addHover);
        el.removeEventListener('mouseleave', removeHover);
      });
    };
  }, []);

  return (
    <>
      {/* Dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-screen"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          opacity: visible ? 1 : 0,
          scale: clicked ? 0.5 : hovered ? 1.5 : 1,
        }}
        transition={{ duration: 0.15 }}
      >
        <div
          className="rounded-full"
          style={{
            width: hovered ? 12 : 8,
            height: hovered ? 12 : 8,
            background: hovered
              ? 'linear-gradient(135deg, #a855f7, #22d3ee)'
              : '#a855f7',
            transition: 'width 0.2s, height 0.2s, background 0.2s',
          }}
        />
      </motion.div>

      {/* Ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          opacity: visible ? 1 : 0,
          scale: clicked ? 0.8 : hovered ? 1.6 : 1,
          width: hovered ? 48 : 36,
          height: hovered ? 48 : 36,
        }}
        transition={{ duration: 0.25 }}
      >
        <div
          className="rounded-full"
          style={{
            width: '100%',
            height: '100%',
            border: `1.5px solid ${hovered ? 'rgba(168,85,247,0.8)' : 'rgba(168,85,247,0.45)'}`,
            transition: 'border-color 0.3s',
          }}
        />
      </motion.div>
    </>
  );
}
