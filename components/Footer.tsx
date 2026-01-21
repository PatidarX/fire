import React from 'react';
import { Link } from 'react-router-dom';
import { Flame, Twitter, Youtube, Github, Mail, Instagram } from 'lucide-react';
import { LIVE_URLS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 fire-gradient rounded-xl flex items-center justify-center">
                <Flame className="text-white w-6 h-6" />
              </div>
              <span className="text-2xl font-black tracking-tighter text-white">FIRE<span className="text-orange-500">NODE</span>X</span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              Premium high-performance hosting services built for gamers, developers, and startups. Powering the next generation of online communities.
            </p>
            <div className="flex space-x-4">
              <a href="#" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-orange-500 transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href={LIVE_URLS.YOUTUBE} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-slate-800 flex items-center justify-center text-slate-400 hover:text-[#FF0000] hover:border-[#FF0000]/50 transition-all">
                <Youtube className="w-5 h-5" />
              </a>
              <a href={LIVE_URLS.INSTAGRAM} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-slate-800 flex items-center justify-center text-slate-400 hover:text-[#E4405F] hover:border-[#E4405F]/50 transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-orange-500 transition-all">
                <Github className="w-5 h-5" />
              </a>
              <a href={LIVE_URLS.SUPPORT_EMAIL} className="w-10 h-10 rounded-full border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-orange-500 transition-all">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Hosting */}
          <div className="space-y-6">
            <h4 className="text-white font-bold uppercase tracking-widest text-xs">Services</h4>
            <ul className="space-y-4 text-sm text-slate-400 font-medium">
              <li><Link to="/hosting" className="hover:text-orange-500 transition-colors">Minecraft Hosting</Link></li>
              <li><Link to="/hosting" className="hover:text-orange-500 transition-colors">Game Servers</Link></li>
              <li><Link to="/hosting" className="hover:text-orange-500 transition-colors">VPS Hosting</Link></li>
              <li><Link to="/hosting" className="hover:text-orange-500 transition-colors">Dedicated Nodes</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-6">
            <h4 className="text-white font-bold uppercase tracking-widest text-xs">Company</h4>
            <ul className="space-y-4 text-sm text-slate-400 font-medium">
              <li><Link to="/features" className="hover:text-orange-500 transition-colors">Why FireNodeX?</Link></li>
              <li><Link to="/support" className="hover:text-orange-500 transition-colors">Contact Support</Link></li>
              <li><Link to="/kb" className="hover:text-orange-500 transition-colors">Knowledge Base</Link></li>
              <li><Link to="/privacy" className="hover:text-orange-500 transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-6">
            <h4 className="text-white font-bold uppercase tracking-widest text-xs">Community</h4>
            <ul className="space-y-4 text-sm text-slate-400 font-medium">
              <li><Link to="/firecraftx" className="hover:text-cyan-400 transition-colors">FireCraftX S2</Link></li>
              <li><a href={LIVE_URLS.DISCORD} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">Join Discord</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Staff Applications</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Giveaways</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 font-bold uppercase tracking-widest">
          <p>© 2024 FIRENODEX. ALL RIGHTS RESERVED.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/terms" className="hover:text-white">Terms</Link>
            <Link to="/privacy" className="hover:text-white">Cookies</Link>
            <Link to="/sla" className="hover:text-white">SLA</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;