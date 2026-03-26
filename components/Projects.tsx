"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { projects } from "@/data/projects";
import { clsx } from "clsx";

const categories = ["All", "Full Stack", "Frontend"];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function Projects() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="py-24 bg-muted/30">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 space-y-4"
        >
          <p className="font-mono text-xs font-semibold uppercase tracking-widest text-violet-500">
            Work
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            {/* Filter tabs */}
            <div className="flex gap-1 rounded-lg border border-border bg-card p-1">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={clsx(
                    "rounded-md px-3 py-1 text-sm font-medium transition-all",
                    active === cat
                      ? "bg-violet-600 text-white shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid gap-5 sm:grid-cols-2"
        >
          {filtered.map((project) => (
            <motion.article
              key={project.id}
              variants={fadeUp}
              className="card-hover group relative flex flex-col overflow-hidden rounded-xl border border-border bg-card"
            >
              {project.featured && (
                <span className="absolute right-4 top-4 z-10 rounded-full border border-violet-500/30 bg-violet-500/10 px-2.5 py-0.5 text-[10px] font-semibold text-violet-400">
                  Featured
                </span>
              )}

              <div className="flex flex-1 flex-col gap-4 p-6">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs text-muted-foreground">
                      {project.category} · {project.year}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {project.title}
                  </h3>
                </div>

                <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-border bg-muted px-2 py-0.5 font-mono text-[11px] text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-3 border-t border-border pt-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <Github size={13} />
                    Source
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-violet-500 transition-colors hover:text-violet-400"
                  >
                    <ExternalLink size={13} />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
