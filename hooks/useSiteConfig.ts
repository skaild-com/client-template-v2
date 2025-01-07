"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export interface SiteConfig {
  business: {
    name: string;
    phone: string;
    email: string;
    businessType: string;
    address: {
      street: string;
      city: string;
      state?: string;
      zip: string;
    };
    hours: {
      weekdays: string;
      weekends: string;
    };
    subscription_status: string;
    subscription_plan: string;
  };
  content?: {
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
      title: string;
      description: string;
      imageUrl: string;
      icon: string;
    }>;
    features: Array<{
      title: string;
      description: string;
      imageUrl: string;
      icon: string;
    }>;
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

        // Pour le développement local, utiliser un domaine de test
        let searchDomain = hostname;
        if (hostname === "localhost" || hostname === "127.0.0.1") {
          searchDomain = "plumber.skaild.com"; // Domaine de test
        } else if (hostname.includes(".vercel.app")) {
          const siteName = hostname.split(".")[0];
          searchDomain = `${siteName}.skaild.com`;
        }

        const { data: site, error: fetchError } = await supabase
          .from("sites")
          .select(
            `
            domain,
            status,
            business_profiles (
              name,
              phone,
              email,
              business_type,
              address,
              hours,
              subscription_status,
              subscription_plan
            )
          `
          )
          .eq("domain", searchDomain)
          .single();

        if (fetchError) throw fetchError;

        // Formater les données pour correspondre à la structure SiteConfig
        const formattedConfig: SiteConfig = {
          business: {
            name: site.business_profiles.name,
            phone: site.business_profiles.phone,
            email: site.business_profiles.email,
            businessType: site.business_profiles.business_type,
            address: site.business_profiles.address,
            hours: site.business_profiles.hours,
            subscription_status: site.business_profiles.subscription_status,
            subscription_plan: site.business_profiles.subscription_plan,
          },
          // Pour l'instant, le contenu est vide car il n'est pas dans la base de données
          content: {
            hero: {
              title: `Welcome to ${site.business_profiles.name}`,
              subtitle: `Professional ${site.business_profiles.business_type} services`,
              backgroundUrl:
                "https://images.unsplash.com/photo-1509440159596-0249088772ff",
              illustrationUrl:
                "https://images.unsplash.com/photo-1509440159596-0249088772ff",
              cta: {
                primary: "Contact Us",
                secondary: "Our Services",
              },
            },
            services: [],
            features: [],
          },
        };

        setConfig(formattedConfig);
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
