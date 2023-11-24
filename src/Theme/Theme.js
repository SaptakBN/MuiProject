import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const commonColor = {
  palatte: {
    primary: "##518FED",
    secondary: "##A9B8CD",
    error: "#EF4444",
    warning: "#F9B959",
    white: "#ffffff",
    black: "#000000",
    greyText: "#7D8595",
    lightBgColor: "#ECF6F6",
  },
};

const dark = {
  ...commonColor,
  bodyBgColor: "#161616",
  componentBgColor: "#1D1D1F",
  navbarBgColor: "#1F2326",
  selectedBgColor: "#F3F9FF",

  color: {
    color1: "#FFFFFF",
    color2: "#b4a698",
    color3: "#646464",
  },
  borderColor: {
    color1: "#E2E2E2",
  },
  lightColor: {
    color1: "#E1E1E1",
  },
  textBgColor: {
    color1: "#EEEEEE",
  },
  invertColor: {},
};

const light = {
  ...commonColor,
  bodyBgColor: "#F8F9FB",
  modalBgColor: "#EEF4FF",
  componentBgColor: "#FFFFFF",
  navbarBgColor: "#FFFFFF",
  selectedBgColor: "#F3F9FF",
  tabBtnBgColor: "#E6ECE7",

  color: {
    color1: "#000000",
    color2: "#4B5967",
    color3: "#7D8595", //gray color 1
    color4: "#D9D9D9",
    color5: "#eee",
  },
  lightColor: {
    color1: "#E1E1E1",
  },
  borderColor: {
    color1: "#E4E4E7", //border color one
    color2: "#DFDFDF", //border color for input
  },
  textBgColor: {
    color1: "#EEEEEE",
  },
  boxShadow: {
    commonCard: "0px 4px 20px 0px rgba(0, 0, 0, 0.05)",
    navbar: "0px 4px 10px 0px rgba(0, 0, 0, 0.04)",
    modalShadow: "0px 4px 40px 5px rgba(0, 0, 0, 0.13)",
  },
  invertColor: {},
};

const createPrimaryTheme = (type = "light") => {
  const themeColors = type === "light" ? { ...light } : { ...dark };
  let theme = createTheme({
    colors: { ...themeColors },
    palette: {
      primary: {
        main: themeColors.palatte.primary,
      },
      secondary: {
        main: themeColors.palatte.secondary,
      },
      error: {
        main: themeColors.palatte.error,
      },
      success: {
        main: themeColors.palatte.primary,
      },
      warning: {
        main: themeColors.palatte.warning,
      },
      background: {
        paper: themeColors.componentBgColor,
      },
      text: {
        primary: themeColors.color.color1,
        secondary: themeColors.color.color2,
      },
    },
    typography: {
      fontFamily: "Inter, sans-serif",
      h1: {
        fontSize: "2rem",
        fontWeight: "600",
      },
      h2: {
        fontSize: "1.8rem",
        fontWeight: "600",
      },
      h3: {
        fontSize: "1.6rem",
        fontWeight: "600",
      },
      h4: {
        fontSize: "1.4rem",
        fontWeight: "600",
      },
      h5: {
        fontSize: "1.2rem",
        fontWeight: "600",
      },
      h6: {
        fontSize: "1rem",
        fontWeight: "600",
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            fontSize: "1.6rem",
            textTransform: "capitalize",
            borderRadius: "1.1rem",

            "&&&": {
              boxShadow: "unset",
            },
          },

          sizeLarge: {
            height: "3.5rem",
          },
        },
      },
      MuiInputLabel: {
        styleOverrides: {
          root: {
            "&&&": {
              fontSize: "1.6rem",
            },
          },
        },
      },

      MuiInputBase: {
        styleOverrides: {
          root: {
            "&&&": {
              fontSize: "1.6rem",
              borderRadius: "0.8rem",
              color: themeColors.color.color2,
            },
          },
        },
      },

      MuiFormGroup: {
        styleOverrides: {
          root: {
            "&&&": {
              marginBottom: "1.4rem",
            },
          },
        },
      },

      MuiLink: {
        defaultProps: {
          underline: "none",
        },
      },

      MuiCard: {
        styleOverrides: {
          root: {
            "&&&": {
              borderRadius: "1.4rem",
              boxShadow: "none",
              border: `1px solid ${themeColors.borderColor.color1}`,
            },
          },
        },
      },
    },
  });

  theme = responsiveFontSizes(theme);
  return theme;
};

export default createPrimaryTheme;
