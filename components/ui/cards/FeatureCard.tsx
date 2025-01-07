import Image from "next/image";
import { Icons } from "@/components/ui/icons";

interface FeatureCardProps {
  feature: {
    icon: string;
    title: string;
    imageUrl: string;
    description: string;
  };
  styles: any;
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
          className="object-cover transition-transform duration-300 group-hover:scale-110"
          quality={75}
        />
      </div>
      <div className="p-4">
        <div className="mb-3 flex items-center gap-2">
          {Icon && (
            <div
              className="rounded-full p-1.5"
              style={{ backgroundColor: styles.accent.color }}
            >
              <Icon className="h-4 w-4 text-white" />
            </div>
          )}
          <h3 className="text-lg font-semibold" style={styles.text}>
            {feature.title}
          </h3>
        </div>
        <p className="text-sm text-gray-600">{feature.description}</p>
      </div>
    </div>
  );
}
