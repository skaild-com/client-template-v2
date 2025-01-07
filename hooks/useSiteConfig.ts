"use client";
// TODO: Add a hook to get the site config from the database
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

const defaultConfig: SiteConfig = {
  business: {
    name: "Plumber Pro Services",
    phone: "(555) 123-4567",
    email: "contact@plumberpro.com",
    businessType: "Plumbing",
    address: {
      street: "123 Main Street",
      city: "Anytown",
      zip: "12345",
    },
    hours: {
      weekdays: "8:00 AM - 6:00 PM",
      weekends: "9:00 AM - 4:00 PM",
    },
  },
  content: {
    hero: {
      title: "Professional Plumbing Services",
      subtitle: "Expert plumbing solutions for your home and business",
      backgroundUrl:
        "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1",
      illustrationUrl: "https://illustrations.com/plumber.svg",
      cta: {
        primary: "Get Started",
        secondary: "Learn More",
      },
    },
    services: [
      {
        icon: "wrench",
        title: "Emergency Repairs",
        imageUrl:
          "https://images.unsplash.com/photo-1565219640633-28d0ce3c6c3a",
        description: "24/7 emergency plumbing repair services",
      },
      {
        icon: "shower",
        title: "Bathroom Remodeling",
        imageUrl:
          "https://images.unsplash.com/photo-1584622650111-993a426fbf0a",
        description: "Complete bathroom renovation and installation",
      },
      {
        icon: "pipe",
        title: "Pipe Services",
        imageUrl:
          "https://images.unsplash.com/photo-1542013936693-884638332954",
        description: "Installation and repair of all types of pipes",
      },
    ],
    features: [
      {
        icon: "clock",
        title: "24/7 Service",
        imageUrl:
          "https://images.unsplash.com/photo-1511578314322-379afb476865",
        description: "Available around the clock for emergencies",
      },
      {
        icon: "shield",
        title: "Licensed & Insured",
        imageUrl:
          "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
        description: "Fully certified professional plumbers",
      },
      {
        icon: "star",
        title: "5-Star Service",
        imageUrl:
          "https://images.unsplash.com/photo-1572947650440-e8a97ef053b2",
        description: "Consistently rated 5 stars by our customers",
      },
      {
        icon: "dollarSign",
        title: "Fair Pricing",
        imageUrl:
          "https://images.unsplash.com/photo-1580048915913-4f8f5cb481c4",
        description: "Transparent pricing with no hidden fees",
      },
    ],
    contact: {
      email: "contact@plumberpro.com",
      phone: "(555) 123-4567",
      address: "123 Main Street, Anytown",
    },
  },
  theme_config: {
    colors: {
      text: "#1a1a1a",
      accent: "#3b82f6",
      primary: "#2563eb",
      secondary: "#1d4ed8",
      background: "#ffffff",
    },
  },
};

export interface SiteConfig {
  business: {
    name: string;
    phone: string;
    email: string;
    businessType: string;
    address: {
      street: string;
      city: string;
      zip: string;
    };
    hours: {
      weekdays: string;
      weekends: string;
    };
  };
  content: {
    hero: {
      title: string;
      subtitle: string;
      backgroundUrl: string;
      illustrationUrl: string;
      cta: {
        primary: string;
        secondary: string;
      };
    };
    services: Array<{
      icon: string;
      title: string;
      imageUrl: string;
      description: string;
    }>;
    features: Array<{
      icon: string;
      title: string;
      imageUrl: string;
      description: string;
    }>;
    contact: {
      email: string;
      phone: string;
      address: string;
    };
  };
  theme_config: {
    colors: {
      text: string;
      accent: string;
      primary: string;
      secondary: string;
      background: string;
    };
  };
}

export function useSiteConfig() {
  const [config, setConfig] = useState<SiteConfig | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function loadConfig() {
      try {
        const hostname = window.location.hostname;
        let searchDomain = hostname;

        if (hostname === "localhost" || hostname === "127.0.0.1") {
          setConfig(defaultConfig);
          setLoading(false);
          return;
        }

        if (hostname.includes("vercel.app")) {
          const subdomain = hostname.split(".")[0];
          searchDomain = `${subdomain}.skaild.com`;
        }

        console.log("Searching for domain:", searchDomain);

        const { data: site, error: fetchError } = await supabase
          .from("sites")
          .select(
            `
            *,
            business_profiles (
              name,
              phone,
              email,
              business_type,
              address,
              hours
            )
          `
          )
          .eq("domain", searchDomain)
          .single();

        if (fetchError) throw fetchError;

        setConfig({
          business: {
            name: site.business_profiles.name,
            phone: site.business_profiles.phone,
            email: site.business_profiles.email,
            businessType: site.business_profiles.business_type,
            address: site.business_profiles.address,
            hours: site.business_profiles.hours,
          },
          content: site.content,
          theme_config: site.theme_config,
        });
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    }

    loadConfig();
  }, []);

  return { config, loading, error };
}
