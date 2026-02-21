"use client";

import { motion } from "motion/react";
import { Cpu, Zap, Globe, Shield, Rocket, Users, Database, Cloud } from "lucide-react";
import { useTheme } from "../../hooks/useTheme";
import { useMemo } from "react";

interface FuturisticBackgroundProps {
  /** Unique icons to display */
  icons?: Array<"cpu" | "zap" | "globe" | "shield" | "rocket" | "users" | "database" | "cloud">;
  /** Number of icon pairs to display */
  iconCount?: number;
  /** Seed for randomization - different sections get different patterns */
  seed?: number;
  /** Visual preset - overrides theme colors with specific look */
  preset?: "neural" | "cyber" | "plasma" | "matrix" | "aurora" | "inferno" | "frost" | "void";
}

const iconMap = {
  cpu: Cpu,
  zap: Zap,
  globe: Globe,
  shield: Shield,
  rocket: Rocket,
  users: Users,
  database: Database,
  cloud: Cloud,
};

const defaultIcons: Array<"cpu" | "zap" | "globe" | "shield"> = ["cpu", "zap", "globe", "shield"];

// Preset color configurations
const presets = {
  neural: {
    glowPrimary: "bg-purple-600",
    glowSecondary: "bg-indigo-600",
    glowPrimaryOpacity: 18,
    glowSecondaryOpacity: 15,
    iconPrimary: "text-purple-500",
    iconSecondary: "text-indigo-500",
    linePrimary: "#a855f7",
    lineSecondary: "#6366f1",
  },
  cyber: {
    glowPrimary: "bg-cyan-500",
    glowSecondary: "bg-fuchsia-500",
    glowPrimaryOpacity: 20,
    glowSecondaryOpacity: 18,
    iconPrimary: "text-cyan-400",
    iconSecondary: "text-fuchsia-400",
    linePrimary: "#22d3ee",
    lineSecondary: "#e879f9",
  },
  plasma: {
    glowPrimary: "bg-orange-500",
    glowSecondary: "bg-red-500",
    glowPrimaryOpacity: 22,
    glowSecondaryOpacity: 18,
    iconPrimary: "text-orange-400",
    iconSecondary: "text-red-400",
    linePrimary: "#fb923c",
    lineSecondary: "#f87171",
  },
  matrix: {
    glowPrimary: "bg-green-500",
    glowSecondary: "bg-emerald-500",
    glowPrimaryOpacity: 15,
    glowSecondaryOpacity: 12,
    iconPrimary: "text-green-400",
    iconSecondary: "text-emerald-400",
    linePrimary: "#4ade80",
    lineSecondary: "#34d399",
  },
  aurora: {
    glowPrimary: "bg-teal-500",
    glowSecondary: "bg-sky-500",
    glowPrimaryOpacity: 16,
    glowSecondaryOpacity: 14,
    iconPrimary: "text-teal-400",
    iconSecondary: "text-sky-400",
    linePrimary: "#2dd4bf",
    lineSecondary: "#38bdf8",
  },
  inferno: {
    glowPrimary: "bg-red-600",
    glowSecondary: "bg-yellow-500",
    glowPrimaryOpacity: 25,
    glowSecondaryOpacity: 20,
    iconPrimary: "text-red-500",
    iconSecondary: "text-yellow-400",
    linePrimary: "#dc2626",
    lineSecondary: "#facc15",
  },
  frost: {
    glowPrimary: "bg-sky-400",
    glowSecondary: "bg-blue-400",
    glowPrimaryOpacity: 14,
    glowSecondaryOpacity: 12,
    iconPrimary: "text-sky-300",
    iconSecondary: "text-blue-300",
    linePrimary: "#7dd3fc",
    lineSecondary: "#93c5fd",
  },
  void: {
    glowPrimary: "bg-slate-600",
    glowSecondary: "bg-zinc-600",
    glowPrimaryOpacity: 10,
    glowSecondaryOpacity: 8,
    iconPrimary: "text-slate-400",
    iconSecondary: "text-zinc-400",
    linePrimary: "#64748b",
    lineSecondary: "#71717a",
  },
};

// Simple seeded random for consistent but varied results per section
function seededRandom(seed: number): () => number {
  return function () {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  };
}

export function FuturisticBackground({
  icons = defaultIcons,
  iconCount = 4,
  seed = 1,
  preset,
}: FuturisticBackgroundProps) {
  const { theme } = useTheme();

  // Generate random positions and patterns based on seed
  const randomConfig = useMemo(() => {
    const rand = seededRandom(seed);

    // Random glow positions
    const glow1 = {
      top: `${Math.floor(rand() * 40)}%`,
      left: `${Math.floor(rand() * 30)}%`,
      size: 300 + Math.floor(rand() * 300),
    };

    const glow2 = {
      bottom: `${Math.floor(rand() * 40)}%`,
      right: `${Math.floor(rand() * 30)}%`,
      size: 250 + Math.floor(rand() * 250),
    };

    // Random icon positions
    const iconPositions = Array.from({ length: iconCount }, (_, i) => ({
      top: `${10 + rand() * 70}%`,
      left: rand() > 0.5 ? `${rand() * 20}%` : undefined,
      right: rand() > 0.5 ? `${rand() * 20}%` : undefined,
      size: 40 + Math.floor(rand() * 60),
      duration: 6 + rand() * 6,
      delay: rand() * 2,
    }));

    // Random SVG line paths
    const linePaths = [
      `M0 ${20 + rand() * 60} Q${20 + rand() * 30} ${20 + rand() * 60} ${50} ${20 + rand() * 60} T100 ${20 + rand() * 60}`,
      `M0 ${20 + rand() * 60} Q${30 + rand() * 20} ${rand() * 50} ${60 + rand() * 20} ${rand() * 50} T100 ${rand() * 50}`,
      `M0 ${30 + rand() * 40} Q${40} ${rand() * 40} ${80} ${30 + rand() * 40}`,
      `M${rand() * 30} 0 Q${rand() * 50} ${30 + rand() * 40} ${rand() * 30} 100`,
    ];

    return { glow1, glow2, iconPositions, linePaths };
  }, [seed, iconCount]);

  // Get colors based on preset or theme
  const getThemeColors = () => {
    // If preset is specified, use preset colors
    if (preset && presets[preset]) {
      return presets[preset];
    }

    // Otherwise use theme-based colors
    switch (theme) {
      case "lineous":
        return {
          glowPrimary: "bg-purple-600",
          glowSecondary: "bg-indigo-600",
          glowPrimaryOpacity: 15,
          glowSecondaryOpacity: 15,
          iconPrimary: "text-purple-500",
          iconSecondary: "text-indigo-500",
          linePrimary: "#a855f7",
          lineSecondary: "#6366f1",
        };
      case "dark":
        return {
          glowPrimary: "bg-blue-600",
          glowSecondary: "bg-violet-600",
          glowPrimaryOpacity: 12,
          glowSecondaryOpacity: 12,
          iconPrimary: "text-blue-500",
          iconSecondary: "text-violet-500",
          linePrimary: "#3b82f6",
          lineSecondary: "#8b5cf6",
        };
      case "light":
        return {
          glowPrimary: "bg-violet-600",
          glowSecondary: "bg-blue-600",
          glowPrimaryOpacity: 10,
          glowSecondaryOpacity: 10,
          iconPrimary: "text-violet-600",
          iconSecondary: "text-blue-600",
          linePrimary: "#7c3aed",
          lineSecondary: "#2563eb",
        };
      case "futuristic":
        return {
          glowPrimary: "bg-fuchsia-500",
          glowSecondary: "bg-cyan-400",
          glowPrimaryOpacity: 20,
          glowSecondaryOpacity: 18,
          iconPrimary: "text-fuchsia-400",
          iconSecondary: "text-cyan-400",
          linePrimary: "#c084fc",
          lineSecondary: "#22d3ee",
        };
      default:
        return {
          glowPrimary: "bg-purple-600",
          glowSecondary: "bg-indigo-600",
          glowPrimaryOpacity: 15,
          glowSecondaryOpacity: 15,
          iconPrimary: "text-purple-500",
          iconSecondary: "text-indigo-500",
          linePrimary: "#a855f7",
          lineSecondary: "#6366f1",
        };
    }
  };

  const themeColors = getThemeColors();

  return (
    <div className="absolute inset-0 pointer-events-none z-0">
      {/* Random Glow Atmosphere */}
      <div
        className={`absolute rounded-full blur-[120px] ${themeColors.glowPrimary}`}
        style={{
          top: randomConfig.glow1.top,
          left: randomConfig.glow1.left,
          width: randomConfig.glow1.size,
          height: randomConfig.glow1.size,
          opacity: themeColors.glowPrimaryOpacity / 100,
        }}
      />
      <div
        className={`absolute rounded-full blur-[120px] ${themeColors.glowSecondary}`}
        style={{
          bottom: randomConfig.glow2.bottom,
          right: randomConfig.glow2.right,
          width: randomConfig.glow2.size,
          height: randomConfig.glow2.size,
          opacity: themeColors.glowSecondaryOpacity / 100,
        }}
      />

      {/* Random Curved Line Texture - Animated */}
      <svg
        className="absolute inset-0 w-full h-full mix-blend-soft-light"
        preserveAspectRatio="none"
        viewBox="0 0 100 100"
      >
        {/* Primary lines - moving left to right */}
        {randomConfig.linePaths.slice(0, 2).map((_, idx) => (
          <motion.path
            key={`primary-${idx}`}
            d={randomConfig.linePaths[idx]}
            fill="none"
            stroke={themeColors.linePrimary}
            strokeWidth="0.5"
            vectorEffect="non-scaling-stroke"
            initial={{ strokeDashoffset: 100, opacity: 0 }}
            animate={{ 
              strokeDashoffset: [100, 0, -100],
              opacity: [0, 0.15, 0]
            }}
            transition={{
              duration: 8 + idx * 2,
              delay: idx * 1.5,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              strokeDasharray: "100 100",
            }}
          />
        ))}
        {/* Secondary lines - moving left to right with offset */}
        {randomConfig.linePaths.slice(2).map((_, idx) => (
          <motion.path
            key={`secondary-${idx}`}
            d={randomConfig.linePaths[idx + 2]}
            fill="none"
            stroke={themeColors.lineSecondary}
            strokeWidth="0.3"
            vectorEffect="non-scaling-stroke"
            initial={{ strokeDashoffset: 100, opacity: 0 }}
            animate={{ 
              strokeDashoffset: [100, 0, -100],
              opacity: [0, 0.12, 0]
            }}
            transition={{
              duration: 10 + idx * 2,
              delay: idx * 2 + 1,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              strokeDasharray: "100 100",
            }}
          />
        ))}
      </svg>

      {/* Random Floating Tech Icons */}
      {randomConfig.iconPositions.map((pos, idx) => {
        const IconComponent = iconMap[icons[idx % icons.length]];
        const isPrimary = idx % 2 === 0;

        const positionStyle: Record<string, string> = {
          top: pos.top,
        };
        if (pos.left) positionStyle.left = pos.left;
        if (pos.right) positionStyle.right = pos.right;

        return (
          <motion.div
            key={idx}
            className="absolute pointer-events-none"
            style={positionStyle}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              y: [-15 + idx * 3, 15 - idx * 3, -15 + idx * 3],
              rotate: [-5 + idx, 5 - idx, -5 + idx],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: pos.duration,
              delay: pos.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <IconComponent
              size={pos.size}
              className={isPrimary ? themeColors.iconPrimary : themeColors.iconSecondary}
              style={{ opacity: 0.1 }}
            />
          </motion.div>
        );
      })}
    </div>
  );
}

export default FuturisticBackground;
