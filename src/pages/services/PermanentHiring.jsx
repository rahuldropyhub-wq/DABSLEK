import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight, BrainCircuit, Zap, Target, ShieldCheck, ChevronDown, CheckCircle, BarChart3, Users, Building, Plus, Minus } from 'lucide-react';
import { Link } from 'react-router-dom';

// Import images from assets
import heroImg from '../../assets/about-hero-team.png';
import cardImg1 from '../../assets/about-collaboration.png';
import cardImg2 from '../../assets/contact-office.png';
import cardImg3 from '../../assets/contact-team.png';
import serviceImg1 from '../../assets/ind-it.png';
import serviceImg2 from '../../assets/about-stats-visual.png';
import serviceImg3 from '../../assets/about-team-collab.png';

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
        <span className="font-display font-bold text-base sm:text-lg text-brand-dark group-hover:text-brand-indigo transition-colors">{question}</span>
        <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${isOpen ? 'bg-brand-indigo text-white' : 'bg-slate-100 text-brand-muted group-hover:bg-brand-indigo/10'}`}>
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

export default function PermanentHiring() {
  const faqs = [
    {
      q: "What is permanent staffing?",
      a: "Permanent staffing refers to hiring employees on a full-time basis, making them part of your company's long-term workforce."
    },
    {
      q: "Why should companies choose permanent staffing services?",
      a: "Permanent staffing services help organisations reduce turnover, build skilled teams, and ensure long-term workforce continuity."
    },
    {
      q: "When should a business consider a permanent hire agency?",
      a: "A permanent hire agency is best when building core teams, filling leadership positions, or hiring for niche skills."
    },
    {
      q: "How does DABSLEK add value as a permanent staffing agency?",
      a: "DABSLEK combines AI-driven talent insights with recruitment expertise to deliver smarter, faster, and future-ready permanent hires."
    }
  ];

  return (
    <div className="bg-white min-h-screen overflow-hidden">
      
      {/* ═══════════════════════════════════════════
          1. HERO SECTION
      ═══════════════════════════════════════════ */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 lg:px-16 max-w-[1440px] mx-auto flex flex-col items-center text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-indigo/5 blur-[120px] rounded-full pointer-events-none -z-10" />
        
        <FadeIn delay={0.1}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-pill border border-brand-indigo/10 text-brand-indigo font-semibold text-xs tracking-wide mb-6">
            <Sparkles className="w-4 h-4 text-brand-indigo" />
            <span>Powered by AI. Perfected by Human Expertise.</span>
          </div>
        </FadeIn>
        
        <FadeIn delay={0.2}>
          <h1 className="font-display font-extrabold text-5xl sm:text-6xl lg:text-7xl text-brand-dark leading-[1.1] tracking-tight mb-6 max-w-4xl mx-auto">
            Permanent <span className="bg-gradient-to-r from-brand-indigo to-brand-violet bg-clip-text text-transparent">Hiring</span>
          </h1>
        </FadeIn>
        
        <FadeIn delay={0.3}>
          <p className="font-sans text-brand-muted text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
            From niche tech roles to leadership hires, we connect you with professionals who are built for long-term impact.
          </p>
        </FadeIn>
        
        <FadeIn delay={0.4}>
          <Link
            to="/contact"
            className="h-14 px-8 rounded-full bg-brand-indigo text-white font-bold text-sm flex items-center justify-center gap-2 transition-all hover:bg-brand-dark hover:shadow-xl hover:shadow-brand-indigo/20 hover:-translate-y-0.5 active:scale-95"
          >
            <span>Let's Work Together</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </FadeIn>
      </section>

      {/* ═══════════════════════════════════════════
          2. WHY CHOOSE US GRID
      ═══════════════════════════════════════════ */}
      <section className="relative py-24 bg-slate-50 border-y border-brand-border/40">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
          <div className="mb-16 max-w-3xl">
            <FadeIn>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-brand-dark mb-6 leading-tight">
                Why Choose DABSLEK for <br className="hidden sm:block" />
                Permanent Hiring?
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="font-sans text-brand-muted text-lg leading-relaxed">
                Our AI-driven talent intelligence platform analyzes millions of profiles, skills, and industry trends, helping us deliver candidates who aren’t just qualified — but are the right fit for your business DNA.
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                img: cardImg1, 
                title: 'Smarter Talent Matching', 
                desc: 'AI ensures high skill–role alignment for precise accuracy.' 
              },
              { 
                img: cardImg2, 
                title: 'Faster Hiring Cycles', 
                desc: 'Reduced time-to-hire with automated shortlisting algorithms.' 
              },
              { 
                img: cardImg3, 
                title: 'Future-Proof Hiring', 
                desc: 'Data-backed predictions for long-term retention and growth.' 
              }
            ].map((item, idx) => (
              <FadeIn key={idx} delay={0.2 + (idx * 0.1)} className="group cursor-pointer">
                <div className="relative rounded-2xl overflow-hidden bg-white border border-brand-border/60 shadow-sm transition-all duration-300 hover:shadow-xl group-hover:-translate-y-1 h-full flex flex-col">
                  <div className="h-48 overflow-hidden relative">
                    <div className="absolute inset-0 bg-brand-dark/10 group-hover:bg-transparent transition-colors z-10" />
                    <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="p-8 flex-1 flex flex-col">
                    <h3 className="font-display font-bold text-lg text-brand-dark mb-3 uppercase tracking-wider">{item.title}</h3>
                    <p className="font-sans text-brand-muted text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          3. DETAILED SERVICES / ZIG-ZAG
      ═══════════════════════════════════════════ */}
      <section className="py-24 lg:py-32">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
          <FadeIn className="text-center mb-20">
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-brand-dark mb-4">Our Permanent Hiring Services</h2>
            <p className="font-sans text-brand-muted text-lg max-w-2xl mx-auto">
              We combine technology with human advisory to deliver seamless permanent recruitment services.
            </p>
          </FadeIn>

          <div className="flex flex-col gap-24 lg:gap-32">
            {[
              {
                title: "Permanent IT Staffing",
                subtitle: "Curated by AI to match evolving tech stacks",
                desc: "Find IT professionals who not only fit today's needs but can grow with tomorrow's technologies. Our permanent IT staffing solutions ensure faster, smarter matches across software, cloud, data, AI/ML, and cybersecurity.",
                img: serviceImg1,
                reverse: false
              },
              {
                title: "Executive & Leadership Hiring",
                subtitle: "Strategic roles with cultural alignment",
                desc: "Hire leaders who drive transformation. Our recruiters combine AI insights with human expertise to deliver executives aligned with your culture, strategy, and long-term goals.",
                img: serviceImg2,
                reverse: true
              },
              {
                title: "Customized Talent Advisory",
                subtitle: "From workforce planning to succession",
                desc: "Beyond filling roles, DABSLEK provides permanent staffing solutions that help you design a future-ready workforce — with advisory on hiring frameworks, talent trends, and succession planning.",
                img: serviceImg3,
                reverse: false
              }
            ].map((service, idx) => (
              <div key={idx} className={`flex flex-col ${service.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-20`}>
                <FadeIn delay={0.1} className="w-full lg:w-1/2">
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                    <img src={service.img} alt={service.title} className="w-full h-[400px] object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-tr from-brand-dark/20 to-transparent mix-blend-multiply" />
                  </div>
                </FadeIn>
                <FadeIn delay={0.2} className="w-full lg:w-1/2 flex flex-col items-start text-left">
                  <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-brand-dark mb-2">{service.title}</h3>
                  <div className="text-brand-indigo font-bold text-sm tracking-wide uppercase mb-6">{service.subtitle}</div>
                  <p className="font-sans text-brand-muted text-base leading-relaxed mb-8">
                    {service.desc}
                  </p>
                  <Link
                    to="/contact"
                    className="h-12 px-6 rounded-full bg-brand-dark text-white font-bold text-xs flex items-center justify-center gap-2 transition-all hover:bg-brand-indigo hover:shadow-lg active:scale-95"
                  >
                    <span>Get Started</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </FadeIn>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          4. WHEN TO CHOOSE
      ═══════════════════════════════════════════ */}
      <section className="py-24 bg-brand-dark text-white relative overflow-hidden">
        <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] rounded-full bg-brand-indigo/20 blur-[100px]" />
        
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-8 items-center">
            
            <div className="w-full lg:w-1/3">
              <FadeIn>
                <h2 className="font-display font-extrabold text-3xl sm:text-4xl mb-6 leading-tight">When to Choose<br/>Permanent Staffing?</h2>
                <p className="font-sans text-white/70 text-lg leading-relaxed mb-8">
                  Permanent hiring is the right choice when your business needs stability, long-term value, and cultural alignment. Unlike other models, permanent staffing solutions ensure that your workforce grows with you.
                </p>
              </FadeIn>
            </div>

            <div className="w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
              {[
                { title: 'Talent scales with Business', desc: 'Your business requires specialized skills that evolve with industry trends.', icon: BarChart3 },
                { title: 'Purpose creates value', desc: 'You\'re expanding operations and need a core team to scale sustainably.', icon: Target },
                { title: 'Leadership Defines Future', desc: 'You\'re hiring for critical or leadership roles where continuity is essential.', icon: Building },
                { title: 'Branding attracts top talent', desc: 'You want to strengthen your employer brand by showcasing long-term opportunities.', icon: Users }
              ].map((item, idx) => (
                <FadeIn key={idx} delay={0.2 + (idx * 0.1)}>
                  <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors h-full">
                    <item.icon className="w-8 h-8 text-brand-indigo-light mb-6" />
                    <h4 className="font-display font-bold text-lg mb-3">{item.title}</h4>
                    <p className="font-sans text-sm text-white/60 leading-relaxed">{item.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          5. CTA SECTION
      ═══════════════════════════════════════════ */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-slate-50 -z-10" />
        <div className="max-w-[1000px] mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-brand-dark mb-6">Let's Work Together</h2>
            <p className="font-sans text-brand-muted text-lg sm:text-xl leading-relaxed mb-10 max-w-3xl mx-auto">
              Ready to embark on a data-driven partnership with an AI-powered talent solutions leader? We put your business and career goals at the forefront, combining human expertise with intelligent insights to deliver results.
            </p>
            <Link
              to="/contact"
              className="inline-flex h-14 px-8 rounded-full bg-brand-indigo text-white font-bold text-sm items-center justify-center gap-2 transition-all hover:bg-brand-dark hover:shadow-xl hover:shadow-brand-indigo/20 hover:-translate-y-0.5 active:scale-95"
            >
              <span>Connect with our Experts</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
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
