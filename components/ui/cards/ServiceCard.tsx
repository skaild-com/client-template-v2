import Image from "next/image";
import { Icons } from "@/components/ui/icons";
import { ThemeStyles } from "@/types/theme";

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
    <div className="group" style={styles.card}>
      <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
        <Image
          src={service.imageUrl}
          alt={service.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
          quality={75}
        />
      </div>
      <div className="p-6">
        <div className="mb-4 flex items-center gap-3">
          {Icon && (
            <div
              className="rounded-full p-2"
              style={{ backgroundColor: styles.primary.backgroundColor }}
            >
              <Icon className="h-6 w-6 text-white" />
            </div>
          )}
          <h3 className="text-xl font-bold" style={styles.text}>
            {service.title}
          </h3>
        </div>
        <p className="text-gray-600">{service.description}</p>
      </div>
    </div>
  );
}
