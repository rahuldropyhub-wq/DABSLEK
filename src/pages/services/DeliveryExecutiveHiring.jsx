import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MapPin, ShieldCheck, Clock, ArrowRight, CheckCircle2, Bike, Target, BarChart, FileCheck, Zap, Navigation, Activity, Map } from 'lucide-react';
import { Link } from 'react-router-dom';

const FadeIn = ({ children, delay = 0, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    className={className}
  >
    {children}
  </motion.div>
);

export default function DeliveryExecutiveHiring() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const pipelineY = useTransform(scrollYProgress, [0, 1], [0, 300]);

  return (
    <div className="bg-[#050A15] min-h-screen overflow-x-hidden font-sans selection:bg-cyan-500/30">
      
      {/* ═══════════════════════════════════════════
          1. CINEMATIC HERO & GLASS DASHBOARD
      ═══════════════════════════════════════════ */}
      <section className="relative pt-32 pb-32 lg:pt-48 lg:pb-40 overflow-hidden text-white">
        {/* Dynamic Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-indigo-600/20 rounded-[100%] blur-[120px] opacity-70 animate-pulse"></div>
          <div className="absolute top-40 right-[-10%] w-[600px] h-[600px] bg-cyan-600/20 rounded-[100%] blur-[100px] opacity-50"></div>
          {/* Subtle Grid */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA0MCAwIEwgMCAwIDAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] z-0"></div>
        </div>

        <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-16 flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-[45%]">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 mb-8 backdrop-blur-md">
                <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>
                <span className="text-xs font-bold tracking-widest uppercase text-cyan-300">Intelligent Fleet Scaling</span>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.1}>
              <h1 className="font-display font-black text-5xl sm:text-7xl leading-[1.05] tracking-tight mb-6">
                Dominate the <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400">Last Mile.</span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-xl text-slate-400 mb-10 max-w-xl leading-relaxed font-light">
                Enterprise-grade recruitment for Quick Commerce and Food Tech. We deploy verified, hyperlocal delivery personnel exactly where your operations demand them.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <Link
                to="/contact"
                className="relative group inline-flex h-14 px-8 rounded-full bg-white text-[#050A15] font-bold text-base items-center justify-center gap-3 overflow-hidden transition-all hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <span className="relative z-10 group-hover:text-white transition-colors">Deploy Fleet Today</span>
                <ArrowRight className="w-5 h-5 relative z-10 group-hover:text-white transition-colors" />
              </Link>
            </FadeIn>
          </div>

          <div className="w-full lg:w-[55%]">
            {/* Glassmorphic Dashboard UI */}
            <FadeIn delay={0.4} className="relative z-10">
              <div className="bg-[#0A1128]/60 backdrop-blur-2xl rounded-3xl border border-white/10 shadow-[0_0_80px_rgba(79,70,229,0.3)] overflow-hidden">
                {/* Dashboard Header */}
                <div className="flex items-center justify-between p-4 border-b border-white/5 bg-white/5">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                  </div>
                  <div className="text-xs font-mono text-cyan-400 flex items-center gap-2">
                    <Activity className="w-4 h-4" /> LIVE TELEMETRY
                  </div>
                </div>

                {/* Dashboard Content */}
                <div className="p-8 grid grid-cols-2 gap-6 relative">
                  {/* Glowing core in center of dashboard */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-cyan-500/20 rounded-full blur-[60px]"></div>

                  {/* Stat Card 1 */}
                  <motion.div 
                    whileHover={{ y: -5 }}
                    className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/10 rounded-bl-full"></div>
                    <Bike className="w-8 h-8 text-cyan-400 mb-4" />
                    <p className="text-sm text-slate-400 font-medium tracking-wide mb-1">ACTIVE DEPLOYMENTS</p>
                    <p className="text-4xl font-black text-white font-display">4,250<span className="text-lg text-cyan-400 ml-1">+</span></p>
                  </motion.div>

                  {/* Stat Card 2 */}
                  <motion.div 
                    whileHover={{ y: -5 }}
                    className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/10 rounded-bl-full"></div>
                    <Zap className="w-8 h-8 text-indigo-400 mb-4" />
                    <p className="text-sm text-slate-400 font-medium tracking-wide mb-1">AVERAGE DEPLOYMENT</p>
                    <p className="text-4xl font-black text-white font-display">48<span className="text-lg text-slate-500 font-normal ml-1">Hrs</span></p>
                  </motion.div>

                  {/* Long Stat Card */}
                  <motion.div 
                    whileHover={{ y: -5 }}
                    className="col-span-2 bg-gradient-to-r from-cyan-500/10 to-indigo-500/10 border border-cyan-500/20 rounded-2xl p-6 backdrop-blur-md flex items-center justify-between"
                  >
                    <div>
                      <p className="text-sm text-cyan-200 font-medium tracking-wide mb-1">PINCODE COVERAGE</p>
                      <div className="flex items-center gap-3">
                        <MapPin className="w-6 h-6 text-cyan-400" />
                        <p className="text-3xl font-black text-white font-display">98.5%</p>
                      </div>
                    </div>
                    <div className="w-32 h-16 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjUwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwb2x5bGluZSBwb2ludHM9IjAsNTAgMjAsNDAgNDAsNDUgNjAsMjAgODAsMzAgMTAwLDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzIyZDNlZSIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9zdmc+')] bg-no-repeat bg-center bg-contain opacity-70"></div>
                  </motion.div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          2. THE LOGISTICS PIPELINE (INTERACTIVE)
      ═══════════════════════════════════════════ */}
      <section className="py-32 bg-[#030610] relative border-t border-white/5" ref={containerRef}>
        {/* Glow Line Background */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-white/5 hidden md:block"></div>
        <motion.div 
          className="absolute left-1/2 -translate-x-1/2 top-0 w-1 h-32 bg-gradient-to-b from-cyan-400 to-transparent hidden md:block"
          style={{ y: pipelineY }}
        />

        <div className="max-w-[1200px] mx-auto px-6 lg:px-16">
          <FadeIn className="text-center mb-24">
            <h2 className="font-display font-black text-4xl sm:text-5xl text-white mb-6 tracking-tight">The Delivery Pipeline</h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              A high-velocity recruitment machine built specifically to counter attrition and handle massive volume.
            </p>
          </FadeIn>

          <div className="space-y-12 md:space-y-0 relative">
            
            {/* Step 1 */}
            <div className="flex flex-col md:flex-row items-center justify-between group">
              <div className="w-full md:w-[45%] md:text-right pr-0 md:pr-12 mb-6 md:mb-0">
                <FadeIn delay={0.1}>
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:border-cyan-500/30 transition-all">
                    <Navigation className="w-10 h-10 text-cyan-400 mb-6 md:ml-auto" />
                    <h3 className="font-display font-bold text-2xl text-white mb-3">Hyperlocal Mapping</h3>
                    <p className="text-slate-400 leading-relaxed">
                      We map delivery personnel to exact pincodes. By keeping riders in neighborhoods they know intimately, we drastically reduce delivery times.
                    </p>
                  </div>
                </FadeIn>
              </div>
              <div className="hidden md:flex w-16 h-16 rounded-full bg-[#050A15] border-2 border-white/10 items-center justify-center z-10 group-hover:border-cyan-400 transition-colors">
                <div className="w-4 h-4 rounded-full bg-slate-600 group-hover:bg-cyan-400 group-hover:shadow-[0_0_15px_#22d3ee] transition-all"></div>
              </div>
              <div className="w-full md:w-[45%] pl-0 md:pl-12"></div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col md:flex-row-reverse items-center justify-between group md:-mt-12">
              <div className="w-full md:w-[45%] md:text-left pl-0 md:pl-12 mb-6 md:mb-0">
                <FadeIn delay={0.2}>
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:border-indigo-500/30 transition-all">
                    <Target className="w-10 h-10 text-indigo-400 mb-6" />
                    <h3 className="font-display font-bold text-2xl text-white mb-3">Volume Scalability</h3>
                    <p className="text-slate-400 leading-relaxed">
                      Whether you need 50 executives for a new dark store or 5,000 for a festive season peak, our pipeline is always primed and active.
                    </p>
                  </div>
                </FadeIn>
              </div>
              <div className="hidden md:flex w-16 h-16 rounded-full bg-[#050A15] border-2 border-white/10 items-center justify-center z-10 group-hover:border-indigo-400 transition-colors">
                <div className="w-4 h-4 rounded-full bg-slate-600 group-hover:bg-indigo-400 group-hover:shadow-[0_0_15px_#818cf8] transition-all"></div>
              </div>
              <div className="w-full md:w-[45%] pr-0 md:pr-12"></div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col md:flex-row items-center justify-between group md:-mt-12">
              <div className="w-full md:w-[45%] md:text-right pr-0 md:pr-12">
                <FadeIn delay={0.3}>
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:border-purple-500/30 transition-all">
                    <Clock className="w-10 h-10 text-purple-400 mb-6 md:ml-auto" />
                    <h3 className="font-display font-bold text-2xl text-white mb-3">Dynamic Shift Management</h3>
                    <p className="text-slate-400 leading-relaxed">
                      Part-time, full-time, and weekend-only models available to perfectly match your peak demand hours and retail sales spikes.
                    </p>
                  </div>
                </FadeIn>
              </div>
              <div className="hidden md:flex w-16 h-16 rounded-full bg-[#050A15] border-2 border-white/10 items-center justify-center z-10 group-hover:border-purple-400 transition-colors">
                <div className="w-4 h-4 rounded-full bg-slate-600 group-hover:bg-purple-400 group-hover:shadow-[0_0_15px_#c084fc] transition-all"></div>
              </div>
              <div className="w-full md:w-[45%] pl-0 md:pl-12"></div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          2.5 REAL-TIME FLEET ANALYTICS (NEW IMAGE SECTION)
      ═══════════════════════════════════════════ */}
      <section className="py-32 bg-[#050A15] border-t border-white/5 relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
            
            {/* Text Content */}
            <div className="w-full lg:w-1/2">
              <FadeIn>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 mb-8">
                  <BarChart className="w-4 h-4 text-indigo-400" />
                  <span className="text-xs font-bold tracking-widest uppercase text-indigo-300">Fleet Performance Intelligence</span>
                </div>
                <h2 className="font-display font-black text-4xl sm:text-5xl text-white mb-6 tracking-tight">Data-Driven Logistics.</h2>
                <p className="text-xl text-slate-400 mb-8 leading-relaxed font-light">
                  We don't just supply executives; we provide actionable intelligence. Gain complete visibility into your logistics workforce with our real-time telemetry and performance tracking systems.
                </p>
                <ul className="space-y-6">
                  <li className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                      <Map className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-xl mb-1">Route & Delivery Optimization</h4>
                      <p className="text-slate-400 leading-relaxed">Ensure your executives are taking the most efficient paths to maximize successful deliveries per hour.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                      <Activity className="w-6 h-6 text-indigo-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-xl mb-1">Live Attrition Forecasting</h4>
                      <p className="text-slate-400 leading-relaxed">Predictive models identify flight-risk employees so our pipeline automatically scales replacements before gaps occur.</p>
                    </div>
                  </li>
                </ul>
              </FadeIn>
            </div>

            {/* Image Content */}
            <div className="w-full lg:w-1/2">
              <FadeIn delay={0.2}>
                <div className="relative rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(79,70,229,0.15)] group">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050A15]/80 via-transparent to-transparent z-10 pointer-events-none"></div>
                  <img 
                    src="/fleet_performance.jpg" 
                    alt="Data Analytics Dashboard" 
                    className="w-full h-full object-cover aspect-video md:aspect-square lg:aspect-[4/3] group-hover:scale-105 transition-transform duration-1000"
                  />
                  {/* Floating glass overlay */}
                  <div className="absolute bottom-8 left-8 right-8 z-20 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl flex items-center justify-between">
                    <div>
                      <p className="text-cyan-300 font-bold text-sm tracking-widest mb-1 uppercase">Daily Efficiency</p>
                      <p className="text-3xl font-black text-white">+24.5%</p>
                    </div>
                    <div className="w-16 h-16 rounded-full bg-cyan-500/20 flex items-center justify-center border border-cyan-400/30">
                      <BarChart className="w-8 h-8 text-cyan-400" />
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          3. ULTRA-PREMIUM BGV SECTION
      ═══════════════════════════════════════════ */}
      <section className="py-32 bg-[#0A1128] relative overflow-hidden">
        {/* Abstract Background Shapes */}
        <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-indigo-600/10 rounded-full blur-[150px] pointer-events-none"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-emerald-600/10 rounded-full blur-[150px] pointer-events-none"></div>

        <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="w-full lg:w-1/2">
              <FadeIn>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 mb-8">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs font-bold tracking-widest uppercase text-emerald-300">Military-Grade Compliance</span>
                </div>
                <h2 className="font-display font-black text-4xl sm:text-5xl text-white mb-6 tracking-tight">Zero-Compromise Security.</h2>
                <p className="text-xl text-slate-400 mb-10 leading-relaxed font-light">
                  Frontline logistics require absolute trust. Every delivery executive deployed undergoes a multi-tiered, cryptographic Background Verification (BGV) process.
                </p>
                
                <div className="space-y-4">
                  {[
                    "Comprehensive Police Verification Records",
                    "Aadhar ID & Biometric Cross-check",
                    "RTO Driving License Authentication",
                    "Previous Employer Reference Trace"
                  ].map((item, idx) => (
                    <FadeIn key={idx} delay={0.1 * idx}>
                      <div className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-emerald-500/10 hover:border-emerald-500/30 transition-all group cursor-default">
                        <div className="w-10 h-10 rounded-lg bg-black/50 flex items-center justify-center border border-white/5 group-hover:border-emerald-500/50 transition-all">
                          <CheckCircle2 className="w-5 h-5 text-slate-500 group-hover:text-emerald-400 transition-colors" />
                        </div>
                        <span className="text-slate-300 font-medium group-hover:text-white transition-colors">{item}</span>
                      </div>
                    </FadeIn>
                  ))}
                </div>
              </FadeIn>
            </div>
            
            <div className="w-full lg:w-1/2">
              <FadeIn delay={0.3}>
                <div className="bg-[#030610] rounded-3xl p-1 relative overflow-hidden group">
                  {/* Glowing animated border effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-indigo-500 to-emerald-500 opacity-50 blur-xl group-hover:opacity-100 transition-opacity duration-1000 animate-pulse"></div>
                  
                  <div className="relative bg-[#050A15] rounded-[1.4rem] p-10 md:p-14 h-full border border-white/10">
                    <FileCheck className="w-16 h-16 text-emerald-400 mb-8" />
                    <h3 className="font-display font-bold text-4xl text-white mb-6">100% Audit Ready</h3>
                    <p className="text-lg text-slate-400 leading-relaxed mb-10">
                      We maintain immutable digital dossiers for every deployed executive, instantly accessible to your compliance teams. You assume zero liability.
                    </p>
                    
                    <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-6 flex items-center justify-between">
                      <div>
                        <p className="text-emerald-400 font-bold text-sm tracking-widest mb-1">SYSTEM STATUS</p>
                        <p className="text-white font-mono">SECURE & VERIFIED</p>
                      </div>
                      <div className="w-3 h-3 rounded-full bg-emerald-400 shadow-[0_0_15px_#34d399] animate-pulse"></div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          4. IMMERSIVE CTA SECTION
      ═══════════════════════════════════════════ */}
      <section className="pt-32 pb-48 bg-[#050A15] relative overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-cyan-600/20 to-indigo-600/20 rounded-full blur-[120px] pointer-events-none"></div>
        </div>

        <div className="relative z-10 max-w-[1000px] mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="font-display font-black text-5xl sm:text-6xl text-white mb-8 tracking-tight leading-tight">
              Stop bleeding talent. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">Start scaling.</span>
            </h2>
            <p className="text-xl text-slate-400 mb-12 leading-relaxed max-w-2xl mx-auto font-light">
              Partner with DABSLEK to lock in a robust, verified, and infinitely scalable pipeline of delivery executives for your operations.
            </p>
            <Link
              to="/contact"
              className="inline-flex h-16 px-10 rounded-full bg-white text-[#050A15] font-bold text-lg items-center justify-center gap-3 transition-all hover:bg-cyan-50 hover:shadow-[0_0_40px_rgba(34,211,238,0.4)] hover:-translate-y-1"
            >
              <span>Deploy Your Fleet Now</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </FadeIn>
        </div>
      </section>

    </div>
  );
}
