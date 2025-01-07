import { Phone, Mail, MapPin, LucideIcon } from "lucide-react";

export type IconComponent = LucideIcon;

export const Icons = {
  phone: Phone,
  mail: Mail,
  mapPin: MapPin,
} as const;
