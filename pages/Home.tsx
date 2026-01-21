import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Zap, Cpu, Users, Globe, ChevronRight, Play, Flame } from 'lucide-react';
import { FEATURES, TESTIMONIALS, LIVE_URLS } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-screen pt-32 pb-20 flex items-center overflow-hidden">
        {/* Animated Background Mesh */}
        <div className="absolute top-0 left-0 w-full h-full -z-10 bg-[radial-gradient(circle_at_50%_50%,_rgba(249,115,22,0.1),transparent_50%)]"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-orange-600/20 blur-[100px] rounded-full"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-red-600/10 blur-[100px] rounded-full"></div>

        <div className="container mx-auto px-6 text-center">
          <div className="inline-flex items-center space-x-2 bg-slate-900/50 border border-slate-800 rounded-full px-4 py-1.5 mb-8 text-sm font-bold animate-bounce">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-slate-300">SEASON 2 NOW LIVE ON FIRECRAFTX</span>
          </div>
          
          <h1 className="text-5xl md:text-8xl font-black mb-8 leading-[1.1] tracking-tighter text-white">
            FireNodeX — Powering Servers.<br />
            <span className="text-transparent bg-clip-text fire-gradient">Fueling FireCraftX S2.</span>
          </h1>
          
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-slate-400 mb-12 font-medium leading-relaxed">
            Premium Minecraft Hosting & High-Performance Node Services Built for Speed, Stability, and Serious Gamers. Launch your dream server in under 60 seconds.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link to="/hosting" className="w-full sm:w-auto px-10 py-4 fire-gradient rounded-2xl text-lg font-black text-white shadow-2xl neon-orange flex items-center justify-center space-x-2 transition-transform hover:scale-105 active:scale-95">
              <span>🔥 Get Started</span>
              <ChevronRight className="w-5 h-5" />
            </Link>
            <Link to="/firecraftx" className="w-full sm:w-auto px-10 py-4 glass border-cyan-500/30 rounded-2xl text-lg font-black text-white flex items-center justify-center space-x-2 transition-transform hover:scale-105 active:scale-95 group">
              <span className="group-hover:text-cyan-400 transition-colors">🎮 Join FireCraftX S2</span>
            </Link>
          </div>

          {/* Visual Divider / Stats */}
          <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { label: 'SERVERS ACTIVE', val: '12,400+', icon: <Cpu className="w-4 h-4 text-orange-500" /> },
              { label: 'PLAYERS ONLINE', val: '45,000+', icon: <Users className="w-4 h-4 text-cyan-500" /> },
              { label: 'GLOBAL NODES', val: '14+', icon: <Globe className="w-4 h-4 text-green-500" /> },
              { label: 'NETWORK UPTIME', val: '99.99%', icon: <Zap className="w-4 h-4 text-yellow-500" /> },
            ].map((stat, i) => (
              <div key={i} className="glass p-6 rounded-2xl text-left border-slate-800/50">
                <div className="flex items-center space-x-2 mb-2">
                  {stat.icon}
                  <span className="text-[10px] font-black tracking-widest text-slate-500 uppercase">{stat.label}</span>
                </div>
                <div className="text-2xl font-black text-white">{stat.val}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 bg-slate-950">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter">Engineered for Performance.</h2>
            <p className="text-slate-400 max-w-2xl mx-auto font-medium">We don't just host servers; we provide the ultimate foundation for your community to thrive.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FEATURES.map((f, i) => (
              <div key={i} className="group p-8 glass rounded-3xl border-slate-800/50 hover:border-orange-500/50 transition-all duration-500">
                <div className="w-14 h-14 fire-gradient rounded-2xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform">
                  {f.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{f.title}</h3>
                <p className="text-slate-400 leading-relaxed font-medium">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FireCraftX Preview */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-cyan-900/5 -z-10"></div>
        <div className="container mx-auto px-6">
          <div className="glass p-12 rounded-[3rem] border-cyan-500/20 relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="inline-block py-1 px-4 bg-cyan-500/20 text-cyan-400 text-xs font-black rounded-full mb-6 tracking-widest">MINECRAFT NETWORK</span>
                <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter">Experience <span className="text-cyan-400">FireCraftX S2</span>.</h2>
                <p className="text-slate-400 text-lg mb-8 font-medium leading-relaxed">
                  Join India's most advanced Minecraft Network. From intense Lifesteal battles to relaxing SMP builds, Season 2 brings custom features, weekly events, and a dedicated staff team.
                </p>
                <div className="space-y-4 mb-10">
                  <div className="flex items-center space-x-3 text-white font-bold">
                    <Zap className="w-5 h-5 text-cyan-400" />
                    <span>Lifesteal, Survival & PvP Arenas</span>
                  </div>
                  <div className="flex items-center space-x-3 text-white font-bold">
                    <Shield className="w-5 h-5 text-cyan-400" />
                    <span>Cross-Play (Java & Bedrock)</span>
                  </div>
                  <div className="flex items-center space-x-3 text-white font-bold">
                    <Users className="w-5 h-5 text-cyan-400" />
                    <span>500+ Active Players Daily</span>
                  </div>
                </div>
                <a 
                  href={LIVE_URLS.MC_JOIN}
                  className="inline-flex items-center space-x-3 bg-cyan-600 hover:bg-cyan-500 text-white px-8 py-4 rounded-2xl font-black text-lg shadow-xl neon-cyan transition-all"
                >
                  <span>Start Playing Now</span>
                  <Play className="w-5 h-5 fill-white" />
                </a>
              </div>
              <div className="relative">
                <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-800">
                  <img src="https://picsum.photos/seed/minecraft/800/600" alt="Minecraft Gameplay" className="w-full h-full object-cover" />
                </div>
                {/* Floating Elements */}
                <div className="absolute -top-6 -right-6 glass px-6 py-4 rounded-2xl shadow-2xl border-cyan-500/30 animate-pulse">
                  <span className="text-xs font-black text-slate-400 block mb-1">IP: {LIVE_URLS.MC_IP}</span>
                  <span className="text-cyan-400 font-bold">JOIN 421 PLAYERS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-slate-950/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Loved by Thousands.</h2>
            <p className="text-slate-400">Trusted by gamers and developers globally.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="p-8 glass rounded-3xl border-slate-800 flex flex-col justify-between">
                <p className="text-slate-300 italic mb-8 leading-relaxed font-medium">"{t.content}"</p>
                <div className="flex items-center space-x-4">
                  <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full border-2 border-orange-500" />
                  <div>
                    <h4 className="text-white font-bold">{t.name}</h4>
                    <span className="text-slate-500 text-xs font-bold uppercase">{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="fire-gradient p-12 md:p-20 rounded-[3rem] text-center shadow-2xl neon-orange relative overflow-hidden group">
             <div className="absolute top-0 right-0 p-20 opacity-10 group-hover:scale-110 transition-transform">
               <Flame className="w-64 h-64 text-white" />
             </div>
             <h2 className="text-4xl md:text-7xl font-black text-white mb-8 tracking-tighter">Ready to ignite your server?</h2>
             <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-bold leading-relaxed">
               Join 12,000+ satisfied customers. High performance, zero lag, and instant setup await you at FireNodeX.
             </p>
             <Link to="/hosting" className="inline-block bg-white text-orange-600 px-12 py-5 rounded-2xl text-xl font-black shadow-2xl transition-all hover:scale-105 active:scale-95">
               Launch Your Server Now
             </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;