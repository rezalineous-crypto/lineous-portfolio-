"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import FuturisticBackground from "../ui/FuturisticBackground";

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
      <FuturisticBackground seed={1} iconCount={3} preset="neural" />
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-[var(--border-primary)] border border-[var(--border-primary)] text-xs font-semibold tracking-widest uppercase text-[var(--accent-primary)] mb-6">
            Connect • Build • Grow
          </span>
          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-[0.9] mb-8">
            Digital Excellence <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-500 to-indigo-500">
              Engineered for Scale
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-[var(--text-secondary)] mb-10 leading-relaxed">
            Lineous is a premium technology partner helping businesses navigate the digital landscape through world-class engineering and strategic growth.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto bg-gradient-to-r from-fuchsia-600 to-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform flex items-center justify-center gap-2">
              Start Your Project <ArrowRight size={20} />
            </button>
            <button className="w-full sm:w-auto bg-[var(--border-primary)] border border-[var(--border-primary)] px-8 py-4 rounded-full font-bold text-lg hover:bg-[var(--border-primary)]/50 transition-colors">
              View Our Work
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;
