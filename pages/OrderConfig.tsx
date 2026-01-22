
import React, { useState } from 'react';
import { useParams, useSearchParams, useNavigate } from 'react-router-dom';
import { ChevronLeft, Globe, Database, Settings, CreditCard, ShieldCheck, Zap } from 'lucide-react';
import { PLANS, ADDONS } from '../constants';
import { BillingCycle, Addon, CartItem } from '../types';
import { useCart } from '../context/CartContext';

const OrderConfig: React.FC = () => {
  const { planId } = useParams();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const initialCycle = searchParams.get('cycle') === 'yearly' ? BillingCycle.YEARLY : BillingCycle.MONTHLY;
  const plan = PLANS.find(p => p.id === planId) || PLANS[1];

  const [cycle, setCycle] = useState<BillingCycle>(initialCycle);
  const [location, setLocation] = useState('India (Mumbai)');
  const [version, setVersion] = useState('1.20.4 (Paper/Spigot)');
  const [selectedAddons, setSelectedAddons] = useState<Addon[]>([]);

  const toggleAddon = (addon: Addon) => {
    setSelectedAddons(prev => 
      prev.find(a => a.id === addon.id) ? prev.filter(a => a.id !== addon.id) : [...prev, addon]
    );
  };

  const calculateSubtotal = () => {
    const base = cycle === BillingCycle.MONTHLY ? plan.priceMonthly : plan.priceYearly;
    const addonsTotal = selectedAddons.reduce((acc, a) => acc + a.price, 0);
    return base + addonsTotal;
  };

  const handleContinue = () => {
    const cartItem: CartItem = {
      id: Math.random().toString(36).substr(2, 9),
      plan,
      cycle,
      location,
      version,
      addons: selectedAddons
    };
    addToCart(cartItem);
    navigate('/cart');
  };

  return (
    <div className="pt-32 pb-32 min-h-screen bg-slate-950">
      <div className="container mx-auto px-6">
        <button onClick={() => navigate('/hosting')} className="flex items-center space-x-2 text-slate-400 hover:text-white transition-colors mb-12 font-bold group">
          <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Plans</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-2 space-y-8">
            <h1 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-12 uppercase">Configure <span className="text-orange-500">{plan.name}</span> Plan</h1>

            <div className="glass p-8 rounded-3xl border-slate-800">
               <h3 className="text-xl font-bold text-white mb-6 flex items-center space-x-3">
                 <CreditCard className="w-5 h-5 text-orange-500" />
                 <span>Billing Cycle</span>
               </h3>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                 {[BillingCycle.MONTHLY, BillingCycle.YEARLY].map((c) => (
                   <button 
                     key={c}
                     onClick={() => setCycle(c)}
                     className={`p-6 rounded-2xl border-2 text-left transition-all ${cycle === c ? 'border-orange-500 bg-orange-500/10' : 'border-slate-800 hover:border-slate-700 bg-slate-900/50'}`}
                   >
                     <div className="text-lg font-black text-white">{c}</div>
                     <div className="text-sm text-slate-400 font-bold">
                       ₹{c === BillingCycle.MONTHLY ? plan.priceMonthly : plan.priceYearly} / {c === BillingCycle.MONTHLY ? 'month' : 'year'}
                       {c === BillingCycle.YEARLY && <span className="ml-2 text-orange-500">20% OFF</span>}
                     </div>
                   </button>
                 ))}
               </div>
            </div>

            <div className="glass p-8 rounded-3xl border-slate-800">
               <h3 className="text-xl font-bold text-white mb-6 flex items-center space-x-3">
                 <Globe className="w-5 h-5 text-orange-500" />
                 <span>Server Location</span>
               </h3>
               <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                 {['India (Mumbai)', 'Europe (Germany)', 'North America'].map((loc) => (
                   <button 
                     key={loc}
                     onClick={() => setLocation(loc)}
                     className={`p-6 rounded-2xl border-2 text-center transition-all ${location === loc ? 'border-orange-500 bg-orange-500/10' : 'border-slate-800 hover:border-slate-700 bg-slate-900/50'}`}
                   >
                     <div className="text-sm font-black text-white uppercase tracking-wider">{loc}</div>
                   </button>
                 ))}
               </div>
            </div>

            <div className="glass p-8 rounded-3xl border-slate-800">
               <h3 className="text-xl font-bold text-white mb-6 flex items-center space-x-3">
                 <Database className="w-5 h-5 text-orange-500" />
                 <span>Minecraft Version</span>
               </h3>
               <select 
                 value={version}
                 onChange={(e) => setVersion(e.target.value)}
                 className="w-full bg-slate-950 border-2 border-slate-800 rounded-2xl p-4 text-white font-bold focus:border-orange-500 outline-none"
               >
                 <option>1.20.4 (Paper/Spigot)</option>
                 <option>1.20.1 (Forge/Fabric)</option>
                 <option>1.19.4 (Vanilla)</option>
                 <option>1.8.9 (BungeeCord/Waterfall)</option>
                 <option>Bedrock Edition (Latest)</option>
               </select>
            </div>

            <div className="glass p-8 rounded-3xl border-slate-800">
               <h3 className="text-xl font-bold text-white mb-6 flex items-center space-x-3">
                 <Settings className="w-5 h-5 text-orange-500" />
                 <span>Add-ons & Upgrades</span>
               </h3>
               <div className="space-y-4">
                 {ADDONS.map((addon) => (
                   <button 
                     key={addon.id}
                     onClick={() => toggleAddon(addon)}
                     className={`w-full flex items-center justify-between p-6 rounded-2xl border-2 transition-all ${selectedAddons.find(a => a.id === addon.id) ? 'border-orange-500 bg-orange-500/10' : 'border-slate-800 hover:border-slate-700 bg-slate-900/50'}`}
                   >
                     <div className="text-left">
                       <div className="font-bold text-white">{addon.name}</div>
                       <div className="text-xs text-slate-500 font-bold uppercase">{addon.description}</div>
                     </div>
                     <div className="text-orange-500 font-black">+₹{addon.price.toFixed(2)}</div>
                   </button>
                 ))}
               </div>
            </div>
          </div>

          <div className="lg:sticky lg:top-32 space-y-6">
            <div className="glass p-8 rounded-[2.5rem] border-slate-800 shadow-2xl">
              <h3 className="text-2xl font-black text-white mb-8 tracking-tighter uppercase">Order Summary</h3>
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center text-sm font-bold">
                  <span className="text-slate-400">{plan.name} Hosting ({cycle})</span>
                  <span className="text-white">₹{cycle === BillingCycle.MONTHLY ? plan.priceMonthly : plan.priceYearly}</span>
                </div>
                {selectedAddons.map(addon => (
                  <div key={addon.id} className="flex justify-between items-center text-sm font-bold">
                    <span className="text-slate-400">{addon.name}</span>
                    <span className="text-white">+₹{addon.price.toFixed(2)}</span>
                  </div>
                ))}
              </div>
              <div className="pt-6 border-t border-slate-800 mb-8">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-black text-white uppercase">Total</span>
                  <span className="text-3xl font-black text-orange-500">₹{calculateSubtotal().toFixed(2)}</span>
                </div>
              </div>
              <button 
                onClick={handleContinue}
                className="w-full py-5 fire-gradient rounded-2xl text-xl font-black text-white shadow-xl neon-orange active:scale-95 transition-all mb-4 uppercase tracking-widest"
              >
                Add to Cart
              </button>
              <div className="flex items-center justify-center space-x-2 text-slate-500 font-bold text-[10px] uppercase tracking-widest">
                <ShieldCheck className="w-4 h-4" />
                <span>Secure 256-bit Checkout</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderConfig;
