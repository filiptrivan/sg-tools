import { ValueItem } from "@/types/values";
import { Cpu, Gauge, Lock, Settings, Shield, TrendingUp } from "lucide-react";

export const valueItems: ValueItem[] = [
  {
    id: "performance",
    icon: Gauge,
    title: "Blazing Performance",
    description:
      "Built on optimized algorithms, our platform ensures sub-millisecond response times for even the most complex queries.",
  },
  {
    id: "security",
    icon: Lock,
    title: "Zero-Trust Security",
    description:
      "Comprehensive end-to-end encryption and compliance certifications to protect your sensitive enterprise data.",
  },
  {
    id: "scalability",
    icon: TrendingUp,
    title: "Limitless Scalability",
    description:
      "Effortlessly scale resources up or down to meet fluctuating demand without requiring manual configuration changes.",
  },
  {
    id: "automation",
    icon: Cpu,
    title: "Intelligent Automation",
    description:
      "Leverage AI-driven workflows to automate repetitive tasks and free up your team for high-value strategic work.",
  },
  {
    id: "config",
    icon: Settings,
    title: "Flexible Configuration",
    description:
      "Easily customize every aspect of the platform through a unified, powerful, and intuitive management dashboard.",
  },
  {
    id: "reliability",
    icon: Shield,
    title: "99.99% Uptime SLA",
    description:
      "Our distributed architecture guarantees maximum reliability, backed by industry-leading service level agreements.",
  },
];
