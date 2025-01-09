import { Icons } from "@/components/ui/icons";
import { ThemeStyles } from "@/types/theme";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from "@/components/ui/hover-card";

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
    <Card
      className="group hover:shadow-lg transition-all duration-300"
      style={styles.card}
    >
      <CardContent className="pt-6 text-center">
        <HoverCard>
          <HoverCardTrigger>
            <div
              className="mx-auto mb-4 rounded-full w-12 h-12 flex items-center justify-center bg-primary/10"
              style={styles.primary}
            >
              {Icon && <Icon className="h-6 w-6 text-primary" />}
            </div>
          </HoverCardTrigger>
          <HoverCardContent>
            <p className="text-sm">
              Click to{" "}
              {icon === "phone"
                ? "call"
                : icon === "mail"
                ? "email"
                : "get directions"}
            </p>
          </HoverCardContent>
        </HoverCard>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{content}</p>
        <Button
          variant="outline"
          className="w-full hover:bg-primary hover:text-white"
        >
          {icon === "phone" && "Call Now"}
          {icon === "mail" && "Send Email"}
          {icon === "mapPin" && "Get Directions"}
        </Button>
      </CardContent>
    </Card>
  );
}
