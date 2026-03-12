export const STAGGER_DELAY = 0.1;
export const VALUE_DELAY_OFFSET = 0.2;

export interface StatsGridProps {
  title?: string;
  description?: string;
  stats?: Array<{
    value: string;
    label: string;
    description?: string;
  }>;
}
