import Image from "next/image";
import { Icons } from "@/components/ui/icons";
import { ThemeStyles } from "@/types/theme";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

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
    <Card
      className="overflow-hidden group hover:shadow-lg transition-all duration-300"
      style={styles.card}
    >
      <div className="relative h-48 w-full">
        <Image
          src={feature.imageUrl}
          alt={feature.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          quality={85}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <CardHeader className="space-y-1">
        <div className="flex items-center gap-3">
          <div className="rounded-full p-2 bg-primary/10">
            {Icon && <Icon className="h-5 w-5 text-primary" />}
          </div>
          <h3 className="text-xl font-bold">{feature.title}</h3>
        </div>
      </CardHeader>

      <CardContent>
        <p className="text-muted-foreground">{feature.description}</p>
      </CardContent>
    </Card>
  );
}
