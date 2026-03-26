"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { skillCategories } from "@/data/skills";
import { clsx } from "clsx";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

export function Skills() {
  const [active, setActive] = useState(skillCategories[0].id);
  const category = skillCategories.find((c) => c.id === active)!;

  return (
    <section id="skills" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 space-y-2"
        >
          <p className="font-mono text-xs font-semibold uppercase tracking-widest text-violet-500">
            Expertise
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Skills &amp; <span className="gradient-text">Technologies</span>
          </h2>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[220px_1fr]">
          {/* Category sidebar */}
          <nav className="flex gap-1 lg:flex-col">
            {skillCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActive(cat.id)}
                className={clsx(
                  "rounded-lg px-4 py-2.5 text-left text-sm font-medium transition-all",
                  active === cat.id
                    ? "bg-violet-600 text-white shadow-sm shadow-violet-500/20"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                )}
              >
                {cat.label}
              </button>
            ))}
          </nav>

          {/* Skill bars */}
          <motion.div
            key={active}
            variants={{ show: { transition: { staggerChildren: 0.06 } } }}
            initial="hidden"
            animate="show"
            className="space-y-4"
          >
            {category.skills.map((skill) => (
              <motion.div key={skill.name} variants={fadeUp} className="space-y-1.5">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium text-foreground">{skill.name}</span>
                  <span className="font-mono text-xs text-muted-foreground">
                    {skill.level}%
                  </span>
                </div>
                <div className="h-1.5 w-full rounded-full bg-muted overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="h-full rounded-full bg-gradient-to-r from-violet-500 to-cyan-500"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
