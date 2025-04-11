import { createContext, useContext, useEffect, useState, ReactNode, useMemo } from "react"
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"
import { lightTheme, darkTheme, FontThemeType } from "../../theme"
import { IThemeContextType, ThemeMode, FontTheme } from "../../interfaces/interfaces"

const ThemeContext = createContext<IThemeContextType | undefined>(undefined);

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if(!context) {
    throw new Error("useThemeContext caan`t be used outside ThemeProvider");
  }
  return context;
}

export const ThemeProviderContainer = ({ children }: { children: ReactNode }) => {
  const [mode, setMode] = useState<ThemeMode>("system");
  const [isClient, setIsClient] = useState(false);
  const [fontTheme, setFontTheme] = useState<FontThemeType>("sans-serif");
  const [systemMode, setSystemMode] = useState<"light" | "dark">(() => {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
  });

  useEffect(() => {
    setIsClient(true);
    const storedFont = localStorage.getItem("font-theme") as FontTheme;
    const storedColor = localStorage.getItem("color-theme") as ThemeMode;
    if(storedColor) setMode(storedColor);
    if(storedFont) setFontTheme(storedFont);
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const themeHandler = (event: MediaQueryListEvent) => {
      setSystemMode(event.matches ? "dark" : "light");
    };
    mediaQuery.addEventListener("change", themeHandler);
    return () => mediaQuery.removeEventListener("change", themeHandler);
  }, []);

  const selectedMode = mode === "system" ? systemMode : mode;

  const persistMode = (newMode: ThemeMode) => {
    localStorage.setItem("color-theme", newMode);
  };

  const theme = useMemo(() => {
    return selectedMode === "light" ? lightTheme(fontTheme) : darkTheme(fontTheme);
  }, [selectedMode, fontTheme]);

  if (!isClient) return null;

  return (
    <ThemeContext.Provider value={{ mode, selectedMode, toggleMode: setMode, persistMode, fontTheme, setFontTheme }}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        { children }
      </MuiThemeProvider>
    </ThemeContext.Provider>
  )
}