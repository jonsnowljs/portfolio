'use client';

import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { skillCategories } from '@/data/skills';

function SkillBar({ skill, index, accentColor }) {
  const barRef = useRef(null);
  const barInView = useInView(barRef, { once: true });

  return (
    <motion.div
      ref={barRef}
      initial={{ opacity: 0, x: -20 }}
      animate={barInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className="group"
    >
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">
          {skill.name}
        </span>
        <span className="text-xs font-mono text-slate-500">{skill.level}%</span>
      </div>
      <div className="h-1.5 bg-white/05 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={barInView ? { width: `${skill.level}%` } : {}}
          transition={{ duration: 1, delay: index * 0.06 + 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="h-full rounded-full"
          style={{
            background: `linear-gradient(90deg, ${accentColor}80, ${accentColor})`,
          }}
        />
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const [activeTab, setActiveTab] = useState('frontend');
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const activeCategory = skillCategories.find((c) => c.id === activeTab);

  return (
    <div className="py-24 px-6 max-w-7xl mx-auto" ref={ref}>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="mb-14 text-center"
      >
        <div className="section-label mb-3">// skills</div>
        <h2 className="text-4xl sm:text-5xl font-black text-white">
          My <span className="gradient-text">toolkit</span>
        </h2>
        <p className="text-slate-400 mt-3 max-w-xl mx-auto">
          A diverse set of tools and technologies I use to bring ideas to life.
        </p>
      </motion.div>

      {/* Tab Navigation */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex flex-wrap justify-center gap-2 mb-12"
      >
        {skillCategories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveTab(cat.id)}
            className={`relative px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
              activeTab === cat.id
                ? 'text-white'
                : 'text-slate-400 hover:text-white glass border border-white/06 hover:border-white/12'
            }`}
          >
            {activeTab === cat.id && (
              <motion.div
                layoutId="skill-tab"
                className="absolute inset-0 rounded-full"
                style={{
                  background: `${cat.color}20`,
                  border: `1px solid ${cat.color}45`,
                }}
                transition={{ type: 'spring', stiffness: 350, damping: 30 }}
              />
            )}
            <span className="relative z-10 flex items-center gap-2">
              <span>{cat.icon}</span>
              {cat.label}
            </span>
          </button>
        ))}
      </motion.div>

      {/* Skills content */}
      <AnimatePresence mode="wait">
        {activeCategory && (
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -10, filter: 'blur(4px)' }}
            transition={{ duration: 0.4 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 max-w-4xl mx-auto">
              {activeCategory.skills.map((skill, i) => (
                <SkillBar
                  key={skill.name}
                  skill={skill}
                  index={i}
                  accentColor={activeCategory.color}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom grid — all skills at a glance */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mt-20"
      >
        <div className="text-center mb-8">
          <h3 className="text-xl font-bold text-white">All Technologies</h3>
          <p className="text-slate-500 text-sm mt-1">Everything I've worked with</p>
        </div>
        <div className="flex flex-wrap justify-center gap-2.5">
          {skillCategories.flatMap((cat) =>
            cat.skills.map((skill) => (
              <motion.span
                key={`all-${skill.name}`}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.08, y: -2 }}
                transition={{ duration: 0.3 }}
                className="px-3 py-1.5 rounded-full text-xs font-medium cursor-default"
                style={{
                  background: `${skill.color}12`,
                  color: skill.color === '#ffffff' ? '#cbd5e1' : skill.color,
                  border: `1px solid ${skill.color}25`,
                }}
              >
                {skill.name}
              </motion.span>
            ))
          )}
        </div>
      </motion.div>
    </div>
  );
}
