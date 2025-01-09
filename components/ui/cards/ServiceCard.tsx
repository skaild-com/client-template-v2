import Image from "next/image";
import { Icons } from "@/components/ui/icons";
import { ThemeStyles } from "@/types/theme";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from "@/components/ui/hover-card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  service: {
    icon: string;
    title: string;
    imageUrl: string;
    description: string;
  };
  styles: ThemeStyles;
}

export function ServiceCard({ service, styles }: ServiceCardProps) {
  const Icon = Icons[service.icon as keyof typeof Icons];

  return (
    <Card
      className="overflow-hidden group hover:shadow-lg transition-all duration-300"
      style={styles.card}
    >
      <div className="relative h-48 w-full">
        <Image
          src={service.imageUrl}
          alt={service.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          quality={85}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <CardHeader className="space-y-1">
        <div className="flex items-center gap-3">
          <HoverCard>
            <HoverCardTrigger>
              <div className="rounded-full p-2 bg-primary/10">
                {Icon && <Icon className="h-5 w-5 text-primary" />}
              </div>
            </HoverCardTrigger>
            <HoverCardContent>
              <p className="text-sm">{service.description}</p>
            </HoverCardContent>
          </HoverCard>
          <h3 className="text-xl font-bold">{service.title}</h3>
        </div>
      </CardHeader>

      <CardContent>
        <p className="text-muted-foreground mb-4">{service.description}</p>
        <Button variant="ghost" className="group">
          Learn More
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </CardContent>
    </Card>
  );
}
