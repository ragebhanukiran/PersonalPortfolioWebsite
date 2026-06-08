import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface ThemeContextType {
  isDayMode: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  isDayMode: true,
  toggleTheme: () => {},
});

export function useMinecraftTheme() {
  return useContext(ThemeContext);
}

export function MinecraftThemeProvider({ children }: { children: ReactNode }) {
  const [isDayMode, setIsDayMode] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("mc-theme");
      return saved ? saved === "day" : true;
    }
    return true;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDayMode) {
      root.classList.remove("night");
    } else {
      root.classList.add("night");
    }
    localStorage.setItem("mc-theme", isDayMode ? "day" : "night");
  }, [isDayMode]);

  const toggleTheme = () => setIsDayMode((prev) => !prev);

  return (
    <ThemeContext.Provider value={{ isDayMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
