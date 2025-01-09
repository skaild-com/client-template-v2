import Image from "next/image";
import { SiteConfig } from "@/hooks/useSiteConfig";
import { ThemeStyles } from "@/types/theme";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight } from "lucide-react";

interface HeroSectionProps {
  config: SiteConfig;
  styles: ThemeStyles;
}

export function HeroSection({ config, styles }: HeroSectionProps) {
  if (!config.content?.hero) return null;

  return (
    <section
      className="relative min-h-[90vh] flex items-center"
      style={styles.section}
    >
      <div className="absolute inset-0 z-0">
        {config.content.hero.backgroundUrl && (
          <Image
            src={config.content.hero.backgroundUrl}
            alt="Background"
            fill
            priority
            className="object-cover"
            quality={90}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/30" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium bg-background/50 backdrop-blur-sm">
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              New Features Available
            </div>

            <h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight"
              style={styles.text}
            >
              {config.content.hero.title}
            </h1>

            <p className="text-xl text-muted-foreground">
              {config.content.hero.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group" style={styles.button.primary}>
                {config.content.hero.cta.primary}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                style={styles.button.secondary}
              >
                {config.content.hero.cta.secondary}
                <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
          </div>

          {config.content.hero.illustrationUrl && (
            <div className="relative h-[500px] hidden lg:block">
              <div className="absolute inset-0 bg-gradient-to-r from-background to-transparent z-10" />
              <Image
                src={config.content.hero.illustrationUrl}
                alt="Hero Illustration"
                fill
                className="object-contain"
                priority
                quality={90}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
