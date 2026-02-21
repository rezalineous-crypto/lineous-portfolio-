"use client";

import { motion } from "framer-motion";
import { 
  Users, 
  Search, 
  Cpu, 
  Code, 
  ShieldCheck, 
  Rocket, 
  TrendingUp,
  ChevronRight
} from "lucide-react";
import FuturisticBackground from "../ui/FuturisticBackground";

interface JourneyStep {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;
  position: "left" | "right";
}

const journeySteps: JourneyStep[] = [
  {
    id: 1,
    title: "Discovery",
    description: "Understanding client goals and requirements.",
    icon: Users,
    position: "left",
  },
  {
    id: 2,
    title: "Analysis",
    description: "Breaking down business and technical challenges.",
    icon: Search,
    position: "right",
  },
  {
    id: 3,
    title: "Architecture",
    description: "Designing scalable industrial-grade systems.",
    icon: Cpu,
    position: "left",
  },
  {
    id: 4,
    title: "Development",
    description: "Engineering robust and maintainable solutions.",
    icon: Code,
    position: "right",
  },
  {
    id: 5,
    title: "Testing",
    description: "Validating reliability, performance, and security.",
    icon: ShieldCheck,
    position: "left",
  },
  {
    id: 6,
    title: "Deployment",
    description: "Launching infrastructure with CI/CD pipelines.",
    icon: Rocket,
    position: "right",
  },
  {
    id: 7,
    title: "Scaling",
    description: "Continuous optimization and scaling.",
    icon: TrendingUp,
    position: "left",
  },
];

function JourneyPathCard({ step, index }: { step: JourneyStep; index: number }) {
  const Icon = step.icon;
  const isLeft = step.position === "left";
  
  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -50 : 50, y: 30 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      transition={{ 
        delay: index * 0.1, 
        duration: 0.7, 
        ease: [0.25, 0.46, 0.45, 0.94] 
      }}
      viewport={{ once: true, amount: 0.3 }}
      className={`relative flex items-center ${isLeft ? 'justify-start' : 'justify-end'} w-full`}
    >
            <FuturisticBackground seed={2} preset="cyber" />
      
      {/* Card */}
      <motion.div 
        className={`w-full max-w-md ${isLeft ? 'mr-auto' : 'ml-auto'}`}
        whileHover={{ scale: 1.02, x: isLeft ? 10 : -10 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <div className="group relative p-6 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-primary)] overflow-hidden hover:border-[var(--accent-primary)]/50">
          {/* Gradient glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-primary)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Step number on the curve line side */}
          <div className={`absolute top-1/2 -translate-y-1/2 ${isLeft ? 'right-[-60px]' : 'left-[-60px]'} flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] text-white font-bold text-lg z-20`}>
            {step.id}
          </div>
          
          {/* Content */}
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-secondary)] flex items-center justify-center">
                <Icon size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-[var(--text-primary)]">
                {step.title}
              </h3>
            </div>
            
            <p className="text-[var(--text-secondary)] text-sm leading-relaxed ml-16">
              {step.description}
            </p>
          </div>
          
          {/* Bottom accent line */}
          <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] group-hover:w-full transition-all duration-500" />
        </div>
      </motion.div>
    </motion.div>
  );
}

export function UserJourneySection() {
  return (
    <section className="relative py-32 overflow-hidden bg-[var(--bg-primary)]">
      {/* Futuristic Background */}
      <div className="absolute inset-0 pointer-events-none">
        <FuturisticBackground seed={5} iconCount={3} preset="neural" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Our <span className="text-[var(--accent-primary)]">Journey</span>
          </h2>
          <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto">
            From discovery to scaling — experience our proven engineering process.
          </p>
        </motion.div>

        {/* Curved Pathway */}
        <div className="relative">
          {/* Curved SVG Line */}
          <svg 
            className="absolute left-1/2 top-0 -translate-x-1/2 w-full h-full pointer-events-none"
            style={{ height: `${journeySteps.length * 180}px` }}
            viewBox={`0 0 100 ${journeySteps.length * 100}`}
            preserveAspectRatio="none"
          >
            <defs>
              {/* Gradient for the path line with fade at both ends */}
              <linearGradient id="pathGradientFade" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="var(--accent-primary)" stopOpacity="0" />
                <stop offset="15%" stopColor="var(--accent-primary)" stopOpacity="0.4" />
                <stop offset="50%" stopColor="var(--accent-primary)" stopOpacity="1" />
                <stop offset="85%" stopColor="var(--accent-secondary)" stopOpacity="0.4" />
                <stop offset="100%" stopColor="var(--accent-secondary)" stopOpacity="0" />
              </linearGradient>
              {/* Mask for fade effect on the animated path */}
              <linearGradient id="pathFadeStart" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="white" stopOpacity="0" />
                <stop offset="20%" stopColor="white" stopOpacity="1" />
                <stop offset="80%" stopColor="white" stopOpacity="1" />
                <stop offset="100%" stopColor="white" stopOpacity="0" />
              </linearGradient>
            </defs>
            {/* Base path with gradient */}
            <path
              d={`M 50 0 Q 20 ${journeySteps.length * 25}, 50 ${journeySteps.length * 50} Q 80 ${journeySteps.length * 75}, 50 ${journeySteps.length * 100}`}
              fill="none"
              stroke="url(#pathGradientFade)"
              strokeWidth="4"
              strokeLinecap="round"
            />
            {/* Animated dash with fade mask */}
            <motion.path
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
              viewport={{ once: true }}
              d={`M 50 0 Q 20 ${journeySteps.length * 25}, 50 ${journeySteps.length * 50} Q 80 ${journeySteps.length * 75}, 50 ${journeySteps.length * 100}`}
              fill="none"
              stroke="url(#pathFadeStart)"
              strokeWidth="6"
              strokeLinecap="round"
              strokeDasharray="10 10"
              style={{ filter: 'drop-shadow(0 0 6px var(--accent-primary))' }}
            />
          </svg>

          {/* Journey Cards along the curve */}
          <div className="relative flex flex-col gap-12">
            {journeySteps.map((step, index) => (
              <JourneyPathCard key={step.id} step={step} index={index} />
            ))}
          </div>
        </div>

        {/* View Details Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mt-16"
        >
          <motion.a 
            href="/journey"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] text-white font-bold text-lg shadow-lg shadow-[var(--accent-primary)]/25"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            View Full Journey
            <ChevronRight size={20} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

export default UserJourneySection;
