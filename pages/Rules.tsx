
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Shield, Sword, Heart, Gavel, Users, Info, Star, RefreshCw } from 'lucide-react';

const Rules: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState<string | null>(null);

  const features = [
    { 
      id: 'survival',
      title: 'Custom Survival', 
      icon: <Sword className="w-8 h-8 text-cyan-500" />, 
      desc: 'Experience survival like never before with custom enchants, bosses, and progression systems.',
      relatedRules: ['01', '04']
    },
    { 
      id: 'events',
      title: 'Weekly Events', 
      icon: <Star className="w-8 h-8 text-orange-500" />, 
      desc: 'Build battles, PvP tournaments, and seasonal challenges with real rewards.',
      relatedRules: ['01', '05']
    },
    { 
      id: 'fairplay',
      title: 'Fair Play', 
      icon: <Shield className="w-8 h-8 text-green-500" />, 
      desc: 'Non-pay-to-win environment where skill and dedication matter most.',
      relatedRules: ['02', '03']
    }
  ];

  const rulesList = [
    { 
      num: '01', 
      title: 'Be Respectful', 
      desc: 'Treat all players with kindness. Toxic behavior is not tolerated.' 
    },
    { 
      num: '02', 
      title: 'No Cheating', 
      desc: 'Using hacked clients, exploits, or unfair mods will result in permanent bans.' 
    },
    { 
      num: '03', 
      title: 'Protect Chat', 
      desc: 'Keep chat clean. No spam, excessive swearing, or advertising.' 
    },
    { 
      num: '04', 
      title: 'No Griefing', 
      desc: 'Respect others’ builds. Destroying or stealing from claims is strictly prohibited.' 
    },
    { 
      num: '05', 
      title: 'Follow Staff Instructions', 
      desc: 'Staff decisions are final. If you disagree, open a support ticket.' 
    }
  ];

  const handleFeatureClick = (id: string) => {
    setActiveFeature(prev => prev === id ? null : id);
  };

  const isRuleHighlighted = (num: string) => {
    if (!activeFeature) return false;
    const feature = features.find(f => f.id === activeFeature);
    return feature?.relatedRules.includes(num);
  };

  return (
    <div className="pt-24 pb-32 min-h-screen bg-slate-950">
      {/* SECTION 1 — HERO HEADER */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 bg-[radial-gradient(circle_at_50%_0%,_rgba(6,182,212,0.15),transparent_70%)]"></div>
        <div className="container mx-auto px-6 text-center">
          <div className="inline-flex items-center space-x-3 mb-6 bg-cyan-600/20 text-cyan-400 px-6 py-2 rounded-full font-black text-xs tracking-[0.2em] border border-cyan-500/30 uppercase">
            SEASON 2: REBORN
          </div>
          <h1 className="text-4xl md:text-7xl font-black text-white mb-6 tracking-tighter uppercase">
            FIRECRAFTX <span className="text-cyan-400">SERVER RULES</span>
          </h1>
          <p className="max-w-3xl mx-auto text-slate-400 text-lg md:text-xl font-medium mb-10 leading-relaxed">
            Play fair. Build freely. Respect the community. These rules keep FireCraftX fun for everyone.
          </p>
          <Link to="/firecraftx" className="inline-flex items-center space-x-2 text-slate-500 hover:text-white transition-colors font-bold group">
            <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Server Home</span>
          </Link>
        </div>
      </section>

      {/* SECTION 2 — FEATURE HIGHLIGHTS (INTERACTIVE) */}
      <section className="container mx-auto px-6 mb-24">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl font-black text-white uppercase tracking-widest">Select Mode to View Relevant Rules</h2>
          {activeFeature && (
            <button 
              onClick={() => setActiveFeature(null)}
              className="flex items-center space-x-2 text-slate-500 hover:text-white transition-colors text-xs font-black uppercase tracking-widest"
            >
              <RefreshCw className="w-3 h-3" />
              <span>Reset Highlight</span>
            </button>
          )}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <button 
              key={feature.id} 
              onClick={() => handleFeatureClick(feature.id)}
              className={`text-left p-10 rounded-[2.5rem] border transition-all duration-500 group outline-none ${
                activeFeature === feature.id 
                ? 'glass border-cyan-500 shadow-[0_0_30px_rgba(6,182,212,0.2)] scale-105' 
                : 'glass border-slate-800 hover:border-slate-700'
              }`}
            >
              <div className={`w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center mb-8 border transition-transform ${
                activeFeature === feature.id ? 'border-cyan-500 scale-110' : 'border-slate-800 group-hover:scale-110'
              }`}>
                {feature.icon}
              </div>
              <h3 className={`text-2xl font-black mb-4 transition-colors ${activeFeature === feature.id ? 'text-cyan-400' : 'text-white'}`}>
                {feature.title}
              </h3>
              <p className="text-slate-400 font-medium leading-relaxed">
                {feature.desc}
              </p>
              <div className={`mt-6 flex items-center space-x-2 text-[10px] font-black tracking-widest uppercase transition-opacity ${activeFeature === feature.id ? 'opacity-100 text-cyan-500' : 'opacity-0'}`}>
                <span>Viewing Active Policies</span>
                <ChevronRight className="w-3 h-3" />
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* SECTION 3 — SERVER CODE OF CONDUCT */}
      <section className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-12">
            <div>
              <h2 className="text-4xl font-black text-white mb-4 tracking-tighter uppercase">SERVER <span className="text-cyan-400">CODE OF CONDUCT</span></h2>
              <div className="w-20 h-1.5 fire-gradient rounded-full"></div>
            </div>

            <div className="space-y-4">
              {rulesList.map((rule, i) => {
                const highlighted = isRuleHighlighted(rule.num);
                return (
                  <div 
                    key={i} 
                    className={`flex space-x-6 p-6 rounded-3xl transition-all duration-500 border ${
                      highlighted 
                      ? 'bg-cyan-500/10 border-cyan-500/50 scale-[1.02] shadow-[0_0_20px_rgba(6,182,212,0.1)]' 
                      : 'border-transparent hover:bg-white/5'
                    }`}
                  >
                    <div className={`flex-shrink-0 text-3xl font-black pixel-font transition-colors ${
                      highlighted ? 'text-cyan-400' : 'text-slate-800'
                    }`}>
                      {rule.num}
                    </div>
                    <div>
                      <h4 className={`text-xl font-black mb-2 transition-colors ${
                        highlighted ? 'text-white' : 'text-slate-200'
                      }`}>
                        {rule.title}
                      </h4>
                      <p className={`font-medium leading-relaxed transition-colors ${
                        highlighted ? 'text-slate-300' : 'text-slate-400'
                      }`}>
                        {rule.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* SECTION 4 — COMMUNITY SPOTLIGHT */}
          <div className="lg:sticky lg:top-32">
            <div className="relative rounded-[3rem] overflow-hidden border-4 border-slate-800 shadow-2xl group">
              <img 
                src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop" 
                alt="Gaming Showcase" 
                className="w-full h-[600px] object-cover group-hover:scale-110 transition-transform duration-700 opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-12 left-12 right-12">
                <div className="inline-block px-4 py-1.5 bg-orange-600 text-white text-[10px] font-black tracking-widest rounded-full mb-6 uppercase">
                  COMMUNITY CHOICE
                </div>
                <div className="glass p-8 rounded-3xl border-white/10 backdrop-blur-xl">
                  <p className="text-white text-lg font-bold italic mb-6 leading-relaxed">
                    "Best Minecraft SMP community I've ever played on! The staff is incredibly helpful and the custom features are unlike anything else."
                  </p>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-cyan-600 rounded-full flex items-center justify-center font-black text-white">
                      PX
                    </div>
                    <div>
                      <h5 className="text-white font-black">Player Review</h5>
                      <div className="flex text-orange-500">
                        <Star className="w-3 h-3 fill-orange-500" />
                        <Star className="w-3 h-3 fill-orange-500" />
                        <Star className="w-3 h-3 fill-orange-500" />
                        <Star className="w-3 h-3 fill-orange-500" />
                        <Star className="w-3 h-3 fill-orange-500" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL INFO SECTION */}
      <section className="container mx-auto px-6 mt-32">
        <div className="glass p-12 rounded-[3rem] border-slate-800 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 p-10 opacity-5">
            <Gavel className="w-48 h-48 text-white" />
          </div>
          <h2 className="text-3xl font-black text-white mb-6">Still have questions?</h2>
          <p className="text-slate-400 mb-8 max-w-2xl mx-auto font-medium">
            Our full server wiki is available on Discord, including detailed guides on custom enchants, economy, and land claims.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="#" className="w-full sm:w-auto px-10 py-4 bg-cyan-600 hover:bg-cyan-500 text-white rounded-2xl font-black shadow-xl neon-cyan transition-transform hover:scale-105 active:scale-95">
              Join Discord Wiki
            </a>
            <Link to="/support" className="w-full sm:w-auto px-10 py-4 glass border-slate-700 text-white rounded-2xl font-black transition-transform hover:scale-105 active:scale-95">
              Open Support Ticket
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Rules;
