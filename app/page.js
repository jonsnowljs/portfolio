'use client';

import dynamic from 'next/dynamic';
import { motion, useScroll, useTransform } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const CustomCursor = dynamic(() => import('@/components/CustomCursor'), { ssr: false });

export default function Home() {
  const { scrollYProgress } = useScroll();

  const orbY1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const orbY2 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const orbY3 = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const orbX1 = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const orbX2 = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const orbScale1 = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.15, 0.9]);
  const orbScale2 = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.85, 1.1]);

  return (
    <main className="relative min-h-screen bg-background overflow-x-hidden">
      {/* Ambient background — fixed so it covers entire page, with parallax */}
      <div className="fixed inset-0 pointer-events-none z-0" aria-hidden="true">
        {/* Large soft orbs with scroll-linked parallax */}
        <motion.div
          className="orb w-[700px] h-[700px] bg-violet-600/10 top-[-200px] left-[-200px] animate-float-slow"
          style={{ y: orbY1, x: orbX1, scale: orbScale1 }}
        />
        <motion.div
          className="orb w-[500px] h-[500px] bg-cyan-500/8 top-[30%] right-[-150px] animate-float"
          style={{ y: orbY2, x: orbX2, scale: orbScale2, animationDelay: '2s' }}
        />
        <motion.div
          className="orb w-[400px] h-[400px] bg-rose-500/6 bottom-[10%] left-[20%] animate-float-slow"
          style={{ y: orbY3, scale: orbScale1, animationDelay: '4s' }}
        />
        {/* Subtle dot grid */}
        <div className="absolute inset-0 dot-bg opacity-40" />
      </div>

      <CustomCursor />
      <Navbar />

      <section id="home">
        <Hero />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </main>
  );
}
