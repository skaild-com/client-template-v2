import { Icons } from "@/components/ui/icons";
import { ThemeStyles } from "@/types/theme";

interface ContactCardProps {
  icon: string;
  title: string;
  content: string;
  styles: ThemeStyles;
}

export function ContactCard({
  icon,
  title,
  content,
  styles,
}: ContactCardProps) {
  const Icon = Icons[icon as keyof typeof Icons];

  return (
    <div className="text-center p-6 rounded-lg" style={styles.card}>
      <div
        className="mx-auto w-12 h-12 rounded-full flex items-center justify-center mb-4"
        style={{ backgroundColor: styles.primary.backgroundColor }}
      >
        {Icon && <Icon className="h-6 w-6 text-white" />}
      </div>
      <h3 className="text-lg font-semibold mb-2" style={styles.text}>
        {title}
      </h3>
      <p className="text-gray-600">{content}</p>
    </div>
  );
}
