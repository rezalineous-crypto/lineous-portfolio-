"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Map, Hammer, Rocket, TrendingUp } from "lucide-react";

interface SlideConfig {
  id: number;
  title: string;
  description: string;
  iconName: string;
  accentColor: string;
  glowColor: string;
  animationType: "float" | "rotate" | "pulse" | "bounce" | "scale";
  mood: string;
}

const slides: SlideConfig[] = [
  {
    id: 1,
    title: "Discover",
    description: "We dive deep into understanding your vision, goals, and challenges. Our team collaborates with you to map out the perfect path forward.",
    iconName: "search",
    accentColor: "#8b5cf6",
    glowColor: "rgba(139, 92, 246, 0.5)",
    animationType: "float",
    mood: "Curious, exploratory",
  },
  {
    id: 2,
    title: "Plan",
    description: "Precision meets innovation. We architect solutions that are scalable, secure, and built for long-term success.",
    iconName: "map",
    accentColor: "#3b82f6",
    glowColor: "rgba(59, 130, 246, 0.5)",
    animationType: "rotate",
    mood: "Precise, intelligent",
  },
  {
    id: 3,
    title: "Build",
    description: "Where ideas come to life. Our expert developers craft robust, cutting-edge solutions with meticulous attention to detail.",
    iconName: "hammer",
    accentColor: "#d946ef",
    glowColor: "rgba(217, 70, 239, 0.5)",
    animationType: "bounce",
    mood: "Energetic, active",
  },
  {
    id: 4,
    title: "Launch",
    description: "The moment of truth. We deploy your product with confidence, ensuring seamless performance from day one.",
    iconName: "rocket",
    accentColor: "#6366f1",
    glowColor: "rgba(99, 102, 241, 0.5)",
    animationType: "scale",
    mood: "Powerful, explosive",
  },
  {
    id: 5,
    title: "Scale",
    description: "Growth without limits. We optimize and expand your infrastructure to handle any level of success.",
    iconName: "trendingUp",
    accentColor: "#a855f7",
    glowColor: "rgba(168, 85, 247, 0.5)",
    animationType: "pulse",
    mood: "Stable, infinite",
  },
];

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  search: Search,
  map: Map,
  hammer: Hammer,
  rocket: Rocket,
  trendingUp: TrendingUp,
};

interface AnimatedIconProps {
  type: SlideConfig["animationType"];
  color: string;
  iconName: string;
}

function AnimatedIcon({ type, color, iconName }: AnimatedIconProps) {
  const Icon = iconMap[iconName] || Search;

  const animations = {
    float: {
      animate: { y: [0, -20, 0] },
      transition: { duration: 3, repeat: Infinity, ease: "easeInOut" as const },
    },
    rotate: {
      animate: { rotate: [0, 360] },
      transition: { duration: 8, repeat: Infinity, ease: "linear" as const },
    },
    pulse: {
      animate: { scale: [1, 1.2, 1] },
      transition: { duration: 2, repeat: Infinity, ease: "easeInOut" as const },
    },
    bounce: {
      animate: { y: [0, -30, 0], scale: [1, 1.1, 1] },
      transition: { duration: 1, repeat: Infinity, ease: "easeInOut" as const },
    },
    scale: {
      animate: { scale: [0.8, 1.3, 0.8], opacity: [0.5, 1, 0.5] },
      transition: { duration: 2, repeat: Infinity, ease: "easeInOut" as const },
    },
  };

  return (
    <motion.div
      animate={animations[type].animate}
      transition={animations[type].transition}
      className="relative"
    >
      <div 
        className="w-24 h-24 md:w-32 md:h-32 rounded-full flex items-center justify-center"
        style={{ 
          background: `radial-gradient(circle, ${color}40 0%, transparent 70%)`,
        }}
      >
        <div 
          className="w-16 h-16 md:w-20 md:h-20 rounded-xl flex items-center justify-center"
          style={{ 
            background: `linear-gradient(135deg, ${color} 0%, ${color}80 100%)`,
            boxShadow: `0 0 30px ${color}60`,
          }}
        >
          <Icon size={32} className="text-white md:w-10 md:h-10" />
        </div>
      </div>
    </motion.div>
  );
}

export function UserJourneySlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  // Auto slide every 5 seconds
  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  const current = slides[currentSlide];

  return (
    <section 
      className="relative overflow-hidden bg-[var(--bg-primary)] py-20"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative z-10 text-center mb-8 px-6"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Our <span style={{ color: current.accentColor }}>Journey</span>
        </h2>
        <p className="text-[var(--text-secondary)] text-lg">
          A premium storytelling experience
        </p>
      </motion.div>

      {/* Card Container - 80% width, rounded */}
      <div className="w-[80%] mx-auto">
        <div className="relative rounded-3xl bg-[var(--bg-card)] border border-[var(--border-primary)] overflow-hidden shadow-2xl">
          {/* Slider Container */}
          <div className="relative w-full overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="w-full"
              >
                {/* Slide Content */}
                <div className="relative w-full py-16 md:py-20 flex items-center justify-center overflow-hidden">
                  {/* Radial Glow Background */}
                  <motion.div
                    className="absolute inset-0"
                    style={{
                      background: `radial-gradient(circle at center, ${current.glowColor}30 0%, transparent 70%)`,
                    }}
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 0.8, 0.5],
                    }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  />
                  
                  {/* Moving Gradient */}
                  <motion.div
                    className="absolute inset-0 opacity-30"
                    style={{
                      background: `linear-gradient(${current.accentColor}40, transparent, ${current.accentColor}40)`,
                    }}
                    animate={{
                      background: [
                        `linear-gradient(${current.accentColor}40, transparent, ${current.accentColor}40)`,
                        `linear-gradient(${current.accentColor}20, transparent, ${current.accentColor}60)`,
                        `linear-gradient(${current.accentColor}40, transparent, ${current.accentColor}40)`,
                      ],
                    }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  />

                  {/* Content - Centered */}
                  <div className="relative z-10 flex flex-col items-center text-center px-8 md:px-16 max-w-3xl">
                    {/* Mood */}
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="text-xs md:text-sm uppercase tracking-widest mb-4"
                      style={{ color: current.accentColor }}
                    >
                      {current.mood}
                    </motion.p>

                    {/* Animated Icon */}
                    <AnimatedIcon type={current.animationType} color={current.accentColor} iconName={current.iconName} />

                    {/* Title */}
                    <motion.h3
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.6 }}
                      className="text-3xl md:text-5xl font-bold mt-6 mb-4"
                      style={{ 
                        color: "var(--text-primary)",
                        textShadow: `0 0 30px ${current.glowColor}`,
                      }}
                    >
                      {current.title}
                    </motion.h3>

                    {/* Description */}
                    <motion.p
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4, duration: 0.6 }}
                      className="text-sm md:text-base text-[var(--text-secondary)] max-w-xl leading-relaxed"
                    >
                      {current.description}
                    </motion.p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Bottom Indicators Only */}
          <div className="flex justify-center gap-3 py-6 bg-[var(--bg-card)]">
            {slides.map((slide, index) => (
              <motion.button
                key={slide.id}
                onClick={() => setCurrentSlide(index)}
                className="relative h-2 rounded-full transition-all"
                style={{
                  width: index === currentSlide ? 32 : 12,
                  backgroundColor: index === currentSlide ? slide.accentColor : "var(--border-primary)",
                }}
                whileHover={{ scale: 1.2 }}
              >
                {index === currentSlide && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute inset-0 rounded-full"
                    style={{
                      backgroundColor: slide.accentColor,
                      boxShadow: `0 0 10px ${slide.glowColor}`,
                    }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mt-6 px-6 max-w-md mx-auto">
        <div className="h-1 bg-[var(--border-primary)] rounded-full overflow-hidden">
          <motion.div
            className="h-full rounded-full"
            style={{ backgroundColor: current.accentColor }}
            initial={{ width: 0 }}
            animate={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>
    </section>
  );
}

export default UserJourneySlider;
