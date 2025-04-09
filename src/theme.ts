import { createTheme, Components, Theme } from "@mui/material/styles";
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

  interface TypeBackground {
    notesActive?: string;
    tagsInCard?: string;
  }

  interface TypeText {
    datesInCard?: string;
  }
}
declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    containedCancel: true
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

const sharedTypography = {
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
};

const sharedComponents: Components<Theme> = {
  MuiButton: {
    styleOverrides: {
      root: {
        textTransform: "none",
        boxShadow: "none",
        padding: "12px 16px",
        "&:hover": {
          boxShadow: "none",
        },
      },
    },
    variants: [
      {
        props: {
          variant: "containedCancel",
        },
        style: {
          backgroundColor: neutral[100],
          borderRadius: "8px",
          color: neutral[600],
          padding: "12px 16px",
        }
      }
    ]
  },
  MuiSvgIcon: {
    styleOverrides: {
      root: {
        minWidth: 24,
        minHeight: 24,
      },
    },
  },
};

const sharedBreakpoints = {
  values: {
    xs: 0,
    sm: 600,
    md: 900,
    lg: 1200,
    xl: 1400,
  }
}

const sharedSpacing = (factor: number) => spacingValues[factor as keyof typeof spacingValues] ?? factor * 8

const lightTheme = createTheme({
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
    },
    background: {
      default: "#FFFFFF",
      notesActive: neutral[100],
      tagsInCard: neutral[200],
    },
    text: {
      primary: neutral[950],
      secondary: neutral[700],
      datesInCard: neutral[700],
    },
    divider: neutral[200]
  },
  typography: sharedTypography,
  spacing: sharedSpacing,
  shape: shape,
  components: {
    ...sharedComponents,
    MuiButton: {
      styleOverrides: {
        root: {
          ...(typeof sharedComponents.MuiButton?.styleOverrides?.root === 'object' ? sharedComponents.MuiButton.styleOverrides.root : {}),
          color: neutral[700],
          "&.MuiButton-text:hover": {
            backgroundColor: neutral[100],
          },
          "&:active": {
            backgroundColor: neutral[100],
          },
          "&.MuiButton-contained": {
            color: "white",
          },
          "&.MuiButton-outlined": {
            borderColor: neutral[300],
          }
        }
      },
    },
  },
  breakpoints: sharedBreakpoints,
});

const darkTheme = createTheme({
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
    },
    background: {
      default: neutral[950],
      notesActive: neutral[800],
      tagsInCard: neutral[600],
    },
    text: {
      primary: "#FFFFFF",
      secondary: neutral[100],
      datesInCard: neutral[300],
    },
    divider: neutral[800]
  },
  typography: {
    ...sharedTypography,
    h1: {
      ...sharedTypography.h1,
    },
    h2: {
      ...sharedTypography.h2,
    },
    h3: {
      ...sharedTypography.h3,
    },
    h4: {
      ...sharedTypography.h4,
      color: neutral[200],
    },
    h5: {
      ...sharedTypography.h5,
    },
    h6: {
      ...sharedTypography.h6,
    },
    body1: {
      color: "#FFFFFF",
    },
  },
  spacing: sharedSpacing,
  shape: shape,
  components: {
    ...sharedComponents,
    MuiButton: {
      styleOverrides: {
        root: {
          ...(typeof sharedComponents.MuiButton?.styleOverrides?.root === 'object' ? sharedComponents.MuiButton.styleOverrides.root : {}),
          color: neutral[100],
          "&.MuiButton-text:hover": {
            backgroundColor: neutral[800],
          },
          "&:active": {
            backgroundColor: neutral[800],
          },
          "&.MuiButton-contained": {
            color: "white",
          },
          "&.MuiButton-outlined": {
            borderColor: neutral[800],
          }
        }
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          color: "#FFFFFF"
        }
      }
    }
  },
  breakpoints: sharedBreakpoints,
});

export { lightTheme, darkTheme };