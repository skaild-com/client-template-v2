import { Phone, Mail, MapPin, type Icon as LucideIcon } from "lucide-react";

export type Icon = LucideIcon;

export const Icons = {
  phone: Phone,
  mail: Mail,
  mapPin: MapPin,
} as const;
