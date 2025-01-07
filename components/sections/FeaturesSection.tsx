import { FeatureCard } from "@/components/ui/cards/FeatureCard";
import { SiteConfig } from "@/hooks/useSiteConfig";

interface FeaturesSectionProps {
  config: SiteConfig;
  styles: any;
}

export function FeaturesSection({ config, styles }: FeaturesSectionProps) {
  if (!config.content?.features?.length) {
    return null;
  }

  return (
    <section
      className="py-20"
      style={{
        ...styles.section,
        backgroundColor: `${config.theme_config.colors.background}11`,
      }}
    >
      <div className="container mx-auto px-4">
        <h2
          className="text-4xl font-bold text-center mb-12"
          style={styles.text}
        >
          Why Choose Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {config.content.features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} styles={styles} />
          ))}
        </div>
      </div>
    </section>
  );
}
