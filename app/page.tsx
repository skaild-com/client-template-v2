"use client";

import { useSiteConfig, SiteConfig } from "@/hooks/useSiteConfig";
import { useThemeStyles } from "@/hooks/useThemeStyles";
import { ThemeProvider } from "@/app/providers/ThemeProvider";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { FooterSection } from "@/components/sections/FooterSection";

function LoadingState() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="space-y-8 w-full max-w-md">
        {/* Logo skeleton */}
        <div className="h-16 w-16 rounded-full bg-gray-200 animate-pulse mx-auto" />

        {/* Title skeletons */}
        <div className="space-y-3">
          <div className="h-8 bg-gray-200 rounded animate-pulse" />
          <div className="h-4 bg-gray-200 rounded animate-pulse w-3/4 mx-auto" />
        </div>

        {/* Loading text */}
        <p className="text-center text-gray-500">Loading your site...</p>
      </div>
    </div>
  );
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
      <FooterSection config={config} styles={styles} />
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
