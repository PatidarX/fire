import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Flame, Menu, X, ShoppingCart, User } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { LIVE_URLS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { cart } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Hosting', path: '/hosting' },
    { name: 'FireCraftX S2', path: '/firecraftx' },
    { name: 'Features', path: '/features' },
    { name: 'Support', path: '/support' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2 group">
          <div className="w-10 h-10 fire-gradient rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
            <Flame className="text-white w-6 h-6" />
          </div>
          <span className="text-2xl font-black tracking-tighter text-white">FIRE<span className="text-orange-500">NODE</span>X</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path} 
              className={`text-sm font-semibold transition-colors hover:text-orange-500 ${location.pathname === link.path ? 'text-orange-500' : 'text-slate-300'}`}
            >
              {link.name}
            </Link>
          ))}
          <a 
            href={LIVE_URLS.PANEL} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm font-semibold transition-colors text-slate-300 hover:text-orange-500"
          >
            Control Panel
          </a>
        </div>

        <div className="hidden lg:flex items-center space-x-4">
          <Link to="/cart" className="relative p-2 text-slate-300 hover:text-white transition-colors">
            <ShoppingCart className="w-6 h-6" />
            {cart.length > 0 && (
              <span className="absolute top-0 right-0 w-5 h-5 bg-orange-600 text-[10px] font-bold rounded-full flex items-center justify-center border-2 border-slate-950">
                {cart.length}
              </span>
            )}
          </Link>
          <a 
            href={LIVE_URLS.BILLING}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2.5 rounded-xl font-bold text-sm transition-all flex items-center space-x-2 neon-orange"
          >
            <User className="w-4 h-4" />
            <span>Login</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-white">
          {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full glass border-t border-slate-800 p-6 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path} 
              onClick={() => setIsOpen(false)}
              className="text-lg font-bold text-slate-300 hover:text-orange-500"
            >
              {link.name}
            </Link>
          ))}
          <a href={LIVE_URLS.PANEL} target="_blank" rel="noopener noreferrer" className="text-lg font-bold text-slate-300 hover:text-orange-500">
            Control Panel
          </a>
          <div className="pt-4 flex flex-col space-y-4">
            <Link to="/cart" onClick={() => setIsOpen(false)} className="flex items-center space-x-2 text-slate-300 font-bold">
              <ShoppingCart className="w-6 h-6" />
              <span>Cart ({cart.length})</span>
            </Link>
            <a 
              href={LIVE_URLS.BILLING} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-orange-600 w-full py-3 rounded-xl font-bold text-center text-white"
            >
              Client Login
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;