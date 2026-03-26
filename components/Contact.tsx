"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { email, resumeUrl, socialLinks } from "@/data/social";

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
};

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center space-y-8"
        >
          <div className="space-y-3">
            <p className="font-mono text-xs font-semibold uppercase tracking-widest text-violet-500">
              Get in touch
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Let&apos;s build something{" "}
              <span className="gradient-text">great together</span>
            </h2>
            <p className="text-base text-muted-foreground">
              I&apos;m currently open to new opportunities. Whether you have a
              project in mind, a question, or just want to say hi — my inbox is
              always open.
            </p>
          </div>

          {/* Primary CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center gap-2 rounded-lg bg-violet-600 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-violet-700 hover:shadow-lg hover:shadow-violet-500/20"
            >
              Say Hello
              <ArrowRight size={15} />
            </a>
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition-all hover:border-violet-500/40 hover:bg-muted"
            >
              <Download size={15} />
              Download Resume
            </a>
          </div>

          {/* Social cards */}
          <div className="grid gap-3 sm:grid-cols-3">
            {socialLinks.map((link) => {
              const Icon = iconMap[link.icon as keyof typeof iconMap];
              return (
                <a
                  key={link.platform}
                  href={link.url}
                  target={link.url.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="card-hover group flex items-center gap-3 rounded-xl border border-border bg-card p-4 text-left"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border bg-muted text-muted-foreground transition-colors group-hover:border-violet-500/40 group-hover:bg-violet-500/10 group-hover:text-violet-500">
                    {Icon && <Icon size={16} />}
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-foreground">
                      {link.platform}
                    </p>
                    <p className="truncate font-mono text-xs text-muted-foreground">
                      {link.handle}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
