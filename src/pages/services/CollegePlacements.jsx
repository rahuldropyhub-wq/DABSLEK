import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { GraduationCap, ArrowRight, CheckCircle2, Users, Building2, Calendar, Target, BookOpen, Search, Briefcase, Zap, Plus, Minus } from 'lucide-react';
import { Link } from 'react-router-dom';
import img1 from '../../assets/ChatGPT Image Jun 16, 2026, 04_03_56 PM.png';
import img2 from '../../assets/ChatGPT Image Jun 16, 2026, 04_04_00 PM.png';
import img3 from '../../assets/ChatGPT Image Jun 16, 2026, 04_04_03 PM.png';

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

export default function CollegePlacements() {
  const [openFaq, setOpenFaq] = useState(null);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const pipelineY = useTransform(scrollYProgress, [0, 1], [0, 400]);

  return (
    <div className="bg-white min-h-screen overflow-x-hidden font-sans selection:bg-fuchsia-500/30">
      
      {/* ═══════════════════════════════════════════
          1. CINEMATIC HERO SECTION (LIGHT THEME)
      ═══════════════════════════════════════════ */}
      <section className="relative pt-32 pb-32 lg:pt-48 lg:pb-40 overflow-hidden text-slate-900">
        {/* Dynamic Vibrant Glowing Background */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] bg-fuchsia-400/20 rounded-full blur-[120px] mix-blend-multiply animate-pulse"></div>
          <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-cyan-400/20 rounded-full blur-[120px] mix-blend-multiply"></div>
          {/* Subtle tech grid */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA0MCAwIEwgMCAwIDAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgwLDAsMCwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] z-0"></div>
        </div>

        <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-16 flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Text Content */}
          <div className="w-full lg:w-[50%]">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-fuchsia-500/30 bg-fuchsia-50 mb-8 backdrop-blur-md">
                <GraduationCap className="w-4 h-4 text-fuchsia-600" />
                <span className="text-xs font-bold tracking-widest uppercase text-fuchsia-600">Next-Gen Talent Acquisition</span>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.1}>
              <h1 className="font-display font-black text-5xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight mb-6 text-slate-900">
                Capture the <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 via-purple-600 to-cyan-500">Brightest Minds.</span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-xl text-slate-600 mb-10 max-w-xl leading-relaxed font-light">
                Enterprise-scale university recruitment. We orchestrate massive, precision-targeted campus drives to secure the top 1% of graduating talent before your competitors even arrive.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <Link
                to="/contact"
                className="group relative inline-flex h-14 px-8 rounded-full bg-slate-900 text-white font-bold text-base items-center justify-center gap-3 overflow-hidden transition-all hover:scale-105 shadow-xl hover:shadow-cyan-500/25"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <span className="relative z-10 text-white transition-colors">Launch Campus Drive</span>
                <ArrowRight className="w-5 h-5 relative z-10 text-white transition-colors" />
              </Link>
            </FadeIn>
          </div>

          {/* Right Glassmorphic UI */}
          <div className="w-full lg:w-[50%]">
            <FadeIn delay={0.4} className="relative z-10">
              <div className="bg-white/80 backdrop-blur-2xl rounded-3xl border border-slate-200 shadow-2xl overflow-hidden">
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-slate-100 bg-slate-50">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                  </div>
                  <div className="text-xs font-mono text-fuchsia-600 flex items-center gap-2">
                    <Zap className="w-4 h-4" /> LIVE RECRUITMENT FEED
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 grid grid-cols-2 gap-6 relative">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-fuchsia-100 rounded-full blur-[60px]"></div>

                  {/* Stat Card 1 */}
                  <div className="bg-white border border-slate-100 shadow-sm rounded-2xl p-6 backdrop-blur-md relative overflow-hidden group hover:border-fuchsia-300 transition-colors">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-fuchsia-50 rounded-bl-full"></div>
                    <Building2 className="w-8 h-8 text-fuchsia-600 mb-4 relative z-10" />
                    <p className="text-sm text-slate-500 font-medium tracking-wide mb-1 relative z-10">UNIVERSITIES</p>
                    <p className="text-4xl font-black text-slate-900 font-display relative z-10">150<span className="text-lg text-fuchsia-600 ml-1">+</span></p>
                  </div>

                  {/* Stat Card 2 */}
                  <div className="bg-white border border-slate-100 shadow-sm rounded-2xl p-6 backdrop-blur-md relative overflow-hidden group hover:border-cyan-300 transition-colors">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-50 rounded-bl-full"></div>
                    <Users className="w-8 h-8 text-cyan-500 mb-4 relative z-10" />
                    <p className="text-sm text-slate-500 font-medium tracking-wide mb-1 relative z-10">CANDIDATES</p>
                    <p className="text-4xl font-black text-slate-900 font-display relative z-10">10k<span className="text-lg text-slate-400 font-normal ml-1">/yr</span></p>
                  </div>

                  {/* Wide Notification Card */}
                  <div className="col-span-2 bg-gradient-to-r from-fuchsia-50 to-cyan-50 border border-fuchsia-100 rounded-2xl p-6 backdrop-blur-md flex items-center justify-between shadow-sm">
                    <div>
                      <p className="text-sm text-fuchsia-600 font-medium tracking-wide mb-1">LATEST OFFER EXTENDED</p>
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                        <p className="text-xl font-bold text-slate-900">Software Engineer II</p>
                      </div>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center border border-fuchsia-200 shadow-sm">
                      <Briefcase className="w-5 h-5 text-fuchsia-600" />
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          2. THE LOGISTICS ENGINE (LIGHT BENTO)
      ═══════════════════════════════════════════ */}
      <section className="py-24 bg-slate-50 relative border-y border-slate-200">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
          <FadeIn className="mb-16">
            <h2 className="font-display font-black text-4xl text-slate-900 mb-4 tracking-tight">Mastering the Campus Drive</h2>
            <p className="text-lg text-slate-600 max-w-2xl font-light">
              Hiring freshers requires massive coordination, automated assessments, and impeccable timing. We handle the logistics so you can focus on making offers.
            </p>
          </FadeIn>

          <div className="space-y-32 mt-10">
            
            {/* Section 1: Elite University Alliances */}
            <div className="flex flex-col lg:flex-row items-center gap-16 group">
              <div className="w-full lg:w-1/2 rounded-[2rem] overflow-hidden shadow-2xl relative border border-slate-200 bg-white">
                <div className="absolute inset-0 bg-slate-900/5 z-10 group-hover:bg-transparent transition-colors duration-500 pointer-events-none"></div>
                <img src={img1} className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-1000" alt="University Campus" />
              </div>
              <div className="w-full lg:w-1/2">
                <FadeIn>
                  <div className="w-16 h-16 rounded-2xl bg-fuchsia-50 flex items-center justify-center mb-6">
                    <Building2 className="w-8 h-8 text-fuchsia-600" />
                  </div>
                  <h3 className="font-display font-black text-4xl text-slate-900 mb-6">Elite University Alliances</h3>
                  <p className="text-xl text-slate-600 leading-relaxed font-light mb-8">
                    We secure your place at Tier-1 and Tier-2 accredited institutions across major tech hubs. Our deep-rooted relationships with placement cells guarantee priority day-zero slots for your recruitment teams.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-4 text-slate-700 font-medium"><CheckCircle2 className="w-6 h-6 text-emerald-500" /> Pan-India institutional coverage</li>
                    <li className="flex items-center gap-4 text-slate-700 font-medium"><CheckCircle2 className="w-6 h-6 text-emerald-500" /> Early-access placement negotiation</li>
                    <li className="flex items-center gap-4 text-slate-700 font-medium"><CheckCircle2 className="w-6 h-6 text-emerald-500" /> Dedicated campus brand ambassadors</li>
                  </ul>
                </FadeIn>
              </div>
            </div>

            {/* Section 2: High-Velocity Scale */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-16 group">
              <div className="w-full lg:w-1/2 rounded-[2rem] overflow-hidden shadow-2xl relative border border-slate-200 bg-white">
                <div className="absolute inset-0 bg-slate-900/5 z-10 group-hover:bg-transparent transition-colors duration-500 pointer-events-none"></div>
                <img src={img2} className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-1000" alt="Mass Scheduling" />
              </div>
              <div className="w-full lg:w-1/2">
                <FadeIn>
                  <div className="w-16 h-16 rounded-2xl bg-cyan-50 flex items-center justify-center mb-6">
                    <Users className="w-8 h-8 text-cyan-600" />
                  </div>
                  <h3 className="font-display font-black text-4xl text-slate-900 mb-6">High-Velocity Scheduling</h3>
                  <p className="text-xl text-slate-600 leading-relaxed font-light mb-8">
                    Process thousands of fresher candidates seamlessly in high-velocity weekend drives. We manage the immense logistical burden of mass-communication, venue setup, and crowd control.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-4 text-slate-700 font-medium"><CheckCircle2 className="w-6 h-6 text-cyan-500" /> Automated candidate tracking systems</li>
                    <li className="flex items-center gap-4 text-slate-700 font-medium"><CheckCircle2 className="w-6 h-6 text-cyan-500" /> Real-time attendance dashboards</li>
                    <li className="flex items-center gap-4 text-slate-700 font-medium"><CheckCircle2 className="w-6 h-6 text-cyan-500" /> End-to-end physical event management</li>
                  </ul>
                </FadeIn>
              </div>
            </div>

            {/* Section 3: Automated Screening */}
            <div className="flex flex-col lg:flex-row items-center gap-16 group">
              <div className="w-full lg:w-1/2 rounded-[2rem] overflow-hidden shadow-2xl relative border border-slate-200 bg-white">
                <div className="absolute inset-0 bg-slate-900/5 z-10 group-hover:bg-transparent transition-colors duration-500 pointer-events-none"></div>
                <img src={img3} className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-1000" alt="Automated Screening" />
              </div>
              <div className="w-full lg:w-1/2">
                <FadeIn>
                  <div className="w-16 h-16 rounded-2xl bg-purple-50 flex items-center justify-center mb-6">
                    <Target className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="font-display font-black text-4xl text-slate-900 mb-6">Precision Screening</h3>
                  <p className="text-xl text-slate-600 leading-relaxed font-light mb-8">
                    Filter the top 1% using AI-driven aptitude, logic, and coding tests compiled by DABSLEK experts. We ensure only the most technically sound candidates reach your interview panels.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-4 text-slate-700 font-medium"><CheckCircle2 className="w-6 h-6 text-purple-500" /> Custom role-specific technical assessments</li>
                    <li className="flex items-center gap-4 text-slate-700 font-medium"><CheckCircle2 className="w-6 h-6 text-purple-500" /> Highly secure proctored online environment</li>
                    <li className="flex items-center gap-4 text-slate-700 font-medium"><CheckCircle2 className="w-6 h-6 text-purple-500" /> Instant percentile ranking & filtering</li>
                  </ul>
                </FadeIn>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          3. PROFESSIONAL PROCESS GRID
      ═══════════════════════════════════════════ */}
      <section className="py-32 bg-slate-50 relative border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
          <FadeIn className="text-center mb-24">
            <h2 className="font-display font-black text-4xl sm:text-5xl text-slate-900 mb-6 tracking-tight">The Campus Pipeline</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light">
              A meticulously orchestrated 4-step framework to transition students into corporate assets.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Step 1 */}
            <FadeIn delay={0.1}>
              <div className="bg-white rounded-2xl p-10 border-t-4 border-fuchsia-500 shadow-xl relative overflow-hidden h-full group hover:-translate-y-2 transition-transform duration-500">
                <div className="absolute -right-6 -bottom-6 text-[150px] font-display font-black text-slate-50 leading-none select-none z-0 group-hover:text-fuchsia-50 transition-colors duration-500">01</div>
                <div className="relative z-10">
                  <Search className="w-10 h-10 text-fuchsia-500 mb-6" />
                  <h3 className="font-display font-bold text-2xl text-slate-900 mb-4">Sourcing & Scoping</h3>
                  <p className="text-slate-600 leading-relaxed font-light">
                    We map and identify accredited institutions matching your exact talent criteria, academic cutoffs, and geographical preferences.
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* Step 2 */}
            <FadeIn delay={0.2}>
              <div className="bg-white rounded-2xl p-10 border-t-4 border-purple-500 shadow-xl relative overflow-hidden h-full group hover:-translate-y-2 transition-transform duration-500">
                <div className="absolute -right-6 -bottom-6 text-[150px] font-display font-black text-slate-50 leading-none select-none z-0 group-hover:text-purple-50 transition-colors duration-500">02</div>
                <div className="relative z-10">
                  <Calendar className="w-10 h-10 text-purple-500 mb-6" />
                  <h3 className="font-display font-bold text-2xl text-slate-900 mb-4">Outreach & Dates</h3>
                  <p className="text-slate-600 leading-relaxed font-light">
                    We secure prime placement drive dates, coordinating directly with university placement cells to ensure maximum student attendance.
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* Step 3 */}
            <FadeIn delay={0.3}>
              <div className="bg-white rounded-2xl p-10 border-t-4 border-cyan-500 shadow-xl relative overflow-hidden h-full group hover:-translate-y-2 transition-transform duration-500">
                <div className="absolute -right-6 -bottom-6 text-[150px] font-display font-black text-slate-50 leading-none select-none z-0 group-hover:text-cyan-50 transition-colors duration-500">03</div>
                <div className="relative z-10">
                  <Zap className="w-10 h-10 text-cyan-500 mb-6" />
                  <h3 className="font-display font-bold text-2xl text-slate-900 mb-4">Pre-Placement</h3>
                  <p className="text-slate-600 leading-relaxed font-light">
                    We host massive online webinars to build brand hype, followed by secure, automated online aptitude and technical screenings.
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* Step 4 */}
            <FadeIn delay={0.4}>
              <div className="bg-white rounded-2xl p-10 border-t-4 border-emerald-500 shadow-xl relative overflow-hidden h-full group hover:-translate-y-2 transition-transform duration-500">
                <div className="absolute -right-6 -bottom-6 text-[150px] font-display font-black text-slate-50 leading-none select-none z-0 group-hover:text-emerald-50 transition-colors duration-500">04</div>
                <div className="relative z-10">
                  <CheckCircle2 className="w-10 h-10 text-emerald-500 mb-6" />
                  <h3 className="font-display font-bold text-2xl text-slate-900 mb-4">Interviews & Offers</h3>
                  <p className="text-slate-600 leading-relaxed font-light">
                    Live, multi-panel interview coordination leading directly to immediate, on-the-spot offer letter generation and candidate lock-in.
                  </p>
                </div>
              </div>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          4. IMMERSIVE CTA SECTION
      ═══════════════════════════════════════════ */}
      {/* ═══════════════════════════════════════════
          4. FAQ SECTION (REPLACED CTA)
      ═══════════════════════════════════════════ */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-fuchsia-100/50 rounded-full blur-[120px] pointer-events-none"></div>
        </div>

        <div className="relative z-10 max-w-[800px] mx-auto px-6">
          <FadeIn className="text-center mb-16">
            <h2 className="font-display font-black text-4xl sm:text-5xl text-slate-900 mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-slate-600 font-light">
              Everything you need to know about our campus placement drives.
            </p>
          </FadeIn>

          <div className="space-y-4">
            {[
              {
                q: "Which universities do you partner with?",
                a: "We have established relationships with over 150+ Tier-1 and Tier-2 engineering, management, and commerce institutions across major tech hubs in India, ensuring a diverse and highly qualified talent pool."
              },
              {
                q: "How do you ensure candidate quality?",
                a: "Our screening process is rigorous. We use AI-driven proctored assessments covering aptitude, logical reasoning, and role-specific technical skills, compiled by industry experts to filter the top 1% before they even reach your interview panels."
              },
              {
                q: "Can you handle 'Day-Zero' placements?",
                a: "Yes. Due to our deep-rooted relationships with university placement cells, we regularly secure priority Day-Zero and Day-One slots for our enterprise clients, giving you first access to the brightest minds."
              },
              {
                q: "What is the typical turnaround time for a massive drive?",
                a: "We can orchestrate a high-velocity weekend drive within 2-3 weeks of finalizing requirements. This includes scoping, university outreach, pre-placement branding webinars, and scheduling."
              }
            ].map((faq, index) => (
              <FadeIn key={index} delay={0.1 * index}>
                <div 
                  className={`bg-white border ${openFaq === index ? 'border-fuchsia-400 shadow-md' : 'border-slate-200 hover:border-slate-300 hover:shadow-sm'} rounded-2xl overflow-hidden transition-all duration-300`}
                >
                  <button 
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full px-8 py-6 flex items-center justify-between text-left focus:outline-none group"
                  >
                    <span className={`font-bold text-lg transition-colors ${openFaq === index ? 'text-fuchsia-600' : 'text-slate-900'}`}>{faq.q}</span>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${openFaq === index ? 'bg-fuchsia-100 text-fuchsia-600' : 'bg-slate-100 text-slate-500 group-hover:bg-slate-200'}`}>
                      {openFaq === index ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </div>
                  </button>
                  <AnimatePresence>
                    {openFaq === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="px-8 pb-6 text-slate-600 leading-relaxed font-light border-t border-slate-100 pt-4">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
