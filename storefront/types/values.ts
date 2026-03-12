import React from "react";

export type IconType =
  | React.ElementType
  | React.FunctionComponent<React.SVGProps<SVGSVGElement>>;

export interface ValueItem {
  id: string;
  icon: IconType;
  title: string;
  description: string;
}

export interface OurValueProps {
  sectionTitle?: React.ReactNode;
  sectionSubtitle?: React.ReactNode;
  className?: string;
}
