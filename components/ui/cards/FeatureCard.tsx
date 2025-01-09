import Image from "next/image";
import { Icons } from "@/components/ui/icons";
import { ThemeStyles } from "@/types/theme";

interface FeatureCardProps {
  feature: {
    icon: string;
    title: string;
    imageUrl: string;
    description: string;
  };
  styles: ThemeStyles;
}

export function FeatureCard({ feature, styles }: FeatureCardProps) {
  const Icon = Icons[feature.icon as keyof typeof Icons];

  return (
    <div className="group" style={styles.card}>
      <div className="relative h-40 w-full overflow-hidden rounded-t-lg">
        <Image
          src={feature.imageUrl}
          alt={feature.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          quality={75}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30" />
        <div className="absolute top-4 left-4 flex items-center gap-2 bg-white/90 rounded-full px-3 py-1">
          {Icon && (
            <div
              className="rounded-full p-1"
              style={{ color: styles.accent.color }}
            >
              <Icon className="h-4 w-4" />
            </div>
          )}
          <span className="text-sm font-medium">{feature.title}</span>
        </div>
      </div>
      <div className="p-4">
        <p className="text-sm text-gray-600">{feature.description}</p>
      </div>
    </div>
  );
}
