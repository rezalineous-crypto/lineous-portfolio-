"use client";

import {
  createContext,
  useCallback,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export type Theme = "lineous" | "dark" | "light" | "futuristic";

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

interface ThemeProviderProps {
  children: ReactNode;
  defaultTheme?: Theme;
}

const STORAGE_KEY = "app-theme";

export function ThemeProvider({
  children,
  defaultTheme = "lineous",
}: ThemeProviderProps) {
  const [theme, setThemeState] = useState<Theme>(defaultTheme);
  const [mounted, setMounted] = useState(false);

  // Apply theme to document
  const applyTheme = useCallback((newTheme: Theme) => {
    const root = document.documentElement;
    
    // Remove all theme classes
    root.classList.remove(
      "theme-lineous",
      "theme-dark",
      "theme-light",
      "theme-futuristic"
    );
    
    // Add the new theme class
    root.classList.add(`theme-${newTheme}`);
  }, []);

  // Initialize theme on mount
  useEffect(() => {
    setMounted(true);
    
    // Try to get theme from localStorage
    const stored = localStorage.getItem(STORAGE_KEY) as Theme | null;
    
    // Use stored theme or default
    const initialTheme = stored || defaultTheme;
    setThemeState(initialTheme);
    applyTheme(initialTheme);
  }, [defaultTheme, applyTheme]);

  // Update theme when state changes
  useEffect(() => {
    if (mounted) {
      applyTheme(theme);
      localStorage.setItem(STORAGE_KEY, theme);
    }
  }, [theme, mounted, applyTheme]);

  const setTheme = useCallback((newTheme: Theme) => {
    setThemeState(newTheme);
  }, []);

  const toggleTheme = useCallback(() => {
    const themeOrder: Theme[] = ["lineous", "dark", "light", "futuristic"];
    const currentIndex = themeOrder.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themeOrder.length;
    setThemeState(themeOrder[nextIndex]);
  }, [theme]);

  // Prevent flash by not rendering until mounted
  if (!mounted) {
    return (
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function() {
              var theme = localStorage.getItem('${STORAGE_KEY}') || '${defaultTheme}';
              document.documentElement.classList.add('theme-' + theme);
            })();
          `,
        }}
      />
    );
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
