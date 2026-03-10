import { TimelineItem } from "@/types/timeline";
import { Ear, Rocket, Wrench } from "lucide-react";

export const timelineItems: TimelineItem[] = [
  {
    title: "30 years in tools",
    description:
      "Three decades ago, our family stepped into the world of tools. Since then, we have been constantly learning, growing and following the needs of the market.",
    date: "1994",
    category: "Foundation",
    image: <Wrench className="w-8 h-8 text-primary sm:w-14 sm:h-14" />,
    status: "completed",
  },
  {
    title: "We listened to customers.",
    description:
      "As the business evolved, we listened to what customers really needed — their suggestions became our guidelines.",
    date: "2012",
    category: "Product",
    image: <Ear className="w-8 h-8 text-primary sm:w-14 sm:h-14" />,
    status: "completed",
  },
  {
    title: "SG Tools was born.",
    description:
      "7 years ago, we turned that knowledge into a brand. Today, we are expanding our range and creating new products with the same care.",
    date: "2019",
    category: "Funding",
    image: <Rocket className="w-8 h-8 text-primary sm:w-14 sm:h-14" />,
    status: "completed",
  },
];
