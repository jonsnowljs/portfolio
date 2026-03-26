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
  { text: "const jiasheng = {", indent: 0 },
  { text: '  role: "Full Stack Developer",', indent: 0 },
  { text: '  location: "Calgary, Canada",', indent: 0 },
  { text: "  loves: [", indent: 0 },
  { text: '    "clean code",', indent: 0 },
  { text: '    "great UX",', indent: 0 },
  { text: '    "solving hard problems",', indent: 0 },
  { text: "  ],", indent: 0 },
  { text: "  available: true,", indent: 0 },
  { text: "}", indent: 0 },
];

const socialLinks = [
  { icon: Github, href: "https://github.com/jonsnowljs", label: "GitHub" },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/jiashenglujob",
    label: "LinkedIn",
  },
  { icon: Mail, href: "mailto:jiasheng.lu@edu.sait.ca", label: "Email" },
];

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((i) => (i + 1) % roles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg" />

      {/* Radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_-10%,theme(colors.violet.500/15),transparent)]" />

      <div className="relative mx-auto w-full max-w-6xl px-6 pt-24 pb-16">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left — copy */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            {/* Badge */}
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-400">
              <span className="h-1.5 w-1.5 rounded-full bg-violet-400 animate-pulse" />
              Available for work
            </span>

            {/* Heading */}
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Hi, I&apos;m{" "}
                <span className="gradient-text">Jiasheng Lu</span>
              </h1>
              <div className="flex items-center gap-2 text-xl text-muted-foreground sm:text-2xl">
                <motion.span
                  key={roleIndex}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  {roles[roleIndex]}
                </motion.span>
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
                className="inline-flex items-center gap-2 rounded-lg bg-violet-600 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-violet-700 hover:shadow-lg hover:shadow-violet-500/20"
              >
                View My Work
                <ArrowRight size={15} />
              </a>
              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground transition-all hover:border-violet-500/40 hover:bg-muted"
              >
                <Download size={15} />
                Resume
              </a>
            </div>

            {/* Social */}
            <div className="flex items-center gap-1">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-md text-muted-foreground transition-colors hover:text-foreground hover:bg-muted"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right — code card */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="rounded-xl border border-border bg-card overflow-hidden shadow-2xl shadow-black/20">
              {/* Window chrome */}
              <div className="flex items-center gap-1.5 border-b border-border bg-muted/50 px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
                <span className="ml-3 font-mono text-xs text-muted-foreground">
                  jiasheng.ts
                </span>
              </div>
              {/* Code */}
              <div className="p-5 font-mono text-sm leading-7">
                {codeLines.map((line, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + i * 0.07 }}
                    className="flex"
                  >
                    <span className="w-8 shrink-0 select-none text-right text-muted-foreground/40 text-xs leading-7 mr-4">
                      {i + 1}
                    </span>
                    <span>
                      {line.text.startsWith("const") ? (
                        <>
                          <span className="text-violet-400">const </span>
                          <span className="text-cyan-400">jiasheng</span>
                          <span className="text-foreground"> = {"{"}</span>
                        </>
                      ) : line.text === "}" ? (
                        <span className="text-foreground">{"}"}</span>
                      ) : line.text.includes('"') ? (
                        (() => {
                          const m = line.text.match(/^(\s*)([\w]+)(:)(\s*)(.+)$/);
                          if (m) {
                            return (
                              <>
                                <span className="text-foreground">{m[1]}</span>
                                <span className="text-violet-300">{m[2]}</span>
                                <span className="text-foreground">{m[3]}{m[4]}</span>
                                <span className="text-green-400">{m[5]}</span>
                              </>
                            );
                          }
                          return <span className="text-green-400">{line.text}</span>;
                        })()
                      ) : (
                        <span className="text-foreground">{line.text}</span>
                      )}
                    </span>
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
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        >
          <span className="text-xs text-muted-foreground">scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="h-4 w-px bg-border"
          />
        </motion.div>
      </div>
    </section>
  );
}
