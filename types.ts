
export enum BillingCycle {
  MONTHLY = 'Monthly',
  YEARLY = 'Yearly'
}

export interface HostingPlan {
  id: string;
  name: string;
  priceMonthly: number;
  priceYearly: number;
  cpu: string;
  ram: string;
  storage: string;
  bandwidth: string;
  isPopular?: boolean;
}

export interface Addon {
  id: string;
  name: string;
  price: number;
  description: string;
}

export interface CartItem {
  id: string;
  plan: HostingPlan;
  cycle: BillingCycle;
  location: string;
  version: string;
  addons: Addon[];
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  avatar: string;
}
