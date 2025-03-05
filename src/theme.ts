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
  interface BreakpointOverrides {
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: false;
  }
  interface Theme {
    custom: {
      columnSettings: typeof columnSettings;
    }
  }
  interface ThemeOptions {
    custom?: {
      columnSettings?: typeof columnSettings;
    }
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
  1.25: 10,
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

const shape = {
  borderRadius: 8,
};

const columnSettings = {
  width: {
    xs: 24,
    sm: 67,
    md: 70,
    lg: 70,
  },
  gap: {
    xs: 0,
    sm: 24,
    md: 24,
    lg: 24,
  },
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
      fontWeight: "bold",
    },
    h2: {
      fontSize: "1.25rem",// 20px
      lineHeight: "120%",
      letterSpacing: "-0.5px",
      fontWeight: "bold",
    },
    h3: {
      fontSize: "1rem",// 16px
      lineHeight: "120%",
      letterSpacing: "-0.3px",
      fontWeight: "semi-bold",
    },
    h4: {...sharedStyle, fontWeight: "normal"},
    h5: {...sharedStyle, fontWeight: "normal"},
    h6: {
      fontSize: "0.75rem",// 12px
      lineHeight: "120%",
      letterSpacing: "-0.2px",
      fontWeight: "normal"
    }
  },
  spacing: (factor: number) => spacingValues[factor as keyof typeof spacingValues] ?? factor * 8,
  // breakpoints: {
  //   values: {
  //     xs: 320,
  //     sm: 768,
  //     md: 1104,
  //     lg: 1440,
  //   },
  // },
  // custom: {
  //   columnSettings,
  // },
  shape: shape,
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          boxShadow: "none",
          color: neutral[700],
          "&:hover": {
            boxShadow: "none",
          },
          "&:active": {
            backgroundColor: neutral[100],
          },
        }
      }
    }
  }
});

export default theme;