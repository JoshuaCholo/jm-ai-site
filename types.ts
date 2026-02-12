
export interface Project {
  id: number;
  title: string;
  image: string;
  category: string;
  year: string;
  timeline: string;
  client: string;
  challenge: string;
  solution: string;
  beforeAfter: string;
  keyResults: string;
  clientReview: string;
  tools: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: string;
  color?: string;
}

export enum Page {
  Home = 'home',
  About = 'about',
  Services = 'services',
  Portfolio = 'portfolio',
  Reviews = 'reviews',
  Contact = 'contact'
}
