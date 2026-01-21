import React, { useState, useEffect } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Play, Square, RefreshCcw, Terminal, HardDrive, Cpu, Wifi, Activity, Download, ExternalLink, Shield, Headphones, Users, ChevronRight } from 'lucide-react';
import { LIVE_URLS } from '../constants';

const data = [
  { time: '12:00', cpu: 45, ram: 60 },
  { time: '12:05', cpu: 52, ram: 62 },
  { time: '12:10', cpu: 48, ram: 65 },
  { time: '12:15', cpu: 70, ram: 68 },
  { time: '12:20', cpu: 55, ram: 64 },
  { time: '12:25', cpu: 42, ram: 63 },
  { time: '12:30', cpu: 38, ram: 61 },
];

const ControlPanel: React.FC = () => {
  const [logs, setLogs] = useState<string[]>([]);
  const [status, setStatus] = useState<'online' | 'offline' | 'starting'>('online');

  useEffect(() => {
    setLogs([
      '[12:30:05] [Server thread/INFO]: Starting minecraft server version 1.20.4',
      '[12:30:10] [Server thread/INFO]: Loading properties',
      '[12:30:12] [Server thread/INFO]: Default game type: SURVIVAL',
      '[12:30:15] [Server thread/INFO]: Preparing level "world"',
      '[12:30:45] [Server thread/INFO]: Done (30.142s)! For help, type "help"',
      '[12:31:00] [Server thread/INFO]: Player "ArjunX" joined the game',
      '[12:31:05] [Server thread/INFO]: ArjunX: Hello world!',
    ]);
  }, []);

  return (
    <div className="pt-24 pb-32 min-h-screen bg-slate-950">
      {/* SECTION 1 — HERO PANEL INTRO */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 bg-[radial-gradient(circle_at_50%_0%,_rgba(249,115,22,0.15),transparent_70%)]"></div>
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-7xl font-black text-white mb-6 tracking-tighter uppercase">
            THE MOST POWERFUL <span className="text-orange-500">PANEL</span> IN THE GAME
          </h1>
          <p className="max-w-3xl mx-auto text-slate-400 text-lg md:text-xl font-medium mb-10 leading-relaxed">
            Managing your Minecraft server shouldn't be a chore. Our custom-skinned Pterodactyl panel gives you total control with a sleek, responsive interface.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-20">
            <a 
              href={LIVE_URLS.PANEL} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-10 py-4 fire-gradient rounded-2xl text-white font-black shadow-xl neon-orange flex items-center justify-center space-x-2 transition-transform hover:scale-105"
            >
              <ExternalLink className="w-5 h-5" />
              <span>GO TO CLIENT PANEL</span>
            </a>
            <button disabled className="w-full sm:w-auto px-10 py-4 glass border-slate-700 text-slate-500 cursor-not-allowed rounded-2xl font-black flex items-center justify-center space-x-2 transition-transform">
              <Download className="w-5 h-5" />
              <span>DOWNLOAD PANEL APP</span>
            </button>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {[
              { label: 'UPTIME SLA', val: '12T', icon: <Activity className="w-4 h-4 text-orange-500" /> },
              { label: 'DDOS CAPACITY', val: '15M', icon: <Shield className="w-4 h-4 text-cyan-500" /> },
              { label: 'SUPPORT TICKETS', val: '5K+', icon: <Headphones className="w-4 h-4 text-green-500" /> },
              { label: 'SERVERS HOSTED', val: '5K+', icon: <Users className="w-4 h-4 text-purple-500" /> },
            ].map((stat, i) => (
              <div key={i} className="glass p-6 rounded-2xl border-slate-800/50 text-left">
                <div className="flex items-center space-x-2 mb-2">
                  {stat.icon}
                  <span className="text-[10px] font-black tracking-widest text-slate-500 uppercase">{stat.label}</span>
                </div>
                <div className="text-2xl font-black text-white tracking-tight">{stat.val}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2 — LIVE SERVER DASHBOARD */}
      <section className="container mx-auto px-6 mt-20">
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6 p-8 glass rounded-[2.5rem] border-slate-800">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <span className="px-3 py-1 bg-green-500/20 text-green-500 text-[10px] font-black tracking-widest rounded-full uppercase border border-green-500/30">ONLINE</span>
              <span className="text-slate-500 text-sm font-bold">Server ID: FN-42931</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter">My Survival SMP</h2>
          </div>
          
          <div className="flex items-center space-x-3">
             <button className="flex items-center space-x-2 bg-green-600 hover:bg-green-500 text-white px-8 py-3.5 rounded-xl font-black transition-all shadow-lg shadow-green-900/20">
               <Play className="w-4 h-4 fill-white" />
               <span>Start</span>
             </button>
             <button className="flex items-center space-x-2 bg-slate-800 hover:bg-slate-700 text-white px-8 py-3.5 rounded-xl font-black transition-all">
               <RefreshCcw className="w-4 h-4" />
               <span>Restart</span>
             </button>
             <button className="flex items-center space-x-2 bg-red-600 hover:bg-red-500 text-white px-8 py-3.5 rounded-xl font-black transition-all shadow-lg shadow-red-900/20">
               <Square className="w-4 h-4 fill-white" />
               <span>Stop</span>
             </button>
          </div>
        </div>

        {/* Resource Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {[
            { label: 'CPU USAGE', val: '42%', icon: <Cpu className="w-5 h-5 text-orange-500" />, color: '#f97316' },
            { label: 'RAM USAGE', val: '6.4GB / 8GB', icon: <Activity className="w-5 h-5 text-cyan-500" />, color: '#06b6d4' },
            { label: 'DISK USAGE', val: '12.4GB / 80GB', icon: <HardDrive className="w-5 h-5 text-purple-500" />, color: '#a855f7' },
          ].map((stat, i) => (
            <div key={i} className="glass p-8 rounded-3xl border-slate-800 shadow-xl overflow-hidden relative group">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 transition-transform">
                {stat.icon}
              </div>
              <div className="flex items-center space-x-3 mb-4">
                {stat.icon}
                <span className="text-xs font-black tracking-widest text-slate-500 uppercase">{stat.label}</span>
              </div>
              <div className="text-3xl font-black text-white mb-4">{stat.val}</div>
              <div className="w-full h-2 bg-slate-900 rounded-full overflow-hidden">
                <div 
                  className="h-full rounded-full transition-all duration-1000" 
                  style={{ width: stat.val.split('%')[0] + '%', backgroundColor: stat.color }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Area — Graphs & Console */}
          <div className="lg:col-span-3 space-y-8">
            {/* Live Graph */}
            <div className="glass p-8 rounded-[2.5rem] border-slate-800">
               <h3 className="text-xl font-bold text-white mb-8 flex items-center space-x-3">
                 <Wifi className="w-5 h-5 text-orange-500" />
                 <span>Network & Resource Usage Timeline</span>
               </h3>
               <div className="h-[300px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data}>
                      <defs>
                        <linearGradient id="colorCpu" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#f97316" stopOpacity={0.3}/>
                          <stop offset="95%" stopColor="#f97316" stopOpacity={0}/>
                        </linearGradient>
                        <linearGradient id="colorRam" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.3}/>
                          <stop offset="95%" stopColor="#06b6d4" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                      <XAxis dataKey="time" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                      <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                      <Tooltip 
                        contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '12px' }}
                        itemStyle={{ fontWeight: 'bold' }}
                      />
                      <Area type="monotone" dataKey="cpu" stroke="#f97316" fillOpacity={1} fill="url(#colorCpu)" strokeWidth={3} />
                      <Area type="monotone" dataKey="ram" stroke="#06b6d4" fillOpacity={1} fill="url(#colorRam)" strokeWidth={3} />
                    </AreaChart>
                  </ResponsiveContainer>
               </div>
            </div>

            {/* Server Console */}
            <div className="glass rounded-[2.5rem] border-slate-800 overflow-hidden">
               <div className="px-8 py-5 bg-slate-900/50 border-b border-slate-800 flex items-center justify-between">
                 <div className="flex items-center space-x-3">
                   <Terminal className="w-5 h-5 text-orange-500" />
                   <span className="text-sm font-black text-slate-300 uppercase tracking-widest">Server Console</span>
                 </div>
                 <div className="flex items-center space-x-2">
                   <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                   <span className="text-[10px] font-black text-slate-500">CONNECTED</span>
                 </div>
               </div>
               <div className="p-8 h-[450px] overflow-y-auto pixel-font text-sm space-y-2 bg-slate-950/80">
                 {logs.map((log, i) => (
                   <div key={i} className="text-slate-300">
                     <span className="text-slate-600 mr-3 select-none">{i + 1}</span>
                     {log}
                   </div>
                 ))}
                 <div className="pt-6 flex items-center space-x-4 border-t border-slate-800/50 mt-6">
                   <span className="text-orange-500 font-bold tracking-tighter">&gt;_</span>
                   <input 
                     type="text" 
                     placeholder="Type command here..." 
                     className="bg-transparent w-full text-white outline-none font-bold placeholder:text-slate-700"
                   />
                 </div>
               </div>
            </div>
          </div>

          {/* SECTION 3 — SERVER MANAGEMENT PANEL SIDEBAR */}
          <div className="space-y-8">
            <div className="glass p-8 rounded-[2.5rem] border-slate-800">
               <h4 className="text-white font-black text-xs uppercase tracking-[0.2em] mb-8 pb-4 border-b border-slate-800">Management</h4>
               <ul className="space-y-3">
                 {[
                   'File Manager', 
                   'Databases', 
                   'Backups', 
                   'Users', 
                   'Plugins', 
                   'Firewall', 
                   'Server Settings'
                 ].map((item, i) => (
                   <li key={i}>
                     <button className="w-full flex items-center justify-between p-4 rounded-2xl hover:bg-slate-900 transition-all group">
                       <span className="text-slate-400 group-hover:text-white font-bold tracking-tight transition-colors">{item}</span>
                       <ChevronRight className="w-4 h-4 text-slate-700 group-hover:text-orange-500 transition-colors" />
                     </button>
                   </li>
                 ))}
               </ul>
            </div>
            
            {/* Support Box */}
            <div className="p-8 fire-gradient rounded-[2.5rem] shadow-2xl neon-orange relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform">
                 <Headphones className="w-24 h-24 text-white" />
               </div>
               <h4 className="text-white font-black text-xs uppercase tracking-widest mb-4">Support</h4>
               <p className="text-white/90 text-sm font-bold mb-8 leading-relaxed">
                 Need help with your server setup? Our technical experts are online and ready to assist you.
               </p>
               <a 
                 href={LIVE_URLS.DISCORD}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="w-full py-4 bg-white text-orange-600 rounded-2xl font-black shadow-xl hover:scale-[1.02] transition-transform active:scale-95 flex items-center justify-center"
               >
                 Open Ticket
               </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ControlPanel;