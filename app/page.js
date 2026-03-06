'use client';

import dynamic from 'next/dynamic';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const CustomCursor = dynamic(() => import('@/components/CustomCursor'), { ssr: false });

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background overflow-x-hidden">
      {/* Ambient background — fixed so it covers entire page */}
      <div className="fixed inset-0 pointer-events-none z-0" aria-hidden="true">
        {/* Large soft orbs */}
        <div className="orb w-[700px] h-[700px] bg-violet-600/10 top-[-200px] left-[-200px] animate-float-slow" />
        <div className="orb w-[500px] h-[500px] bg-cyan-500/8 top-[30%] right-[-150px] animate-float" style={{ animationDelay: '2s' }} />
        <div className="orb w-[400px] h-[400px] bg-rose-500/6 bottom-[10%] left-[20%] animate-float-slow" style={{ animationDelay: '4s' }} />
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
