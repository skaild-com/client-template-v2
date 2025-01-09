import { SiteConfig } from "@/hooks/useSiteConfig";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { ThemeStyles } from "@/types/theme";

interface FooterSectionProps {
  config: SiteConfig;
  styles: ThemeStyles;
}

export function FooterSection({ config, styles }: FooterSectionProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/30" style={styles.section}>
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold" style={styles.text}>
              {config.business.name}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Professional {config.business.businessType} Services
            </p>
            <div className="flex space-x-4">
              <Button
                variant="ghost"
                size="icon"
                className="hover:text-primary"
                style={styles.accent}
              >
                <Facebook className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="hover:text-primary"
                style={styles.accent}
              >
                <Instagram className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="hover:text-primary"
                style={styles.accent}
              >
                <Twitter className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="hover:text-primary"
                style={styles.accent}
              >
                <Linkedin className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold" style={styles.text}>
              Quick Links
            </h3>
            <ScrollArea className="h-[120px] w-full">
              <div className="space-y-3">
                <Button
                  variant="link"
                  className="p-0 h-auto text-muted-foreground hover:text-primary"
                  style={styles.accent}
                >
                  About Us
                </Button>
                <Button
                  variant="link"
                  className="p-0 h-auto text-muted-foreground hover:text-primary"
                  style={styles.accent}
                >
                  Services
                </Button>
                <Button
                  variant="link"
                  className="p-0 h-auto text-muted-foreground hover:text-primary"
                  style={styles.accent}
                >
                  Features
                </Button>
                <Button
                  variant="link"
                  className="p-0 h-auto text-muted-foreground hover:text-primary"
                  style={styles.accent}
                >
                  Contact
                </Button>
                <Button
                  variant="link"
                  className="p-0 h-auto text-muted-foreground hover:text-primary"
                  style={styles.accent}
                >
                  Blog
                </Button>
              </div>
            </ScrollArea>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold" style={styles.text}>
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li
                className="flex items-center text-muted-foreground"
                style={styles.text}
              >
                <Phone className="h-4 w-4 mr-2" />
                <span>{config.business.phone}</span>
              </li>
              <li
                className="flex items-center text-muted-foreground"
                style={styles.text}
              >
                <Mail className="h-4 w-4 mr-2" />
                <span>{config.business.email}</span>
              </li>
              <li
                className="flex items-center text-muted-foreground"
                style={styles.text}
              >
                <MapPin className="h-4 w-4 mr-2" />
                <span>
                  {config.business.address.street},{" "}
                  {config.business.address.city}
                </span>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold" style={styles.text}>
              Business Hours
            </h3>
            <ul className="space-y-3">
              <li className="text-muted-foreground">
                <span className="font-medium">Weekdays:</span>
                <br />
                {config.business.hours.weekdays}
              </li>
              <li className="text-muted-foreground">
                <span className="font-medium">Weekends:</span>
                <br />
                {config.business.hours.weekends}
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>
            &copy; {currentYear} {config.business.name}. All rights reserved.
          </p>
          <div className="flex gap-8">
            <Button
              variant="link"
              className="p-0 h-auto text-muted-foreground hover:text-primary"
              style={styles.accent}
            >
              Privacy Policy
            </Button>
            <Button
              variant="link"
              className="p-0 h-auto text-muted-foreground hover:text-primary"
              style={styles.accent}
            >
              Terms of Service
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
