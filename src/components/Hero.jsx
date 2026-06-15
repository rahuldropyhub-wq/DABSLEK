import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Sparkles, ArrowRight, Cpu, Globe, Award, Users, Smile, ShieldCheck, Zap, TrendingUp, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImage from '../assets/hero-illustration.png';

function AnimatedCounter({ value }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const numericPart = parseInt(value.replace(/[^0-9]/g, '')) || 0;
    const duration = 1500; // 1.5s total animation time
    const frameDuration = 1000 / 60; // 60 fps
    const totalFrames = Math.round(duration / frameDuration);
    let frame = 0;

    const timer = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const easeOutQuad = 1 - (1 - progress) * (1 - progress);
      const currentCount = Math.round(easeOutQuad * numericPart);

      if (frame >= totalFrames) {
        setCount(numericPart);
        clearInterval(timer);
      } else {
        setCount(currentCount);
      }
    }, frameDuration);

    return () => clearInterval(timer);
  }, [isInView, value]);

  const suffix = value.replace(/[0-9]/g, '');
  return <span ref={ref}>{count}{suffix}</span>;
}

export default function Hero() {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: custom * 0.15,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    }),
  };

  const floatCardTransition = (delay) => ({
    y: {
      duration: 3.5,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
      delay: delay
    }
  });

  return (
    <div id="home" className="relative min-h-screen pt-24 pb-8 overflow-hidden bg-white flex flex-col justify-between">

      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Subtle Radial Gradients */}
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-gradient-to-br from-brand-indigo/10 to-transparent blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-gradient-to-tr from-brand-violet/10 to-transparent blur-[120px]" />

        {/* Large Translucent Circular Watermark Shapes */}
        <div className="absolute top-[15%] right-[20%] w-[600px] h-[600px] rounded-full border border-brand-indigo/5 pointer-events-none" />
        <div className="absolute top-[5%] right-[10%] w-[800px] h-[800px] rounded-full border border-brand-violet/5 pointer-events-none" />

        {/* Soft Dotted Matrix Patterns */}
        <svg className="absolute top-[25%] left-[5%] opacity-35" width="100" height="180" fill="none" viewBox="0 0 100 180">
          <pattern id="dot-pattern-1" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="2" fill="#6366F1" />
          </pattern>
          <rect width="100" height="180" fill="url(#dot-pattern-1)" />
        </svg>

        <svg className="absolute top-[10%] right-[45%] opacity-25" width="120" height="120" fill="none" viewBox="0 0 120 120">
          <pattern id="dot-pattern-2" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="2" fill="#8B5CF6" />
          </pattern>
          <rect width="120" height="120" fill="url(#dot-pattern-2)" />
        </svg>

        {/* Abstract Curved SVG Lines */}
        <svg className="absolute right-0 top-[15%] w-[45%] h-[70%] text-brand-indigo/10" viewBox="0 0 600 700" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M600 100C450 100 350 250 350 400C350 550 450 650 600 650" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
          <path d="M600 200C500 200 420 300 420 400C420 500 500 600 600 600" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="350" cy="400" r="5" fill="#8B5CF6" />
          <circle cx="420" cy="400" r="4" fill="#6366F1" />
        </svg>
      </div>

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 lg:px-12 flex-grow flex flex-col justify-center">

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center pt-2 pb-2">

          {/* Left Column (Content - 48%) */}
          <div className="lg:col-span-6 flex flex-col justify-center text-center lg:text-left items-center lg:items-start">
            {/* Pill Badge */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              custom={0}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-pill border border-brand-indigo/10 text-brand-indigo font-semibold text-xs lg:text-sm tracking-wide mb-5 shadow-sm shadow-brand-indigo/5"
            >
              <Sparkles className="w-4 h-4 text-brand-indigo animate-pulse" />
              <span>Your Trusted Workforce Partner</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              custom={1}
              className="font-display font-extrabold text-[32px] sm:text-5xl md:text-6xl lg:text-[62px] text-brand-dark leading-[1.15] lg:leading-[1.1] tracking-[-0.03em] mb-4 lg:mb-5"
            >
              Powering Businesses<br />
              with the <span className="bg-gradient-to-r from-brand-indigo-light to-brand-violet bg-clip-text text-transparent">Right Talent</span>
            </motion.h1>

            {/* Mobile Hero Illustration */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              custom={1.5}
              className="block lg:hidden relative w-full max-w-[220px] sm:max-w-[280px] aspect-[4/5] z-10 select-none pointer-events-none my-4 mx-auto"
            >
              <img
                src={heroImage}
                alt="AI Recruitment Executive Illustration"
                className="w-full h-full object-contain mx-auto"
                style={{ filter: 'drop-shadow(0 20px 40px rgba(99,102,241,0.12))' }}
              />

              {/* Mobile Floating Card 1: 1000+ Placements */}
              <motion.div
                animate={{ y: [0, -4, 0] }}
                transition={floatCardTransition(0)}
                className="absolute top-[8%] -right-4 z-30 w-fit pl-2 pr-3.5 py-1 bg-white/95 backdrop-blur-md border border-brand-border/60 rounded-xl shadow-md flex items-center gap-1.5 pointer-events-auto"
              >
                <div className="p-1 rounded-md bg-brand-pill text-brand-indigo flex items-center justify-center shrink-0">
                  <Users className="w-3 h-3" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="font-display font-extrabold text-[10px] text-brand-dark leading-none">
                    <AnimatedCounter value="1000+" />
                  </span>
                  <span className="text-[7.5px] font-semibold text-brand-muted mt-0.5 leading-none">Placed</span>
                </div>
              </motion.div>

              {/* Mobile Floating Card 2: 50+ Clients */}
              <motion.div
                animate={{ y: [0, -3, 0] }}
                transition={floatCardTransition(1.2)}
                className="absolute top-[44%] -left-4 z-30 w-fit pl-2 pr-3.5 py-1 bg-white/95 backdrop-blur-md border border-brand-border/60 rounded-xl shadow-md flex items-center gap-1.5 pointer-events-auto"
              >
                <div className="p-1 rounded-md bg-brand-pill text-brand-indigo flex items-center justify-center shrink-0">
                  <Smile className="w-3 h-3" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="font-display font-extrabold text-[10px] text-brand-dark leading-none">
                    <AnimatedCounter value="50+" />
                  </span>
                  <span className="text-[7.5px] font-semibold text-brand-muted mt-0.5 leading-none">Clients</span>
                </div>
              </motion.div>

              {/* Mobile Floating Card 3: 6+ Years Exp */}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={floatCardTransition(0.6)}
                className="absolute bottom-[8%] -right-4 z-30 w-fit pl-2 pr-3.5 py-1 bg-white/95 backdrop-blur-md border border-brand-border/60 rounded-xl shadow-md flex items-center gap-1.5 pointer-events-auto"
              >
                <div className="p-1 rounded-md bg-brand-pill text-brand-indigo flex items-center justify-center shrink-0">
                  <Award className="w-3 h-3" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="font-display font-extrabold text-[10px] text-brand-dark leading-none">
                    <AnimatedCounter value="6+" />
                  </span>
                  <span className="text-[7.5px] font-semibold text-brand-muted mt-0.5 leading-none">Years Exp</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Paragraph */}
            <motion.p
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              custom={2}
              className="font-sans text-brand-muted text-sm lg:text-[18px] leading-relaxed max-w-[540px] mb-5 lg:mb-7"
            >
              DABSLEK is a leading staffing and workforce solutions company delivering end-to-end IT and Non-IT hiring services across industries. We help businesses build strong, scalable teams through reliable, efficient, and customized recruitment solutions.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              custom={3}
              className="flex flex-row justify-center sm:justify-start gap-2.5 mb-6 lg:mb-8 w-full sm:w-auto"
            >
              <Link
                to="/contact"
                className="relative overflow-hidden group h-11 sm:h-14 px-4 sm:px-8 rounded-xl sm:rounded-2xl bg-gradient-to-r from-brand-indigo to-brand-violet text-white font-semibold text-xs sm:text-base flex items-center justify-center gap-1.5 sm:gap-2 shadow-md hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex-1 sm:flex-initial"
              >
                {/* Shine Sweep */}
                <span className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/25 to-transparent -skew-x-12 -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-out pointer-events-none" />
                <span className="relative z-10">Hire Top Talent</span>
                <ArrowRight className="relative z-10 w-3.5 h-3.5 sm:w-5 sm:h-5 group-hover:translate-x-1.5 transition-transform duration-300" />
              </Link>
              <Link
                to="/services"
                className="relative overflow-hidden group h-11 sm:h-14 px-4 sm:px-8 rounded-xl sm:rounded-2xl border border-brand-indigo text-brand-indigo font-semibold text-xs sm:text-base flex items-center justify-center bg-transparent hover:scale-[1.02] active:scale-[0.98] hover:shadow-lg transition-all duration-300 flex-1 sm:flex-initial"
              >
                {/* Background Color Slide */}
                <span className="absolute inset-0 bg-gradient-to-r from-brand-indigo to-brand-violet transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-out z-0 pointer-events-none" />
                <span className="relative z-10 group-hover:text-white transition-colors duration-300">Explore Solutions</span>
              </Link>
            </motion.div>

            {/* Key Strengths / Mini Features Row */}
            <motion.div
              id="about"
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              custom={4}
              className="grid grid-cols-2 gap-y-3.5 gap-x-3 sm:gap-y-4 sm:gap-x-4 border-t border-brand-border/60 pt-5 sm:pt-6 w-full"
            >
              <div className="flex gap-2.5 sm:gap-3 items-start">
                <div className="p-1.5 sm:p-2 rounded-lg sm:rounded-xl bg-brand-pill text-brand-indigo shrink-0">
                  <Cpu className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
                <div className="text-left">
                  <h4 className="font-display font-bold text-xs sm:text-sm text-brand-dark">AI-Powered</h4>
                  <p className="text-[11px] text-brand-muted mt-0.5 hidden sm:block">Intelligent screening for perfect matches</p>
                </div>
              </div>

              <div className="flex gap-2.5 sm:gap-3 items-start">
                <div className="p-1.5 sm:p-2 rounded-lg sm:rounded-xl bg-brand-pill text-brand-indigo shrink-0">
                  <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
                <div className="text-left">
                  <h4 className="font-display font-bold text-xs sm:text-sm text-brand-dark">Human Expertise</h4>
                  <p className="text-[11px] text-brand-muted mt-0.5 hidden sm:block">Experienced recruiters who understand you</p>
                </div>
              </div>

              <div className="flex gap-2.5 sm:gap-3 items-start">
                <div className="p-1.5 sm:p-2 rounded-lg sm:rounded-xl bg-brand-pill text-brand-indigo shrink-0">
                  <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
                <div className="text-left">
                  <h4 className="font-display font-bold text-xs sm:text-sm text-brand-dark">Quality Hiring</h4>
                  <p className="text-[11px] text-brand-muted mt-0.5 hidden sm:block">Better candidates, better outcomes</p>
                </div>
              </div>

              <div className="flex gap-2.5 sm:gap-3 items-start">
                <div className="p-1.5 sm:p-2 rounded-lg sm:rounded-xl bg-brand-pill text-brand-indigo shrink-0">
                  <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
                <div className="text-left">
                  <h4 className="font-display font-bold text-xs sm:text-sm text-brand-dark">Faster Results</h4>
                  <p className="text-[11px] text-brand-muted mt-0.5 hidden sm:block">Streamlined process that saves time</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column (Hero Illustration - 52%) */}
          <div id="services" className="lg:col-span-6 relative flex flex-col justify-center items-center py-4 lg:py-6 overflow-visible">

            {/* Decorative elements — desktop only */}
            {/* 1. Curved Purple Orbit Watermark */}
            <svg className="hidden lg:block absolute top-[5%] -right-16 w-[450px] h-[550px] text-brand-indigo/15 pointer-events-none z-10" viewBox="0 0 300 500" fill="none">
              <path d="M50 20 C 260 120, 260 380, 50 480" stroke="currentColor" strokeWidth="1.5" />
              <path d="M85 5 C 300 120, 300 380, 85 495" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
            </svg>

            {/* 2. Concentric Orbit Watermark */}
            <svg className="hidden lg:block absolute -left-12 bottom-8 w-[350px] h-[350px] text-brand-indigo/10 pointer-events-none z-10" viewBox="0 0 300 300" fill="none">
              <circle cx="50" cy="250" r="90" stroke="currentColor" strokeWidth="1" />
              <circle cx="50" cy="250" r="140" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
              <circle cx="50" cy="250" r="190" stroke="currentColor" strokeWidth="1" />
              <circle cx="50" cy="250" r="240" stroke="currentColor" strokeWidth="1" />
            </svg>

            {/* 3. Dotted Matrix Patterns — desktop only */}
            <svg className="hidden lg:block absolute top-12 right-24 opacity-30 text-brand-indigo/60 pointer-events-none z-10" width="80" height="80" fill="none" viewBox="0 0 80 80">
              <pattern id="dot-grid-tr" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="2" fill="currentColor" />
              </pattern>
              <rect width="80" height="80" fill="url(#dot-grid-tr)" />
            </svg>

            {/* 4. Purple Diagonal Wave */}
            <div className="hidden lg:block absolute bottom-0 right-0 w-[55%] h-[35%] bg-gradient-to-tr from-[#8B5CF6]/35 to-transparent rounded-tl-[180px] blur-[10px] pointer-events-none z-10" />

            {/* 5. Orbit Nodes — desktop only */}
            <div className="hidden lg:block absolute top-[16%] right-[11.5%] w-3 h-3 rounded-full bg-brand-violet shadow-[0_0_8px_rgba(139,92,246,0.6)] z-20" />
            <div className="hidden lg:block absolute top-[48.5%] right-[2.5%] w-3 h-3 rounded-full bg-brand-violet shadow-[0_0_8px_rgba(139,92,246,0.6)] z-20" />
            <div className="hidden lg:block absolute bottom-[23%] right-[12%] w-3 h-3 rounded-full bg-brand-violet shadow-[0_0_8px_rgba(139,92,246,0.6)] z-20" />
            <div className="hidden lg:block absolute top-[11.5%] right-[33.5%] w-2 h-2 rounded-full bg-brand-indigo shadow-[0_0_6px_rgba(99,102,241,0.6)] z-20" />

            {/* 6. Main Illustration Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="hidden lg:block relative w-full lg:max-w-[640px] aspect-[4/5] z-10 select-none pointer-events-none lg:-mt-16"
            >
              <img
                src={heroImage}
                alt="AI Recruitment Executive Illustration"
                className="w-full h-full object-contain"
                style={{ filter: 'drop-shadow(0 20px 60px rgba(99,102,241,0.15))' }}
              />
            </motion.div>

            {/* Mobile Stats Strip — visible only on mobile/tablet, hidden on lg */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="flex lg:hidden items-center justify-center gap-3 mt-4 w-full px-2"
            >
              {[
                { icon: Users, value: '1000+', label: 'Placements' },
                { icon: Smile, value: '50+', label: 'Clients' },
                { icon: Award, value: '6+', label: 'Years Exp' },
              ].map(({ icon: Icon, value, label }, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-1 bg-white border border-brand-border/50 rounded-2xl py-3 px-2 shadow-sm">
                  <div className="p-1.5 rounded-lg bg-brand-pill text-brand-indigo">
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  <span className="font-display font-extrabold text-base text-brand-dark leading-none">
                    <AnimatedCounter value={value} />
                  </span>
                  <span className="text-[10px] font-semibold text-brand-muted leading-none">{label}</span>
                </div>
              ))}
            </motion.div>

            {/* 7. Floating KPI Cards — desktop only */}
            {/* Card 1: 1000+ Candidates Placed */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={floatCardTransition(0)}
              className="hidden lg:flex absolute top-[10%] right-[-12%] z-30 w-fit pl-4 pr-6 py-3 bg-white/90 backdrop-blur-xl border border-brand-border/60 rounded-[24px] shadow-[0_15px_30px_rgba(99,102,241,0.06)] items-center gap-4 hover:shadow-xl hover:scale-[1.02] hover:bg-white transition-all duration-300 pointer-events-auto"
            >
              <div className="p-3 rounded-2xl bg-brand-pill text-brand-indigo flex items-center justify-center shrink-0">
                <Users className="w-5 h-5" />
              </div>
              <div className="flex flex-col text-left">
                <span className="font-display font-extrabold text-lg text-brand-dark leading-none">
                  <AnimatedCounter value="1000+" />
                </span>
                <span className="text-[11px] font-semibold text-brand-muted tracking-wide mt-1.5 leading-none">Candidates Placed</span>
              </div>
            </motion.div>

            {/* Card 2: 50+ Clients Served */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={floatCardTransition(1.2)}
              className="hidden lg:flex absolute top-[34%] right-[-18%] z-30 w-fit pl-4 pr-6 py-3 bg-white/90 backdrop-blur-xl border border-brand-border/60 rounded-[24px] shadow-[0_15px_30px_rgba(99,102,241,0.06)] items-center gap-4 hover:shadow-xl hover:scale-[1.02] hover:bg-white transition-all duration-300 pointer-events-auto"
            >
              <div className="p-3 rounded-2xl bg-brand-pill text-brand-indigo flex items-center justify-center shrink-0">
                <Smile className="w-5 h-5" />
              </div>
              <div className="flex flex-col text-left">
                <span className="font-display font-extrabold text-lg text-brand-dark leading-none">
                  <AnimatedCounter value="50+" />
                </span>
                <span className="text-[11px] font-semibold text-brand-muted tracking-wide mt-1.5 leading-none">Clients Served</span>
              </div>
            </motion.div>

            {/* Card 3: 6+ Years Experience */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={floatCardTransition(0.6)}
              className="hidden lg:flex absolute top-[58%] right-[-12%] z-30 w-fit pl-4 pr-6 py-3 bg-white/90 backdrop-blur-xl border border-brand-border/60 rounded-[24px] shadow-[0_15px_30px_rgba(99,102,241,0.06)] items-center gap-4 hover:shadow-xl hover:scale-[1.02] hover:bg-white transition-all duration-300 pointer-events-auto"
            >
              <div className="p-3 rounded-2xl bg-brand-pill text-brand-indigo flex items-center justify-center shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div className="flex flex-col text-left">
                <span className="font-display font-extrabold text-lg text-brand-dark leading-none">
                  <AnimatedCounter value="6+" />
                </span>
                <span className="text-[11px] font-semibold text-brand-muted tracking-wide mt-1.5 leading-none">Years Experience</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Trusted Companies Row */}
        <div id="jobs" className="border-t border-brand-border/40 pt-3 mt-4 sm:mt-6">
          <p className="text-center text-xs font-semibold text-brand-muted uppercase tracking-wider mb-4">
            Trusted by 50+ Leading Organizations
          </p>
          <div className="relative w-full overflow-hidden py-2 select-none pointer-events-none">
            {/* Fade Gradients */}
            <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent z-10" />

            <div className="flex w-max items-center gap-16 animate-marquee">
              {/* Copy 1 */}
              <div className="flex items-center gap-16 pr-16">
                {/* Microsoft */}
                <div className="flex items-center gap-2 font-semibold text-lg text-gray-800">
                  <div className="grid grid-cols-2 gap-0.5 w-5 h-5 shrink-0">
                    <div className="bg-[#F25022]" />
                    <div className="bg-[#7FBA00]" />
                    <div className="bg-[#00A4EF]" />
                    <div className="bg-[#FFB900]" />
                  </div>
                  <span className="font-sans font-semibold tracking-tight text-gray-700">Microsoft</span>
                </div>

                {/* Amazon */}
                <div className="flex flex-col items-center justify-center">
                  <span className="font-sans font-bold text-[19px] tracking-tight text-black leading-none">amazon</span>
                  <svg className="w-12 h-2 -mt-0.5" viewBox="0 0 50 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 2C15 8 35 8 48 2" stroke="#FF9900" strokeWidth="2" strokeLinecap="round" />
                    <path d="M45 1.5L48 2L46.5 5" fill="#FF9900" stroke="#FF9900" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>

                {/* Oracle */}
                <span className="font-sans font-black text-[22px] tracking-tighter text-[#F01F26] uppercase">
                  ORACLE
                </span>

                {/* Siemens */}
                <span className="font-display font-extrabold text-[22px] tracking-tight text-[#00828A] uppercase">
                  SIEMENS
                </span>

                {/* Sony */}
                <span className="font-serif font-semibold text-[20px] tracking-[0.2em] text-[#000000] uppercase">
                  SONY
                </span>

                {/* Samsung */}
                <span className="font-display font-black text-[22px] tracking-tight text-[#074CA1] uppercase italic">
                  SAMSUNG
                </span>

                {/* Philips */}
                <span className="font-display font-black text-[22px] tracking-[0.05em] text-[#0B5CAD] uppercase">
                  PHILIPS
                </span>

                {/* Bosch */}
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 flex items-center justify-center p-[2px]">
                    <div className="w-full h-full bg-white rounded-full flex items-center justify-center font-bold text-[9px] text-gray-800">
                      H
                    </div>
                  </div>
                  <span className="font-display font-extrabold text-[20px] tracking-tight text-[#1D1D1B] uppercase">
                    BOSCH
                  </span>
                </div>
              </div>

              {/* Copy 2 for seamless loop */}
              <div className="flex items-center gap-16 pr-16">
                {/* Microsoft */}
                <div className="flex items-center gap-2 font-semibold text-lg text-gray-800">
                  <div className="grid grid-cols-2 gap-0.5 w-5 h-5 shrink-0">
                    <div className="bg-[#F25022]" />
                    <div className="bg-[#7FBA00]" />
                    <div className="bg-[#00A4EF]" />
                    <div className="bg-[#FFB900]" />
                  </div>
                  <span className="font-sans font-semibold tracking-tight text-gray-700">Microsoft</span>
                </div>

                {/* Amazon */}
                <div className="flex flex-col items-center justify-center">
                  <span className="font-sans font-bold text-[19px] tracking-tight text-black leading-none">amazon</span>
                  <svg className="w-12 h-2 -mt-0.5" viewBox="0 0 50 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 2C15 8 35 8 48 2" stroke="#FF9900" strokeWidth="2" strokeLinecap="round" />
                    <path d="M45 1.5L48 2L46.5 5" fill="#FF9900" stroke="#FF9900" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>

                {/* Oracle */}
                <span className="font-sans font-black text-[22px] tracking-tighter text-[#F01F26] uppercase">
                  ORACLE
                </span>

                {/* Siemens */}
                <span className="font-display font-extrabold text-[22px] tracking-tight text-[#00828A] uppercase">
                  SIEMENS
                </span>

                {/* Sony */}
                <span className="font-serif font-semibold text-[20px] tracking-[0.2em] text-[#000000] uppercase">
                  SONY
                </span>

                {/* Samsung */}
                <span className="font-display font-black text-[22px] tracking-tight text-[#074CA1] uppercase italic">
                  SAMSUNG
                </span>

                {/* Philips */}
                <span className="font-display font-black text-[22px] tracking-[0.05em] text-[#0B5CAD] uppercase">
                  PHILIPS
                </span>

                {/* Bosch */}
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 flex items-center justify-center p-[2px]">
                    <div className="w-full h-full bg-white rounded-full flex items-center justify-center font-bold text-[9px] text-gray-800">
                      H
                    </div>
                  </div>
                  <span className="font-display font-extrabold text-[20px] tracking-tight text-[#1D1D1B] uppercase">
                    BOSCH
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
