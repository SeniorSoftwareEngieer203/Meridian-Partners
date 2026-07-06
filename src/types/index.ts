export interface Service {
  id: string;
  title: string;
  slug: string;
  description: string;
  icon: string;
  features: string[];
}

export interface Industry {
  id: string;
  title: string;
  slug: string;
  description: string;
  icon: string;
}

export interface CareerRole {
  id: string;
  title: string;
  category: "software" | "developer-success";
  type: "full-time" | "contract" | "remote";
  location: string;
  description: string;
  requirements: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  category: string;
  readTime: number;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}
