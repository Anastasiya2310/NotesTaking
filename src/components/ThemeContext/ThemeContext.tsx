import { createContext, useContext, useEffect, useState, ReactNode, useMemo } from "react"
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"
import { lightTheme, darkTheme } from "../../theme"
import { IThemeContextType, ThemeMode } from "../../interfaces/interfaces"

const ThemeContext = createContext<IThemeContextType | undefined>(undefined);

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if(!context) {
    throw new Error("useThemeContext caan`t be used outside ThemeProvider");
  }
  return context;
}

export const ThemeProviderContainer = ({ children }: { children: ReactNode }) => {
  const [mode, setMode] = useState<ThemeMode>("system"); // default, SSR-safe
  const [isClient, setIsClient] = useState(false); // flag to avoid mismatch

  const [systemMode, setSystemMode] = useState<"light" | "dark">(() => {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
  });

  useEffect(() => {
    setIsClient(true); // now it's safe to access localStorage

    const stored = localStorage.getItem("app-theme");
    if (stored === "light" || stored === "dark" || stored === "system") {
      setMode(stored);
    }
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
    localStorage.setItem("app-theme", newMode);
  };

  const theme = useMemo(() => {
    return selectedMode === "light" ? lightTheme : darkTheme;
  }, [selectedMode]);

  // Don't render anything until we know the client value (avoids mismatch)
  if (!isClient) return null;

  return (
    <ThemeContext.Provider value={{ mode, selectedMode, toggleMode: setMode, persistMode }}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        { children }
      </MuiThemeProvider>
    </ThemeContext.Provider>
  )
}