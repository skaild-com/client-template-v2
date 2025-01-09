import { FeatureCard } from "@/components/ui/cards/FeatureCard";
import { SiteConfig } from "@/hooks/useSiteConfig";
import { ThemeStyles } from "@/types/theme";
import { Separator } from "@/components/ui/separator";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

interface FeaturesSectionProps {
  config: SiteConfig;
  styles: ThemeStyles;
}

export function FeaturesSection({ config, styles }: FeaturesSectionProps) {
  if (!config.content?.features?.length) return null;

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Why Choose Us
          </h2>
          <Separator className="mx-auto w-24 mb-4" />
          <p className="text-muted-foreground">
            Experience the difference with our unique features and benefits
          </p>
        </div>

        <ScrollArea className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-8">
            {config.content.features.map((feature, index) => (
              <FeatureCard key={index} feature={feature} styles={styles} />
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </section>
  );
}
