import { createContext, useContext } from "react";
import { Theme, Mode } from "../ThemeModeTypes";

export const ThemeModeContext = createContext<{
    theme: Theme;
    mode: Mode;
    toggleTheme: () => void;
    toggleMode: () => void;
}>({
    theme: "light",
    mode: "system",
    toggleTheme: () => { },
    toggleMode: () => { },
})

export const useThemeMode = () => useContext(ThemeModeContext)