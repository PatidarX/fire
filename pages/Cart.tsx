
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Trash2, ShoppingBag, ArrowRight, ShieldCheck, Tag } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Cart: React.FC = () => {
  const { cart, removeFromCart, total } = useCart();
  const navigate = useNavigate();

  if (cart.length === 0) {
    return (
      <div className="pt-40 pb-40 flex flex-col items-center justify-center text-center px-6">
        <div className="w-24 h-24 bg-slate-900 rounded-full flex items-center justify-center mb-8 border border-slate-800">
          <ShoppingBag className="w-10 h-10 text-slate-700" />
        </div>
        <h1 className="text-4xl font-black text-white mb-6 tracking-tighter">Your cart is empty</h1>
        <p className="text-slate-400 mb-12 max-w-sm mx-auto font-medium">Looks like you haven't added any hosting plans yet. Ignite your project today!</p>
        <Link to="/plans" className="px-10 py-4 fire-gradient rounded-2xl text-white font-black shadow-xl neon-orange transition-all hover:scale-105">
          View Hosting Plans
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-32 min-h-screen">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-black text-white mb-12 tracking-tighter">Shopping <span className="text-orange-500">Cart</span></h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-2 space-y-6">
            {cart.map((item) => (
              <div key={item.id} className="glass p-8 rounded-[2rem] border-slate-800 flex flex-col md:flex-row justify-between gap-8 group">
                <div className="flex-grow">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="px-3 py-1 bg-orange-600/20 text-orange-500 text-[10px] font-black tracking-widest rounded-full uppercase">HOSTING</span>
                    <span className="text-slate-500 text-xs font-bold uppercase tracking-widest">{item.plan.name} Plan • {item.cycle}</span>
                  </div>
                  <h3 className="text-2xl font-black text-white mb-2">{item.plan.name} Hosting</h3>
                  <div className="space-y-1 mb-4 text-sm font-medium text-slate-400">
                    <p>Location: <span className="text-slate-300">{item.location}</span></p>
                    <p>Version: <span className="text-slate-300">{item.version}</span></p>
                    {item.addons.length > 0 && (
                      <p>Add-ons: <span className="text-slate-300">{item.addons.map(a => a.name).join(', ')}</span></p>
                    )}
                  </div>
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="flex items-center space-x-2 text-red-500 hover:text-red-400 transition-colors text-xs font-black uppercase tracking-widest"
                  >
                    <Trash2 className="w-4 h-4" />
                    <span>Remove Item</span>
                  </button>
                </div>
                <div className="text-right flex flex-col justify-between">
                  <div className="text-3xl font-black text-white mb-4">
                    ₹{(item.cycle === 'Monthly' ? item.plan.priceMonthly : item.plan.priceYearly + item.addons.reduce((a,b)=>a+b.price,0)).toFixed(2)}
                  </div>
                  <Link to={`/order/${item.plan.id}`} className="text-orange-500 hover:text-orange-400 text-xs font-black uppercase tracking-widest">
                    Edit Configuration
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:sticky lg:top-32 space-y-6">
            <div className="glass p-8 rounded-[2.5rem] border-slate-800 shadow-2xl">
              <h3 className="text-2xl font-black text-white mb-8 tracking-tighter">Order Summary</h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center text-sm font-bold">
                  <span className="text-slate-400">Subtotal</span>
                  <span className="text-white">₹{total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center text-sm font-bold">
                  <span className="text-slate-400">Tax</span>
                  <span className="text-white">₹0.00</span>
                </div>
                <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                  <div className="relative flex-grow mr-4">
                    <Tag className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                    <input 
                      type="text" 
                      placeholder="Coupon Code" 
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl py-3 pl-12 pr-4 text-sm font-bold text-white focus:border-orange-500 outline-none"
                    />
                  </div>
                  <button className="bg-slate-800 hover:bg-slate-700 text-white px-6 py-3 rounded-xl font-bold text-sm transition-all">Apply</button>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-800 mb-8">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-black text-white">Grand Total</span>
                  <span className="text-3xl font-black text-orange-500 animate-pulse">₹{total.toFixed(2)}</span>
                </div>
              </div>

              <button 
                onClick={() => navigate('/checkout')}
                className="w-full py-5 fire-gradient rounded-2xl text-xl font-black text-white shadow-xl neon-orange active:scale-95 transition-all mb-4 flex items-center justify-center space-x-3"
              >
                <span>Checkout Now</span>
                <ArrowRight className="w-6 h-6" />
              </button>
              
              <div className="flex items-center justify-center space-x-2 text-slate-500 font-bold text-[10px] uppercase tracking-[0.2em]">
                <ShieldCheck className="w-4 h-4" />
                <span>Secure Payment Processing</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
