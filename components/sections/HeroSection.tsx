import Image from "next/image";
import { SiteConfig } from "@/hooks/useSiteConfig";

interface HeroSectionProps {
  config: SiteConfig;
  styles: any;
}

export function HeroSection({ config, styles }: HeroSectionProps) {
  if (!config.content?.hero) {
    return null;
  }

  return (
    <section className="relative min-h-[80vh]" style={styles.section}>
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
        {/* Overlay gradient */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to right, ${config.theme_config.colors.background}dd, ${config.theme_config.colors.background}99)`,
          }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 py-20 flex items-center min-h-[80vh]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1
              className="text-5xl font-bold leading-tight"
              style={styles.text}
            >
              {config.content.hero.title}
            </h1>
            <p className="text-xl" style={styles.text}>
              {config.content.hero.subtitle}
            </p>
            <div className="flex gap-4">
              <button
                className="px-8 py-3 rounded-lg transition-all duration-200"
                style={styles.button.primary}
              >
                {config.content.hero.cta.primary}
              </button>
              <button
                className="px-8 py-3 rounded-lg transition-all duration-200"
                style={styles.button.secondary}
              >
                {config.content.hero.cta.secondary}
              </button>
            </div>
          </div>

          {config.content.hero.illustrationUrl && (
            <div className="relative h-[500px] hidden lg:block">
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
