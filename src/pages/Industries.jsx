import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Sparkles, ArrowRight, Code, Landmark, HeartPulse,
  Megaphone, ShoppingBag, Truck, Bike, GraduationCap,
  Factory, Globe, Zap, Users, CheckCircle, MapPin
} from 'lucide-react';

// Industry images
import indHero from '../assets/ind-hero.png';
import indIT from '../assets/ind-it.png';
import indBFSI from '../assets/ind-bfsi.png';
import indHealthcare from '../assets/ind-healthcare.png';
import indMfg from '../assets/ind-manufacturing.png';
import indLogistics from '../assets/ind-logistics.png';
import indEcom from '../assets/ind-ecommerce.png';
import indDelivery from '../assets/ind-delivery.png';
import indEducation from '../assets/ind-education.png';
import indMedia from '../assets/ind-media.png';

/* ─── FadeIn Wrapper ────────────────────────────────────────────── */
function FadeIn({ children, delay = 0, className = '' }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── Animated Counter ──────────────────────────────────────────── */
function AnimatedCounter({ value }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const num = parseInt(value.replace(/[^0-9]/g, '')) || 0;
    const duration = 1800;
    const fps = 1000 / 60;
    const totalFrames = Math.round(duration / fps);
    let frame = 0;
    const timer = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const eased = 1 - (1 - progress) * (1 - progress);
      setCount(Math.round(eased * num));
      if (frame >= totalFrames) { setCount(num); clearInterval(timer); }
    }, fps);
    return () => clearInterval(timer);
  }, [isInView, value]);

  const suffix = value.replace(/[0-9]/g, '');
  return <span ref={ref}>{count}{suffix}</span>;
}

/* ─── Industry Data ─────────────────────────────────────────────── */
const industries = [
  {
    icon: Code,
    image: indIT,
    title: 'IT & Technology',
    desc: 'Software engineers, data scientists, DevOps, cloud architects, cybersecurity experts, and product managers for startups to enterprises.',
    roles: ['Software Developers', 'Data Engineers', 'Cloud Architects', 'QA Engineers', 'CTO / VP Eng'],
    gradient: 'from-blue-500 to-brand-indigo',
    accent: 'bg-blue-500',
  },
  {
    icon: Landmark,
    image: indBFSI,
    title: 'BFSI',
    desc: 'Compliance officers, risk analysts, relationship managers, fintech specialists, and insurance underwriters for banking and financial institutions.',
    roles: ['Risk Analysts', 'Compliance Officers', 'Wealth Advisors', 'Fintech Specialists', 'Loan Officers'],
    gradient: 'from-brand-indigo to-violet-600',
    accent: 'bg-brand-indigo',
  },
  {
    icon: HeartPulse,
    image: indHealthcare,
    title: 'Healthcare & Pharma',
    desc: 'Clinical researchers, regulatory affairs, medical sales, pharmacovigilance professionals, and hospital operations staff.',
    roles: ['Clinical Researchers', 'Regulatory Affairs', 'Medical Sales', 'Pharmacovigilance', 'Hospital Admin'],
    gradient: 'from-rose-500 to-pink-500',
    accent: 'bg-rose-500',
  },
  {
    icon: Factory,
    image: indMfg,
    title: 'Manufacturing',
    desc: 'Plant managers, quality engineers, supply chain leads, production supervisors, and EHS professionals for industrial and FMCG companies.',
    roles: ['Plant Managers', 'Quality Engineers', 'Supply Chain Leads', 'Production Supervisors', 'EHS Officers'],
    gradient: 'from-orange-500 to-amber-500',
    accent: 'bg-orange-500',
  },
  {
    icon: Truck,
    image: indLogistics,
    title: 'Logistics & Supply Chain',
    desc: 'Fleet managers, warehouse supervisors, last-mile coordinators, logistics technology specialists, and operations heads.',
    roles: ['Fleet Managers', 'Warehouse Supervisors', 'Last-Mile Ops', 'Logistics Tech', 'Ops Heads'],
    gradient: 'from-emerald-500 to-teal-500',
    accent: 'bg-emerald-500',
  },
  {
    icon: ShoppingBag,
    image: indEcom,
    title: 'E-Commerce & Retail',
    desc: 'Category managers, D2C marketing leads, marketplace specialists, customer success, and retail area managers.',
    roles: ['Category Managers', 'D2C Marketing', 'Marketplace Ops', 'Customer Success', 'Area Managers'],
    gradient: 'from-purple-500 to-fuchsia-500',
    accent: 'bg-purple-500',
  },
  {
    icon: Bike,
    image: indDelivery,
    title: 'Delivery & Field Ops',
    desc: 'Delivery executives, field sales agents, promoters, and last-mile workforce for hyperlocal and quick-commerce brands.',
    roles: ['Delivery Executives', 'Field Sales Agents', 'Brand Promoters', 'On-Ground Ops', 'Route Planners'],
    gradient: 'from-cyan-500 to-sky-500',
    accent: 'bg-cyan-500',
  },
  {
    icon: GraduationCap,
    image: indEducation,
    title: 'Education & EdTech',
    desc: 'Academic coordinators, instructional designers, content creators, learning technologists, and campus recruitment specialists.',
    roles: ['Academic Coordinators', 'Instructional Designers', 'Content Creators', 'Learning Tech', 'Campus Recruiters'],
    gradient: 'from-yellow-500 to-orange-400',
    accent: 'bg-yellow-500',
  },
  {
    icon: Megaphone,
    image: indMedia,
    title: 'Media & Marketing',
    desc: 'Performance marketers, creative directors, growth hackers, PR specialists, and digital content strategists.',
    roles: ['Performance Marketers', 'Creative Directors', 'Growth Hackers', 'PR Specialists', 'Content Strategists'],
    gradient: 'from-pink-500 to-rose-400',
    accent: 'bg-pink-500',
  },
];

const highlights = [
  { value: '10+', label: 'Industries Served', icon: Globe },
  { value: '50+', label: 'Enterprise Clients', icon: Users },
  { value: '1000+', label: 'Candidates Placed', icon: CheckCircle },
  { value: '48hrs', label: 'Avg. Profile Delivery', icon: Zap },
];

/* ─── Main Component ────────────────────────────────────────────── */
export default function Industries() {
  return (
    <div className="bg-white min-h-screen overflow-hidden">

      {/* ══════════════════ HERO ══════════════════ */}
      <section className="relative w-full min-h-[92vh] flex items-end overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <img
            src={indHero}
            alt="Industries DABSLEK serves"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/70 to-[#0F172A]/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/80 via-transparent to-transparent" />
        </div>

        {/* Glow orbs */}
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-brand-indigo/15 blur-[120px] pointer-events-none z-0" />

        {/* Floating badge top-right */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="absolute top-32 right-8 lg:right-16 hidden md:flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs font-semibold"
        >
          <MapPin className="w-3.5 h-3.5 text-brand-violet" />
          <span>Headquartered in Hyderabad, India</span>
        </motion.div>

        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 lg:px-16 pb-20 pt-40">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-indigo/20 backdrop-blur-sm border border-brand-indigo/30 text-[#818CF8] font-semibold text-xs tracking-wide mb-6">
              <Sparkles className="w-3.5 h-3.5 animate-pulse" />
              <span>Cross-Industry Expertise</span>
            </div>

            <h1 className="font-display font-black text-5xl sm:text-6xl lg:text-7xl text-white leading-[1.05] tracking-tight mb-6">
              Industries We{' '}
              <span className="bg-gradient-to-r from-[#818CF8] to-[#C4B5FD] bg-clip-text text-transparent">
                Power
              </span>
            </h1>

            <p className="text-white/70 text-lg lg:text-xl leading-relaxed mb-10 max-w-2xl">
              DABSLEK deploys specialized recruitment teams across 10+ industries - with sector-specific recruiters who understand the language of your domain.
            </p>
          </motion.div>

          {/* Inline Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-16 max-w-3xl"
          >
            {highlights.map((h, i) => {
              const Icon = h.icon;
              return (
                <div key={i} className="flex flex-col gap-1 p-4 rounded-2xl bg-white/8 backdrop-blur-sm border border-white/12">
                  <Icon className="w-4 h-4 text-brand-violet mb-1" />
                  <span className="font-display font-black text-3xl text-white">
                    <AnimatedCounter value={h.value} />
                  </span>
                  <span className="text-xs text-white/60 font-sans">{h.label}</span>
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ══════════════════ INDUSTRY CARDS GRID ══════════════════ */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
          <div className="text-center mb-16">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-pill border border-brand-indigo/15 text-brand-indigo font-semibold text-xs tracking-wide mb-4">
                <Globe className="w-3.5 h-3.5" />
                <span>Our Sector Coverage</span>
              </div>
              <h2 className="font-display font-extrabold text-4xl lg:text-5xl text-brand-dark leading-tight tracking-tight mt-2">
                Sector-Specialized{' '}
                <span className="bg-gradient-to-r from-brand-indigo to-brand-violet bg-clip-text text-transparent">
                  Recruitment
                </span>
              </h2>
              <p className="text-brand-muted text-base lg:text-lg mt-4 max-w-xl mx-auto">
                Each industry vertical is handled by a dedicated team of recruiters with native domain expertise.
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {industries.map((ind, idx) => {
              const Icon = ind.icon;
              return (
                <FadeIn key={idx} delay={idx * 0.055}>
                  <div className="group relative rounded-[28px] bg-white border border-brand-border/50 hover:shadow-2xl hover:shadow-brand-indigo/10 hover:-translate-y-2 transition-all duration-400 flex flex-col h-full overflow-hidden">

                    {/* Industry Image */}
                    <div className="relative w-full h-64 overflow-hidden rounded-t-[28px]">
                      <img
                        src={ind.image}
                        alt={ind.title}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                      />
                      {/* Gradient overlay on image */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                      {/* Icon badge over image */}
                      <div className={`absolute bottom-4 left-5 w-12 h-12 rounded-2xl bg-gradient-to-br ${ind.gradient} flex items-center justify-center shadow-lg`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>

                      {/* Title over image */}
                      <h3 className="absolute bottom-4 left-20 font-display font-bold text-lg text-white drop-shadow-md">
                        {ind.title}
                      </h3>
                    </div>

                    {/* Card Body */}
                    <div className="p-6 flex flex-col flex-1">
                      <p className="text-brand-muted text-sm leading-relaxed mb-5">{ind.desc}</p>

                      {/* Roles */}
                      <div className="border-t border-brand-border/50 pt-4 mt-auto">
                        <p className="text-[10px] font-black text-brand-indigo uppercase tracking-widest mb-3">Key Roles</p>
                        <div className="flex flex-col gap-1.5">
                          {ind.roles.map((role, ri) => (
                            <div key={ri} className="flex items-center gap-2">
                              <CheckCircle className="w-3.5 h-3.5 text-brand-indigo flex-shrink-0" />
                              <span className="text-xs text-brand-dark font-medium">{role}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════ WHY DABSLEK ══════════════════ */}
      <section className="pt-24 pb-48 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-pill border border-brand-indigo/15 text-brand-indigo font-semibold text-xs tracking-wide mb-4">
                <Zap className="w-3.5 h-3.5" />
                <span>Why DABSLEK</span>
              </div>
              <h2 className="font-display font-extrabold text-4xl lg:text-5xl text-brand-dark leading-tight tracking-tight mt-2 mb-6">
                Deep Domain{' '}
                <span className="bg-gradient-to-r from-brand-indigo to-brand-violet bg-clip-text text-transparent">
                  Knowledge
                </span>
              </h2>
              <p className="text-brand-muted text-base lg:text-[17px] leading-relaxed mb-8">
                Generic recruiters fill seats. We fill strategic positions. Our industry-aligned teams understand role-specific benchmarks, technical vocabularies, and sector nuances - delivering candidates who truly fit.
              </p>
              <div className="flex flex-col gap-4">
                {[
                  'Sector-dedicated recruiter pods per vertical',
                  'Pre-built talent pools by industry and role level',
                  'Compensation benchmarking reports per sector',
                  'Industry-compliant background verification',
                  'Pan-India reach with local market expertise',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-brand-pill flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-brand-indigo" />
                    </div>
                    <span className="text-sm text-brand-dark">{item}</span>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="relative p-8 lg:p-10 rounded-[32px] bg-gradient-to-br from-brand-indigo via-[#5B21B6] to-brand-violet text-white overflow-hidden shadow-2xl shadow-brand-indigo/25">
                <div className="absolute top-0 right-0 w-[200px] h-[200px] rounded-full bg-white/5 blur-[60px]" />
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-2xl bg-white/15 flex items-center justify-center mb-6">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-display font-black text-2xl text-white mb-4">
                    Not finding your industry?
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed mb-8">
                    Our team has experience across 15+ sectors. If your industry isn't listed, we can still build a customized recruitment program tailored to your exact needs.
                  </p>
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-2 h-12 px-7 rounded-2xl bg-white text-brand-indigo font-bold text-sm hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
                  >
                    <span>Talk to Us</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

    </div>
  );
}
