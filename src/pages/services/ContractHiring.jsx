import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight, Clock, Shield, Target, ChevronDown, CheckCircle, Zap, Users, Building, Plus, Minus } from 'lucide-react';
import { Link } from 'react-router-dom';

const FadeIn = ({ children, delay = 0, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    className={className}
  >
    {children}
  </motion.div>
);

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="mb-0 border-b border-slate-300 overflow-hidden bg-white">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between py-6 text-left group"
      >
        <span className={`font-sans font-semibold text-lg transition-colors duration-300 ${isOpen ? 'text-[#0A192F]' : 'text-slate-700 group-hover:text-[#0A192F]'}`}>{question}</span>
        <div className={`shrink-0 flex items-center justify-center transition-transform duration-300 text-slate-400 group-hover:text-[#0A192F] ${isOpen ? 'rotate-180' : ''}`}>
          <ChevronDown className="w-5 h-5" />
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="pb-6 text-slate-600 font-sans text-base leading-relaxed pr-8">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function ContractHiring() {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const faqs = [
    {
      q: "What is contract hiring?",
      a: "Contract hiring involves employing professionals for a specific duration or project, offering your business the flexibility to scale workforce up or down as needed."
    },
    {
      q: "Who handles payroll and compliance for contractors?",
      a: "DABSLEK manages all aspects of contractor payroll, benefits, and statutory compliance, allowing you to focus entirely on project execution."
    },
    {
      q: "Can contract employees be converted to permanent?",
      a: "Yes, we offer flexible contract-to-hire arrangements. If a contractor proves to be an excellent long-term fit, you can seamlessly transition them to your permanent payroll."
    },
    {
      q: "How fast can you deploy contract resources?",
      a: "We understand that contract needs are often urgent. Utilizing our AI-driven talent pool, we can typically deploy skilled professionals within 48 to 72 hours."
    }
  ];

  const contractSolutions = [
    {
      title: "Short-Term Project Staffing",
      desc: "Deploy highly specialized talent immediately to bridge critical skill gaps during time-sensitive initiatives. Zero long-term payroll commitment.",
      img: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
      icon: Clock,
      details: [
        "Immediate 48-hour deployment capability",
        "Pre-screened niche industry experts",
        "Flexible contract duration (1 to 12+ months)",
        "Zero long-term employment liabilities"
      ]
    },
    {
      title: "Contract-to-Hire",
      desc: "Mitigate hiring risk by evaluating a candidate's performance and cultural fit on the job before extending a permanent employment offer.",
      img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800",
      icon: Target,
      details: [
        "Risk-free on-the-job evaluation period",
        "Seamless permanent transition process",
        "Higher long-term employee retention rates",
        "Cost-effective recruitment strategy"
      ]
    },
    {
      title: "Volume Staffing",
      desc: "Rapidly source, screen, and deploy large cohorts of contract workers to meet sudden spikes in business demand or operational scale-ups.",
      img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800",
      icon: Users,
      details: [
        "Mass mobilization of qualified talent",
        "Dedicated enterprise account management",
        "Standardized quality control & compliance",
        "Streamlined onboarding procedures"
      ]
    }
  ];

  return (
    <div className="bg-white min-h-screen overflow-x-hidden font-sans">

      {/* ═══════════════════════════════════════════
          1. ATTRACTIVE TEXTURED HERO
      ═══════════════════════════════════════════ */}
      <section className="relative pt-40 pb-32 w-full overflow-hidden">
        {/* Stunning Background Image */}
        <div className="absolute inset-0 z-0 bg-[#0A192F]">
          <img src="/contract_hero_2.jpg" alt="Contract Hiring Agreement" className="w-full h-full object-cover object-center opacity-80" />
        </div>

        {/* Soft Premium Gradient Overlay */}
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#0A192F]/90 via-[#0A192F]/40 to-transparent"></div>

        {/* Sophisticated Dot-Matrix Texture */}
        <div className="absolute inset-0 z-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20 mix-blend-overlay"></div>

        <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-16 flex flex-col justify-center min-h-[50vh]">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-emerald-300 font-bold text-xs tracking-widest uppercase mb-8 shadow-2xl"
            >
              <Sparkles className="w-4 h-4" />
              <span>Elite Talent Network</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-serif text-6xl md:text-8xl text-white leading-[1.05] tracking-tighter mb-8 drop-shadow-xl"
            >
              Scale With <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-teal-400">Precision.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-slate-200 leading-relaxed font-light mb-12 max-w-2xl drop-shadow-md"
            >
              Access a global network of elite contract professionals. Inject highly specialized expertise exactly when you need it, with zero long-term payroll commitment.
            </motion.p>


          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          2. ENTERPRISE STATS RIBBON
      ═══════════════════════════════════════════ */}
      <section className="bg-slate-50 border-b border-slate-200 py-12 relative z-20 shadow-sm">
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-300 text-center">
          <div className="pt-4 md:pt-0 flex flex-col items-center">
            <h3 className="font-serif text-4xl text-[#0A192F] mb-2">48 Hrs</h3>
            <p className="text-sm font-semibold text-slate-500 uppercase tracking-widest">Average Deployment</p>
          </div>
          <div className="pt-8 md:pt-0 flex flex-col items-center">
            <h3 className="font-serif text-4xl text-[#0A192F] mb-2">98%</h3>
            <p className="text-sm font-semibold text-slate-500 uppercase tracking-widest">Client Retention</p>
          </div>
          <div className="pt-8 md:pt-0 flex flex-col items-center">
            <h3 className="font-serif text-4xl text-[#0A192F] mb-2">5,000+</h3>
            <p className="text-sm font-semibold text-slate-500 uppercase tracking-widest">Active Contractors</p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          3. STRUCTURED CONSULTING GRID
      ═══════════════════════════════════════════ */}
      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="mb-16">
            <h2 className="font-serif text-4xl text-[#0A192F] mb-4">Engagement Models</h2>
            <div className="w-20 h-1 bg-[#0A192F]"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contractSolutions.map((sol, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group border border-slate-200 hover:border-[#0A192F] transition-colors duration-500 flex flex-col bg-white h-full"
              >
                <div className="h-48 overflow-hidden relative">
                  <div className="absolute inset-0 bg-[#0A192F]/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                  <img src={sol.img} alt={sol.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" />
                </div>
                <div className="p-8 flex-grow flex flex-col">
                  <div className="mb-6 text-[#0A192F]">
                    <sol.icon className="w-8 h-8" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-serif text-2xl text-[#0A192F] mb-4">{sol.title}</h3>
                  <p className="text-slate-600 leading-relaxed flex-grow">
                    {sol.desc}
                  </p>

                  <AnimatePresence>
                    {expandedIndex === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="mt-6 pt-6 border-t border-slate-200">
                          <ul className="space-y-3 mb-6">
                            {sol.details.map((detail, i) => (
                              <li key={i} className="flex items-start gap-3 text-sm text-slate-600">
                                <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                                <span>{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="mt-8">
                    <button
                      onClick={() => setExpandedIndex(expandedIndex === idx ? null : idx)}
                      className="text-sm font-semibold text-[#0A192F] uppercase tracking-wider flex items-center gap-2 hover:gap-3 transition-all duration-300 group/btn"
                    >
                      {expandedIndex === idx ? "Show Less" : "Learn More"} <ArrowRight className={`w-4 h-4 transition-transform duration-300 ${expandedIndex === idx ? "-rotate-90" : ""}`} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          4. WHY PARTNER WITH US (SIDE-BY-SIDE)
      ═══════════════════════════════════════════ */}
      <section className="bg-[#0A192F] py-24 text-white">
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-4xl mb-6">Strategic Advantage</h2>
            <div className="w-20 h-1 bg-slate-500 mb-8"></div>
            <p className="text-slate-300 text-lg leading-relaxed mb-10">
              Partnering with DABSLEK transforms your talent acquisition from an administrative burden into a strategic operational advantage. We assume all compliance and payroll liabilities so you can focus on core business objectives.
            </p>
            <ul className="space-y-6">
              {[
                "100% Statutory Compliance & Risk Mitigation",
                "Scalable Workforce Management Systems",
                "Rigorous Technical Pre-Screening",
                "Dedicated Enterprise Account Management"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="mt-1">
                    <CheckCircle className="w-5 h-5 text-emerald-400" />
                  </div>
                  <span className="text-slate-200">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="border border-slate-700 p-2"
          >
            <img src="/strategic_advantage.jpg" alt="Strategic Advantage Meeting" className="w-full h-auto opacity-90" />
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          5. PROFESSIONAL FAQS
      ═══════════════════════════════════════════ */}
      <section className="pt-24 pb-48 bg-slate-50 border-t border-slate-200">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl text-[#0A192F] mb-4">Frequently Asked Questions</h2>
            <div className="w-20 h-1 bg-[#0A192F] mx-auto"></div>
          </div>

          <div className="flex flex-col bg-white border border-slate-300 px-8 py-4">
            {faqs.map((faq, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <FAQItem question={faq.q} answer={faq.a} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
