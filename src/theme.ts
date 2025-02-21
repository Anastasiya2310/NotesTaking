import { createTheme, ThemeOptions } from "@mui/material/styles";
// import "@fontsource/inter";
// import "@fontsource/noto-serif";
// import "@fontsource/source-code-pro";

declare module "@mui/material/styles" {
  interface Palette {
    neutral: typeof neutral;
  }
  interface PaletteOptions {
    neutral?: typeof neutral;
  }
}

const neutral = {
  0: "#FFFFFF",
  50: "#F5F7FA",
  100: "#F3F5F8",
  200: "#E0E4EA",
  300: "#CACFD8",
  400: "#99A0AE",
  500: "#717784",
  600: "#525866",
  700: "#2B303B",
  800: "#232530",
  900: "#191B25",
  950: "#0E121B",
};

const sharedStyle = {
  fontSize: "0.875rem",// 14px
  lineHeight: "120%",
  letterSpacing: "-0.2px",
}

// const fontFamilies = {
//   sansSerif: `"Inter", sans-serif`,
//   serif: `"Noto Serif", serif`,
//   mono: `"Source Code Pro", monospace`,
// }

const spacingValues = {
  0: 0,
  0.25: 2,
  0.5: 4,
  0.75: 6,
  1: 8,
  1.5: 12,
  2: 16,
  2.5: 20,
  3: 24,
  4: 32,
  5: 40,
  6: 48,
  8: 64,
  10: 80,
};

const theme: ThemeOptions = createTheme({
  palette: {
    primary: {
      main: "#335CFF",
      dark: "#2547D0",
      light: "#EBF1FF",
    },
    neutral,
    success: {
      main: "#21C16B",
      light: "#D1FBE9",
    },
    error: {
      main: "#FB3748",
      light: "#FFD5D8",
    }
  },
  typography: {
    fontFamily: `"Inter", sans-serif`,
    h1: {
      fontSize: "1.5rem",// 24px
      lineHeight: "120%",
      letterSpacing: "-0.5px",
    },
    h2: {
      fontSize: "1.25rem",// 20px
      lineHeight: "120%",
      letterSpacing: "-0.5px",
    },
    h3: {
      fontSize: "1rem",// 16px
      lineHeight: "120%",
      letterSpacing: "-0.3px",
    },
    h4: {...sharedStyle},
    h5: {...sharedStyle},
    h6: {
      fontSize: "0.75rem",// 12px
      lineHeight: "120%",
      letterSpacing: "-0.2px",
    }
  },
  spacing: (factor: number) => spacingValues[factor as keyof typeof spacingValues] ?? factor * 8,
});

export default theme;