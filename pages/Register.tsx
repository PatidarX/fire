import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserPlus, Mail, Lock, User, ShieldCheck, Loader2, AlertCircle } from 'lucide-react';

const Register: React.FC = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    
    setLoading(true);
    setError('');

    // Mocking API call
    setTimeout(() => {
      setLoading(false);
      navigate('/dashboard');
    }, 2000);
  };

  return (
    <div className="pt-40 pb-32 min-h-screen bg-slate-950 flex items-center justify-center px-6">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 bg-[radial-gradient(circle_at_50%_20%,_rgba(6,182,212,0.1),transparent_70%)]"></div>
      
      <div className="w-full max-w-lg">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-600 rounded-2xl mb-6 shadow-2xl">
            <UserPlus className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-black text-white tracking-tighter uppercase mb-2">Create Account</h1>
          <p className="text-slate-400 font-medium">Join thousands of players on the FireNodeX network</p>
        </div>

        <div className="glass p-8 md:p-10 rounded-[2.5rem] border-slate-800 shadow-2xl">
          {error && (
            <div className="mb-6 p-4 bg-red-500/10 border border-red-500/50 rounded-xl flex items-center space-x-3 text-red-500 text-sm font-bold">
              <AlertCircle className="w-5 h-5" />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleRegister} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-slate-500 text-xs font-black uppercase tracking-widest mb-2 ml-1">Username</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                  <input 
                    required
                    type="text" 
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl py-4 pl-12 pr-5 text-white font-bold outline-none focus:border-cyan-500 transition-colors" 
                    placeholder="ArjunX"
                    onChange={(e) => setFormData({...formData, username: e.target.value})}
                  />
                </div>
              </div>
              <div>
                <label className="block text-slate-500 text-xs font-black uppercase tracking-widest mb-2 ml-1">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                  <input 
                    required
                    type="email" 
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl py-4 pl-12 pr-5 text-white font-bold outline-none focus:border-cyan-500 transition-colors" 
                    placeholder="name@email.com"
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-slate-500 text-xs font-black uppercase tracking-widest mb-2 ml-1">Password</label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                  <input 
                    required
                    type="password" 
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl py-4 pl-12 pr-5 text-white font-bold outline-none focus:border-cyan-500 transition-colors" 
                    placeholder="••••••••"
                    onChange={(e) => setFormData({...formData, password: e.target.value})}
                  />
                </div>
              </div>
              <div>
                <label className="block text-slate-500 text-xs font-black uppercase tracking-widest mb-2 ml-1">Confirm Password</label>
                <div className="relative">
                  <ShieldCheck className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                  <input 
                    required
                    type="password" 
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl py-4 pl-12 pr-5 text-white font-bold outline-none focus:border-cyan-500 transition-colors" 
                    placeholder="••••••••"
                    onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                  />
                </div>
              </div>
            </div>

            <div className="flex items-start space-x-3 mb-4">
              <input required type="checkbox" className="mt-1 w-4 h-4 rounded bg-slate-900 border-slate-800 text-cyan-600 focus:ring-cyan-500" />
              <label className="text-xs text-slate-500 font-medium leading-relaxed">
                I agree to the FireNodeX <Link to="/terms" className="text-cyan-500 font-bold">Terms of Service</Link> and <Link to="/privacy" className="text-cyan-500 font-bold">Privacy Policy</Link>.
              </label>
            </div>

            <button 
              disabled={loading}
              type="submit" 
              className="w-full py-4 bg-cyan-600 hover:bg-cyan-500 rounded-xl text-lg font-black text-white shadow-xl neon-cyan flex items-center justify-center space-x-2 transition-transform active:scale-95 disabled:opacity-50"
            >
              {loading ? <Loader2 className="w-6 h-6 animate-spin" /> : <span>Create Account</span>}
            </button>
          </form>

          <div className="mt-8 pt-8 border-t border-slate-800 text-center">
            <p className="text-slate-400 text-sm font-medium">
              Already have an account? <Link to="/login" className="text-cyan-500 font-bold hover:text-cyan-400">Log in here</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;