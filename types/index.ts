export interface BusinessContent {
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
  business: {
    description: string;
    tagline: string;
    values: string[];
  };
}
