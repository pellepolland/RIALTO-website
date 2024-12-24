export interface SectionProps {
  title: string | string[];
  subtitle?: string;
  background?: {
    color?: string;
    gradient?: string;
  };
  layout?: 'default' | 'reversed';
  animate?: boolean;
} 