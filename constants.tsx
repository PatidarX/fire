import React from 'react';
import { Shield, Zap, Cpu, HardDrive, Headphones, Globe } from 'lucide-react';
import { HostingPlan, Addon, Testimonial } from './types';

export const LIVE_URLS = {
  MAIN_SITE: 'https://firenodex.online',
  PANEL: 'https://panel.firenodex.online',
  BILLING: 'https://billing.firenodex.online',
  DISCORD: 'https://discord.gg/BUWZDZHtbZ',
  MC_JOIN: 'minecraft://play.firenodex.online:19100',
  MC_IP: 'play.firenodex.online:19100',
  SUPPORT_EMAIL: 'mailto:firenodex@gmail.com',
  YOUTUBE: 'https://www.youtube.com/@patidarx',
  INSTAGRAM: 'https://www.instagram.com/patidarx_yt?igsh=MWtoc25mcmZtazBjMw=='
};

export const PLANS: HostingPlan[] = [
  {
    id: 'starter',
    name: 'Starter',
    priceMonthly: 99,
    priceYearly: 990,
    cpu: '1 vCore (Ryzen 9)',
    ram: '4GB DDR4',
    storage: '20GB NVMe',
    bandwidth: 'Unlimited',
  },
  {
    id: 'pro',
    name: 'Pro',
    priceMonthly: 159,
    priceYearly: 1590,
    cpu: '2 vCores (Ryzen 9)',
    ram: '6GB DDR4',
    storage: '40GB NVMe',
    bandwidth: 'Unlimited',
    isPopular: true,
  },
  {
    id: 'ultra',
    name: 'Ultra',
    priceMonthly: 239,
    priceYearly: 2390,
    cpu: '6 vCores (Ryzen 9)',
    ram: '8GB DDR4',
    storage: '60GB NVMe',
    bandwidth: 'Unlimited',
  }
];

export const ADDONS: Addon[] = [
  { id: 'extra-ram', name: 'Extra 2GB RAM', price: 49.00, description: 'Boost performance for modpacks' },
  { id: 'backups', name: 'Daily Backups', price: 29.50, description: 'Peace of mind with automated restoration' },
  { id: 'dedi-ip', name: 'Dedicated IP', price: 99.00, description: 'Professional port-free join address' },
  { id: 'priority', name: 'Priority Support', price: 149.00, description: 'Skip the queue 24/7' },
];

export const FEATURES = [
  { icon: <Cpu className="w-6 h-6" />, title: 'High-Performance CPUs', desc: 'Powered by Ryzen 9 5950X / 7950X for lag-free gameplay.' },
  { icon: <HardDrive className="w-6 h-6" />, title: 'NVMe Gen4 Storage', desc: 'Blazing fast world loading and I/O speeds for heavy modpacks.' },
  { icon: <Shield className="w-6 h-6" />, title: 'Advanced DDoS Protection', desc: 'Enterprise-grade mitigation keeping you online during attacks.' },
  { icon: <Zap className="w-6 h-6" />, title: 'Instant Deployment', desc: 'Your server is ready the moment payment is confirmed.' },
  { icon: <Globe className="w-6 h-6" />, title: 'Global Nodes', desc: 'Strategic locations in India, Europe, and North America.' },
  { icon: <Headphones className="w-6 h-6" />, title: '24/7 Human Support', desc: 'Expert staff ready to help with any technical hurdle.' },
];

export const TESTIMONIALS: Testimonial[] = [
  { id: 1, name: 'Arjun Sharma', role: 'Server Owner', content: 'FireNodeX is hands down the best hosting in India. Zero lag on my 100+ player SMP.', avatar: 'https://picsum.photos/seed/1/100/100' },
  { id: 2, name: 'Sarah J.', role: 'Modpack Creator', content: 'The NVMe speeds are insane. My ATM9 world loads in seconds!', avatar: 'https://picsum.photos/seed/2/100/100' },
  { id: 3, name: 'Vikram Singh', role: 'Competitive PvPer', content: 'The network latency is incredibly low. Perfect for our PvP tournaments.', avatar: 'https://picsum.photos/seed/3/100/100' },
];