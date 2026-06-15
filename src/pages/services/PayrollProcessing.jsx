import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calculator, ShieldCheck, FileText, ArrowRight, Wallet, PieChart, CheckCircle, Database } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PayrollProcessing() {
  const [activeModule, setActiveModule] = useState(null);

  const modules = [
    {
      id: "processing",
      icon: Calculator,
      title: "Core Processing",
      desc: "End-to-end salary calculations, attendance integrations, and direct bank transfers with 100% accuracy.",
      color: "bg-blue-500",
      features: ["Arrears & Overtime", "Multi-state Compliance", "Leave Deductions"]
    },
    {
      id: "statutory",
      icon: ShieldCheck,
      title: "Statutory Compliance",
      desc: "We handle all PF, ESI, PT, and TDS calculations, filings, and remit payments to respective government bodies.",
      color: "bg-indigo-500",
      features: ["Form 16 Generation", "Labor Law Compliance", "Audit Ready Records"]
    },
    {
      id: "taxes",
      icon: PieChart,
      title: "Tax Management",
      desc: "Automated income tax calculations, investment proof validations, and year-end tax returns for all employees.",
      color: "bg-sky-500",
      features: ["Flexible Benefit Plans", "Investment Declarations", "TDS Returns"]
    },
    {
      id: "reports",
      icon: FileText,
      title: "Data & Reporting",
      desc: "Customizable MIS reports, payroll registers, bank advice, and comprehensive dashboards for your finance team.",
      color: "bg-cyan-500",
      features: ["Custom Export Formats", "Variance Reports", "General Ledger Integration"]
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen overflow-x-hidden font-sans">
      
      {/* ═══════════════════════════════════════════
          1. FINTECH HERO SECTION
      ═══════════════════════════════════════════ */}
      <section className="relative pt-32 pb-24 overflow-hidden bg-[#0A1128] text-white">
        
        {/* Subtle Fintech Grid Background */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay z-0"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] z-0"></div>
        
        {/* Glowing Orbs */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px] z-0"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-sky-500/10 rounded-full blur-[100px] z-0"></div>

        <div className="max-w-[1440px] mx-auto px-6 lg:px-16 relative z-10 flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Content */}
          <div className="w-full lg:w-1/2 flex flex-col items-start">
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-900/50 border border-blue-500/30 mb-8"
            >
              <Database className="w-4 h-4 text-blue-400" />
              <span className="text-xs font-bold tracking-widest uppercase text-blue-200">Zero-Error Financial Operations</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display font-medium text-5xl md:text-6xl lg:text-[4.5rem] leading-[1.1] tracking-tight mb-6"
            >
              Flawless <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-sky-300 font-bold">Payroll Processing</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-slate-300 mb-10 max-w-lg leading-relaxed font-light"
            >
              Automate your entire payroll lifecycle. Absolute compliance, secure data management, and on-time disbursements every single month.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
              <Link
                to="/contact"
                className="h-14 px-8 rounded-xl bg-blue-500 text-white font-bold text-sm flex items-center justify-center gap-2 transition-all hover:bg-blue-400 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]"
              >
                <Wallet className="w-5 h-5" />
                <span>Outsource Payroll</span>
              </Link>
              <Link
                to="/about"
                className="h-14 px-8 rounded-xl bg-white/5 border border-white/10 text-white font-bold text-sm flex items-center justify-center gap-2 transition-all hover:bg-white/10"
              >
                <span>View Compliance Stack</span>
              </Link>
            </motion.div>
          </div>

          {/* Right Visual: Dashboard UI Mockup */}
          <div className="w-full lg:w-1/2 relative h-[500px] hidden md:block">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute right-0 top-0 w-[600px] h-[450px] bg-[#0F172A] rounded-2xl border border-slate-700 shadow-2xl overflow-hidden z-20"
            >
              {/* Fake UI Header */}
              <div className="h-14 border-b border-slate-700 bg-slate-800/50 flex items-center px-6 gap-4">
                <div className="w-3 h-3 rounded-full bg-rose-500"></div>
                <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                <div className="ml-auto w-32 h-6 bg-slate-700 rounded-md"></div>
              </div>
              {/* Fake UI Body */}
              <div className="p-8 flex flex-col gap-6">
                <div className="flex gap-6">
                  <div className="w-1/3 h-24 bg-blue-500/10 border border-blue-500/20 rounded-xl p-4 flex flex-col justify-between">
                    <span className="text-slate-400 text-xs font-bold uppercase">Total Payroll</span>
                    <span className="text-blue-400 font-mono text-2xl font-bold">₹12.4M</span>
                  </div>
                  <div className="w-1/3 h-24 bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-4 flex flex-col justify-between">
                    <span className="text-slate-400 text-xs font-bold uppercase">TDS Remitted</span>
                    <span className="text-emerald-400 font-mono text-2xl font-bold">₹1.8M</span>
                  </div>
                  <div className="w-1/3 h-24 bg-indigo-500/10 border border-indigo-500/20 rounded-xl p-4 flex flex-col justify-between">
                    <span className="text-slate-400 text-xs font-bold uppercase">Compliance Score</span>
                    <span className="text-indigo-400 font-mono text-2xl font-bold">100%</span>
                  </div>
                </div>
                
                <div className="w-full h-40 bg-slate-800/50 border border-slate-700 rounded-xl p-4 flex items-end gap-2">
                  {[40, 60, 45, 80, 55, 90, 70].map((h, i) => (
                    <div key={i} className="flex-1 bg-gradient-to-t from-blue-600 to-sky-400 rounded-sm" style={{ height: `${h}%` }}></div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Floating Glass Card - Security */}
            <motion.div 
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-10 top-20 bg-[#1E293B]/80 backdrop-blur-xl p-5 rounded-xl border border-slate-600 shadow-2xl z-30"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm mb-0.5">ISO 27001</h4>
                  <p className="text-slate-400 text-xs">Data Security Certified</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          2. DASHBOARD MODULE GRID
      ═══════════════════════════════════════════ */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="font-display font-black text-3xl md:text-5xl text-slate-900 mb-6 tracking-tight">Comprehensive Payroll Modules</h2>
            <p className="text-lg text-slate-600">We don't just calculate salaries; we manage the entire financial and statutory ecosystem surrounding your employees.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {modules.map((mod, idx) => (
              <motion.div 
                key={mod.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                onMouseEnter={() => setActiveModule(mod.id)}
                onMouseLeave={() => setActiveModule(null)}
                className={`relative overflow-hidden bg-white border border-slate-200 rounded-2xl p-8 transition-all duration-300 cursor-pointer ${activeModule === mod.id ? 'shadow-xl border-blue-200 -translate-y-1' : 'shadow-sm hover:shadow-md'}`}
              >
                {/* Background glow on hover */}
                <div className={`absolute -top-10 -right-10 w-32 h-32 rounded-full blur-2xl transition-opacity duration-300 ${activeModule === mod.id ? 'opacity-20' : 'opacity-0'} ${mod.color}`}></div>
                
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300 ${activeModule === mod.id ? mod.color : 'bg-slate-100'}`}>
                  <mod.icon className={`w-7 h-7 transition-colors duration-300 ${activeModule === mod.id ? 'text-white' : 'text-slate-600'}`} />
                </div>
                
                <h3 className="font-display font-bold text-2xl text-slate-900 mb-3">{mod.title}</h3>
                <p className="text-slate-600 mb-6 text-sm leading-relaxed min-h-[80px]">{mod.desc}</p>
                
                <ul className="flex flex-col gap-2">
                  {mod.features.map((feat, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                      <CheckCircle className={`w-4 h-4 ${activeModule === mod.id ? 'text-blue-500' : 'text-slate-300'}`} />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          3. COMPLIANCE BANNER
      ═══════════════════════════════════════════ */}
      <section className="py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
          <div className="bg-gradient-to-br from-[#0F172A] to-[#1E293B] rounded-[2rem] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12 shadow-2xl relative overflow-hidden">
            
            {/* Background pattern */}
            <div className="absolute right-0 top-0 w-1/2 h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>

            <div className="w-full md:w-2/3 relative z-10">
              <h2 className="font-display font-black text-3xl md:text-4xl text-white mb-4">Never worry about labor laws again.</h2>
              <p className="text-slate-300 text-lg leading-relaxed max-w-xl">
                Statutory compliances in India are complex and constantly changing. Our dedicated legal and payroll experts ensure your company remains 100% compliant with PF, ESI, PT, and LWF regulations across all states.
              </p>
            </div>
            
            <div className="w-full md:w-1/3 relative z-10 flex justify-start md:justify-end">
              <div className="w-48 h-48 rounded-full border-[8px] border-blue-500/20 flex flex-col items-center justify-center relative">
                <svg className="absolute inset-0 w-full h-full -rotate-90">
                  <circle cx="50%" cy="50%" r="46%" fill="transparent" stroke="#3B82F6" strokeWidth="8" strokeDasharray="100 100" strokeLinecap="round" />
                </svg>
                <span className="font-display font-black text-5xl text-white">100<span className="text-2xl text-blue-400">%</span></span>
                <span className="text-xs font-bold tracking-widest text-slate-400 uppercase mt-1">Compliant</span>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
