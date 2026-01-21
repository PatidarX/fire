
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CreditCard, Wallet, Smartphone, ShieldCheck, CheckCircle2, Loader2, XCircle } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Checkout: React.FC = () => {
  const { total, clearCart } = useCart();
  const [step, setStep] = useState<'form' | 'processing' | 'success' | 'failed'>('form');
  const [paymentMethod, setPaymentMethod] = useState('card');
  const navigate = useNavigate();

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('processing');
    // Simulate payment API call
    setTimeout(() => {
      const isSuccess = Math.random() > 0.1; // 90% success rate
      if (isSuccess) {
        setStep('success');
        clearCart();
      } else {
        setStep('failed');
      }
    }, 3000);
  };

  if (step === 'processing') {
    return (
      <div className="pt-40 pb-40 flex flex-col items-center justify-center text-center px-6 min-h-screen">
        <Loader2 className="w-20 h-20 text-orange-500 animate-spin mb-8" />
        <h1 className="text-4xl font-black text-white mb-6 tracking-tighter">Securely Processing Payment</h1>
        <p className="text-slate-400 font-medium max-w-sm">Please do not refresh the page. We are finalizing your order and setting up your server nodes...</p>
      </div>
    );
  }

  if (step === 'success') {
    return (
      <div className="pt-40 pb-40 flex flex-col items-center justify-center text-center px-6 min-h-screen">
        <div className="w-24 h-24 bg-green-500/20 rounded-full flex items-center justify-center mb-8 border border-green-500">
          <CheckCircle2 className="w-12 h-12 text-green-500" />
        </div>
        <h1 className="text-5xl font-black text-white mb-6 tracking-tighter">Order Confirmed!</h1>
        <p className="text-slate-400 font-medium mb-12 max-w-lg">Thank you for choosing FireNodeX. Your server is being deployed. You will receive an email with login credentials shortly.</p>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <button 
            onClick={() => navigate('/dashboard')}
            className="px-10 py-4 fire-gradient rounded-2xl text-white font-black shadow-xl neon-orange"
          >
            Go to Dashboard
          </button>
          <button 
            onClick={() => navigate('/')}
            className="px-10 py-4 glass border-slate-700 text-white rounded-2xl font-black"
          >
            Return Home
          </button>
        </div>
      </div>
    );
  }

  if (step === 'failed') {
    return (
      <div className="pt-40 pb-40 flex flex-col items-center justify-center text-center px-6 min-h-screen">
        <div className="w-24 h-24 bg-red-500/20 rounded-full flex items-center justify-center mb-8 border border-red-500">
          <XCircle className="w-12 h-12 text-red-500" />
        </div>
        <h1 className="text-5xl font-black text-white mb-6 tracking-tighter">Payment Failed</h1>
        <p className="text-slate-400 font-medium mb-12 max-w-lg">Something went wrong while processing your payment. Please check your details or try a different payment method.</p>
        <button 
          onClick={() => setStep('form')}
          className="px-10 py-4 fire-gradient rounded-2xl text-white font-black shadow-xl neon-orange"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-32 min-h-screen">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
          <div className="lg:col-span-3 space-y-12">
            <h1 className="text-4xl md:text-5xl font-black text-white tracking-tighter">Checkout</h1>
            
            <form onSubmit={handlePlaceOrder} className="space-y-8">
              {/* Billing Info */}
              <div className="glass p-8 rounded-3xl border-slate-800">
                <h3 className="text-xl font-bold text-white mb-8 flex items-center space-x-3">
                  <span className="w-8 h-8 rounded-full bg-orange-600 flex items-center justify-center text-sm">1</span>
                  <span>Personal Details</span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-slate-500 text-xs font-black uppercase tracking-widest mb-2 ml-1">Full Name</label>
                    <input required type="text" className="w-full bg-slate-950 border border-slate-800 rounded-xl py-4 px-5 text-white font-bold outline-none focus:border-orange-500 transition-colors" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-slate-500 text-xs font-black uppercase tracking-widest mb-2 ml-1">Email Address</label>
                    <input required type="email" className="w-full bg-slate-950 border border-slate-800 rounded-xl py-4 px-5 text-white font-bold outline-none focus:border-orange-500 transition-colors" placeholder="john@example.com" />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-slate-500 text-xs font-black uppercase tracking-widest mb-2 ml-1">Address Line</label>
                    <input required type="text" className="w-full bg-slate-950 border border-slate-800 rounded-xl py-4 px-5 text-white font-bold outline-none focus:border-orange-500 transition-colors" placeholder="123 Node Street, Mumbai" />
                  </div>
                </div>
              </div>

              {/* Payment Method */}
              <div className="glass p-8 rounded-3xl border-slate-800">
                <h3 className="text-xl font-bold text-white mb-8 flex items-center space-x-3">
                  <span className="w-8 h-8 rounded-full bg-orange-600 flex items-center justify-center text-sm">2</span>
                  <span>Payment Method</span>
                </h3>
                <div className="space-y-4">
                  {[
                    { id: 'card', name: 'Credit / Debit Card', icon: <CreditCard className="w-5 h-5" /> },
                    { id: 'upi', name: 'UPI (India Only)', icon: <Smartphone className="w-5 h-5" /> },
                    { id: 'wallet', name: 'Crypto / Digital Wallets', icon: <Wallet className="w-5 h-5" /> },
                  ].map((method) => (
                    <button 
                      key={method.id}
                      type="button"
                      onClick={() => setPaymentMethod(method.id)}
                      className={`w-full flex items-center justify-between p-6 rounded-2xl border-2 transition-all ${paymentMethod === method.id ? 'border-orange-500 bg-orange-500/10' : 'border-slate-800 bg-slate-900/50'}`}
                    >
                      <div className="flex items-center space-x-4">
                        <div className={`p-3 rounded-xl ${paymentMethod === method.id ? 'bg-orange-600 text-white' : 'bg-slate-800 text-slate-400'}`}>
                          {method.icon}
                        </div>
                        <span className="font-bold text-white">{method.name}</span>
                      </div>
                      <div className={`w-6 h-6 rounded-full border-2 ${paymentMethod === method.id ? 'border-orange-500 flex items-center justify-center' : 'border-slate-800'}`}>
                        {paymentMethod === method.id && <div className="w-3 h-3 bg-orange-500 rounded-full"></div>}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <button type="submit" className="w-full py-5 fire-gradient rounded-2xl text-xl font-black text-white shadow-xl neon-orange">
                Place Secure Order • ₹{total.toFixed(2)}
              </button>
            </form>
          </div>

          <div className="lg:col-span-2 space-y-8 lg:sticky lg:top-32">
             <div className="glass p-8 rounded-[2.5rem] border-slate-800 shadow-2xl">
                <h3 className="text-2xl font-black text-white mb-8 tracking-tighter">Order Summary</h3>
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-center text-sm font-bold">
                    <span className="text-slate-400">Services Subtotal</span>
                    <span className="text-white">₹{total.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm font-bold">
                    <span className="text-slate-400">Processing Fee</span>
                    <span className="text-white">₹0.00</span>
                  </div>
                </div>
                <div className="pt-6 border-t border-slate-800 mb-8">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-black text-white">Grand Total</span>
                    <span className="text-3xl font-black text-orange-500 animate-pulse">₹{total.toFixed(2)}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-3 text-slate-500 font-bold text-xs uppercase tracking-widest justify-center">
                  <ShieldCheck className="w-5 h-5 text-green-500" />
                  <span>256-BIT ENCRYPTED CHECKOUT</span>
                </div>
             </div>
             
             <div className="p-8 bg-slate-900/50 rounded-3xl border border-slate-800">
               <h4 className="text-white font-bold mb-4">Why choose us?</h4>
               <ul className="space-y-3 text-sm text-slate-400 font-medium">
                 <li>• 99.9% Uptime Guarantee</li>
                 <li>• Enterprise-grade DDoS Protection</li>
                 <li>• 24/7 Expert Technical Support</li>
               </ul>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
