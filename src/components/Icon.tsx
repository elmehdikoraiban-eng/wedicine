import {
  Activity, Angry, Annoyed, ArrowLeft, ArrowRight, Baby, BatteryLow, Bone, Brain, CalendarCheck, Check, ChevronRight, CircleAlert, Hand, House,
  ClipboardList, Clock, Droplet, Droplets, Eye, EyeOff, FileText, Flower2, Footprints, Frown, Gauge, Globe, HeartPulse,
  Hourglass, Lock, LogOut, MapPin, Meh, MessageCircleQuestion, Microscope, Moon, PersonStanding, Phone, Printer,
  ShieldAlert, Siren, Smile, Soup, Sparkles, Speech, Stethoscope, TestTube, Thermometer, User, UserRound, Users, Wind, Zap,
  Ban, Bed, Flame, GlassWater, ListChecks, NotebookPen, Pill, Scale, ScanLine, ShieldCheck, Shirt, Smartphone, Snowflake, Sun, Syringe, Utensils,
  type LucideProps,
} from "lucide-react";

// Liste explicite pour ne pas embarquer toute la bibliothèque d'icônes.
export const ICONS = {
  Activity, Angry, Annoyed, ArrowLeft, ArrowRight, Baby, BatteryLow, Bone, Brain, CalendarCheck, Check, ChevronRight, CircleAlert, Hand, House,
  ClipboardList, Clock, Droplet, Droplets, Eye, EyeOff, FileText, Flower2, Footprints, Frown, Gauge, Globe, HeartPulse,
  Hourglass, Lock, LogOut, MapPin, Meh, MessageCircleQuestion, Microscope, Moon, PersonStanding, Phone, Printer,
  ShieldAlert, Siren, Smile, Soup, Sparkles, Speech, Stethoscope, TestTube, Thermometer, User, UserRound, Users, Wind, Zap,
  Ban, Bed, Flame, GlassWater, ListChecks, NotebookPen, Pill, Scale, ScanLine, ShieldCheck, Shirt, Smartphone, Snowflake, Sun, Syringe, Utensils,
};
export type IconName = keyof typeof ICONS;

export function Icon({ name, ...props }: { name: string } & LucideProps) {
  const C = ICONS[name as IconName] ?? CircleAlert;
  return <C aria-hidden="true" strokeWidth={1.75} {...props} />;
}
