
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Zap, 
  Settings, 
  Cpu, 
  Shield, 
  Database, 
  Globe, 
  Terminal, 
  FileCode, 
  ShoppingBag, 
  Layout, 
  Activity, 
  HardDrive, 
  Lock, 
  Github, 
  Layers, 
  ChevronRight,
  Server,
  CloudLightning,
  Monitor,
  // Added Users to fix "Cannot find name 'Users'" error
  Users
} from 'lucide-react';

const Features: React.FC = () => {
  const coreFeatures = [
    {
      title: 'Smart Deployment Engine',
      icon: <CloudLightning className="w-8 h-8 text-orange-500" />,
      desc: 'Provision servers in under 60 seconds with automated node selection, region optimization, and instant game template installs.'
    },
    {
      title: 'Advanced Control Panel',
      icon: <Layout className="w-8 h-8 text-cyan-500" />,
      desc: 'Custom-skinned Pterodactyl panel with real-time console, file manager, database tools, and one-click plugin/mod installer.'
    },
    {
      title: 'Performance Optimizer',
      icon: <Activity className="w-8 h-8 text-emerald-500" />,
      desc: 'Auto-tuned JVM profiles, CPU priority management, and memory optimization for high player counts and modded servers.'
    },
    {
      title: 'Enterprise DDoS Shield',
      icon: <Shield className="w-8 h-8 text-red-500" />,
      desc: 'Multi-layer attack mitigation with live traffic filtering and network-level protection up to 16TB capacity.'
    },
    {
      title: 'Backup & Recovery System',
      icon: <Database className="w-8 h-8 text-purple-500" />,
      desc: 'On-demand and scheduled backups with one-click restore and offsite snapshot storage.'
    },
    {
      title: 'Multi-Location Hosting',
      icon: <Globe className="w-8 h-8 text-blue-500" />,
      desc: 'Deploy servers across India, Europe, and North America with low-latency routing and global player optimization.'
    }
  ];

  const techSpecs = [
    { label: 'CPU', val: 'Ryzen 9 5950X / 7950X Nodes', icon: <Cpu className="w-5 h-5" /> },
    { label: 'Storage', val: 'NVMe Gen4 SSD Arrays', icon: <HardDrive className="w-5 h-5" /> },
    { label: 'Memory', val: 'DDR4 / DDR5 ECC RAM', icon: <Zap className="w-5 h-5" /> },
    { label: 'Network', val: '1Gbps+ Uplink, Low-Latency', icon: <Globe className="w-5 h-5" /> },
    { label: 'Security', val: 'Enterprise DDoS Protection', icon: <Lock className="w-5 h-5" /> },
    { label: 'Uptime', val: '99.99% SLA Guarantee', icon: <Shield className="w-5 h-5" /> },
  ];

  return (
    <div className="bg-slate-950 text-white min-h-screen pt-20">
      {/* SECTION 1 — FEATURES HERO */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 bg-[radial-gradient(circle_at_50%_0%,_rgba(249,115,22,0.1),transparent_70%)]"></div>
        <div className="container mx-auto px-6 text-center">
          <div className="inline-flex items-center space-x-2 bg-orange-600/10 text-orange-500 px-4 py-1.5 rounded-full text-xs font-black tracking-widest mb-6 border border-orange-500/20 uppercase">
            Platform Capabilities
          </div>
          <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter uppercase leading-none">
            FireNodeX <span className="text-transparent bg-clip-text fire-gradient">Platform Features</span>
          </h1>
          <p className="max-w-3xl mx-auto text-slate-400 text-lg md:text-xl font-medium mb-12 leading-relaxed">
            Everything you need to build, scale, and manage high-performance Minecraft and game servers — from one powerful control panel.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link to="/dashboard" className="w-full sm:w-auto px-10 py-5 fire-gradient rounded-[1.25rem] font-black shadow-xl neon-orange hover:scale-105 transition-transform active:scale-95 flex items-center justify-center space-x-2">
              <Monitor className="w-5 h-5" />
              <span>EXPLORE CONTROL PANEL</span>
            </Link>
            <Link to="/plans" className="w-full sm:w-auto px-10 py-5 glass border-white/10 rounded-[1.25rem] font-black hover:bg-slate-900 transition-all flex items-center justify-center space-x-2">
              <span>VIEW HOSTING PLANS</span>
              <ChevronRight className="w-5 h-5 text-orange-500" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 2 — CORE PLATFORM FEATURES (GRID OF 6) */}
      <section className="py-20 container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coreFeatures.map((f, i) => (
            <div key={i} className="glass p-10 rounded-[2.5rem] border-white/5 hover:border-white/10 transition-all group relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                {f.icon}
              </div>
              <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center mb-8 border border-white/5 shadow-xl group-hover:scale-110 transition-transform">
                {f.icon}
              </div>
              <h3 className="text-2xl font-black text-white mb-4 tracking-tight uppercase">{f.title}</h3>
              <p className="text-slate-400 leading-relaxed font-medium">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3 — PANEL TOOLS & AUTOMATION */}
      <section className="py-32 bg-slate-900/20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 text-orange-500 text-xs font-black uppercase tracking-widest mb-6">
                <Settings className="w-4 h-4" />
                <span>Ecosystem Control</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter uppercase leading-tight">
                Powerful Tools,<br /> <span className="text-orange-500">Zero Hassle</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  'Real-time Console & Live Logs',
                  'File Manager & SFTP Access',
                  'Plugin & Mod Marketplace',
                  'MySQL Database Manager',
                  'Automated Backups & Schedules',
                  'User & Sub-User Permissions',
                  'Firewall & IP Access Rules',
                  'Resource Usage Graphs'
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-3 text-slate-300 font-bold group">
                    <div className="w-2 h-2 rounded-full bg-orange-600 shadow-[0_0_8px_#f97316]"></div>
                    <span className="group-hover:text-white transition-colors">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-orange-600/10 blur-[120px] rounded-full"></div>
              <div className="glass rounded-[3rem] border-white/10 overflow-hidden shadow-2xl relative">
                <div className="bg-slate-900/80 p-6 border-b border-white/5 flex items-center justify-between">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                  </div>
                  <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest">FIRE-CONTROL-V2.0</div>
                </div>
                <div className="p-8 space-y-6">
                  <div className="h-40 bg-slate-950/80 rounded-2xl border border-white/5 p-4 font-mono text-xs text-slate-400 space-y-1">
                    <p className="text-green-500">[14:02:11] Server marked as Online</p>
                    <p>[14:02:12] Auto-tuning memory profiles...</p>
                    <p>[14:02:15] Applying DDoS filtering layers...</p>
                    <p className="text-cyan-500">[14:02:20] Ready for players.</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="h-20 bg-slate-900 rounded-xl p-4 flex flex-col justify-center">
                      <div className="text-[10px] text-slate-500 font-black uppercase mb-1">CPU Load</div>
                      <div className="text-xl font-black text-orange-500">24.2%</div>
                    </div>
                    <div className="h-20 bg-slate-900 rounded-xl p-4 flex flex-col justify-center">
                      <div className="text-[10px] text-slate-500 font-black uppercase mb-1">RAM Util</div>
                      <div className="text-xl font-black text-cyan-500">6.2 / 12GB</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — PERFORMANCE STACK */}
      <section className="py-32 container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter uppercase">Built for Serious <span className="text-orange-500">Performance</span></h2>
          <p className="text-slate-400 font-medium">No compromises. We only use elite-tier hardware to power our nodes.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techSpecs.map((spec, i) => (
            <div key={i} className="glass p-8 rounded-[2rem] border-white/5 flex items-center space-x-6 hover:bg-slate-900/40 transition-colors">
              <div className="w-14 h-14 bg-orange-600/10 rounded-2xl flex items-center justify-center text-orange-500 border border-orange-500/20">
                {spec.icon}
              </div>
              <div>
                <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">{spec.label}</div>
                <div className="text-lg font-black text-white">{spec.val}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 5 — DEVELOPER & COMMUNITY FEATURES */}
      <section className="py-32 bg-slate-900/10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight uppercase leading-none">Developer & <span className="text-cyan-400">Community Tools</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'API Access', icon: <Terminal />, desc: 'Fully RESTful API to automate server management, deployment, and billing.' },
              { title: 'Discord Webhooks', icon: <Monitor />, desc: 'Receive real-time notifications for server status, player logs, and backups.' },
              { title: 'GitHub Integration', icon: <Github />, desc: 'Automatically deploy new code or config changes from your repos.' },
              { title: 'Geyser Crossplay', icon: <Layers />, desc: 'Support for both Java and Bedrock players seamlessly on one node.' },
              { title: 'Custom Domains', icon: <Globe />, desc: 'Point your own domain or use our free subdomains (yourname.firenode.in).' },
              { title: 'Sub-User Access', icon: <Users />, desc: 'Collaborate with your team with granular permission control for each user.' },
            ].map((f, i) => (
              <div key={i} className="p-8 border border-white/5 rounded-[2.5rem] bg-slate-950/50 hover:border-cyan-500/30 transition-all">
                <div className="text-cyan-400 mb-6 scale-125 origin-left">{f.icon}</div>
                <h4 className="text-xl font-black text-white mb-3 uppercase">{f.title}</h4>
                <p className="text-slate-500 text-sm font-medium leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 — TRUST & SCALE */}
      <section className="py-32 border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { label: 'SERVERS DEPLOYED', val: '12,000+', icon: <Server className="text-orange-500" /> },
              { label: 'ACTIVE PLAYERS', val: '45,000+', icon: <Users className="text-cyan-500" /> },
              { label: 'GLOBAL NODES', val: '14+', icon: <Globe className="text-emerald-500" /> },
              { label: 'RESPONSE TIME', val: '< 5 MIN', icon: <Zap className="text-yellow-500" /> },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="flex justify-center mb-4 opacity-50">{stat.icon}</div>
                <div className="text-3xl md:text-5xl font-black text-white mb-2 tracking-tighter">{stat.val}</div>
                <div className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7 — CTA */}
      <section className="py-40">
        <div className="container mx-auto px-6">
          <div className="fire-gradient p-12 md:p-24 rounded-[4rem] text-center shadow-2xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <h2 className="text-4xl md:text-7xl font-black text-white mb-8 tracking-tighter uppercase leading-none">
              Ready to Build on <br /> FireNodeX?
            </h2>
            <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-bold leading-relaxed">
              Experience the pinnacle of game server hosting. Fast deployment, elite hardware, and unmatched control.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link to="/plans" className="w-full sm:w-auto px-12 py-5 bg-white text-orange-600 rounded-[1.5rem] text-xl font-black shadow-2xl hover:scale-105 transition-transform active:scale-95">
                Launch Your Server
              </Link>
              <Link to="/firecraftx" className="w-full sm:w-auto px-12 py-5 glass border-white/20 text-white rounded-[1.5rem] text-xl font-black hover:bg-white/10 transition-all">
                Join FireCraftX Network
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
