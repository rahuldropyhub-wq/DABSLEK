import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Sparkles, ShieldCheck, Users, Zap, Target, Award,
  ArrowRight, CheckCircle, MapPin, Calendar, TrendingUp,
  Heart, Lightbulb, Globe, Star, Building2
} from 'lucide-react';
import { Link } from 'react-router-dom';
import aboutHeroTeam from '../assets/about-hero-team.png';
import aboutTeamCollab from '../assets/about-team-collab.png';
import aboutCollaboration from '../assets/about-collaboration.png';

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

/* ─── Section Badge ─────────────────────────────────────────────── */
function SectionBadge({ icon: Icon, label }) {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-pill border border-brand-indigo/15 text-brand-indigo font-semibold text-xs tracking-wide shadow-sm shadow-brand-indigo/5">
      <Icon className="w-3.5 h-3.5 animate-pulse" />
      <span>{label}</span>
    </div>
  );
}

/* ─── Fade-In Wrapper ───────────────────────────────────────────── */
function FadeIn({ children, delay = 0, className = '', direction = 'up' }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });
  const initialY = direction === 'up' ? 30 : direction === 'down' ? -30 : 0;
  const initialX = direction === 'left' ? 40 : direction === 'right' ? -40 : 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: initialY, x: initialX }}
      animate={isInView ? { opacity: 1, y: 0, x: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── Main Component ────────────────────────────────────────────── */
export default function About() {

  const stats = [
    { value: '1000+', label: 'Candidates Placed', icon: Users },
    { value: '50+', label: 'Clients Served', icon: Building2 },
    { value: '10+', label: 'Industries', icon: Globe },
    { value: '6+', label: 'Years Experience', icon: Calendar },
  ];

  const values = [
    {
      icon: ShieldCheck,
      title: 'Replacement Policy',
      description: 'We stand behind every placement with a structured replacement guarantee within a defined period — zero compromise on quality.',
      color: 'from-blue-500 to-brand-indigo',
    },
    {
      icon: Target,
      title: 'Compliance & Verification',
      description: 'Thorough background screening and compliance audits ensure every candidate meets your legal and organizational standards.',
      color: 'from-brand-indigo to-brand-violet',
    },
    {
      icon: Users,
      title: 'Dedicated Account Manager',
      description: 'A single point of contact drives your entire hiring cycle — no handoffs, no delays, just focused execution.',
      color: 'from-brand-violet to-purple-400',
    },
    {
      icon: Zap,
      title: 'Customized Solutions',
      description: 'Every business is unique. We tailor sourcing strategies, timelines, and reporting to fit your exact requirements.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Heart,
      title: 'Candidate Care',
      description: 'We treat candidates as future colleagues, not just profiles — ensuring a positive experience that reflects on your brand.',
      color: 'from-pink-500 to-rose-400',
    },
    {
      icon: TrendingUp,
      title: 'Scalable at Speed',
      description: 'From 1 hire to 1,000 — our infrastructure scales without compromising on screening quality or turnaround time.',
      color: 'from-rose-400 to-orange-400',
    },
  ];

  const milestones = [
    {
      year: '2020',
      title: 'Company Founded',
      desc: 'DABSLEK was established in Hyderabad, launching IT and Non-IT recruitment services for corporates.',
      icon: Sparkles,
    },
    {
      year: '2022',
      title: '500+ Placements Milestone',
      desc: 'Surpassed 500 successful candidate placements, adding Contract Staffing and Compliance divisions.',
      icon: Award,
    },
    {
      year: '2024',
      title: 'RPO & Payroll Expansion',
      desc: 'Launched Payroll Processing and dedicated RPO services for SaaS and enterprise clients.',
      icon: TrendingUp,
    },
    {
      year: '2025',
      title: 'Official IPL Partnership',
      desc: 'Appointed as the Official Staffing Partner for Sunrisers Hyderabad in Tata IPL 2025.',
      icon: Star,
    },
  ];

  const whyUs = [
    'Pan-India recruitment network across 20+ cities',
    'Average time-to-fill of under 10 working days',
    'Industry-specialized recruiters per vertical',
    'AI-assisted shortlisting with human expert review',
    '95%+ offer acceptance rate across all engagements',
    'Dedicated compliance & payroll integration',
  ];

  return (
    <div className="relative bg-white min-h-screen overflow-hidden">

      {/* ══════════════════════════════════════════════════════════
          HERO SECTION — Full-bleed with image + overlay content
      ══════════════════════════════════════════════════════════ */}
      <section className="relative w-full min-h-[92vh] flex items-end overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={aboutHeroTeam}
            alt="DABSLEK team in office"
            className="w-full h-full object-cover object-center"
          />
          {/* Multi-layer overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/70 to-[#0F172A]/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/80 via-transparent to-transparent" />
        </div>

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

        {/* Hero Content */}
        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 lg:px-16 pb-20 pt-40">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="max-w-3xl"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-indigo/20 backdrop-blur-sm border border-brand-indigo/30 text-brand-indigo-light font-semibold text-xs tracking-wide mb-6">
              <Sparkles className="w-3.5 h-3.5 animate-pulse" />
              <span>Est. 2020 · Hyderabad, India</span>
            </div>

            <h1 className="font-display font-black text-5xl sm:text-6xl lg:text-7xl text-white leading-[1.05] tracking-tight mb-6">
              Your Trusted{' '}
              <span className="bg-gradient-to-r from-[#818CF8] to-[#C4B5FD] bg-clip-text text-transparent">
                Workforce
              </span>{' '}
              Partner
            </h1>

            <p className="font-sans text-white/75 text-lg lg:text-xl leading-relaxed mb-10 max-w-2xl">
              DABSLEK is a Hyderabad-based staffing powerhouse delivering end-to-end IT and Non-IT recruitment across industries — where technology meets human expertise.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 h-13 px-8 rounded-2xl bg-gradient-to-r from-brand-indigo to-brand-violet text-white font-semibold text-sm hover:shadow-2xl hover:shadow-brand-indigo/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
              >
                <span>Work With Us</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/services/permanent-hiring"
                className="inline-flex items-center justify-center gap-2 h-13 px-8 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/25 text-white font-semibold text-sm hover:bg-white/20 transition-all duration-300"
              >
                <span>Explore Services</span>
              </Link>
            </div>
          </motion.div>

          {/* Inline Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-16 max-w-3xl"
          >
            {stats.map((s, i) => {
              const Icon = s.icon;
              return (
                <div key={i} className="flex flex-col gap-1 p-4 rounded-2xl bg-white/8 backdrop-blur-sm border border-white/12">
                  <Icon className="w-4 h-4 text-brand-violet mb-1" />
                  <span className="font-display font-black text-3xl text-white">
                    <AnimatedCounter value={s.value} />
                  </span>
                  <span className="text-xs text-white/60 font-sans">{s.label}</span>
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          STORY / METHODOLOGY SECTION
      ══════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Image Column */}
            <FadeIn direction="right" className="relative">
              <div className="relative rounded-[32px] overflow-hidden shadow-2xl shadow-brand-indigo/10">
                <img
                  src={aboutTeamCollab}
                  alt="DABSLEK recruitment team collaborating"
                  className="w-full h-[480px] object-cover object-center"
                />
                {/* Floating card */}
                <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-white/95 backdrop-blur-sm border border-brand-border/40 shadow-lg flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-brand-indigo to-brand-violet flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-display font-bold text-sm text-brand-dark">95%+ Offer Acceptance Rate</p>
                    <p className="text-xs text-brand-muted mt-0.5">Across all client engagements in 2024–25</p>
                  </div>
                </div>
              </div>

              {/* Floating badge top-right */}
              <div className="absolute -top-4 -right-4 w-24 h-24 rounded-3xl bg-gradient-to-br from-brand-indigo to-brand-violet flex flex-col items-center justify-center shadow-xl text-white">
                <span className="font-display font-black text-2xl leading-none">6+</span>
                <span className="text-[10px] font-sans text-white/80 text-center leading-tight mt-1">Years<br />Trust</span>
              </div>
            </FadeIn>

            {/* Content Column */}
            <FadeIn direction="left" delay={0.1}>
              <SectionBadge icon={Sparkles} label="Our Story" />
              <h2 className="font-display font-extrabold text-4xl lg:text-5xl text-brand-dark leading-[1.15] tracking-tight mt-4 mb-6">
                Bridging Technology &{' '}
                <span className="bg-gradient-to-r from-brand-indigo to-brand-violet bg-clip-text text-transparent">
                  Human Expertise
                </span>
              </h2>
              <p className="text-brand-muted text-base lg:text-[17px] leading-relaxed mb-8">
                Founded in 2020 in Hyderabad, DABSLEK was built with a simple belief: great hiring is a combination of intelligent systems and experienced recruiters. We don't choose one over the other — we run both in parallel to deliver faster, sharper, and more reliable talent outcomes.
              </p>
              <p className="text-brand-muted text-base leading-relaxed mb-10">
                Today, we serve 50+ corporates across IT, manufacturing, logistics, healthcare, and BFSI sectors — from startups to Fortune 500 companies. Our proven dual-sourcing framework screens at scale while preserving the human judgment that machines cannot replicate.
              </p>

              {/* Why Us Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {whyUs.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-brand-pill flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="w-3.5 h-3.5 text-brand-indigo" />
                    </div>
                    <span className="text-sm text-brand-dark leading-snug">{item}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          MISSION & VISION SECTION — Dark gradient band
      ══════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-gradient-to-br from-[#0F172A] via-[#1E1B4B] to-[#0F172A] relative overflow-hidden">
        {/* Decorative glows */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-brand-indigo/10 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-brand-violet/10 blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-16">
          <div className="text-center mb-16">
            <FadeIn>
              <SectionBadge icon={Lightbulb} label="Mission & Vision" />
              <h2 className="font-display font-extrabold text-4xl lg:text-5xl text-white leading-tight tracking-tight mt-4">
                Why We Do What We Do
              </h2>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Mission */}
            <FadeIn delay={0.1} direction="left">
              <div className="p-8 lg:p-10 rounded-[28px] bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/8 transition-all duration-300 h-full">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-brand-indigo to-brand-violet flex items-center justify-center mb-6">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-display font-black text-2xl text-white mb-4">Our Mission</h3>
                <p className="text-white/65 text-base leading-relaxed">
                  To optimize client operational capacity by delivering pre-screened, high-velocity human resources that align with strategic long-term goals — at every level of the organizational pyramid.
                </p>
              </div>
            </FadeIn>

            {/* Vision */}
            <FadeIn delay={0.2} direction="right">
              <div className="p-8 lg:p-10 rounded-[28px] bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/8 transition-all duration-300 h-full">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-brand-violet to-purple-400 flex items-center justify-center mb-6">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-display font-black text-2xl text-white mb-4">Our Vision</h3>
                <p className="text-white/65 text-base leading-relaxed">
                  To become India's most reliable talent architecture firm — setting global benchmarks in compliance-driven recruitment automation, workforce retention, and client success outcomes.
                </p>
              </div>
            </FadeIn>
          </div>

          {/* Big image inside dark section */}
          <FadeIn delay={0.15}>
            <div className="relative rounded-[28px] overflow-hidden shadow-2xl shadow-black/50">
              <img
                src={aboutCollaboration}
                alt="DABSLEK collaboration and culture"
                className="w-full h-[340px] lg:h-[420px] object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/70 via-transparent to-[#0F172A]/70" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center px-6">
                  <p className="font-display font-black text-3xl lg:text-5xl text-white leading-tight max-w-2xl mx-auto">
                    "People are the only competitive advantage that can't be copied."
                  </p>
                  <p className="text-white/50 text-sm mt-4 font-sans">— The DABSLEK Philosophy</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          CORE VALUES / GUARANTEES SECTION
      ══════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
          <div className="text-center mb-16">
            <FadeIn>
              <SectionBadge icon={ShieldCheck} label="What We Stand For" />
              <h2 className="font-display font-extrabold text-4xl lg:text-5xl text-brand-dark leading-tight tracking-tight mt-4">
                Core Policies &{' '}
                <span className="bg-gradient-to-r from-brand-indigo to-brand-violet bg-clip-text text-transparent">
                  Guarantees
                </span>
              </h2>
              <p className="text-brand-muted text-base lg:text-lg mt-4 max-w-2xl mx-auto">
                Every engagement with DABSLEK comes backed by these six non-negotiable commitments.
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((val, idx) => {
              const Icon = val.icon;
              return (
                <FadeIn key={idx} delay={idx * 0.07}>
                  <div className="group relative p-7 rounded-[24px] bg-white border border-brand-border/60 hover:shadow-xl hover:shadow-brand-indigo/8 hover:-translate-y-1.5 transition-all duration-400 flex flex-col h-full overflow-hidden">
                    {/* Gradient accent top-right */}
                    <div className={`absolute top-0 right-0 w-24 h-24 rounded-full bg-gradient-to-br ${val.color} opacity-5 blur-2xl group-hover:opacity-10 transition-opacity duration-300`} />

                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${val.color} flex items-center justify-center mb-5 shadow-lg`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-display font-bold text-base text-brand-dark mb-2">{val.title}</h3>
                    <p className="text-brand-muted text-sm leading-relaxed flex-1">{val.description}</p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          MILESTONE TIMELINE SECTION
      ══════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
          <div className="text-center mb-16">
            <FadeIn>
              <SectionBadge icon={Calendar} label="Our Journey" />
              <h2 className="font-display font-extrabold text-4xl lg:text-5xl text-brand-dark leading-tight tracking-tight mt-4">
                Key Milestones
              </h2>
            </FadeIn>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Vertical Line */}
            <div className="absolute left-6 lg:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-indigo via-brand-violet to-brand-indigo/20 lg:-translate-x-px" />

            <div className="flex flex-col gap-12">
              {milestones.map((m, i) => {
                const Icon = m.icon;
                const isEven = i % 2 === 0;
                return (
                  <FadeIn key={i} delay={i * 0.12} direction={isEven ? 'left' : 'right'}>
                    <div className={`relative flex items-start gap-6 lg:gap-0 ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                      {/* Spacer for desktop alternating layout */}
                      <div className="hidden lg:block lg:w-1/2" />

                      {/* Center dot */}
                      <div className="absolute left-6 lg:left-1/2 lg:-translate-x-1/2 w-12 h-12 rounded-2xl bg-gradient-to-br from-brand-indigo to-brand-violet flex items-center justify-center shadow-lg shadow-brand-indigo/30 z-10 flex-shrink-0">
                        <Icon className="w-5 h-5 text-white" />
                      </div>

                      {/* Card */}
                      <div className={`w-full lg:w-1/2 pl-20 lg:pl-0 ${isEven ? 'lg:pr-16' : 'lg:pl-16'}`}>
                        <div className="p-6 rounded-3xl bg-slate-50 border border-brand-border/60 hover:bg-white hover:shadow-xl hover:shadow-brand-indigo/8 transition-all duration-300">
                          <span className="inline-block px-3 py-1 rounded-full bg-brand-pill text-brand-indigo text-xs font-black tracking-wide mb-3">
                            {m.year}
                          </span>
                          <h3 className="font-display font-extrabold text-lg text-brand-dark mb-2">{m.title}</h3>
                          <p className="text-sm text-brand-muted leading-relaxed">{m.desc}</p>
                        </div>
                      </div>
                    </div>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
