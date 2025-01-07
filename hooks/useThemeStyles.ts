import { useTheme } from "@/app/providers/ThemeProvider";

export function useThemeStyles() {
  const config = useTheme();

  if (!config.theme_config) {
    return {
      text: {},
      background: {},
      primary: {},
      secondary: {},
      accent: {},
      section: {},
      button: {
        primary: {},
        secondary: {},
      },
    };
  }

  return {
    text: {
      color: config.theme_config.colors.text,
    },
    background: {
      backgroundColor: config.theme_config.colors.background,
    },
    primary: {
      backgroundColor: config.theme_config.colors.primary,
      color: "#ffffff",
    },
    secondary: {
      backgroundColor: config.theme_config.colors.secondary,
      color: "#ffffff",
    },
    accent: {
      color: config.theme_config.colors.accent,
    },
    section: {
      backgroundColor: config.theme_config.colors.background,
      color: config.theme_config.colors.text,
    },
    button: {
      primary: {
        backgroundColor: config.theme_config.colors.primary,
        color: "#ffffff",
        transition: "all 0.2s ease-in-out",
        "&:hover": {
          backgroundColor: config.theme_config.colors.secondary,
          transform: "translateY(-2px)",
        },
      },
      secondary: {
        backgroundColor: config.theme_config.colors.secondary,
        color: "#ffffff",
        transition: "all 0.2s ease-in-out",
        "&:hover": {
          backgroundColor: config.theme_config.colors.primary,
          transform: "translateY(-2px)",
        },
      },
    },
    card: {
      backgroundColor: "#ffffff",
      borderRadius: "0.5rem",
      boxShadow:
        "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      transition: "all 0.2s ease-in-out",
      "&:hover": {
        transform: "translateY(-4px)",
        boxShadow:
          "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      },
    },
  };
}
