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
          searchDomain = "plumber.skaild.com";
        } else if (hostname.includes(".vercel.app")) {
          const siteName = hostname.split(".")[0];
          searchDomain = `${siteName}.skaild.com`;
        }

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
