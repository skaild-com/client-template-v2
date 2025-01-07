"use client";

import { createContext, useContext, ReactNode } from "react";
import { SiteConfig } from "@/hooks/useSiteConfig";

const ThemeContext = createContext<SiteConfig | null>(null);

export function ThemeProvider({
  children,
  config,
}: {
  children: ReactNode;
  config: SiteConfig;
}) {
  return (
    <ThemeContext.Provider value={config}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
