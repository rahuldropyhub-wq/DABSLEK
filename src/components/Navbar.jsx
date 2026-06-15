import React, { useState, useEffect } from 'react';
import { ChevronDown, User, ArrowRight, Menu, X, Sparkles } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const FlipLink = ({ to, children, isActive }) => {
  return (
    <Link
      to={to}
      className="relative block overflow-hidden group h-6 text-sm font-bold text-brand-dark cursor-pointer"
    >
      <div 
        className={`flex flex-col transition-transform duration-300 ease-in-out transform ${
          isActive ? '-translate-y-1/2' : 'group-hover:-translate-y-1/2'
        }`}
      >
        <span className="h-6 flex items-center text-brand-dark">
          {children}
        </span>
        <span className="h-6 flex items-center text-brand-indigo bg-gradient-to-r from-brand-indigo to-brand-violet bg-clip-text text-transparent">
          {children}
        </span>
      </div>
      {/* Active bottom line */}
      <span 
        className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[3px] bg-gradient-to-r from-brand-indigo to-brand-violet rounded-full transition-all duration-300 ${
          isActive ? 'w-2/3 opacity-100' : 'w-0 opacity-0'
        }`} 
      />
    </Link>
  );
};

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const location = useLocation();
  const activePath = location.pathname;

  useEffect(() => {
    const handleScroll = () => {
      // Update scrolled state for navbar background
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Run immediately on mount

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-brand-border/60 shadow-md h-20'
          : 'bg-white/90 backdrop-blur-sm border-b border-brand-border/40 shadow-sm h-20'
      }`}
    >
      <div className="max-w-[1440px] h-full mx-auto px-6 lg:px-12 flex items-center justify-between">
        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-3 group">
          {/* Animated 3D Folded SVG Logo */}
          <div className="relative w-9 h-9">
            <svg
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full transform group-hover:scale-110 transition-transform duration-300"
            >
              {/* Left fold (Indigo) */}
              <path
                d="M20 15L50 35V85L20 65V15Z"
                fill="url(#logo-indigo-grad)"
                className="drop-shadow-sm"
              />
              {/* Right fold (Violet) */}
              <path
                d="M50 35L80 15V65L50 85V35Z"
                fill="url(#logo-violet-grad)"
                className="drop-shadow-sm"
              />
              {/* Top fold (Light Violet) */}
              <path
                d="M20 15L50 35L80 15L50 5L20 15Z"
                fill="url(#logo-light-grad)"
              />
              <defs>
                <linearGradient id="logo-indigo-grad" x1="20" y1="50" x2="50" y2="50" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#4F46E5" />
                  <stop offset="1" stopColor="#6366F1" />
                </linearGradient>
                <linearGradient id="logo-violet-grad" x1="50" y1="50" x2="80" y2="50" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#8B5CF6" />
                  <stop offset="1" stopColor="#A78BFA" />
                </linearGradient>
                <linearGradient id="logo-light-grad" x1="20" y1="20" x2="80" y2="20" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#EEF2FF" stopOpacity="0.8" />
                  <stop offset="1" stopColor="#C7D2FE" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="font-display font-black text-2xl tracking-tight leading-none uppercase bg-gradient-to-r from-brand-indigo to-brand-violet bg-clip-text text-transparent">
              DABSLEK
            </span>
            <span className="text-[10px] font-sans font-medium text-brand-muted tracking-wide mt-0.5 leading-none">
              Your No.1 Hiring Partner
            </span>
          </div>
        </Link>

        {/* Center Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8 text-sm h-6">
          <FlipLink to="/" isActive={activePath === '/'}>Home</FlipLink>
          <FlipLink to="/about" isActive={activePath === '/about'}>About</FlipLink>
          
          {/* Services Dropdown */}
          <div className="relative group/dropdown h-full flex items-center">
            <button className="flex items-center gap-1 font-bold text-brand-dark hover:text-brand-indigo transition-colors duration-200 cursor-pointer h-6">
              <span>Services</span>
              <ChevronDown className="w-4 h-4 group-hover/dropdown:rotate-180 transition-transform duration-200" />
            </button>
            
            {/* Dropdown Menu */}
            <div className="absolute top-[24px] left-0 mt-2 w-[280px] bg-white border border-brand-border/60 rounded-3xl shadow-xl p-4 opacity-0 scale-95 pointer-events-none group-hover/dropdown:opacity-100 group-hover/dropdown:scale-100 group-hover/dropdown:pointer-events-auto transition-all duration-200 z-50">
              <div className="flex flex-col gap-1">
                {[
                  { to: "/services/permanent-hiring", title: "Permanent Hiring" },
                  { to: "/services/contract-hiring", title: "Contract Hiring" },
                  { to: "/services/payroll-processing", title: "Payroll Processing" },
                  { to: "/services/rpo", title: "RPO Solutions" },
                  { to: "/services/delivery-executive-hiring", title: "Delivery Executive Hiring" },
                  { to: "/services/college-placements", title: "College Placements" }
                ].map((s, idx) => (
                  <Link
                    key={idx}
                    to={s.to}
                    className="p-3 rounded-2xl hover:bg-slate-50 border border-transparent hover:border-brand-indigo/10 flex flex-col text-left transition-all"
                  >
                    <span className="text-xs font-bold text-brand-dark hover:text-brand-indigo transition-colors">{s.title}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <FlipLink to="/industries" isActive={activePath === '/industries'}>Industries</FlipLink>
          <FlipLink to="/contact" isActive={activePath === '/contact'}>Contact Us</FlipLink>
        </div>

        {/* Right Desktop CTAs */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            to="/contact"
            className="relative overflow-hidden group h-12 px-6 rounded-2xl border border-brand-border text-sm font-semibold text-brand-dark hover:border-brand-indigo hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 transition-all duration-300"
          >
            <span className="absolute inset-0 bg-brand-pill transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-out z-0 pointer-events-none" />
            <User className="relative z-10 w-4 h-4 text-brand-muted group-hover:text-brand-indigo transition-colors duration-300" />
            <span className="relative z-10 group-hover:text-brand-indigo transition-colors duration-300">For Candidates</span>
          </Link>
          <Link
            to="/contact"
            className="relative overflow-hidden group h-12 px-6 rounded-2xl bg-gradient-to-r from-brand-indigo to-brand-violet text-white text-sm font-semibold hover:shadow-lg hover:shadow-brand-indigo/25 hover:scale-[1.02] active:scale-[0.98] flex items-center gap-2 transition-all duration-300"
          >
            {/* Shine Sweep */}
            <span className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/25 to-transparent -skew-x-12 -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-out pointer-events-none" />
            <span className="relative z-10">Start Hiring</span>
            <ArrowRight className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 text-brand-dark hover:bg-brand-pill rounded-xl transition-all"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
    </nav>

      {/* Mobile Drawer Menu — outside <nav> to escape its stacking context */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed top-20 inset-x-0 bottom-0 bg-white border-t border-brand-border/60 z-[9999] flex flex-col">
          {/* Scrollable nav links area */}
          <div className="flex-1 min-h-0 overflow-y-auto p-6">
            <div className="flex flex-col gap-5">
              <Link
                to="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-lg font-bold transition-colors duration-200 ${
                  activePath === '/' ? 'text-brand-indigo' : 'text-brand-dark hover:text-brand-indigo'
                }`}
              >
                Home
              </Link>
              <Link
                to="/about"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-lg font-bold transition-colors duration-200 ${
                  activePath === '/about' ? 'text-brand-indigo' : 'text-brand-dark hover:text-brand-indigo'
                }`}
              >
                About
              </Link>
              {/* Services Mobile Dropdown */}
              <div className="flex flex-col">
                <button
                  onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                  className="flex items-center justify-between text-lg font-bold text-brand-dark hover:text-brand-indigo transition-colors cursor-pointer w-full"
                >
                  <span>Services</span>
                  <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isMobileServicesOpen && (
                  <div className="flex flex-col gap-3.5 pl-4 mt-3 border-l border-brand-border/60">
                    {[
                      { to: "/services/permanent-hiring", title: "Permanent Hiring" },
                      { to: "/services/contract-hiring", title: "Contract Hiring" },
                      { to: "/services/payroll-processing", title: "Payroll Processing" },
                      { to: "/services/rpo", title: "RPO Solutions" },
                      { to: "/services/delivery-executive-hiring", title: "Delivery Executive Hiring" },
                      { to: "/services/college-placements", title: "College Placements" }
                    ].map((s, idx) => (
                      <Link
                        key={idx}
                        to={s.to}
                        onClick={() => {
                          setIsMobileMenuOpen(false);
                          setIsMobileServicesOpen(false);
                        }}
                        className="text-sm font-semibold text-brand-muted hover:text-brand-indigo transition-colors"
                      >
                        {s.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <Link
                to="/industries"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-lg font-bold transition-colors duration-200 ${
                  activePath === '/industries' ? 'text-brand-indigo' : 'text-brand-dark hover:text-brand-indigo'
                }`}
              >
                Industries
              </Link>
              <Link
                to="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-lg font-bold transition-colors duration-200 ${
                  activePath === '/contact' ? 'text-brand-indigo' : 'text-brand-dark hover:text-brand-indigo'
                }`}
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Fixed CTA buttons at bottom — never scroll */}
          <div className="flex-shrink-0 flex flex-col gap-4 p-6 pt-0 border-t border-brand-border/30">
            <Link
              to="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="h-12 w-full rounded-2xl border border-brand-border hover:border-brand-indigo flex items-center justify-center gap-2 text-sm font-semibold text-brand-dark hover:bg-brand-pill/35 transition-all"
            >
              <User className="w-4 h-4 text-brand-muted" />
              <span>For Candidates</span>
            </Link>
            <Link
              to="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="h-12 w-full rounded-2xl bg-gradient-to-r from-brand-indigo to-brand-violet text-white text-sm font-semibold flex items-center justify-center gap-2 shadow-lg shadow-brand-indigo/15 hover:shadow-brand-indigo/25 active:scale-[0.98] transition-all"
            >
              <span>Start Hiring</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </>
  );
}


