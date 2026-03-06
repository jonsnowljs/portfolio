'use client';

import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiArrowUp, FiHeart } from 'react-icons/fi';

const footerLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

const socialLinks = [
  { icon: FiGithub, href: 'https://github.com/jonsnowljs', label: 'GitHub' },
  { icon: FiLinkedin, href: 'https://www.linkedin.com/in/jiashenglujob', label: 'LinkedIn' },
  { icon: FiMail, href: 'mailto:jiasheng.lu@edu.sait.ca', label: 'Email' },
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative border-t border-white/06 mt-8">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo + tagline */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <a href="#home" className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-violet-600 to-cyan-500 flex items-center justify-center shadow-lg shadow-violet-500/20 group-hover:shadow-violet-500/40 transition-shadow">
                <span className="text-white font-black text-xs">JL</span>
              </div>
              <span className="font-bold text-white group-hover:text-violet-300 transition-colors">
                Jiasheng Lu
              </span>
            </a>
            <p className="text-slate-500 text-xs text-center md:text-left">
              Full Stack Developer · Calgary, Canada
            </p>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-slate-500 hover:text-violet-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social + back to top */}
          <div className="flex items-center gap-3">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={label !== 'Email' ? '_blank' : undefined}
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 rounded-xl glass border border-white/06 flex items-center justify-center text-slate-500 hover:text-violet-400 hover:border-violet-500/30 transition-all duration-200"
              >
                <Icon size={16} />
              </a>
            ))}

            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="w-9 h-9 rounded-xl bg-violet-600/20 border border-violet-500/30 flex items-center justify-center text-violet-400 hover:bg-violet-600/35 transition-all duration-200 ml-1"
              aria-label="Back to top"
            >
              <FiArrowUp size={16} />
            </motion.button>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-white/04 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600">
          <p className="flex items-center gap-1.5">
            Built with{' '}
            <FiHeart size={12} className="text-rose-500" />
            {' '}using Next.js 14 · React 18 · Tailwind CSS · Framer Motion
          </p>
          <p>© {new Date().getFullYear()} Jiasheng Lu. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
