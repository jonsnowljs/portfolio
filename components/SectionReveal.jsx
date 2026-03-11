'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function SectionReveal({ children, className = '', width = 'fit-content' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <div ref={ref} className={className} style={{ width }}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.01 }}
      >
        {children}
      </motion.div>
      <motion.div
        initial={{ left: 0 }}
        animate={inView ? { left: '100%' } : {}}
        transition={{ duration: 0.5, ease: 'easeIn' }}
        style={{
          position: 'absolute',
          top: 4,
          bottom: 4,
          left: 0,
          right: 0,
          background: 'linear-gradient(90deg, #7c3aed, #22d3ee)',
          borderRadius: 4,
          zIndex: 20,
        }}
      />
    </div>
  );
}

export function WordReveal({ text, className = '', wordClassName = '', highlightWord, highlightClass = 'gradient-text', delayOffset = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  const words = text.split(' ');

  return (
    <span ref={ref} className={className} style={{ display: 'inline' }}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden" style={{ marginRight: '0.3em' }}>
          <motion.span
            className={`inline-block ${wordClassName} ${word === highlightWord ? highlightClass : ''}`}
            initial={{ y: '100%', opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{
              duration: 0.5,
              delay: delayOffset + i * 0.08,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
