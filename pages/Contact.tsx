
import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, LifeBuoy, Mail, Headphones, Send, ChevronRight, ShieldCheck, Zap, MessageCircle, X, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { LIVE_URLS } from '../constants';

interface ChatMessage {
  id: number;
  text: string;
  sender: 'admin' | 'user';
  timestamp: string;
}

const Contact: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState('');
  const chatEndRef = useRef<HTMLDivElement>(null);

  // Inquiry Form State
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: 'Sales Inquiry',
    message: '',
    honeypot: '' 
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isChatOpen) {
      scrollToBottom();
      if (chatMessages.length === 0) {
        setChatMessages([{
          id: 1,
          text: "Welcome to FireNodeX Live Support. How can we help you today?",
          sender: 'admin',
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }]);
      }
    }
  }, [chatMessages, isChatOpen]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMsg: ChatMessage = {
      id: Date.now(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setChatMessages(prev => [...prev, userMsg]);
    setInputValue('');

    setTimeout(() => {
      setChatMessages(prev => [...prev, {
        id: Date.now() + 1,
        text: "An agent has been notified. We usually reply within 5 minutes.",
        sender: 'admin',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }]);
    }, 1500);
  };

  const handleInquirySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formState.honeypot) return; // Spam check
    
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    // Simulation of a production endpoint for demonstration
    try {
      // For real implementation: await fetch('/api/inquiry', { ... });
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const success = true; // In a real app, check response.ok

      if (success) {
        setSubmitStatus('success');
        setFormState({ name: '', email: '', subject: 'Sales Inquiry', message: '', honeypot: '' });
      } else {
        setSubmitStatus('error');
        setErrorMessage('Failed to send message. Please try again later.');
      }
    } catch (err) {
      setSubmitStatus('error');
      setErrorMessage('Network error. Please check your connection or try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-24 pb-32 min-h-screen bg-slate-950">
      <section className="relative py-20 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 bg-[radial-gradient(circle_at_50%_0%,_rgba(249,115,22,0.15),transparent_70%)]"></div>
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-7xl font-black text-white mb-6 tracking-tighter uppercase">
            FOR GAMERS, BY <span className="text-orange-500">GAMERS</span>.
          </h1>
          <p className="max-w-3xl mx-auto text-slate-400 text-lg md:text-xl font-medium mb-12">
            24/7 technical assistance and premium hosting support.
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {[
              { label: 'LIVE SUPPORT', val: '24/7', icon: <Headphones className="w-4 h-4 text-orange-500" /> },
              { label: 'TICKETS RESOLVED', val: '5K+', icon: <LifeBuoy className="w-4 h-4 text-cyan-500" /> },
              { label: 'RESPONSE SUCCESS', val: '99.9%', icon: <Zap className="w-4 h-4 text-green-500" /> },
              { label: 'STAFF ONLINE', val: 'Active', icon: <ShieldCheck className="w-4 h-4 text-purple-500" /> },
            ].map((stat, i) => (
              <div key={i} className="glass p-6 rounded-2xl border-slate-800/50 text-left">
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

      <section className="container mx-auto px-6 max-w-4xl mt-12">
        <div className="glass p-8 md:p-12 rounded-[3rem] border-slate-800 relative">
          <div className="flex items-center space-x-4 mb-10">
            <div className="w-12 h-12 fire-gradient rounded-xl flex items-center justify-center text-white">
              <Mail className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-black text-white tracking-tighter">Official Inquiry</h2>
          </div>

          {submitStatus === 'success' && (
            <div className="mb-8 p-6 bg-green-500/10 border border-green-500/50 rounded-2xl flex items-center space-x-4 text-green-500 animate-in fade-in slide-in-from-top-2">
              <CheckCircle2 className="w-8 h-8" />
              <p className="font-bold">Message sent! We'll reply to your email shortly.</p>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="mb-8 p-6 bg-red-500/10 border border-red-500/50 rounded-2xl flex items-center space-x-4 text-red-500 animate-in fade-in slide-in-from-top-2">
              <AlertCircle className="w-8 h-8" />
              <p className="font-bold">{errorMessage}</p>
            </div>
          )}

          <form onSubmit={handleInquirySubmit} className="space-y-6">
            <input type="text" className="hidden" value={formState.honeypot} onChange={e => setFormState({...formState, honeypot: e.target.value})} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input 
                required 
                className="bg-slate-950 border border-slate-800 rounded-xl py-4 px-5 text-white outline-none focus:border-orange-500 transition-colors" 
                placeholder="Full Name" 
                value={formState.name}
                onChange={e => setFormState({...formState, name: e.target.value})}
              />
              <input 
                required 
                type="email" 
                className="bg-slate-950 border border-slate-800 rounded-xl py-4 px-5 text-white outline-none focus:border-orange-500 transition-colors" 
                placeholder="Email Address"
                value={formState.email}
                onChange={e => setFormState({...formState, email: e.target.value})}
              />
            </div>
            <textarea 
              required 
              rows={4} 
              className="w-full bg-slate-950 border border-slate-800 rounded-xl py-4 px-5 text-white outline-none focus:border-orange-500 transition-colors" 
              placeholder="Your Message"
              value={formState.message}
              onChange={e => setFormState({...formState, message: e.target.value})}
            ></textarea>
            <button disabled={isSubmitting} className="w-full py-5 fire-gradient rounded-2xl text-xl font-black text-white shadow-xl flex items-center justify-center space-x-2 active:scale-95 transition-transform disabled:opacity-50">
              {isSubmitting ? <Loader2 className="animate-spin" /> : <span>Send Inquiry</span>}
            </button>
          </form>
        </div>
      </section>

      {/* Persistent Live Chat Trigger */}
      <button 
        onClick={() => setIsChatOpen(true)}
        className="fixed bottom-8 right-8 w-16 h-16 fire-gradient rounded-full shadow-2xl flex items-center justify-center text-white z-50 hover:scale-110 transition-all"
      >
        <MessageCircle className="w-8 h-8" />
      </button>

      {/* Chat Window */}
      {isChatOpen && (
        <div className="fixed bottom-6 right-6 w-[350px] sm:w-[400px] h-[550px] glass rounded-[2.5rem] border-slate-700 shadow-2xl z-[100] flex flex-col overflow-hidden animate-in slide-in-from-bottom-10">
          <div className="p-6 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 fire-gradient rounded-full flex items-center justify-center text-white">
                <Headphones className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-white font-black text-sm">FireNode Support</h4>
                <div className="text-[10px] text-green-500 font-bold tracking-widest uppercase">Live Help</div>
              </div>
            </div>
            <button onClick={() => setIsChatOpen(false)} className="text-slate-500 hover:text-white"><X /></button>
          </div>
          <div className="flex-grow p-6 overflow-y-auto space-y-4 bg-slate-950/20">
            {chatMessages.map(msg => (
              <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 rounded-2xl text-sm ${msg.sender === 'user' ? 'bg-orange-600 text-white' : 'bg-slate-900 text-slate-300'}`}>
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>
          <form onSubmit={handleSendMessage} className="p-4 bg-slate-900/50 border-t border-slate-800 flex items-center space-x-2">
            <input 
              className="flex-grow bg-slate-950 border border-slate-800 rounded-xl py-3 px-4 text-white outline-none focus:border-orange-500" 
              placeholder="Type your message..."
              value={inputValue}
              onChange={e => setInputValue(e.target.value)}
            />
            <button className="p-3 fire-gradient rounded-xl text-white"><Send className="w-5 h-5" /></button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Contact;
