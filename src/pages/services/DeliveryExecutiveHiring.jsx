import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Zap, ShieldCheck, Clock, Users, ArrowRight, CheckCircle, Bike, Target, BarChart } from 'lucide-react';
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
  return (
    <div className="bg-white min-h-screen overflow-x-hidden font-sans selection:bg-brand-indigo/20">
      
      {/* ═══════════════════════════════════════════
          1. PREMIUM HERO SECTION
      ═══════════════════════════════════════════ */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-slate-50">
        {/* Subtle Background Elements */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-brand-indigo/5 blur-[100px]" />
          <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-brand-violet/5 blur-[100px]" />
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA0MCAwIEwgMCAwIDAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgwLDAsMCwwLjAyKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] z-0"></div>
        </div>

        <div className="max-w-[1440px] mx-auto px-6 lg:px-16 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            
            {/* Left Content */}
            <div className="w-full lg:w-1/2 flex flex-col items-start z-10">
              <FadeIn>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-8">
                  <div className="w-2 h-2 rounded-full bg-brand-indigo animate-pulse"></div>
                  <span className="text-xs font-bold tracking-widest uppercase text-slate-600">High-Volume Fleet Scaling</span>
                </div>
              </FadeIn>

              <FadeIn delay={0.1}>
                <h1 className="font-display font-black text-5xl sm:text-6xl lg:text-[4.5rem] leading-[1.05] tracking-tight text-slate-900 mb-6">
                  Fueling the <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-indigo to-brand-violet">Last Mile.</span>
                </h1>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-lg sm:text-xl text-slate-600 mb-10 max-w-xl leading-relaxed">
                  Rapid mass hiring for E-Commerce, Quick Commerce, and Food Tech. We deploy verified, reliable delivery personnel exactly where you need them, at breakneck speeds.
                </p>
              </FadeIn>

              <FadeIn delay={0.3} className="w-full sm:w-auto">
                <Link
                  to="/contact"
                  className="w-full sm:w-auto h-14 px-8 rounded-full bg-brand-indigo text-white font-bold text-base flex items-center justify-center gap-3 transition-all hover:bg-brand-dark hover:shadow-xl hover:shadow-brand-indigo/20 hover:-translate-y-1"
                >
                  <Bike className="w-5 h-5" />
                  <span>Scale Your Fleet Today</span>
                </Link>
              </FadeIn>
            </div>

            {/* Right Visual - Premium Image Layout */}
            <div className="w-full lg:w-1/2 relative">
              <FadeIn delay={0.2}>
                <div className="relative rounded-[2.5rem] overflow-hidden aspect-[4/3] md:aspect-[4/4] shadow-2xl bg-white border border-slate-100">
                  <img 
                    src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=1200" 
                    alt="Delivery Executive" 
                    className="w-full h-full object-cover object-center"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-brand-indigo/40 via-transparent to-transparent mix-blend-multiply"></div>
                </div>
              </FadeIn>

              {/* Floating Stat Card 1 */}
              <FadeIn delay={0.4} className="absolute -left-6 md:-left-12 bottom-12 z-20">
                <div className="bg-white/90 backdrop-blur-xl rounded-2xl p-5 shadow-[0_20px_40px_rgba(0,0,0,0.08)] border border-white max-w-[220px]">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                      <Zap className="w-5 h-5 text-emerald-600" />
                    </div>
                    <h4 className="font-display font-black text-2xl text-slate-900">48<span className="text-sm text-slate-500 font-sans font-normal ml-1">Hrs</span></h4>
                  </div>
                  <p className="text-xs font-bold text-slate-600 uppercase tracking-wider">Deployment SLA</p>
                </div>
              </FadeIn>

              {/* Floating Stat Card 2 */}
              <FadeIn delay={0.5} className="absolute -right-6 md:-right-8 top-12 z-20">
                <div className="bg-white/90 backdrop-blur-xl rounded-2xl p-5 shadow-[0_20px_40px_rgba(0,0,0,0.08)] border border-white max-w-[220px]">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-brand-indigo/10 flex items-center justify-center">
                      <ShieldCheck className="w-5 h-5 text-brand-indigo" />
                    </div>
                    <h4 className="font-display font-black text-2xl text-slate-900">100<span className="text-sm text-slate-500 font-sans font-normal ml-1">%</span></h4>
                  </div>
                  <p className="text-xs font-bold text-slate-600 uppercase tracking-wider">Verified Riders</p>
                </div>
              </FadeIn>
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          2. THE LOGISTICS ENGINE (FEATURES GRID)
      ═══════════════════════════════════════════ */}
      <section className="py-24 bg-white relative">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
          <FadeIn className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="font-display font-black text-4xl sm:text-5xl text-slate-900 tracking-tight mb-6">Engineered for Logistics</h2>
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed">
              The demands of the last mile are ruthless. We built a recruitment machine specifically designed to handle high-attrition, high-volume frontline roles.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: MapPin,
                title: "Hyperlocal Sourcing",
                desc: "We map delivery personnel to exact pincodes, ensuring they know the neighborhood logistics intimately, reducing delivery times."
              },
              {
                icon: ShieldCheck,
                title: "Rigorous BGV",
                desc: "Complete police verification, Aadhar validation, and driving license authentication guaranteed before deployment."
              },
              {
                icon: Clock,
                title: "Shift Flexibility",
                desc: "Part-time, full-time, and weekend-only models available to perfectly match your peak demand hours and retail sales."
              },
              {
                icon: Users,
                title: "Roster Management",
                desc: "We provide dedicated supervisors for large batches to handle daily attendance, attrition management, and replacements."
              },
              {
                icon: Target,
                title: "Volume Scalability",
                desc: "Whether you need 50 executives for a new dark store or 5,000 for a festive season, our pipeline is always active."
              },
              {
                icon: BarChart,
                title: "Performance Tracking",
                desc: "We monitor early attrition rates and continuously optimize our sourcing channels to provide the most reliable personnel."
              }
            ].map((feature, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <div className="bg-slate-50 rounded-3xl p-8 lg:p-10 border border-slate-100 hover:bg-white hover:shadow-[0_20px_40px_rgba(0,0,0,0.04)] hover:border-brand-indigo/20 transition-all h-full group">
                  <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200 flex items-center justify-center mb-6 shadow-sm group-hover:bg-brand-indigo group-hover:border-brand-indigo transition-colors">
                    <feature.icon className="w-7 h-7 text-brand-indigo group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-display font-bold text-2xl text-slate-900 mb-4">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          3. FULL WIDTH CTA
      ═══════════════════════════════════════════ */}
      <section className="py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
          <div className="bg-slate-900 rounded-[3rem] p-10 md:p-20 relative overflow-hidden text-center">
            {/* Background elements */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-brand-indigo/30 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-white mb-6 leading-tight">
                Stop worrying about <br className="hidden sm:block" /> attrition rates.
              </h2>
              <p className="text-xl text-slate-300 mb-10 leading-relaxed">
                Partner with us to maintain a robust, reliable, and verified pipeline of delivery executives for your operations.
              </p>
              
              <Link
                to="/contact"
                className="inline-flex h-16 px-10 rounded-full bg-white text-brand-dark font-bold text-lg items-center justify-center gap-3 transition-all hover:bg-slate-100 hover:scale-105 shadow-[0_0_40px_rgba(255,255,255,0.2)]"
              >
                <span>Deploy Executives Now</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
