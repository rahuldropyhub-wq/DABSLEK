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
    <div className="border-b border-brand-border/40 py-4 lg:py-6">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between gap-4 text-left group"
      >
        <span className="font-display font-bold text-base sm:text-lg text-brand-dark group-hover:text-emerald-600 transition-colors">{question}</span>
        <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${isOpen ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-brand-muted group-hover:bg-emerald-600/10'}`}>
          {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pt-4 pb-2 text-brand-muted font-sans text-sm sm:text-base leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function ContractHiring() {
  const [activeTab, setActiveTab] = useState(0);
  
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
      subtitle: "Immediate impact for time-sensitive initiatives",
      desc: "When you have a critical deadline, we provide specialized talent to bridge the gap. Whether it's a 3-month product launch or a 6-month system migration, our contractors integrate seamlessly with your core team.",
      features: ["Immediate deployment within 48 hours", "Highly specialized niche skills", "Zero long-term commitment"],
      img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1200",
      color: "emerald"
    },
    {
      title: "Contract-to-Hire",
      subtitle: "Try before you commit",
      desc: "Evaluate a candidate's performance and cultural fit on the job before making a long-term offer. This model significantly mitigates hiring risk and ensures you only retain proven performers.",
      features: ["Risk-free evaluation period", "Seamless transition to permanent", "High retention rates post-conversion"],
      img: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=1200",
      color: "blue"
    },
    {
      title: "Volume Staffing",
      subtitle: "Scaling operations rapidly",
      desc: "Need to spin up an entire customer support team or field operations unit quickly? We can source, screen, and deploy large cohorts of contractors efficiently to meet sudden spikes in business demand.",
      features: ["Mass mobilization capabilities", "Dedicated account management", "Standardized quality control"],
      img: "https://images.unsplash.com/photo-1556761175-5973dc0f32b7?auto=format&fit=crop&q=80&w=1200",
      color: "indigo"
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen overflow-x-hidden font-sans">

      {/* ═══════════════════════════════════════════
          1. UNIQUE BENTO BOX HERO
      ═══════════════════════════════════════════ */}
      <section className="relative pt-32 pb-20 px-6 lg:px-16 max-w-[1440px] mx-auto">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs tracking-widest uppercase mb-6"
          >
            <Zap className="w-4 h-4" />
            <span>Agile Workforce Solutions</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-black text-5xl md:text-7xl text-slate-900 leading-[1.1] tracking-tight mb-6"
          >
            Contract Hiring for <br/><span className="text-emerald-600">Dynamic Scaling</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto"
          >
            Inject specialized expertise exactly when and where it's needed. Protect your core payroll while remaining incredibly nimble.
          </motion.p>
        </div>

        {/* Bento Box Grid Visual */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 h-[600px] max-w-6xl mx-auto"
        >
          {/* Large Main Feature */}
          <div className="md:col-span-2 md:row-span-2 rounded-[2rem] overflow-hidden relative group">
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200" alt="Team Collaboration" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex flex-col justify-end p-8">
              <h3 className="text-white font-display font-bold text-2xl mb-2">Rapid Deployment</h3>
              <p className="text-white/80">Specialized talent integrated into your team within 48 hours.</p>
            </div>
          </div>
          
          {/* Small Top Right */}
          <div className="rounded-[2rem] bg-emerald-600 p-8 flex flex-col justify-between text-white relative overflow-hidden group">
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:bg-white/20 transition-colors"></div>
            <Shield className="w-10 h-10 mb-4" />
            <div>
              <h3 className="font-display font-bold text-xl mb-1">Zero Risk</h3>
              <p className="text-emerald-100 text-sm">We manage all payroll and compliance.</p>
            </div>
          </div>
          
          {/* Small Bottom Right */}
          <div className="rounded-[2rem] overflow-hidden relative group">
            <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=600" alt="Consultation" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/20 transition-colors"></div>
            <div className="absolute inset-0 p-8 flex flex-col justify-end">
              <h3 className="text-white font-display font-bold text-xl mb-1">Variable Costs</h3>
              <p className="text-white/90 text-sm">Convert fixed headcount to project expenses.</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════
          2. UNIQUE TABBED UX INTERFACE
      ═══════════════════════════════════════════ */}
      <section className="py-24 bg-white border-y border-slate-200">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="font-display font-extrabold text-4xl text-slate-900 mb-4">Contract Solutions</h2>
            <p className="text-lg text-slate-600">Click through our flexible engagement models.</p>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
            
            {/* Left: Sticky Tabs */}
            <div className="w-full lg:w-1/3">
              <div className="sticky top-32 flex flex-col gap-4">
                {contractSolutions.map((sol, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setActiveTab(idx)}
                    className={`text-left p-6 rounded-2xl transition-all duration-300 border-2 ${activeTab === idx ? 'bg-emerald-50 border-emerald-500 shadow-md' : 'bg-white border-slate-100 hover:border-emerald-200 hover:bg-slate-50'}`}
                  >
                    <h3 className={`font-display font-bold text-xl mb-1 ${activeTab === idx ? 'text-emerald-700' : 'text-slate-800'}`}>{sol.title}</h3>
                    <p className={`text-sm ${activeTab === idx ? 'text-emerald-600/80' : 'text-slate-500'}`}>{sol.subtitle}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Right: Dynamic Content */}
            <div className="w-full lg:w-2/3">
              <div className="bg-slate-50 rounded-[2rem] p-8 md:p-12 border border-slate-100 min-h-[500px] flex flex-col justify-between">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-col h-full"
                  >
                    <h2 className="font-display font-black text-3xl md:text-4xl text-slate-900 mb-6">{contractSolutions[activeTab].title}</h2>
                    <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                      {contractSolutions[activeTab].desc}
                    </p>
                    
                    <div className="mb-10">
                      <h4 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-wider">Key Benefits</h4>
                      <ul className="flex flex-col gap-3">
                        {contractSolutions[activeTab].features.map((feat, i) => (
                          <li key={i} className="flex items-center gap-3 text-slate-700">
                            <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-auto rounded-xl overflow-hidden h-[250px] w-full">
                      <img src={contractSolutions[activeTab].img} alt="Solution" className="w-full h-full object-cover" />
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

          </div>
        </div>
      </section>      {/* ═══════════════════════════════════════════
          6. FAQS
      ═══════════════════════════════════════════ */}
      <section className="py-24 border-t border-brand-border/40">
        <div className="max-w-[800px] mx-auto px-6">
          <FadeIn className="text-center mb-16">
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-brand-dark">Frequently Asked Questions</h2>
          </FadeIn>

          <div className="flex flex-col">
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
