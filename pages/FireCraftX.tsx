import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Copy, Users, Zap, Shield, Sword, Heart, Crown, ChevronRight, Globe, MessageSquare, Flame, Youtube, Instagram } from 'lucide-react';
import { LIVE_URLS } from '../constants';

const FireCraftX: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const serverIp = LIVE_URLS.MC_IP;

  const copyIp = () => {
    navigator.clipboard.writeText(serverIp);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleRankPurchase = (upiLink: string) => {
    // Attempt to open the UPI app
    window.location.href = upiLink;

    // Desktop fallback: copy VPA to clipboard
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (!isMobile) {
      const vpa = "sp12131313@okaxis";
      navigator.clipboard.writeText(vpa);
      // Optional: Since UI changes are forbidden, we rely on the system-level copy action.
    }
  };

  const modes = [
    { title: 'Lifesteal SMP', icon: <Heart className="w-8 h-8 text-red-500" />, desc: 'Elite PvP. Steal hearts by killing players. Survive or lose everything.' },
    { title: 'Crystal PvP', icon: <Sword className="w-8 h-8 text-cyan-500" />, desc: 'The most intense PvP experience. Custom arenas, rankings, and tournaments.' },
    { title: 'Peaceful SMP', icon: <Globe className="w-8 h-8 text-green-500" />, desc: 'A community-driven survival experience. Land claims, player economy, and more.' },
  ];

  const ranks = [
    { 
      name: 'FIRE', 
      color: 'text-orange-500', 
      glowClass: 'rank-glow-orange',
      icon: <Flame className="w-10 h-10" />,
      price: '₹29', 
      desc: 'Custom Prefix, Fly in Lobbies, 2x XP Boost, Basic Gift Keys (Monthly), VIP Support Access (Standard Queue)',
      upiLink: 'upi://pay?pa=sp12131313@okaxis&pn=FireNodeX&am=29&cu=INR'
    },
    { 
      name: 'TITAN', 
      color: 'text-cyan-500', 
      glowClass: 'rank-glow-cyan',
      icon: <Zap className="w-10 h-10" />,
      price: '₹49', 
      desc: 'All Fire perks, Custom Chat Color, Priority Queue, Monthly Gift Crates, VIP Support Access (Fast Queue)',
      upiLink: 'upi://pay?pa=sp12131313@okaxis&pn=FireNodeX&am=49&cu=INR'
    },
    { 
      name: 'PHOENIX', 
      color: 'text-red-500', 
      glowClass: 'rank-glow-red',
      icon: <Crown className="w-10 h-10" />,
      price: '₹79', 
      desc: 'All Titan perks, Monthly Keys, Special Name Tags, Exclusive Cosmetic Effects, VIP Support Access (Instant Queue)',
      upiLink: 'upi://pay?pa=sp12131313@okaxis&pn=FireNodeX&am=79&cu=INR'
    },
  ];

  return (
    <div className="w-full">
      {/* Cinematic Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute top-0 left-0 w-full h-full -z-10">
          <img src="https://picsum.photos/seed/firecraft/1920/1080" alt="Minecraft Background" className="w-full h-full object-cover opacity-30 blur-sm" />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-slate-950 via-transparent to-slate-950"></div>
        </div>

        <div className="container mx-auto px-6 text-center">
          <div className="inline-flex items-center space-x-3 mb-8 bg-cyan-600/20 text-cyan-400 px-6 py-2 rounded-full font-black text-sm tracking-[0.2em] border border-cyan-500/30 uppercase">
            SEASON 2: REBORN
          </div>
          <h1 className="text-6xl md:text-9xl font-black text-white mb-10 tracking-tighter uppercase">FIRECRAFTX <span className="text-cyan-400">S2</span></h1>
          
          <div className="max-w-xl mx-auto glass p-2 rounded-2xl flex items-center justify-between border-slate-700 mb-12 shadow-2xl shadow-cyan-900/10">
            <div className="px-6 flex items-center space-x-3">
              <Globe className="w-5 h-5 text-cyan-500" />
              <span className="text-white font-black tracking-widest text-lg">{serverIp}</span>
            </div>
            <button 
              onClick={copyIp}
              className={`px-8 py-4 rounded-xl font-black transition-all flex items-center space-x-2 ${copied ? 'bg-green-600' : 'bg-cyan-600 hover:bg-cyan-500'} text-white shadow-xl neon-cyan active:scale-95`}
            >
              {copied ? <span>Copied!</span> : <><Copy className="w-4 h-4" /> <span>Copy IP</span></>}
            </button>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a 
              href={LIVE_URLS.DISCORD} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-10 py-5 bg-white text-slate-900 rounded-2xl font-black text-lg flex items-center justify-center space-x-3 transition-transform hover:scale-105 active:scale-95 shadow-2xl"
            >
              <Users className="w-6 h-6" />
              <span>Join Discord</span>
            </a>
            <Link to="/rules" className="w-full sm:w-auto px-10 py-5 glass border-cyan-500/30 text-white rounded-2xl font-black text-lg flex items-center justify-center space-x-3 transition-transform hover:scale-105 active:scale-95 group">
              <span className="group-hover:text-cyan-400 transition-colors">Server Rules & Wiki</span>
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Social Media Share / Links */}
          <div className="flex items-center justify-center space-x-4 mt-16 animate-in fade-in slide-in-from-bottom-5 duration-1000 delay-300">
            <div className="text-slate-500 text-[10px] font-black uppercase tracking-[0.3em] mr-4 hidden md:block">Follow Us</div>
            <a href={LIVE_URLS.YOUTUBE} target="_blank" rel="noopener noreferrer" className="w-12 h-12 glass border-slate-700 rounded-full flex items-center justify-center text-slate-400 hover:text-[#FF0000] hover:border-[#FF0000]/50 transition-all hover:scale-110 active:scale-90 group">
              <Youtube className="w-5 h-5 group-hover:drop-shadow-[0_0_8px_rgba(255,0,0,0.5)]" />
            </a>
            <a href={LIVE_URLS.DISCORD} target="_blank" rel="noopener noreferrer" className="w-12 h-12 glass border-slate-700 rounded-full flex items-center justify-center text-slate-400 hover:text-[#5865F2] hover:border-[#5865F2]/50 transition-all hover:scale-110 active:scale-90 group">
              <MessageSquare className="w-5 h-5 group-hover:drop-shadow-[0_0_8px_rgba(88,101,242,0.5)]" />
            </a>
            <a href={LIVE_URLS.INSTAGRAM} target="_blank" rel="noopener noreferrer" className="w-12 h-12 glass border-slate-700 rounded-full flex items-center justify-center text-slate-400 hover:text-[#E4405F] hover:border-[#E4405F]/50 transition-all hover:scale-110 active:scale-90 group">
              <Instagram className="w-5 h-5 group-hover:drop-shadow-[0_0_8px_rgba(228,64,95,0.5)]" />
            </a>
          </div>
        </div>
      </section>

      {/* Modes */}
      <section className="py-32 bg-slate-950">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter uppercase">Unrivaled <span className="text-cyan-400">Game Modes</span>.</h2>
            <p className="text-slate-400 font-medium">Whether you're a warrior or a builder, we have a place for you.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {modes.map((mode, i) => (
              <div key={i} className="glass p-10 rounded-3xl border-slate-800 text-center hover:border-cyan-500/50 transition-all group">
                <div className="w-20 h-20 mx-auto bg-slate-900 rounded-2xl flex items-center justify-center mb-8 border border-slate-800 group-hover:scale-110 transition-transform shadow-xl">
                  {mode.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-tight">{mode.title}</h3>
                <p className="text-slate-400 leading-relaxed font-medium">{mode.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ranks & Store */}
      <section className="py-32 bg-slate-950 relative">
        <div className="absolute -top-40 right-0 w-96 h-96 bg-cyan-600/10 blur-[150px] -z-10"></div>
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
             <h2 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tight">Support the <span className="text-cyan-400">Network</span>.</h2>
             <p className="text-slate-400 font-medium">Get exclusive perks while helping us keep the lights on.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {ranks.map((rank, i) => (
              <div key={i} className="glass p-10 rounded-[2.5rem] border-slate-800 flex flex-col justify-between hover:scale-105 transition-all duration-500 hover:border-white/10 group">
                <div className="mb-10 text-center">
                  <div className={`mb-8 flex justify-center`}>
                    <div className={`w-24 h-24 bg-slate-900 rounded-[2rem] flex items-center justify-center border border-slate-800 animate-float-rank ${rank.glowClass}`}>
                      <div className={rank.color}>{rank.icon}</div>
                    </div>
                  </div>
                  <div className={`text-xs font-black uppercase tracking-[0.3em] mb-4 ${rank.color}`}>OFFICIAL RANK</div>
                  <h3 className="text-4xl font-black text-white mb-6 tracking-tighter uppercase">{rank.name}</h3>
                  <div className="text-slate-400 text-sm font-medium leading-relaxed mb-6 px-4">{rank.desc}</div>
                  <div className="text-3xl font-black text-white">{rank.price}</div>
                </div>
                <button 
                  onClick={() => handleRankPurchase(rank.upiLink)}
                  className={`w-full py-5 border-2 border-slate-800 hover:border-white rounded-2xl font-black text-white transition-all uppercase tracking-widest text-[10px] active:scale-95 group-hover:fire-gradient group-hover:border-transparent group-hover:shadow-2xl`}
                >
                  View in Store
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community / Socials */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="glass p-12 rounded-[3rem] border-slate-800 overflow-hidden relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-black text-white mb-8 tracking-tighter uppercase">Join Our <span className="text-cyan-400">Community</span></h2>
                <p className="text-slate-400 mb-8 font-medium leading-relaxed text-lg">
                  FireCraftX isn't just a server, it's a family. Join our Discord to participate in events, giveaways, and to stay updated with the latest news.
                </p>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <div className="p-6 glass rounded-2xl border-slate-800 flex items-center space-x-4 flex-1">
                    <MessageSquare className="w-8 h-8 text-cyan-400" />
                    <div>
                      <div className="text-xl text-white font-black">12k+ members</div>
                      <div className="text-slate-500 text-[10px] font-black uppercase tracking-widest">Official Discord</div>
                    </div>
                  </div>
                  <div className="p-6 glass rounded-2xl border-slate-800 flex items-center space-x-4 flex-1">
                    <Users className="w-8 h-8 text-cyan-400" />
                    <div>
                      <div className="text-xl text-white font-black">50k+ players</div>
                      <div className="text-slate-500 text-[10px] font-black uppercase tracking-widest">Registered Network</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                 <img src="https://picsum.photos/seed/mc1/400/400" className="rounded-3xl border-4 border-slate-800 hover:scale-105 transition-transform shadow-2xl" />
                 <img src="https://picsum.photos/seed/mc2/400/400" className="rounded-3xl border-4 border-slate-800 hover:scale-105 transition-transform shadow-2xl" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FireCraftX;