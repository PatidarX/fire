
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Check, Cpu, HardDrive, Star, Package, Database, Users, Server, Shield, Zap, Layers, Component } from 'lucide-react';
import { BillingCycle } from '../types';
import { LIVE_URLS } from '../constants';

const HostingPlans: React.FC = () => {
  const [cycle, setCycle] = useState<BillingCycle>(BillingCycle.MONTHLY);
  const navigate = useNavigate();

  const handleSelect = (planId: string) => {
    // Corrected: Navigate to the order configuration page, not directly to checkout
    navigate(`/order/${planId}?cycle=${cycle.toLowerCase()}`);
  };

  const minecraftPlans = [
    {
      id: 'starter',
      title: 'STARTER',
      subtitle: 'CORE SPARK',
      icon: (
        <div className="relative flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
          <Shield className="w-10 h-10 text-amber-500/20 absolute" />
          <Zap className="w-6 h-6 text-amber-500 fill-amber-500/20 animate-pulse" />
        </div>
      ),
      headerBg: 'from-amber-900/30 via-slate-950 to-slate-950',
      badgeColor: 'bg-amber-500/10 border-amber-500/30 shadow-[0_0_20px_rgba(245,158,11,0.1)]',
      price: cycle === BillingCycle.MONTHLY ? '99' : '990',
      accentColor: 'text-amber-500',
      buttonStyles: 'bg-amber-600 hover:bg-amber-500 shadow-amber-900/20 hover:shadow-amber-500/40',
      glowStyle: 'group-hover:border-amber-500/40 shadow-[0_10px_40px_-15px_rgba(245,158,11,0.15)]',
      specs: [
        { label: 'RAM', val: '4GB DDR4', icon: <Database className="w-4 h-4 text-amber-500" /> },
        { label: 'CPU', val: '1 vCore', icon: <Cpu className="w-4 h-4 text-amber-500" /> },
        { label: 'Storage', val: '20GB NVMe', icon: <HardDrive className="w-4 h-4 text-amber-500" /> },
        { label: 'Slots', val: 'Unlimited', icon: <Users className="w-4 h-4 text-amber-500" /> },
      ],
      features: ['Instant Setup', '99.9% Uptime', '24/7 Support', 'One-Click Plugin']
    },
    {
      id: 'pro',
      title: 'PRO',
      subtitle: 'CORE FLOW',
      isPopular: true,
      icon: (
        <div className="relative flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
          <Layers className="w-8 h-8 text-cyan-400 group-hover:translate-y-[-2px] transition-transform" />
          <div className="absolute inset-0 bg-cyan-400/20 blur-xl rounded-full animate-pulse"></div>
        </div>
      ),
      headerBg: 'from-cyan-900/30 via-slate-950 to-slate-950',
      badgeColor: 'bg-cyan-400/10 border-cyan-400/30 shadow-[0_0_30px_rgba(34,211,238,0.2)]',
      price: cycle === BillingCycle.MONTHLY ? '159' : '1590',
      accentColor: 'text-cyan-400',
      buttonStyles: 'bg-cyan-600 hover:bg-cyan-500 shadow-cyan-900/20 hover:shadow-cyan-400/40',
      glowStyle: 'border-cyan-500/50 shadow-[0_20px_50px_-12px_rgba(6,182,212,0.25)]',
      specs: [
        { label: 'RAM', val: '6GB DDR4', icon: <Database className="w-4 h-4 text-cyan-400" /> },
        { label: 'CPU', val: '2 vCores', icon: <Cpu className="w-4 h-4 text-cyan-400" /> },
        { label: 'Storage', val: '40GB NVMe', icon: <HardDrive className="w-4 h-4 text-cyan-400" /> },
        { label: 'Slots', val: 'Unlimited', icon: <Users className="w-4 h-4 text-cyan-400" /> },
      ],
      features: ['Instant Setup', '99.9% Uptime', '24/7 Support', 'One-Click Plugin']
    },
    {
      id: 'ultra',
      title: 'ULTRA',
      subtitle: 'CORE NEXUS',
      icon: (
        <div className="relative flex items-center justify-center group-hover:scale-110 transition-transform duration-500 group-hover:rotate-45">
          <Component className="w-8 h-8 text-emerald-400" />
          <div className="absolute w-2 h-2 bg-emerald-400 rounded-full animate-ping shadow-[0_0_15px_#10b981]"></div>
        </div>
      ),
      headerBg: 'from-emerald-900/30 via-slate-950 to-slate-950',
      badgeColor: 'bg-emerald-400/10 border-emerald-400/30 shadow-[0_0_20px_rgba(16,185,129,0.1)]',
      price: cycle === BillingCycle.MONTHLY ? '239' : '2390',
      accentColor: 'text-emerald-400',
      buttonStyles: 'bg-emerald-600 hover:bg-emerald-500 shadow-emerald-900/20 hover:shadow-emerald-400/40',
      glowStyle: 'group-hover:border-emerald-500/40 shadow-[0_10px_40px_-15px_rgba(16,185,129,0.15)]',
      specs: [
        { label: 'RAM', val: '8GB DDR4', icon: <Database className="w-4 h-4 text-emerald-400" /> },
        { label: 'CPU', val: '6 vCores', icon: <Cpu className="w-4 h-4 text-emerald-400" /> },
        { label: 'Storage', val: '60GB NVMe', icon: <HardDrive className="w-4 h-4 text-emerald-400" /> },
        { label: 'Slots', val: 'Unlimited', icon: <Users className="w-4 h-4 text-emerald-400" /> },
      ],
      features: ['Instant Setup', '99.9% Uptime', '24/7 Support', 'One-Click Plugin']
    }
  ];

  return (
    <div className="pt-32 pb-32 bg-slate-950 min-h-screen">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-orange-600/10 text-orange-500 px-4 py-1.5 rounded-full text-xs font-black tracking-widest mb-6 border border-orange-500/20 uppercase">
            Performance Infrastructure
          </div>
          <h1 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter uppercase">
            CHOOSE YOUR <span className="text-transparent bg-clip-text fire-gradient">CORE</span>
          </h1>
          
          <div className="inline-flex items-center p-1.5 glass rounded-[1.25rem] border-slate-800">
            <button 
              onClick={() => setCycle(BillingCycle.MONTHLY)}
              className={`px-8 py-3 rounded-[1rem] text-xs font-black uppercase tracking-widest transition-all ${cycle === BillingCycle.MONTHLY ? 'fire-gradient text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}
            >
              Monthly
            </button>
            <button 
              onClick={() => setCycle(BillingCycle.YEARLY)}
              className={`px-8 py-3 rounded-[1rem] text-xs font-black uppercase tracking-widest transition-all ${cycle === BillingCycle.YEARLY ? 'fire-gradient text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}
            >
              Yearly <span className="ml-2 text-[10px] text-white/70">SAVE 20%</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto items-stretch">
          {minecraftPlans.map((plan) => (
            <div 
              key={plan.id} 
              className={`relative flex flex-col glass rounded-[2.25rem] border-white/5 transition-all duration-500 group overflow-hidden shadow-2xl ${plan.isPopular ? `${plan.glowStyle} scale-105 z-10 border-white/10` : `hover:border-white/10 hover:scale-[1.02] ${plan.glowStyle}`}`}
              style={{
                boxShadow: plan.isPopular ? undefined : '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
              }}
            >
              {plan.isPopular && (
                <div className="absolute top-0 right-0 bg-orange-600 text-white px-6 py-2 rounded-bl-[1.5rem] text-[9px] font-black tracking-[0.2em] flex items-center space-x-2 z-20 shadow-xl">
                  <Star className="w-3 h-3 fill-white" />
                  <span>MOST POPULAR</span>
                </div>
              )}

              <div className={`absolute inset-0 bg-gradient-to-b ${plan.headerBg} h-80 -z-10 opacity-30 group-hover:opacity-40 transition-opacity`}></div>
              
              <div className="absolute inset-0 rounded-[2.25rem] border border-white/5 pointer-events-none"></div>

              <div className="p-8 md:p-10 flex flex-col flex-grow relative z-10">
                <div className="flex items-center justify-between mb-8 border-b border-slate-800/40 pb-8">
                  <div className="flex items-center space-x-5">
                    <div className={`w-16 h-16 md:w-20 md:h-20 ${plan.badgeColor} rounded-[1.25rem] flex items-center justify-center border border-white/5 transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(255,255,255,0.05)]`}>
                      {plan.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-black text-white tracking-tighter uppercase leading-none mb-2">{plan.title}</h3>
                      <div className={`text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] ${plan.accentColor} px-3 py-1 bg-white/5 rounded-full inline-block`}>
                        {plan.subtitle}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-baseline justify-end space-x-0.5">
                      <span className="text-slate-500 font-bold text-lg">₹</span>
                      <span className="text-3xl md:text-4xl font-black text-white leading-none">{plan.price}</span>
                    </div>
                    <div className="text-slate-500 font-bold uppercase text-[10px] tracking-widest mt-1">/ {cycle === BillingCycle.MONTHLY ? 'mo' : 'yr'}</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 md:gap-4 mb-8">
                  {plan.specs.map((spec, i) => (
                    <div key={i} className="bg-slate-950/40 border border-white/5 p-4 md:p-5 rounded-[1.25rem] flex flex-col items-center text-center group/tile hover:bg-slate-900/60 transition-all duration-300 backdrop-blur-md">
                      <div className="mb-2 md:mb-3 opacity-90 group-hover/tile:scale-125 transition-transform duration-300">{spec.icon}</div>
                      <div className="text-[8px] md:text-[9px] font-black text-slate-500 uppercase tracking-[0.2em] mb-1">{spec.label}</div>
                      <div className="text-[11px] md:text-[13px] font-black text-white leading-tight">{spec.val}</div>
                    </div>
                  ))}
                </div>

                <div className="mb-8 flex-grow">
                  <div className={`text-[9px] font-black text-slate-500 uppercase tracking-widest mb-4 px-1 border-l-4 border-slate-800 ml-1 pl-4`}>Core Tier Features</div>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-3 px-1">
                    {plan.features.map((feat, i) => (
                      <div key={i} className="flex items-start space-x-2 text-[9px] md:text-[10px] font-bold text-slate-400 group/feat">
                        <div className={`mt-0.5 w-3.5 h-3.5 rounded-[0.4rem] bg-white/5 flex items-center justify-center border border-white/10 flex-shrink-0 group-hover/feat:bg-white/10 transition-colors`}>
                          <Check className={`w-2 h-2 ${plan.accentColor}`} />
                        </div>
                        <span className="leading-snug group-hover/feat:text-slate-200 transition-colors">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-auto">
                  <button 
                    onClick={() => handleSelect(plan.id)}
                    className={`w-full py-4 md:py-5 rounded-[1.15rem] text-xs md:text-sm font-black text-white transition-all transform active:scale-95 shadow-2xl flex items-center justify-center space-x-3 group/btn overflow-hidden relative ${plan.buttonStyles}`}
                  >
                    <div className="absolute inset-0 bg-white/10 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300"></div>
                    <Package className="w-4 h-4 md:w-5 md:h-5 relative z-10" />
                    <span className="relative z-10 uppercase tracking-widest">ORDER NOW</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-32 glass p-10 md:p-16 rounded-[2.25rem] border-white/5 text-center relative overflow-hidden group shadow-2xl">
          <div className="absolute top-0 right-0 p-12 opacity-5 group-hover:scale-110 transition-transform pointer-events-none">
            <Server className="w-64 h-64 text-white" />
          </div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tighter uppercase">SCALE TO <span className="text-orange-500">ENTERPRISE</span></h2>
            <p className="text-slate-400 mb-10 max-w-2xl mx-auto font-medium text-lg leading-relaxed">
              Managing a massive Minecraft network? Our dedicated enterprise clusters offer exclusive access to dedicated Ryzen 9 7950X cores and priority networking.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a href={LIVE_URLS.DISCORD} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-10 py-4 fire-gradient text-white rounded-[1.25rem] font-black shadow-xl neon-orange hover:scale-105 transition-transform active:scale-95 flex items-center justify-center">
                Contact Enterprise Sales
              </a>
              <Link to="/support" className="w-full sm:w-auto px-10 py-4 glass border-white/10 text-white rounded-[1.25rem] font-black hover:bg-slate-800 transition-colors backdrop-blur-xl flex items-center justify-center">
                View SLA Policies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HostingPlans;