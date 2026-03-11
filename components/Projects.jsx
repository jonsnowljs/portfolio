'use client';

import { useRef, useState } from 'react';
import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { FiGithub, FiExternalLink, FiArrowUpRight } from 'react-icons/fi';
import { projects } from '@/data/projects';
import { WordReveal } from '@/components/SectionReveal';

function ProjectCard({ project, index }) {
  const cardRef = useRef(null);
  const [hovered, setHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 200, damping: 25 });
  const mouseYSpring = useSpring(y, { stiffness: 200, damping: 25 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['8deg', '-8deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-8deg', '8deg']);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) / (rect.width / 2));
    y.set((e.clientY - centerY) / (rect.height / 2));
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setHovered(false);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      style={{ perspective: 1000 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        className="relative glass-card rounded-2xl overflow-hidden group h-full"
        animate={{ scale: hovered ? 1.01 : 1 }}
        transition={{ duration: 0.3 }}
      >
        {/* Gradient top border */}
        <div
          className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r ${project.gradient.replace('from-', 'from-').replace('via-', 'via-').replace('to-', 'to-')}`}
          style={{
            background: `linear-gradient(90deg, transparent, ${project.accentColor}, transparent)`,
          }}
        />

        {/* Hover glow */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: `radial-gradient(400px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${project.accentColor}10, transparent 70%)`,
          }}
        />

        {/* Project image / gradient placeholder */}
        <div
          className={`relative h-48 bg-gradient-to-br ${project.gradient} overflow-hidden`}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div
                className="text-4xl font-black opacity-30"
                style={{ color: project.accentColor }}
              >
                {project.title.slice(0, 2).toUpperCase()}
              </div>
            </div>
          </div>

          {/* Animated orb inside card */}
          <div
            className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full blur-2xl opacity-40"
            style={{ background: project.accentColor }}
          />

          {/* Year badge */}
          <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-mono font-semibold glass border border-white/10 text-slate-300">
            {project.year}
          </div>

          {/* Category badge */}
          <div
            className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs font-semibold"
            style={{
              background: `${project.accentColor}20`,
              color: project.accentColor,
              border: `1px solid ${project.accentColor}35`,
            }}
          >
            {project.category}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col gap-4" style={{ transform: 'translateZ(20px)' }}>
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-xl font-bold text-white group-hover:text-violet-200 transition-colors">
              {project.title}
            </h3>
            <div className="flex items-center gap-2 flex-shrink-0">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl glass border border-white/08 flex items-center justify-center text-slate-400 hover:text-white hover:border-white/20 transition-all duration-200"
                onClick={(e) => e.stopPropagation()}
                aria-label="GitHub"
              >
                <FiGithub size={16} />
              </a>
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl flex items-center justify-center text-white transition-all duration-200 hover:scale-110"
                style={{ background: project.accentColor }}
                onClick={(e) => e.stopPropagation()}
                aria-label="Live Demo"
              >
                <FiExternalLink size={16} />
              </a>
            </div>
          </div>

          <p className="text-slate-400 text-sm leading-relaxed line-clamp-3">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5">
            {project.tags.slice(0, 5).map((tag) => (
              <span key={tag} className="tag text-[10px] py-0.5">
                {tag}
              </span>
            ))}
            {project.tags.length > 5 && (
              <span className="tag text-[10px] py-0.5 tag-cyan">
                +{project.tags.length - 5}
              </span>
            )}
          </div>

          {/* CTA */}
          <motion.a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto flex items-center gap-2 text-sm font-semibold transition-colors duration-200"
            style={{ color: project.accentColor }}
            whileHover={{ x: 4 }}
            transition={{ duration: 0.2 }}
          >
            View Project
            <FiArrowUpRight size={14} />
          </motion.a>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <div className="py-24 px-6 max-w-7xl mx-auto" ref={ref}>
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="mb-14 flex flex-col sm:flex-row sm:items-end justify-between gap-6"
      >
        <div>
          <div className="section-label mb-3">// projects</div>
          <h2 className="text-4xl sm:text-5xl font-black text-white">
            <WordReveal text="Things I've" />{' '}
            <WordReveal text="built" wordClassName="gradient-text" delayOffset={0.16} />
          </h2>
          <p className="text-slate-400 mt-3 max-w-xl">
            A collection of projects showcasing my full-stack development skills,
            from concept through deployment.
          </p>
        </div>
        <a
          href="https://github.com/jonsnowljs"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-ghost flex-shrink-0 text-sm"
        >
          <FiGithub size={16} />
          All Repos
        </a>
      </motion.div>

      {/* Featured projects (larger) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {projects.filter((p) => p.featured).map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>

      {/* Other projects (smaller) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {projects.filter((p) => !p.featured).map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i + 2} />
        ))}
      </div>
    </div>
  );
}
