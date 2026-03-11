'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiArrowUpRight, FiDownload } from 'react-icons/fi';
import { socialLinks, resumeUrl } from '@/data/social';
import { WordReveal } from '@/components/SectionReveal';
import MagneticButton from '@/components/MagneticButton';

const iconMap = {
  GitHub: FiGithub,
  LinkedIn: FiLinkedin,
  Email: FiMail,
};

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
  };

  return (
    <div className="py-24 px-6 max-w-7xl mx-auto" ref={ref}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="max-w-3xl mx-auto text-center"
      >
        {/* Label */}
        <motion.div variants={itemVariants} className="section-label mb-4">
          // contact
        </motion.div>

        {/* Heading */}
        <motion.h2
          variants={itemVariants}
          className="text-4xl sm:text-6xl font-black text-white mb-6 leading-tight"
        >
          <WordReveal text="Let's build something" />
          <br />
          <WordReveal text="great together." wordClassName="gradient-text" delayOffset={0.24} />
        </motion.h2>

        {/* Subtext */}
        <motion.p variants={itemVariants} className="text-slate-400 text-lg mb-14 max-w-xl mx-auto leading-relaxed">
          Whether you have a project in mind, a job opportunity, or just want to chat
          about tech — I&apos;m always happy to connect!
        </motion.p>

        {/* Primary CTA */}
        <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-16">
          <MagneticButton strength={0.25}>
            <a
              href="mailto:jiasheng.lu@edu.sait.ca"
              className="btn-primary text-base px-10 py-4"
            >
              <span className="flex items-center gap-2">
                <FiMail size={18} />
                Say Hello
              </span>
            </a>
          </MagneticButton>
          <MagneticButton strength={0.25}>
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost text-base px-8 py-4"
            >
              <FiDownload size={16} />
              Download Resume
            </a>
          </MagneticButton>
        </motion.div>

        {/* Social Cards */}
        <motion.div variants={containerVariants} className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {socialLinks.map((social) => {
            const Icon = iconMap[social.platform] || FiArrowUpRight;
            return (
              <motion.a
                key={social.platform}
                variants={itemVariants}
                href={social.url}
                target={social.platform !== 'Email' ? '_blank' : undefined}
                rel="noopener noreferrer"
                whileHover={{ y: -4, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.25 }}
                className="group glass-card-glow rounded-2xl p-6 flex flex-col items-center gap-3"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: `${social.hoverColor}18`,
                    border: `1px solid ${social.hoverColor}30`,
                  }}
                >
                  <Icon size={22} style={{ color: social.hoverColor }} />
                </div>
                <div className="text-center">
                  <div className="font-bold text-white group-hover:text-violet-200 transition-colors">
                    {social.platform}
                  </div>
                  <div className="text-xs text-slate-500 mt-0.5 font-mono truncate max-w-[160px]">
                    {social.handle}
                  </div>
                </div>
                <div className="flex items-center gap-1 text-xs text-slate-500 group-hover:text-violet-400 transition-colors">
                  {social.description}
                  <FiArrowUpRight size={11} />
                </div>
              </motion.a>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
}
