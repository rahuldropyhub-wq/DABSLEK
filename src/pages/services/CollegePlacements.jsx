import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, ShieldCheck, Users, Target, Award, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CollegePlacements() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 25 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        delay: custom * 0.15,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    }),
  };

  return (
    <div className="relative bg-white min-h-screen pt-28 pb-16 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 right-0 w-[400px] h-[400px] rounded-full bg-brand-indigo/5 blur-[120px]" />
        <div className="absolute bottom-1/4 left-0 w-[350px] h-[350px] rounded-full bg-brand-violet/5 blur-[100px]" />
      </div>

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="max-w-[800px] mx-auto text-center mb-16">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={0}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-pill border border-brand-indigo/10 text-brand-indigo font-semibold text-xs tracking-wide mb-4"
          >
            <Sparkles className="w-4 h-4 text-brand-indigo animate-pulse" />
            <span>Campus Sourcing & Fresher Hiring</span>
          </motion.div>
          <motion.h1
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-brand-dark leading-tight tracking-tight mb-6"
          >
            College <span className="bg-gradient-to-r from-brand-indigo-light to-brand-violet bg-clip-text text-transparent">Placements</span>
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={2}
            className="font-sans text-brand-muted text-base lg:text-[18px] leading-relaxed"
          >
            Coordinating large-scale university campus recruitment campaigns to hire high-potential freshers and graduate trainees.
          </motion.p>
        </div>

        {/* Detailed Grid Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={3}
            className="flex flex-col gap-6"
          >
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-brand-dark leading-snug">
              Secure Top Graduate Talent at Scale
            </h2>
            <p className="text-brand-muted text-sm sm:text-base leading-relaxed font-sans">
              Hiring graduate trainees requires massive scheduling coordination. We partner with top universities, host pre-placement webinars, conduct automated aptitude screenings, and manage initial interview selections.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
              {[
                { title: "University Alliances", desc: "Access to accredited institutions across regional tech hubs." },
                { title: "Fresher Appraisals", desc: "Aptitude, reasoning, and technical tests compiled by DABSLEK." },
                { title: "Bulk Scheduling", desc: "Process hundreds of fresher candidates seamlessly in single drives." },
                { title: "Onboarding Webinars", desc: "Transition workshops helping graduates adapt to corporate culture." }
              ].map((benefit, i) => (
                <div key={i} className="p-4 rounded-2xl bg-slate-50 border border-brand-border/60 flex flex-col gap-1.5 hover:bg-white hover:shadow-md transition-all">
                  <span className="font-display font-bold text-xs text-brand-dark uppercase tracking-wider">{benefit.title}</span>
                  <p className="text-[11px] text-brand-muted font-sans leading-relaxed">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Layout Visual */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={4}
            className="p-8 rounded-3xl bg-gradient-to-tr from-brand-indigo to-brand-violet text-white overflow-hidden shadow-xl"
          >
            <h3 className="font-display font-black text-xl mb-6">Our Campus Placement Flow</h3>
            <ul className="flex flex-col gap-4">
              {[
                "1. Sourcing Profiles & Academic Eligibility Scoping",
                "2. College Outreach & Drive Dates Reservation",
                "3. Pre-Placement Talks, Online Testing & Aptitude Checks",
                "4. Live Interview Drives, Shortlisting & Offer Generation"
              ].map((step, idx) => (
                <li key={idx} className="flex gap-3 items-center text-xs sm:text-sm font-semibold">
                  <CheckCircle className="w-5 h-5 text-emerald-300 shrink-0" />
                  <span>{step}</span>
                </li>
              ))}
            </ul>
            
            <div className="mt-8 flex justify-start">
              <Link
                to="/contact"
                className="h-11 px-6 rounded-xl bg-white text-brand-dark hover:bg-slate-50 font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-md active:scale-95"
              >
                <span>Coordinate Campus Drive</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
