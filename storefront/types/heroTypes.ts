import { buttonVariants } from "../components/ui/button";

export interface StatProps {
  value: string;
  label: string;
  icon: React.ReactNode;
}

export interface ActionProps {
  text: string;
  onClick: () => void;
  variant?: keyof typeof buttonVariants;
  className?: string;
}

export interface HeroSectionProps {
  title?: React.ReactNode;
  subtitle?: string;
  actions?: ActionProps[];
  images?: string[];
  className?: string;
  textClass?: string;
  imagesClass?: string;
}
