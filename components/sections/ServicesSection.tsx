import { ServiceCard } from "@/components/ui/cards/ServiceCard";
import { SiteConfig } from "@/hooks/useSiteConfig";

interface ServicesSectionProps {
  config: SiteConfig;
  styles: any;
}

export function ServicesSection({ config, styles }: ServicesSectionProps) {
  if (!config.content?.services?.length) {
    return null;
  }

  return (
    <section className="py-20" style={styles.section}>
      <div className="container mx-auto px-4">
        <h2
          className="text-4xl font-bold text-center mb-12"
          style={styles.text}
        >
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {config.content.services.map((service, index) => (
            <ServiceCard key={index} service={service} styles={styles} />
          ))}
        </div>
      </div>
    </section>
  );
}
