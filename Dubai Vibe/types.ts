export interface ServicePackage {
  name: string;
  price: string;
  period: string;
  features: string[];
  recommended?: boolean;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface ChatMessage {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
  actions?: {
    label: string;
    action: string;
  }[];
}

export interface PortfolioItem {
  id: string;
  type: 'video' | 'image';
  src: string;
  alt: string;
  platform: 'Instagram' | 'TikTok' | 'YouTube' | 'Other';
  industry: 'F&B' | 'Hospitality' | 'Real Estate' | 'Fashion' | 'Tech' | 'Other';
  stats: {
    views: string;
    likes: string;
  };
  details?: string;
}

export interface ServiceItem {
  icon: any;
  title: string;
  shortDesc: string;
  fullDesc: string;
  features: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
}