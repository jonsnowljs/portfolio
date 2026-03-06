'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiArrowDown, FiDownload } from 'react-icons/fi';

const roles = [
  'Full Stack Developer',
  'React Specialist',
  'Node.js Engineer',
  'UI/UX Enthusiast',
  'Problem Solver',
];

const codeSnippet = `const jiasheng = {
  role: "Full Stack Dev",
  stack: ["React", "Node", "TypeScript"],
  passion: "Clean code ✨",
  available: true,
};`;

function TypewriterCode({ text }) {
  const [displayed, setDisplayed] = useState('');
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (idx < text.length) {
      const timer = setTimeout(() => {
        setDisplayed((prev) => prev + text[idx]);
        setIdx((i) => i + 1);
      }, 28);
      return () => clearTimeout(timer);
    }
  }, [idx, text]);

  return (
    <pre className="text-left font-mono text-xs sm:text-sm leading-relaxed text-slate-300">
      {displayed}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.6, repeat: Infinity }}
        className="inline-block w-0.5 h-4 bg-violet-400 ml-0.5 align-middle"
      />
    </pre>
  );
}

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
  };

  const letters = 'Jiasheng Lu'.split('');

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Hero-specific background glow */}
      <div className="absolute inset-0 hero-mesh pointer-events-none" />

      {/* Floating code card — decorative */}
      <motion.div
        initial={{ opacity: 0, x: 60, rotate: 6 }}
        animate={{ opacity: 1, x: 0, rotate: 3 }}
        transition={{ duration: 1, delay: 1.2, ease: 'easeOut' }}
        className="absolute right-[5%] top-[18%] hidden lg:block w-72 glass-card rounded-2xl p-5 border border-violet-500/20"
        style={{ animation: 'float 8s ease-in-out infinite', animationDelay: '0.5s' }}
      >
        <div className="flex items-center gap-2 mb-3">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
          <span className="ml-2 text-xs text-slate-500 font-mono">profile.ts</span>
        </div>
        <TypewriterCode text={codeSnippet} />
      </motion.div>

      {/* Floating stat cards */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, delay: 1.5 }}
        className="absolute left-[5%] top-[30%] hidden xl:flex flex-col gap-3"
        style={{ animation: 'float 9s ease-in-out infinite', animationDelay: '1s' }}
      >
        {[
          { value: '10+', label: 'Projects', color: '#a855f7' },
          { value: '20+', label: 'Technologies', color: '#22d3ee' },
          { value: '4+', label: 'Years', color: '#f43f5e' },
        ].map((stat) => (
          <div
            key={stat.label}
            className="glass-card rounded-xl px-5 py-3 flex items-center gap-3 border border-white/08"
          >
            <span className="text-xl font-black" style={{ color: stat.color }}>
              {stat.value}
            </span>
            <span className="text-xs text-slate-400">{stat.label}</span>
          </div>
        ))}
      </motion.div>

      {/* Center content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl mx-auto px-6 text-center"
      >
        {/* Status badge */}
        <motion.div variants={itemVariants} className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full glass border border-violet-500/20 text-sm text-violet-300 font-medium">
            <motion.span
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-2 rounded-full bg-green-400"
            />
            Open to new opportunities
          </div>
        </motion.div>

        {/* Name */}
        <motion.div variants={itemVariants} className="mb-4 overflow-hidden">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {'Jiasheng'.split('').map((char, i) => (
              <motion.span
                key={`f-${i}`}
                initial={{ opacity: 0, y: 60, rotateX: -40 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.2 + i * 0.05,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="inline-block text-6xl sm:text-8xl lg:text-9xl font-black tracking-tighter gradient-text leading-none"
              >
                {char}
              </motion.span>
            ))}
          </div>
          <div className="flex flex-wrap justify-center mt-1">
            {'Lu'.split('').map((char, i) => (
              <motion.span
                key={`l-${i}`}
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.6 + i * 0.08,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="inline-block text-6xl sm:text-8xl lg:text-9xl font-black tracking-tighter text-white leading-none"
              >
                {char}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Animated role */}
        <motion.div variants={itemVariants} className="h-10 flex items-center justify-center mb-6">
          <AnimatePresence mode="wait">
            <motion.p
              key={roleIndex}
              initial={{ opacity: 0, y: 15, filter: 'blur(4px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -15, filter: 'blur(4px)' }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="text-xl sm:text-2xl text-slate-400 font-mono"
            >
              <span className="text-violet-400">{'<'}</span>
              <span className="text-cyan-300">{roles[roleIndex]}</span>
              <span className="text-violet-400">{' />'}</span>
            </motion.p>
          </AnimatePresence>
        </motion.div>

        {/* Bio */}
        <motion.p
          variants={itemVariants}
          className="text-slate-400 max-w-2xl mx-auto mb-10 text-base sm:text-lg leading-relaxed"
        >
          I craft elegant, performant web applications from pixel-perfect frontends to
          scalable backend architectures. Let's build something amazing together.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center justify-center gap-4 mb-14"
        >
          <a href="#projects" className="btn-primary group">
            <span>View My Work</span>
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </a>
          <a
            href="https://github.com/jonsnowljs/portfolio/raw/master/src/assets/data/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
          >
            <FiDownload size={16} />
            Resume
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-4"
        >
          {[
            { icon: FiGithub, href: 'https://github.com/jonsnowljs', label: 'GitHub' },
            {
              icon: FiLinkedin,
              href: 'https://www.linkedin.com/in/jiashenglujob',
              label: 'LinkedIn',
            },
            { icon: FiMail, href: 'mailto:jiasheng.lu@edu.sait.ca', label: 'Email' },
          ].map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target={label !== 'Email' ? '_blank' : undefined}
              rel="noopener noreferrer"
              aria-label={label}
              whileHover={{ scale: 1.15, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 rounded-2xl glass-card border border-white/08 flex items-center justify-center text-slate-400 hover:text-violet-400 hover:border-violet-500/40 transition-colors duration-300"
            >
              <Icon size={20} />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-slate-600 font-mono tracking-widest uppercase">
          scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          className="w-6 h-10 rounded-full border border-white/15 flex items-start justify-center pt-2"
        >
          <div className="w-1 h-2 rounded-full bg-violet-400" />
        </motion.div>
      </motion.div>
    </div>
  );
}
