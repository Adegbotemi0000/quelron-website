import {
  Globe, Smartphone, Palette, Brain, Cloud, Zap, Users, CheckCircle, TrendingUp,
  CreditCard, Lock, Brush, Shield, Gauge, Award, Clock, Radio, Wrench, Key,
  Leaf, Heart, Truck, Eye, Shirt, Scissors, Star, ShoppingBag, Calendar,
  BookOpen, DollarSign, Handshake, Sparkles, Gift, Search, MapPin, Droplet,
  Wheat, Trophy, type LucideIcon,
} from "lucide-react";

export const iconMap: Record<string, LucideIcon> = {
  Globe, Smartphone, Palette, Brain, Cloud, Zap, Users, CheckCircle, TrendingUp,
  CreditCard, Lock, Brush, Shield, Gauge, Award, Clock, Radio, Wrench, Key,
  Leaf, Heart, Truck, Eye, Shirt, Scissors, Star, ShoppingBag, Calendar,
  BookOpen, DollarSign, Handshake, Sparkles, Gift, Search, MapPin, Droplet,
  Wheat, Trophy,
};

export function Icon({ name, ...props }: { name: string; size?: number; className?: string }) {
  const Cmp = iconMap[name] ?? Sparkles;
  return <Cmp {...props} />;
}
