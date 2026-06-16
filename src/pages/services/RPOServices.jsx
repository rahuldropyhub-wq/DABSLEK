import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Target, ArrowRight, ShieldCheck, BarChart3, Users, Settings, LineChart, Briefcase, ChevronRight, Layers, Globe2, Cpu, Laptop, Zap, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const TimelineItem = ({ step, title, desc, icon: Icon, isActive, onClick, isLast }) => {
  return (
    <div className="relative flex gap-5 cursor-pointer group" onClick={onClick}>
      {/* Connecting Line */}
      {!isLast && (
        <div className={`absolute left-6 top-12 bottom-[-1.5rem] w-0.5 transition-colors duration-500 ${isActive ? 'bg-indigo-600' : 'bg-slate-200 group-hover:bg-indigo-200'}`} />
      )}
      
      {/* Icon Node */}
      <div className="relative z-10 shrink-0">
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-500 border-2 ${isActive ? 'bg-indigo-600 border-indigo-600 shadow-lg shadow-indigo-200 scale-110' : 'bg-white border-slate-200 group-hover:border-indigo-300'}`}>
          <Icon className={`w-5 h-5 transition-colors duration-500 ${isActive ? 'text-white' : 'text-slate-400 group-hover:text-indigo-400'}`} />
        </div>
      </div>
      
      {/* Content */}
      <div className={`pb-10 transition-all duration-500 ${isActive ? 'opacity-100' : 'opacity-60 group-hover:opacity-100'}`}>
        <div className="flex items-center gap-4 mb-2">
          <span className={`font-mono text-xs font-bold tracking-widest ${isActive ? 'text-indigo-600' : 'text-slate-400'}`}>STEP {step}</span>
          <h3 className={`font-display font-bold text-xl ${isActive ? 'text-slate-900' : 'text-slate-600'}`}>{title}</h3>
        </div>
        
        <AnimatePresence>
          {isActive && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <p className="text-base text-slate-600 leading-relaxed mt-2 max-w-2xl">
                {desc}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default function RPOServices() {
  const [activeStep, setActiveStep] = useState(1);

  const rpoSteps = [
    {
      step: "01",
      icon: Target,
      title: "Audit & Strategy Design",
      desc: "We perform a comprehensive audit of your current recruitment workflows, sourcing strategies, and technology stack. Then, we architect a tailored RPO framework designed to meet your specific growth objectives, minimizing cost-per-hire and reducing time-to-fill.",
      img: "/rpo_audit_strategy.jpg"
    },
    {
      step: "02",
      icon: Settings,
      title: "System Setup & Brand Mapping",
      desc: "Our team implements advanced ATS (Applicant Tracking System) technology tailored to your needs. We optimize your employer brand messaging to ensure a premium, consistent candidate experience across all touchpoints, from career pages to offer letters.",
      img: "/rpo_step2.jpg"
    },
    {
      step: "03",
      icon: Users,
      title: "Dedicated Talent Acquisition",
      desc: "A dedicated team of specialized recruiters embeds seamlessly into your organization. They act as your internal talent acquisition department, managing active sourcing, screening, scheduling, and direct interviewing under your company's banner.",
      img: "/rpo_step3.jpg"
    },
    {
      step: "04",
      icon: LineChart,
      title: "Execution & ROI Analytics",
      desc: "We provide executive dashboards with real-time analytics. You get complete transparency into hiring velocities, pipeline health, conversion rates, and exact cost savings, ensuring continuous optimization of the recruitment engine.",
      img: "/rpo_step4.jpg"
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen overflow-x-hidden font-sans">
      
      {/* ═══════════════════════════════════════════
          1. ENTERPRISE HERO (MINIMALIST)
      ═══════════════════════════════════════════ */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-slate-900 text-white">
        {/* Deep Corporate Background image with overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1920" 
            alt="Corporate Office" 
            className="w-full h-full object-cover opacity-20 object-center mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/95 to-slate-900/40"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-16 flex flex-col items-center text-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-md mb-8"
          >
            <Briefcase className="w-4 h-4 text-indigo-400" />
            <span className="text-sm font-medium tracking-wide uppercase text-indigo-100">Recruitment Process Outsourcing</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-medium text-5xl md:text-7xl leading-tight tracking-tight mb-8 max-w-4xl"
          >
            End-to-End Enterprise <span className="font-light italic text-indigo-400">Outsourcing</span>.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-300 font-light max-w-3xl mb-12 leading-relaxed"
          >
            We deploy a dedicated recruiting tech stack and talent acquisition team to operate seamlessly under your corporate brand. Scale effortlessly.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-6"
          >
            <Link
              to="/contact"
              className="h-14 px-8 rounded-full bg-white text-slate-900 font-bold text-sm flex items-center justify-center gap-2 transition-all hover:bg-indigo-50 hover:scale-105"
            >
              <span>Partner for RPO Solutions</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/about"
              className="h-14 px-8 rounded-full border border-white/20 text-white font-bold text-sm flex items-center justify-center gap-2 transition-all hover:bg-white/10"
            >
              <span>View Case Studies</span>
            </Link>
          </motion.div>
        </div>

        {/* Floating KPI Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative z-20 max-w-[1000px] mx-auto mt-20 px-6"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl divide-y md:divide-y-0 md:divide-x divide-white/10">
            {[
              { label: "Cost Reduction", val: "Up to 35%" },
              { label: "Time to Fill", val: "-40% Days" },
              { label: "Quality of Hire", val: "+95% Ret." },
              { label: "Scalability", val: "Infinite" },
            ].map((stat, i) => (
              <div key={i} className="p-8 text-center flex flex-col justify-center items-center">
                <span className="font-display font-light text-3xl md:text-4xl text-white mb-2">{stat.val}</span>
                <span className="text-xs font-bold tracking-widest text-indigo-300 uppercase">{stat.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════
          2. VERTICAL INTERACTIVE TIMELINE
      ═══════════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Left: Interactive Timeline UI */}
            <div className="w-full lg:w-1/2 flex flex-col">
              <div className="mb-12">
                <h2 className="font-display font-black text-3xl text-slate-900 mb-3 tracking-tight">The Implementation Engine</h2>
                <p className="text-base text-slate-500">A structured, four-phase approach to taking over and optimizing your recruitment pipeline.</p>
              </div>

              <div className="flex flex-col">
                {rpoSteps.map((step, idx) => (
                  <TimelineItem 
                    key={idx}
                    step={step.step}
                    title={step.title}
                    desc={step.desc}
                    icon={step.icon}
                    isActive={activeStep === idx + 1}
                    onClick={() => setActiveStep(idx + 1)}
                    isLast={idx === rpoSteps.length - 1}
                  />
                ))}
              </div>
            </div>

            {/* Right: Dynamic Image Display */}
            <div className="w-full lg:w-1/2 lg:sticky lg:top-32 self-start h-[450px]">
              <div className="w-full h-full rounded-[2rem] overflow-hidden bg-slate-100 relative shadow-xl">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeStep}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6 }}
                    className="absolute inset-0"
                  >
                    <img 
                      src={rpoSteps[activeStep - 1].img} 
                      alt={rpoSteps[activeStep - 1].title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                    
                    {/* Image Caption overlay */}
                    <div className="absolute bottom-8 left-8 right-8">
                      <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl">
                        <div className="flex items-center gap-3 mb-2">
                          <BarChart3 className="w-5 h-5 text-indigo-300" />
                          <span className="text-white font-bold tracking-widest text-xs uppercase">Phase {activeStep} Metric</span>
                        </div>
                        <p className="text-white/90 font-light">
                          {activeStep === 1 && "Baseline metrics established for cost-per-hire optimization."}
                          {activeStep === 2 && "ATS integration complete with branded career portals live."}
                          {activeStep === 3 && "Sourcing velocity increased by 300% through dedicated pods."}
                          {activeStep === 4 && "Real-time dashboard reflecting 35% reduction in total spend."}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          3. RPO ENGAGEMENT MODELS
      ═══════════════════════════════════════════ */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="font-display font-black text-3xl md:text-5xl text-slate-900 mb-6 tracking-tight">Flexible Engagement Models</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Whether you need to outsource your entire recruitment department or just need targeted support for a specific initiative, we have a model that fits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Globe2,
                title: "End-to-End Enterprise RPO",
                desc: "Complete transfer of your recruitment operations. We handle everything from employer branding to onboarding, acting as your internal HR.",
                features: ["Full Lifecycle Management", "Employer Branding", "Dedicated Talent Acquisition Pods", "Advanced Tech Stack Included"]
              },
              {
                icon: Layers,
                title: "Project-Based RPO",
                desc: "Ideal for sudden volume hiring, new market expansions, or launching new business units. Scalable support for a defined period.",
                features: ["Defined Scope & Timeline", "Rapid Team Mobilization", "Volume Hiring Expertise", "Cost-Per-Hire Optimization"]
              },
              {
                icon: Zap,
                title: "Recruiter On-Demand",
                desc: "Augment your existing HR team with our expert recruiters. Flexible, month-to-month dedicated recruitment professionals.",
                features: ["Zero Setup Time", "Flexible Monthly Contracts", "Plugs into your existing ATS", "Industry-Specific Recruiters"]
              }
            ].map((model, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-white rounded-3xl p-10 border border-slate-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="w-16 h-16 rounded-2xl bg-indigo-50 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                  <model.icon className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="font-display font-bold text-2xl text-slate-900 mb-4">{model.title}</h3>
                <p className="text-slate-600 mb-8 leading-relaxed h-24">{model.desc}</p>
                
                <div className="h-px w-full bg-slate-100 mb-8"></div>
                
                <ul className="space-y-4">
                  {model.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0 mt-0.5" />
                      <span className="text-slate-700 font-medium text-sm">{feat}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          4. TECHNOLOGY STACK
      ═══════════════════════════════════════════ */}
      <section className="pt-24 pb-48 bg-[#0A1128] text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay z-0"></div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-[1440px] mx-auto px-6 lg:px-16 relative z-10 flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 mb-6">
                <Cpu className="w-4 h-4 text-indigo-400" />
                <span className="text-xs font-bold tracking-widest uppercase text-indigo-200">AI-Powered Tech Stack</span>
              </div>
              <h2 className="font-display font-black text-3xl md:text-5xl text-white mb-6 leading-tight">
                Recruitment, supercharged by <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Next-Gen Tech</span>.
              </h2>
              <p className="text-lg text-slate-300 leading-relaxed mb-8 max-w-xl">
                We bring our own enterprise-grade technology stack to your recruitment process. From AI-driven candidate sourcing to automated video interviewing, we ensure maximum efficiency and an elite candidate experience.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center gap-4 bg-white/5 border border-white/10 p-4 rounded-2xl backdrop-blur-sm">
                  <Laptop className="w-8 h-8 text-indigo-400" />
                  <span className="font-semibold">Premium ATS Integration</span>
                </div>
                <div className="flex items-center gap-4 bg-white/5 border border-white/10 p-4 rounded-2xl backdrop-blur-sm">
                  <BarChart3 className="w-8 h-8 text-cyan-400" />
                  <span className="font-semibold">Predictive Analytics</span>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="w-full lg:w-1/2 h-[500px] relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full h-full rounded-3xl overflow-hidden border border-slate-700 shadow-2xl relative"
            >
              <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200" alt="Tech Stack Data" className="w-full h-full object-cover mix-blend-luminosity opacity-40" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128] to-transparent"></div>
              
              <div className="absolute bottom-10 left-10 right-10">
                <div className="bg-[#0F172A]/80 backdrop-blur-xl border border-slate-700 p-6 rounded-2xl">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-slate-300 font-medium">AI Sourcing Engine</span>
                    <span className="text-emerald-400 font-bold">Active</span>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-2 mb-2">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: "85%" }}
                      transition={{ duration: 1.5, delay: 0.5 }}
                      className="bg-gradient-to-r from-indigo-500 to-cyan-400 h-2 rounded-full"
                    ></motion.div>
                  </div>
                  <span className="text-xs text-slate-400">Scanning 1.2M+ passive candidates...</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
}
