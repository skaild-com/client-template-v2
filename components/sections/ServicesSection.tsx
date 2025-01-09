import { ServiceCard } from "@/components/ui/cards/ServiceCard";
import { SiteConfig } from "@/hooks/useSiteConfig";
import { ThemeStyles } from "@/types/theme";
import { Separator } from "@/components/ui/separator";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

interface ServicesSectionProps {
  config: SiteConfig;
  styles: ThemeStyles;
}

export function ServicesSection({ config, styles }: ServicesSectionProps) {
  if (!config.content?.services?.length) return null;

  return (
    <section className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Our Services
          </h2>
          <Separator className="mx-auto w-24 mb-4" />
          <p className="text-muted-foreground">
            Discover our comprehensive range of professional services tailored
            to your needs
          </p>
        </div>

        <ScrollArea className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-8">
            {config.content.services.map((service, index) => (
              <ServiceCard key={index} service={service} styles={styles} />
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </section>
  );
}
