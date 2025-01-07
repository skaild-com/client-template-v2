"use client";

import { useSiteConfig } from "@/hooks/useSiteConfig";
import { useThemeStyles } from "@/hooks/useThemeStyles";
import { ThemeProvider } from "@/app/providers/ThemeProvider";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { ContactSection } from "@/components/sections/ContactSection";

function LoadingState() {
  return <div className="p-4">Loading...</div>;
}

function ErrorState({ error }: { error: Error }) {
  return <div className="p-4 text-red-500">Error: {error.message}</div>;
}

function NotFoundState() {
  return <div className="p-4">Site not found</div>;
}

function MainContent({ config }: { config: SiteConfig }) {
  const styles = useThemeStyles();

  return (
    <main>
      <HeroSection config={config} styles={styles} />
      <ServicesSection config={config} styles={styles} />
      <FeaturesSection config={config} styles={styles} />
      <ContactSection config={config} styles={styles} />
    </main>
  );
}

export default function HomePage() {
  const { config, loading, error } = useSiteConfig();

  if (loading) return <LoadingState />;
  if (error) return <ErrorState error={error} />;
  if (!config) return <NotFoundState />;

  return (
    <ThemeProvider config={config}>
      <MainContent config={config} />
    </ThemeProvider>
  );
}
