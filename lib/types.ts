export interface Client {
  id: string;
  name: string;
  description: string;
  logoUrl: string;
  category: 'Digital Health' | 'Consumer Tech';
  featured?: boolean;
}

export interface PressItem {
  id: string;
  title: string;
  publication: string;
  url: string;
  date: string;
  category: 'Trade' | 'Business' | 'Consumer';
}

export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
}

export type ClientCategory = Client['category'];
export type PressCategory = PressItem['category'] | 'All';
