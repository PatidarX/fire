import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout, Server, User, CreditCard, LogOut, Shield, ChevronRight, Zap } from 'lucide-react';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  
  const handleLogout = () => {
    localStorage.removeItem('userToken');
    navigate('/login');
  };

  return (
    <div className="pt-24 pb-32 min-h-screen bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div>
            <h1 className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase mb-2">Welcome Back, <span className="text-orange-500">Arjun</span></h1>
            <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">Standard Tier Account • ID: FNX-0412</p>
          </div>
          <button 
            onClick={handleLogout}
            className="flex items-center space-x-2 bg-slate-900 hover:bg-red-950/30 text-slate-400 hover:text-red-500 px-6 py-3 rounded-xl font-bold transition-all border border-slate-800"
          >
            <LogOut className="w-5 h-5" />
            <span>Logout</span>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <div className="glass p-6 rounded-[2rem] border-slate-800">
              <nav className="space-y-2">
                {[
                  { name: 'Overview', icon: <Layout className="w-5 h-5" />, active: true },
                  { name: 'My Servers', icon: <Server className="w-5 h-5" />, active: false },
                  { name: 'Billing', icon: <CreditCard className="w-5 h-5" />, active: false },
                  { name: 'Profile Settings', icon: <User className="w-5 h-5" />, active: false },
                  { name: 'Security', icon: <Shield className="w-5 h-5" />, active: false },
                ].map((item, i) => (
                  <button 
                    key={i} 
                    className={`w-full flex items-center space-x-3 p-4 rounded-xl font-bold transition-all ${item.active ? 'bg-orange-600 text-white' : 'text-slate-400 hover:bg-slate-900 hover:text-white'}`}
                  >
                    {item.icon}
                    <span>{item.name}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { label: 'ACTIVE SERVICES', val: '2', icon: <Zap className="text-orange-500" /> },
                { label: 'TICKETS OPEN', val: '0', icon: <Shield className="text-cyan-500" /> },
                { label: 'WALLET BALANCE', val: '₹420.00', icon: <CreditCard className="text-green-500" /> },
              ].map((stat, i) => (
                <div key={i} className="glass p-8 rounded-3xl border-slate-800 shadow-xl">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center border border-slate-800">{stat.icon}</div>
                    <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{stat.label}</span>
                  </div>
                  <div className="text-3xl font-black text-white">{stat.val}</div>
                </div>
              ))}
            </div>

            {/* Active Servers Placeholder */}
            <div className="glass p-8 rounded-[2.5rem] border-slate-800">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-black text-white tracking-tighter uppercase">Active Servers</h3>
                <button className="text-orange-500 font-bold text-sm uppercase tracking-widest flex items-center space-x-2 hover:text-orange-400">
                  <span>View All</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
              
              <div className="space-y-4">
                <div className="p-6 bg-slate-900/50 border border-slate-800 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="flex items-center space-x-6">
                    <div className="w-16 h-16 fire-gradient rounded-xl flex items-center justify-center text-white">
                      <Server className="w-8 h-8" />
                    </div>
                    <div>
                      <h4 className="text-white font-black text-xl mb-1">Survivor SMP</h4>
                      <p className="text-slate-500 text-sm font-bold uppercase">Pro Plan • Mumbai, India</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-6">
                    <div className="text-right hidden md:block">
                      <div className="text-green-500 font-black text-xs uppercase tracking-widest flex items-center justify-end space-x-2">
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                        <span>Running</span>
                      </div>
                      <p className="text-slate-400 text-sm font-bold mt-1">v1.20.4 Paper</p>
                    </div>
                    <button className="bg-white text-slate-950 px-8 py-3 rounded-xl font-black text-sm shadow-xl hover:scale-105 active:scale-95 transition-transform">
                      Manage Node
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;