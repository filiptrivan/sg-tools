import { ValueItem } from "@/types/values";
import {
  BadgeDollarSign,
  CheckCircle,
  Hand,
  ShieldCheck,
  Users,
  Wrench,
} from "lucide-react";

export const valueItems: ValueItem[] = [
  {
    id: "Durability",
    title: "Durability",
    description:
      "Built with carefully selected materials designed to withstand real working conditions and long-term professional use.",
    icon: ShieldCheck,
  },
  {
    id: "Ergonomics",
    title: "Ergonomics",
    description:
      "Tools designed to fit naturally in the hand, providing comfort, control, and reduced fatigue during extended work.",
    icon: Hand,
  },
  {
    id: "Functional Design",
    title: "Functional Design",
    description:
      "Every design choice serves a clear purpose, ensuring practicality, efficiency, and reliability in everyday tasks.",
    icon: Wrench,
  },
  {
    id: "Fair Pricing",
    title: "Fair Pricing",
    description:
      "Professional-grade tools offered at prices that remain accessible without compromising quality or performance.",
    icon: BadgeDollarSign,
  },
  {
    id: "Customer Driven",
    title: "Customer Driven",
    description:
      "Our products evolve through real feedback from craftsmen, installers, and users who rely on tools every day.",
    icon: Users,
  },
  {
    id: "Reliability",
    title: "Reliability",
    description:
      "Tools you can depend on daily, engineered to deliver consistent performance in demanding environments.",
    icon: CheckCircle,
  },
];
