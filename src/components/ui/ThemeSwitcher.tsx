"use client";

import { useState, useRef, useEffect } from "react";
import { Zap, Moon, Sun, Sparkles, ChevronDown } from "lucide-react";
import { useTheme } from "../../hooks/useTheme";
import type { Theme } from "../../components/providers/ThemeProvider";

interface ThemeOption {
  value: Theme;
  label: string;
  icon: React.ReactNode;
}

const themeOptions: ThemeOption[] = [
  {
    value: "lineous",
    label: "Lineous",
    icon: <Zap className="w-4 h-4" />,
  },
  {
    value: "dark",
    label: "Dark",
    icon: <Moon className="w-4 h-4" />,
  },
  {
    value: "light",
    label: "Light",
    icon: <Sun className="w-4 h-4" />,
  },
  {
    value: "futuristic",
    label: "Futuristic",
    icon: <Sparkles className="w-4 h-4" />,
  },
];

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentOption = themeOptions.find((opt) => opt.value === theme);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[var(--bg-card)] border border-[var(--border-primary)] hover:border-[var(--accent-primary)] transition-all duration-200 text-sm font-medium"
        style={{ color: "var(--text-primary)" }}
      >
        {currentOption?.icon}
        <span className="hidden sm:inline">{currentOption?.label}</span>
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          className="absolute top-full mt-2 right-0 min-w-[160px] py-2 rounded-xl border shadow-xl z-50 animate-in fade-in zoom-in-95 duration-200"
          style={{
            backgroundColor: "var(--bg-card)",
            borderColor: "var(--border-primary)",
          }}
        >
          {themeOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => {
                setTheme(option.value);
                setIsOpen(false);
              }}
              className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm font-medium transition-colors duration-150 ${
                theme === option.value
                  ? "bg-[var(--accent-primary)]/10"
                  : "hover:bg-[var(--border-primary)]"
              }`}
              style={{
                color:
                  theme === option.value
                    ? "var(--accent-primary)"
                    : "var(--text-secondary)",
              }}
            >
              {option.icon}
              {option.label}
              {theme === option.value && (
                <span className="ml-auto w-2 h-2 rounded-full bg-[var(--accent-primary)]" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default ThemeSwitcher;
