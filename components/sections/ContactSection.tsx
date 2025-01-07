import { ContactCard } from "@/components/ui/cards/ContactCard";
import { SiteConfig } from "@/hooks/useSiteConfig";

interface ContactSectionProps {
  config: SiteConfig;
  styles: any;
}

export function ContactSection({ config, styles }: ContactSectionProps) {
  return (
    <section className="py-20" style={styles.section}>
      <div className="container mx-auto px-4">
        <h2
          className="text-4xl font-bold text-center mb-12"
          style={styles.text}
        >
          Contact Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ContactCard
            icon="phone"
            title="Phone"
            content={config.business.phone}
            styles={styles}
          />
          <ContactCard
            icon="mail"
            title="Email"
            content={config.business.email}
            styles={styles}
          />
          <ContactCard
            icon="mapPin"
            title="Address"
            content={`${config.business.address.street}, ${config.business.address.city}`}
            styles={styles}
          />
        </div>
      </div>
    </section>
  );
}
