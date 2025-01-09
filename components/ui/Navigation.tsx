import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { ThemeStyles } from "@/types/theme";
import { SiteConfig } from "@/hooks/useSiteConfig";

interface NavigationProps {
  config: SiteConfig;
  styles: ThemeStyles;
}

export function Navigation({ config, styles }: NavigationProps) {
  return (
    <header
      className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b"
      style={styles.background}
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="font-bold text-xl" style={styles.text}>
          {config.business.name}
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Button variant="ghost" className="text-sm" style={styles.accent}>
            Services
          </Button>
          <Button variant="ghost" className="text-sm" style={styles.accent}>
            Features
          </Button>
          <Button variant="ghost" className="text-sm" style={styles.accent}>
            Contact
          </Button>
          <Button variant="default" className="text-sm" style={styles.accent}>
            Get Started
          </Button>
        </nav>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <nav className="flex flex-col gap-4 mt-8">
              <Button variant="ghost">Services</Button>
              <Button variant="ghost">Features</Button>
              <Button variant="ghost">Contact</Button>
              <Button variant="default">Get Started</Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
