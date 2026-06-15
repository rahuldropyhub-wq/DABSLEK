import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, ArrowUp, Send, Globe, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import footerBg from '../assets/footer-bg.png';

const FooterFlipLink = ({ to, children }) => {
  return (
    <Link
      to={to}
      className="relative w-fit block overflow-hidden group h-5 text-sm text-[#94A3B8] cursor-pointer"
    >
      <div className="flex flex-col transition-transform duration-300 ease-in-out transform group-hover:-translate-y-1/2">
        <span className="h-5 flex items-center text-[#94A3B8] whitespace-nowrap">
          {children}
        </span>
        <span className="h-5 flex items-center text-white font-semibold whitespace-nowrap">
          {children}
        </span>
      </div>
    </Link>
  );
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="relative bg-[#090D16] text-white pt-24 pb-12 overflow-visible border-t border-brand-indigo/15">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0 opacity-45 mix-blend-lighten pointer-events-none overflow-hidden">
        <img
          src={footerBg}
          alt="Footer Background Texture"
          className="w-full h-full object-cover object-center"
        />
        {/* Sleek Gradient Overlay to blend with the dark page */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#090D16] via-[#090D16]/80 to-transparent" />
      </div>

      {/* Decorative Radial Lights */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[350px] h-[350px] rounded-full bg-brand-indigo/10 blur-[100px]" />
        <div className="absolute bottom-12 right-1/4 w-[300px] h-[300px] rounded-full bg-brand-violet/10 blur-[120px]" />
      </div>

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Floating CTA card on top */}
        <div className="relative -mt-58 mb-16 p-8 md:p-12 rounded-[32px] bg-gradient-to-r from-brand-indigo/90 via-brand-violet/90 to-purple-900/90 backdrop-blur-2xl border border-white/10 shadow-[0_20px_50px_rgba(99,102,241,0.2)] overflow-hidden">
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <img src={footerBg} alt="CTA BG" className="w-full h-full object-cover" />
          </div>

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-[620px] text-center lg:text-left">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-white font-semibold text-xs tracking-wider uppercase mb-4">
                <Sparkles className="w-3.5 h-3.5 text-yellow-300 animate-pulse" />
                <span>Next-Gen Hiring is Here</span>
              </span>
              <h2 className="font-display font-extrabold text-3xl md:text-4xl text-white leading-tight">
                Ready to find the right talent for your team?
              </h2>
              <p className="text-white/80 text-sm md:text-base mt-3 font-sans">
                Join hundreds of industry leaders using DABSLEK's AI-Powered, human-led platform to accelerate their engineering and business recruitment.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto shrink-0">
              <Link
                to="/contact"
                className="relative overflow-hidden group h-14 px-8 rounded-2xl bg-white text-brand-dark font-bold text-sm md:text-base flex items-center justify-center gap-2 hover:bg-slate-50 hover:shadow-xl hover:shadow-white/10 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
              >
                {/* Shine Sweep */}
                <span className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-brand-indigo/10 to-transparent -skew-x-12 -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-out pointer-events-none" />
                <span className="relative z-10">Start Hiring Now</span>
                <ArrowRight className="relative z-10 w-4 h-4 text-brand-dark group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link
                to="/contact"
                className="relative overflow-hidden group h-14 px-8 rounded-2xl bg-white/10 text-white font-bold text-sm md:text-base flex items-center justify-center border border-white/20 hover:border-transparent hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
              >
                {/* Fill slide */}
                <span className="absolute inset-0 bg-white transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-out z-0 pointer-events-none" />
                <span className="relative z-10 group-hover:text-brand-dark transition-colors duration-300">Schedule Demo</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Footer Main Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 pb-12 border-b border-white/10">

          {/* Logo & Info column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2 flex flex-col gap-5">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-brand-indigo to-brand-violet flex items-center justify-center p-[2px]">
                <div className="w-full h-full bg-[#090D16] rounded-[10px] flex items-center justify-center font-display font-black text-base text-white tracking-tighter">
                  D
                </div>
              </div>
              <span className="font-display font-extrabold text-xl tracking-tight text-white uppercase bg-gradient-to-r from-brand-indigo to-brand-violet bg-clip-text text-transparent">DABSLEK</span>
            </div>

            <p className="text-[#94A3B8] text-sm leading-relaxed max-w-[280px]">
              AI-powered hiring platforms combined with specialized technical recruiters to build global teams.
            </p>

            {/* Contact Details */}
            <div className="flex flex-col gap-3 text-xs text-[#94A3B8] mt-2">
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brand-indigo-light" />
                <a href="mailto:contact@dabslek.com" className="hover:text-white transition-colors">contact@dabslek.com</a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-indigo-light" />
                <a href="tel:+918042004200" className="hover:text-white transition-colors">+91 80 4200 4200</a>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-indigo-light shrink-0 mt-0.5" />
                <span>Hyderabad, India</span>
              </div>
            </div>
          </div>

          {/* Column 1: Quick Links */}
          <div className="flex flex-col gap-4">
            <h4 className="font-display font-bold text-sm tracking-wider uppercase text-white">Quick Links</h4>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li><FooterFlipLink to="/">Home</FooterFlipLink></li>
              <li><FooterFlipLink to="/about">About</FooterFlipLink></li>
              <li><FooterFlipLink to="/services">Services</FooterFlipLink></li>
              <li><FooterFlipLink to="/jobs">Jobs</FooterFlipLink></li>
              <li><FooterFlipLink to="/contact">Contact Us</FooterFlipLink></li>
            </ul>
          </div>

          {/* Column 2: Services */}
          <div className="flex flex-col gap-4">
            <h4 className="font-display font-bold text-sm tracking-wider uppercase text-white">Services</h4>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li><FooterFlipLink to="/services">Contract Staffing</FooterFlipLink></li>
              <li><FooterFlipLink to="/services">Permanent Recruitment</FooterFlipLink></li>
              <li><FooterFlipLink to="/services">Executive Search</FooterFlipLink></li>
              <li><FooterFlipLink to="/services">RPO Solutions</FooterFlipLink></li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div className="flex flex-col gap-4">
            <h4 className="font-display font-bold text-sm tracking-wider uppercase text-white">Company</h4>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li><FooterFlipLink to="/jobs">Careers</FooterFlipLink></li>
              <li><FooterFlipLink to="/contact">Resources & Blog</FooterFlipLink></li>
              <li><FooterFlipLink to="/contact">Contact Support</FooterFlipLink></li>
              <li><FooterFlipLink to="/contact">Office Locations</FooterFlipLink></li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="flex flex-col gap-4 col-span-2 md:col-span-1">
            <h4 className="font-display font-bold text-sm tracking-wider uppercase text-white">Subscribe</h4>
            <p className="text-[#94A3B8] text-xs leading-relaxed mb-1">
              Receive hiring insights, tech salaries, and remote work trends.
            </p>
            <form className="relative w-full" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter email..."
                className="w-full h-11 px-4 pr-10 rounded-xl bg-white/5 border border-white/10 text-white placeholder-[#64748B] text-xs focus:outline-none focus:border-brand-indigo focus:ring-1 focus:ring-brand-indigo transition-all duration-300"
              />
              <button
                type="submit"
                className="absolute top-1/2 right-1.5 -translate-y-1/2 w-8 h-8 rounded-lg bg-brand-indigo text-white flex items-center justify-center hover:bg-brand-violet transition-colors duration-300"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 text-xs text-[#64748B]">
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 text-center sm:text-left">
            <p>© {currentYear} DABSLEK Staffing Solutions. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#terms" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#cookies" className="hover:text-white transition-colors">Cookie Settings</a>
            </div>
          </div>

          {/* Social Icons & Back to Top */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-xl bg-white/5 hover:bg-brand-indigo/20 border border-white/10 hover:border-brand-indigo text-[#94A3B8] hover:text-white flex items-center justify-center transition-all duration-300">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-xl bg-white/5 hover:bg-brand-indigo/20 border border-white/10 hover:border-brand-indigo text-[#94A3B8] hover:text-white flex items-center justify-center transition-all duration-300">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="https://dabslek.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-xl bg-white/5 hover:bg-brand-indigo/20 border border-white/10 hover:border-brand-indigo text-[#94A3B8] hover:text-white flex items-center justify-center transition-all duration-300">
                <Globe className="w-4 h-4" />
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="group w-8 h-8 rounded-xl bg-white/5 hover:bg-brand-indigo border border-white/10 hover:border-brand-indigo text-[#94A3B8] hover:text-white flex items-center justify-center transition-all duration-300 cursor-pointer shadow-lg active:scale-95"
            >
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
