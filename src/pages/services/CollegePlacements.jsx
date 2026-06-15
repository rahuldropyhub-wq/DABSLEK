import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, CheckCircle, Users, GraduationCap, Building2, CalendarSync } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CollegePlacements() {
  const steps = [
    { title: "Sourcing & Scoping", desc: "We identify accredited institutions matching your talent criteria." },
    { title: "Outreach & Dates", desc: "We secure drive dates and coordinate directly with university placement cells." },
    { title: "Pre-Placement & Tests", desc: "We host online webinars and conduct automated aptitude screenings." },
    { title: "Interviews & Offers", desc: "Live interview coordination leading to immediate offer generation." }
  ];

  return (
    <div className="bg-white min-h-screen overflow-x-hidden">
      
      {/* ═══════════════════════════════════════════
          1. ENERGETIC HERO SECTION
      ═══════════════════════════════════════════ */}
      <section className="relative pt-32 pb-32 overflow-hidden bg-white">
        
        {/* Dynamic Vibrant Gradient Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute -top-[10%] -left-[10%] w-[60%] h-[60%] rounded-full bg-fuchsia-400/20 blur-[120px] mix-blend-multiply" />
          <div className="absolute top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-cyan-400/20 blur-[120px] mix-blend-multiply" />
          <div className="absolute -bottom-[20%] left-[20%] w-[70%] h-[70%] rounded-full bg-yellow-400/20 blur-[120px] mix-blend-multiply" />
        </div>

        <div className="max-w-[1440px] mx-auto px-6 lg:px-16 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            
            {/* Left Content */}
            <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-fuchsia-100 to-cyan-100 border border-white/50 shadow-sm mb-8"
              >
                <GraduationCap className="w-5 h-5 text-fuchsia-600" />
                <span className="text-sm font-bold tracking-widest uppercase bg-gradient-to-r from-fuchsia-600 to-cyan-600 bg-clip-text text-transparent">Campus Sourcing</span>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-display font-black text-5xl lg:text-7xl text-slate-900 leading-[1.1] tracking-tight mb-6"
              >
                Launch Careers.<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 via-purple-600 to-cyan-500">Hire at Scale.</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl text-slate-600 mb-10 max-w-xl leading-relaxed font-medium"
              >
                We coordinate massive university recruitment campaigns to help you secure the brightest graduating talent before your competitors do.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Link
                  to="/contact"
                  className="group relative inline-flex items-center justify-center h-16 px-10 rounded-full bg-slate-900 text-white font-bold text-lg overflow-hidden shadow-2xl transition-all hover:scale-105 hover:shadow-cyan-500/25"
                >
                  <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-fuchsia-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative z-10 flex items-center gap-3">
                    Coordinate a Drive <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </motion.div>
            </div>

            {/* Right Visual: Floating Glassmorphism Cards */}
            <div className="w-full lg:w-1/2 relative h-[500px] lg:h-[600px] hidden md:block">
              {/* Card 3 (Main Background Image) */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0 }}
                className="absolute right-0 top-1/2 -translate-y-1/2 w-[90%] h-[90%] rounded-[3rem] overflow-hidden shadow-2xl z-10 border border-slate-100"
              >
                <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1200" alt="Graduation" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-tr from-fuchsia-900/20 to-transparent"></div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          2. MASONRY GRID UX
      ═══════════════════════════════════════════ */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="font-display font-black text-4xl lg:text-5xl text-slate-900 mb-6">Mastering the Campus Drive</h2>
            <p className="text-xl text-slate-600">Hiring freshers requires massive coordination. We handle the logistics so you can focus on making offers.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 max-w-6xl mx-auto">
            
            {/* Large Feature 1 */}
            <div className="md:col-span-8 rounded-[2rem] bg-white border border-slate-200 p-10 flex flex-col justify-between overflow-hidden relative group shadow-sm hover:shadow-xl transition-shadow">
              <div className="absolute top-0 right-0 w-64 h-64 bg-fuchsia-50 rounded-bl-full -z-10 group-hover:scale-110 transition-transform duration-500"></div>
              <div className="mb-8">
                <div className="w-14 h-14 rounded-2xl bg-fuchsia-100 flex items-center justify-center mb-6">
                  <Building2 className="w-7 h-7 text-fuchsia-600" />
                </div>
                <h3 className="font-display font-bold text-3xl text-slate-900 mb-3">University Alliances</h3>
                <p className="text-lg text-slate-600 max-w-md">Access accredited institutions across regional tech hubs. We maintain the relationships so you don't have to.</p>
              </div>
              <img src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=800" className="w-full h-[200px] object-cover rounded-2xl" alt="University" />
            </div>

            {/* Small Feature 1 */}
            <div className="md:col-span-4 rounded-[2rem] bg-slate-900 text-white p-10 flex flex-col justify-between relative overflow-hidden group shadow-sm hover:shadow-xl transition-shadow">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div>
                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-6">
                  <Users className="w-7 h-7 text-cyan-400" />
                </div>
                <h3 className="font-display font-bold text-2xl mb-3">Bulk Scheduling</h3>
                <p className="text-slate-400">Process hundreds of fresher candidates seamlessly in single weekend drives.</p>
              </div>
            </div>

            {/* Small Feature 2 */}
            <div className="md:col-span-5 rounded-[2rem] bg-gradient-to-br from-fuchsia-600 to-purple-600 text-white p-10 flex flex-col justify-center relative overflow-hidden shadow-sm hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center mb-6">
                <CheckCircle className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-display font-bold text-2xl mb-3">Fresher Appraisals</h3>
              <p className="text-fuchsia-100">Automated aptitude, reasoning, and technical tests compiled by DABSLEK experts.</p>
            </div>

            {/* Large Feature 2 */}
            <div className="md:col-span-7 rounded-[2rem] bg-white border border-slate-200 p-10 flex flex-col md:flex-row items-center gap-8 overflow-hidden shadow-sm hover:shadow-xl transition-shadow">
              <div className="flex-1">
                <h3 className="font-display font-bold text-3xl text-slate-900 mb-3">Onboarding Webinars</h3>
                <p className="text-lg text-slate-600">Transition workshops helping graduates adapt to corporate culture before day one.</p>
              </div>
              <div className="w-full md:w-1/2 h-[200px] rounded-2xl overflow-hidden shrink-0">
                <img src="https://images.unsplash.com/photo-1515169067868-5387ec356754?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" alt="Webinar" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          3. ANIMATED STEPPER
      ═══════════════════════════════════════════ */}
      <section className="py-32 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16 text-center">
          <h2 className="font-display font-black text-4xl lg:text-5xl text-slate-900 mb-20">The Campus Placement Flow</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative max-w-5xl mx-auto">
            {/* Connecting Line for Desktop */}
            <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-1 bg-slate-100 rounded-full z-0"></div>
            
            {steps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="relative z-10 flex flex-col items-center group"
              >
                <div className="w-24 h-24 rounded-full bg-white border-4 border-slate-50 shadow-xl flex items-center justify-center text-2xl font-black text-slate-300 group-hover:border-cyan-400 group-hover:text-cyan-600 transition-all duration-300 mb-6">
                  0{idx + 1}
                </div>
                <h3 className="font-bold text-xl text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-500 leading-relaxed px-4">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
