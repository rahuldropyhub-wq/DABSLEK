import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Industries from './pages/Industries';
import Contact from './pages/Contact';

// Service Pages
import PermanentHiring from './pages/services/PermanentHiring';
import ContractHiring from './pages/services/ContractHiring';
import PayrollProcessing from './pages/services/PayrollProcessing';
import RPOServices from './pages/services/RPOServices';
import DeliveryExecutiveHiring from './pages/services/DeliveryExecutiveHiring';
import CollegePlacements from './pages/services/CollegePlacements';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="bg-white min-h-screen relative antialiased selection:bg-brand-indigo/10 selection:text-brand-indigo">
        {/* Premium Navigation Header */}
        <Navbar />

        {/* Main Content Area */}
        <main className="pb-36">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/permanent-hiring" element={<PermanentHiring />} />
            <Route path="/services/contract-hiring" element={<ContractHiring />} />
            <Route path="/services/payroll-processing" element={<PayrollProcessing />} />
            <Route path="/services/rpo" element={<RPOServices />} />
            <Route path="/services/delivery-executive-hiring" element={<DeliveryExecutiveHiring />} />
            <Route path="/services/college-placements" element={<CollegePlacements />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Premium Footer with background image */}
        <Footer />
      </div>
      <Analytics />
      <SpeedInsights />
    </Router>
  );
}
