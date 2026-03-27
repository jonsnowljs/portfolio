"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { resumeUrl } from "@/data/social";

const roles = [
  "Full Stack Developer",
  "React Specialist",
  "Node.js Engineer",
  "UI/UX Enthusiast",
];

const codeLines = [
  { key: "open",    raw: "const jiasheng = {" },
  { key: "role",    raw: '  role: "Full Stack Developer",' },
  { key: "loc",     raw: '  location: "Calgary, Canada",' },
  { key: "arr",     raw: "  loves: [" },
  { key: "l1",      raw: '    "clean code",' },
  { key: "l2",      raw: '    "great UX",' },
  { key: "l3",      raw: '    "hard problems",' },
  { key: "close2",  raw: "  ]," },
  { key: "avail",   raw: "  available: true," },
  { key: "close",   raw: "}" },
];

const socialLinks = [
  { icon: Github,   href: "https://github.com/jonsnowljs",              label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/jiashenglujob", label: "LinkedIn" },
  { icon: Mail,     href: "mailto:jiasheng.luu@gmail.com",            label: "Email" },
];

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setRoleIndex((i) => (i + 1) % roles.length), 2800);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      {/* Subtle grid */}
      <div className="absolute inset-0 grid-bg" />

      {/* Radial fade at top */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_40%_at_50%_0%,hsl(var(--muted)/60%),transparent)]" />

      <div className="relative mx-auto w-full max-w-6xl px-6 pt-24 pb-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

          {/* Left — copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-6"
          >
            {/* Status badge */}
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-foreground/60 animate-pulse" />
              Available for work
            </span>

            {/* Heading */}
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl leading-[1.1]">
                Hi, I&apos;m{" "}
                <span className="gradient-text">Jiasheng Lu</span>
              </h1>
              <div className="h-8 overflow-hidden">
                <motion.p
                  key={roleIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-xl text-muted-foreground"
                >
                  {roles[roleIndex]}
                </motion.p>
              </div>
            </div>

            {/* Description */}
            <p className="max-w-md text-base leading-relaxed text-muted-foreground">
              I build fast, accessible, and beautiful web applications. Based in
              Calgary, Canada — currently open to full-time and contract
              opportunities.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-md border border-border bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                View My Work
                <ArrowRight size={14} />
              </a>
              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
              >
                <Download size={14} />
                Resume
              </a>
            </div>

            {/* Social */}
            <div className="flex items-center gap-0.5">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:text-foreground hover:bg-muted"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right — code card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="hidden lg:block"
          >
            <div className="overflow-hidden rounded-xl border border-border bg-card shadow-xl shadow-black/10 dark:shadow-black/40">
              {/* Window chrome */}
              <div className="flex items-center gap-1.5 border-b border-border bg-muted/60 px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-border" />
                <span className="h-2.5 w-2.5 rounded-full bg-border" />
                <span className="h-2.5 w-2.5 rounded-full bg-border" />
                <span className="ml-3 font-mono text-xs text-muted-foreground">
                  jiasheng.ts
                </span>
              </div>
              {/* Code body */}
              <div className="p-5 font-mono text-sm leading-7">
                {codeLines.map((line, i) => (
                  <motion.div
                    key={line.key}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 + i * 0.07 }}
                    className="flex"
                  >
                    <span className="w-7 shrink-0 select-none text-right text-xs text-muted-foreground/40 leading-7 mr-4">
                      {i + 1}
                    </span>
                    <span className="text-foreground/80">{line.raw}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
        >
          <span className="font-mono text-[10px] text-muted-foreground/60 tracking-widest uppercase">
            scroll
          </span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.6 }}
            className="h-4 w-px bg-border"
          />
        </motion.div>
      </div>
    </section>
  );
}
