
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Users, Search, Ban, Trash2, Clock, Mail, ShieldAlert, CheckCircle, ExternalLink, MessageCircle, Package, Activity, Download, Send, AlertCircle } from 'lucide-react';

const AdminDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'users' | 'chat' | 'orders'>('users');
  const [searchTerm, setSearchTerm] = useState('');
  const [isAuthorized, setIsAuthorized] = useState(false);
  const navigate = useNavigate();
  
  useEffect(() => {
    const token = localStorage.getItem('userToken');
    if (token !== 'mock-admin-jwt') {
      navigate('/login');
    } else {
      setIsAuthorized(true);
    }
  }, [navigate]);

  const [users, setUsers] = useState([
    { id: 1, username: 'ArjunX', email: 'arjun@gmail.com', role: 'user', status: 'active', ip: '103.21.54.12' },
    { id: 2, username: 'StaffNode', email: 'support@firenodex.online', role: 'admin', status: 'active', ip: '127.0.0.1' },
    { id: 3, username: 'Slayer99', email: 'slayer@firenodex.online', role: 'user', status: 'active', ip: '192.168.1.5' },
    { id: 4, username: 'VikramPvP', email: 'vikram@firenodex.online', role: 'user', status: 'active', ip: '103.54.21.11' },
  ]);

  const [activeChats, setActiveChats] = useState([
    { id: 1, user: 'ArjunX', message: 'Hey, I need help with my Titan rank.', time: '2m ago', unread: true },
    { id: 2, user: 'Slayer99', message: 'My server is lagging.', time: '15m ago', unread: false },
  ]);

  if (!isAuthorized) return null;

  // Real-time filtering logic
  const filteredUsers = users.filter(u => 
    u.username.toLowerCase().includes(searchTerm.toLowerCase()) || 
    u.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    u.ip.includes(searchTerm)
  );

  return (
    <div className="pt-24 pb-32 min-h-screen bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div>
            <h1 className="text-4xl font-black text-white tracking-tighter uppercase mb-2">Network <span className="text-orange-500">Master</span> Control</h1>
            <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">FireNodeX Infrastructure Dashboard</p>
          </div>
          <div className="flex bg-slate-900 rounded-xl p-1 border border-slate-800">
            {(['users', 'chat', 'orders'] as const).map(tab => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-lg font-black text-xs uppercase tracking-widest transition-all ${activeTab === tab ? 'bg-orange-600 text-white' : 'text-slate-500 hover:text-white'}`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {activeTab === 'users' && (
          <div className="space-y-6">
            <div className="flex items-center space-x-4 mb-6">
              <div className="relative flex-grow max-w-md">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
                <input 
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl py-3 pl-12 pr-5 text-white outline-none focus:border-orange-500 transition-colors" 
                  placeholder="Search user list by name, email or IP..."
                  value={searchTerm}
                  onChange={e => setSearchTerm(e.target.value)}
                />
              </div>
              <button className="flex items-center space-x-2 bg-slate-800 text-white px-6 py-3 rounded-xl font-bold hover:bg-slate-700 transition-colors">
                <Download className="w-4 h-4" />
                <span>Export CSV</span>
              </button>
            </div>
            
            <div className="glass rounded-[2rem] border-slate-800 overflow-hidden">
              <table className="w-full text-left">
                <thead className="bg-slate-900/50 text-slate-500 text-[10px] font-black uppercase tracking-widest border-b border-slate-800">
                  <tr>
                    <th className="p-6">User</th>
                    <th className="p-6">Security</th>
                    <th className="p-6">Status</th>
                    <th className="p-6 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/50">
                  {filteredUsers.length > 0 ? filteredUsers.map(u => (
                    <tr key={u.id} className="hover:bg-white/5 transition-all group">
                      <td className="p-6">
                        <div className="flex items-center space-x-4">
                          <div className="w-10 h-10 fire-gradient rounded-lg flex items-center justify-center font-black text-white">{u.username[0]}</div>
                          <div>
                            <div className="text-white font-black">{u.username}</div>
                            <div className="text-slate-500 text-xs">{u.email}</div>
                          </div>
                        </div>
                      </td>
                      <td className="p-6">
                        <div className="text-slate-400 text-xs font-bold">IP: {u.ip}</div>
                        <div className="text-[10px] font-black uppercase text-orange-500">{u.role}</div>
                      </td>
                      <td className="p-6">
                        <span className="px-3 py-1 bg-green-500/10 text-green-500 text-[10px] font-black rounded-full border border-green-500/20">{u.status}</span>
                      </td>
                      <td className="p-6 text-right">
                        <div className="flex justify-end space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button className="p-2 bg-slate-800 rounded-lg text-white hover:bg-orange-600"><Ban className="w-4 h-4" /></button>
                          <button className="p-2 bg-slate-800 rounded-lg text-white hover:bg-red-600"><Trash2 className="w-4 h-4" /></button>
                        </div>
                      </td>
                    </tr>
                  )) : (
                    <tr>
                      <td colSpan={4} className="p-20 text-center">
                        <div className="text-slate-500 font-bold uppercase tracking-widest text-xs mb-2">No users found</div>
                        <p className="text-slate-700 text-xs">Try adjusting your search criteria</p>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'chat' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1 glass rounded-[2rem] border-slate-800 p-6">
              <h3 className="text-white font-black mb-6 uppercase text-sm tracking-widest flex items-center space-x-2">
                <MessageCircle className="w-4 h-4 text-orange-500" />
                <span>Live Active Sessions</span>
              </h3>
              <div className="space-y-3">
                {activeChats.map(chat => (
                  <button key={chat.id} className="w-full text-left p-4 rounded-2xl bg-slate-900 border border-slate-800 hover:border-orange-500/50 transition-all group">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-white font-black">{chat.user}</span>
                      <span className="text-[10px] text-slate-500">{chat.time}</span>
                    </div>
                    <p className="text-xs text-slate-400 truncate">{chat.message}</p>
                    {chat.unread && <div className="mt-2 w-2 h-2 bg-orange-600 rounded-full"></div>}
                  </button>
                ))}
              </div>
            </div>
            <div className="lg:col-span-2 glass rounded-[2rem] border-slate-800 flex flex-col h-[600px] overflow-hidden">
               <div className="p-6 bg-slate-900 border-b border-slate-800 flex justify-between items-center">
                 <span className="text-white font-black">Chatting with ArjunX</span>
                 <button className="text-xs font-black text-orange-500 uppercase tracking-widest">Mark as Resolved</button>
               </div>
               <div className="flex-grow p-8 bg-slate-950/20 overflow-y-auto space-y-4">
                 <div className="flex justify-start">
                   <div className="bg-slate-900 p-4 rounded-2xl text-slate-300 text-sm max-w-[80%]">
                     Hey, I need help with my Titan rank. I paid but didn't get it.
                   </div>
                 </div>
                 <div className="flex justify-end">
                   <div className="bg-orange-600 p-4 rounded-2xl text-white text-sm max-w-[80%]">
                     Hello! Let me check your transaction ID in the database.
                   </div>
                 </div>
               </div>
               <div className="p-4 bg-slate-900 border-t border-slate-800 flex space-x-2">
                 <input className="flex-grow bg-slate-950 border border-slate-800 rounded-xl py-3 px-4 text-white outline-none focus:border-orange-500" placeholder="Reply to user..." />
                 <button className="p-3 fire-gradient rounded-xl text-white"><Send className="w-5 h-5" /></button>
               </div>
            </div>
          </div>
        )}

        {activeTab === 'orders' && (
          <div className="glass rounded-[2rem] border-slate-800 p-8">
            <h3 className="text-white font-black mb-8 uppercase tracking-tighter text-xl">Transaction Ledger</h3>
            <div className="space-y-4">
              {[
                { id: 'TXN-943', user: 'VikramPvP', rank: 'PHOENIX', amount: '₹79', status: 'Completed' },
                { id: 'TXN-942', user: 'ArjunX', rank: 'TITAN', amount: '₹49', status: 'Completed' },
                { id: 'TXN-941', user: 'SarahJ', rank: 'FIRE', amount: '₹29', status: 'Pending' },
              ].map(order => (
                <div key={order.id} className="flex flex-col md:flex-row md:items-center justify-between p-6 bg-slate-900/50 rounded-2xl border border-slate-800 group hover:border-orange-500/30 transition-all">
                  <div className="flex items-center space-x-6">
                    <div className="p-4 bg-slate-800 rounded-xl group-hover:bg-orange-600/10 transition-colors">
                      <Package className="w-6 h-6 text-orange-500" />
                    </div>
                    <div>
                      <div className="text-white font-black">{order.rank} RANK</div>
                      <div className="text-slate-500 text-xs font-bold uppercase">{order.id} • {order.user}</div>
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0 flex items-center space-x-8">
                    <div className="text-2xl font-black text-white">{order.amount}</div>
                    <div className={`px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${order.status === 'Completed' ? 'bg-green-500/10 text-green-500 border border-green-500/20' : 'bg-yellow-500/10 text-yellow-500 border border-yellow-500/20'}`}>
                      {order.status}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
