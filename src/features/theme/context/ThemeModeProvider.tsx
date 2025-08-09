import { useEffect, useState, ReactNode } from "react";
import { ThemeProvider } from "@emotion/react";
import { lightTheme, darkTheme } from "../../../styles/theme";
import { Mode, Theme } from "../ThemeModeTypes";
import { ThemeModeContext } from "./ThemeModeContext";

export const ThemeModeProvider = ({ children }: { children: ReactNode }) => {
  const getSystemTheme = (): Theme =>
    window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";

  const [mode, setMode] = useState<Mode>(
    () => (localStorage.getItem("mode") as Mode) || "system"
  );
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem("theme") as Theme) || getSystemTheme()
  );

  useEffect(() => {
    if (mode === "system") {
      const systemTheme = getSystemTheme();
      setTheme(systemTheme);
      const listener = (e: MediaQueryListEvent) =>
        setTheme(e.matches ? "dark" : "light");
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .addEventListener("change", listener);
      return () =>
        window
          .matchMedia("(prefers-color-scheme: dark)")
          .removeEventListener("change", listener);
    }
  }, [mode]);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
    localStorage.setItem("mode", mode);
  }, [theme, mode]);

  const toggleTheme = () => {
    if (mode === "manual") {
      setTheme((prev) => (prev === "dark" ? "light" : "dark"));
    }
  };

  const toggleMode = () => {
    setMode((prev) => (prev === "system" ? "manual" : "system"));
  };

  const themeUI = theme === "dark" ? darkTheme : lightTheme;

  const value = {
    theme,
    mode,
    toggleTheme,
    toggleMode,
  };
  return (
    <ThemeModeContext.Provider value={value}>
      <ThemeProvider theme={themeUI}>{children}</ThemeProvider>
    </ThemeModeContext.Provider>
  );
};
