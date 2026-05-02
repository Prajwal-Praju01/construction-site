export interface Service {
  id: string;
  title: string;
  description: string;
  bestFor: string;
  deliveryWindow: string;
  monthlyCapacity: string;
  icon: string;
  image: string;
  features: string[];
  href: string;
  steps: ServiceStep[];
}

export interface ServiceStep {
  number: number;
  title: string;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  location: string;
  year: number;
  category: string;
  image: string;
  description: string;
  area?: string;
  duration?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  review: string;
  rating: number;
  project?: string;
}

export interface ProcessStep {
  id: number;
  title: string;
  description: string;
  icon: string;
  duration?: string;
}

export interface Stat {
  label: string;
  value: number;
  suffix: string;
  icon: string;
}

export interface NavLink {
  label: string;
  href: string;
}
