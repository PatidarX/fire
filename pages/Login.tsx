import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LogIn, Mail, Lock, AlertCircle, Loader2 } from 'lucide-react';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // This would be your API call: const response = await fetch('/api/login', ...)
    setTimeout(() => {
      setLoading(false);
      // Mocking successful login
      if (email === 'admin@firenodex.online') {
        localStorage.setItem('userToken', 'mock-admin-jwt');
        navigate('/admin');
      } else {
        localStorage.setItem('userToken', 'mock-user-jwt');
        navigate('/dashboard');
      }
    }, 1500);
  };

  return (
    <div className="pt-40 pb-32 min-h-screen bg-slate-950 flex items-center justify-center px-6">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 bg-[radial-gradient(circle_at_50%_20%,_rgba(249,115,22,0.15),transparent_70%)]"></div>
      
      <div className="w-full max-w-md">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 fire-gradient rounded-2xl mb-6 shadow-2xl">
            <LogIn className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-black text-white tracking-tighter uppercase mb-2">Welcome Back</h1>
          <p className="text-slate-400 font-medium">Log in to manage your FireNodeX servers</p>
        </div>

        <div className="glass p-8 rounded-[2.5rem] border-slate-800 shadow-2xl">
          {error && (
            <div className="mb-6 p-4 bg-red-500/10 border border-red-500/50 rounded-xl flex items-center space-x-3 text-red-500 text-sm font-bold">
              <AlertCircle className="w-5 h-5" />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-slate-500 text-xs font-black uppercase tracking-widest mb-2 ml-1">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                <input 
                  required
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl py-4 pl-12 pr-5 text-white font-bold outline-none focus:border-orange-500 transition-colors" 
                  placeholder="name@example.com"
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-2 ml-1">
                <label className="text-slate-500 text-xs font-black uppercase tracking-widest">Password</label>
                <a href="#" className="text-xs font-black text-orange-500 hover:text-orange-400 transition-colors">Forgot?</a>
              </div>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                <input 
                  required
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl py-4 pl-12 pr-5 text-white font-bold outline-none focus:border-orange-500 transition-colors" 
                  placeholder="••••••••"
                />
              </div>
            </div>

            <button 
              disabled={loading}
              type="submit" 
              className="w-full py-4 fire-gradient rounded-xl text-lg font-black text-white shadow-xl neon-orange flex items-center justify-center space-x-2 transition-transform active:scale-95 disabled:opacity-50"
            >
              {loading ? <Loader2 className="w-6 h-6 animate-spin" /> : <span>Login to Dashboard</span>}
            </button>
          </form>

          <div className="mt-8 pt-8 border-t border-slate-800 text-center">
            <p className="text-slate-400 text-sm font-medium">
              Don't have an account? <Link to="/register" className="text-orange-500 font-bold hover:text-orange-400">Create one now</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;