import React from "react";
import { TimelineItem } from "@/components/ui/timeline";
export interface TimelineItem {
  title: string;
  description: string;
  date?: string;
  image?: React.ReactNode;
  status?: "completed" | "current" | "upcoming";
  category?: string;
}

export interface TimelineProps {
  items: TimelineItem[];
  className?: string;
}
