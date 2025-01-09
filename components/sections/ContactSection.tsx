import { ContactCard } from "@/components/ui/cards/ContactCard";
import { SiteConfig } from "@/hooks/useSiteConfig";
import { ThemeStyles } from "@/types/theme";
import { Separator } from "@/components/ui/separator";

interface ContactSectionProps {
  config: SiteConfig;
  styles: ThemeStyles;
}

export function ContactSection({ config, styles }: ContactSectionProps) {
  return (
    <section className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Contact Us</h2>
          <Separator className="mx-auto w-24 mb-4" />
          <p className="text-muted-foreground">
            Get in touch with us today. We&apos;re here to help!
          </p>
        </div>

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
