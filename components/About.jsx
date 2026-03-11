'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiCode, FiCoffee, FiZap, FiMapPin, FiCalendar, FiAward } from 'react-icons/fi';
import { stats } from '@/data/skills';
import { WordReveal } from '@/components/SectionReveal';

const bentoCards = [
  {
    id: 'bio',
    col: 'lg:col-span-2',
    row: 'lg:row-span-2',
    className: 'min-h-[220px]',
    content: (
      <div className="h-full flex flex-col justify-between">
        <div>
          <div className="section-label mb-3">About Me</div>
          <h2 className="text-3xl font-black text-white mb-4 leading-tight">
            Building the web,
            <br />
            <span className="gradient-text">one commit at a time.</span>
          </h2>
          <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
            Hi! I'm Jiasheng Lu — a passionate full stack developer based in Calgary, Canada.
            I specialize in crafting seamless digital experiences using modern JavaScript
            ecosystems. From elegant React UIs to robust Node.js APIs, I love turning
            complex problems into simple, beautiful solutions.
          </p>
        </div>
        <div className="mt-6 flex items-center gap-3 text-sm text-slate-400">
          <FiMapPin size={14} className="text-violet-400 flex-shrink-0" />
          <span>Calgary, Alberta, Canada</span>
        </div>
      </div>
    ),
  },
  {
    id: 'passion',
    col: 'lg:col-span-1',
    className: 'min-h-[120px]',
    content: (
      <div className="h-full flex flex-col gap-3">
        <div className="w-10 h-10 rounded-xl bg-violet-500/20 flex items-center justify-center">
          <FiCode size={20} className="text-violet-400" />
        </div>
        <h3 className="font-bold text-white">Clean Code</h3>
        <p className="text-slate-400 text-sm">
          Passionate about readable, maintainable, and well-tested code that scales.
        </p>
      </div>
    ),
  },
  {
    id: 'coffee',
    col: 'lg:col-span-1',
    className: 'min-h-[120px]',
    content: (
      <div className="h-full flex flex-col gap-3">
        <div className="w-10 h-10 rounded-xl bg-cyan-500/20 flex items-center justify-center">
          <FiCoffee size={20} className="text-cyan-400" />
        </div>
        <h3 className="font-bold text-white">Always Learning</h3>
        <p className="text-slate-400 text-sm">
          Continuously exploring new technologies and best practices in modern web dev.
        </p>
      </div>
    ),
  },
  {
    id: 'experience',
    col: 'lg:col-span-1',
    className: 'min-h-[120px]',
    content: (
      <div className="h-full flex flex-col justify-between">
        <div className="flex items-center gap-2 text-xs text-slate-500 font-mono">
          <FiCalendar size={12} />
          Since 2020
        </div>
        <div>
          <div className="text-4xl font-black gradient-text">4+</div>
          <div className="text-white font-semibold">Years of</div>
          <div className="text-slate-400 text-sm">Development Experience</div>
        </div>
      </div>
    ),
  },
  {
    id: 'projects',
    col: 'lg:col-span-1',
    className: 'min-h-[120px]',
    content: (
      <div className="h-full flex flex-col justify-between">
        <div className="w-10 h-10 rounded-xl bg-rose-500/20 flex items-center justify-center">
          <FiZap size={20} className="text-rose-400" />
        </div>
        <div>
          <div className="text-4xl font-black" style={{ color: '#f43f5e' }}>10+</div>
          <div className="text-white font-semibold">Projects</div>
          <div className="text-slate-400 text-sm">From concept to production</div>
        </div>
      </div>
    ),
  },
  {
    id: 'award',
    col: 'lg:col-span-1',
    className: 'min-h-[120px]',
    content: (
      <div className="h-full flex flex-col gap-3">
        <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center">
          <FiAward size={20} className="text-amber-400" />
        </div>
        <h3 className="font-bold text-white">SAIT Graduate</h3>
        <p className="text-slate-400 text-sm">
          Computer Software Development Technology diploma with honours.
        </p>
      </div>
    ),
  },
  {
    id: 'tech-stack',
    col: 'lg:col-span-2',
    className: 'min-h-[100px]',
    content: (
      <div className="h-full flex flex-col gap-4">
        <h3 className="font-bold text-white text-lg">Primary Tech Stack</h3>
        <div className="flex flex-wrap gap-2">
          {[
            { name: 'React', color: '#61dafb' },
            { name: 'Next.js', color: '#ffffff' },
            { name: 'TypeScript', color: '#3178c6' },
            { name: 'Node.js', color: '#68a063' },
            { name: 'MongoDB', color: '#47a248' },
            { name: 'GraphQL', color: '#e535ab' },
            { name: 'Tailwind', color: '#38bdf8' },
            { name: 'Redux', color: '#764abc' },
          ].map((tech) => (
            <span
              key={tech.name}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold"
              style={{
                background: `${tech.color}15`,
                color: tech.color,
                border: `1px solid ${tech.color}35`,
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: tech.color }}
              />
              {tech.name}
            </span>
          ))}
        </div>
      </div>
    ),
  },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.97 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  return (
    <div className="py-24 px-6 max-w-7xl mx-auto" ref={ref}>
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="mb-14 text-center"
      >
        <div className="section-label mb-3">// about</div>
        <h2 className="text-4xl sm:text-5xl font-black text-white">
          <WordReveal text="The person behind the" />{' '}
          <WordReveal text="code" wordClassName="gradient-text" delayOffset={0.32} />
        </h2>
      </motion.div>

      {/* Bento Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
      >
        {bentoCards.map((card) => (
          <motion.div
            key={card.id}
            variants={cardVariants}
            whileHover={{ y: -4, transition: { duration: 0.3 } }}
            className={`glass-card-glow rounded-2xl p-6 ${card.col || ''} ${card.row || ''} ${card.className || ''}`}
          >
            {card.content}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
