"use client";

import { useContext } from "react";
import { ThemeContext, type Theme } from "../components/providers/ThemeProvider";

interface UseThemeReturn {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

/**
 * Hook to access the theme context.
 * @throws Error if used outside of ThemeProvider
 */
export function useTheme(): UseThemeReturn {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
}

export default useTheme;
