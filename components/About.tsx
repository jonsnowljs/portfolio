"use client";

import { motion } from "framer-motion";
import { stats } from "@/data/skills";

const techStack = [
  "React", "TypeScript", "Next.js", "Node.js",
  "GraphQL", "MongoDB", "Tailwind CSS", "Framer Motion",
];

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show:   { opacity: 1, y: 0 },
};

export function About() {
  return (
    <section id="about" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-12 lg:grid-cols-2 lg:items-center"
        >
          {/* Left — text */}
          <div className="space-y-6">
            <motion.div variants={fadeUp} className="space-y-2">
              <p className="font-mono text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                About me
              </p>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Crafting digital experiences
                <br />
                <span className="gradient-text">with care</span>
              </h2>
            </motion.div>

            <motion.p variants={fadeUp} className="text-base leading-relaxed text-muted-foreground">
              Hi! I&apos;m Jiasheng Lu — a passionate full stack developer based
              in Calgary, Canada. I graduated from SAIT with an Award of
              Excellence and have been building web applications for 4+ years.
            </motion.p>

            <motion.p variants={fadeUp} className="text-base leading-relaxed text-muted-foreground">
              I care deeply about clean code, great user experiences, and solving
              real problems. Whether it&apos;s a snappy React UI or a robust
              Node.js API, I bring the same attention to every layer of the stack.
            </motion.p>

            {/* Tech stack */}
            <motion.div variants={fadeUp} className="space-y-3">
              <p className="text-sm font-medium text-foreground">Primary stack</p>
              <div className="flex flex-wrap gap-1.5">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-border bg-muted px-2.5 py-1 font-mono text-xs text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right — stats */}
          <div className="grid grid-cols-2 gap-3">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                variants={fadeUp}
                transition={{ delay: i * 0.05 }}
                className="card-base rounded-xl p-6"
              >
                <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}

            {/* SAIT badge */}
            <motion.div
              variants={fadeUp}
              className="col-span-2 card-base rounded-xl p-5"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border bg-muted text-base">
                  🎓
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    Award of Excellence
                  </p>
                  <p className="text-xs text-muted-foreground">
                    SAIT Graduate · Software Development
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
