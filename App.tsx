import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import HostingPlans from './pages/HostingPlans';
import FireCraftX from './pages/FireCraftX';
import Features from './pages/Features';
import OrderConfig from './pages/OrderConfig';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import ControlPanel from './pages/ControlPanel';
import Contact from './pages/Contact';
import Rules from './pages/Rules';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import AdminDashboard from './pages/AdminDashboard';
import { CartProvider } from './context/CartContext';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <CartProvider>
      <Router>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/hosting" element={<HostingPlans />} />
              <Route path="/firecraftx" element={<FireCraftX />} />
              <Route path="/features" element={<Features />} />
              <Route path="/rules" element={<Rules />} />
              <Route path="/order/:planId" element={<OrderConfig />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/control-panel" element={<ControlPanel />} />
              <Route path="/support" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/admin" element={<AdminDashboard />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;