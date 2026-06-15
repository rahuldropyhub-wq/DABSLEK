import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue, useMotionTemplate } from 'framer-motion';
import { Sparkles, ArrowRight, ShieldCheck, Target, Users, Zap, Briefcase, Award, CheckCircle2, Star, TrendingUp, Shield, Handshake, User } from 'lucide-react';
import { Link } from 'react-router-dom';

import permanentHeroImg from '../../assets/Permanent_Hero.png';
import statsImg from '../../assets/about-stats-visual.png';

// ─── 3D TILT CARD COMPONENT ──────────────────────────────────────────────────
const TiltCard = ({ children, className = "" }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateY, rotateX, transformStyle: "preserve-3d" }}
      className={`relative w-full rounded-3xl ${className}`}
    >
      <div style={{ transform: "translateZ(50px)" }} className="absolute inset-0 pointer-events-none" />
      {children}
    </motion.div>
  );
};

// ─── SPOTLIGHT CARD COMPONENT ────────────────────────────────────────────────
const SpotlightCard = ({ children, className = "" }) => {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className={`group relative max-w-md rounded-3xl border border-white/10 bg-slate-900 overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              600px circle at ${mouseX}px ${mouseY}px,
              rgba(99, 102, 241, 0.15),
              transparent 80%
            )
          `,
        }}
      />
      {children}
    </div>
  );
};

// ─── FLOATING PARTICLES ──────────────────────────────────────────────────────
const FloatingParticles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-indigo-500/20 rounded-full"
          initial={{
            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1920),
            y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1080),
          }}
          animate={{
            y: [null, Math.random() * -500],
            x: [null, Math.random() * 200 - 100],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

// ─── STACKED CARDS SCROLL ──────────────────────────────────────────────────
const StackedServices = () => {
  const services = [
    { 
      title: "Permanent IT Staffing", 
      subtitle: "Curated by AI to match evolving tech stacks.",
      desc: "Find IT professionals who not only fit today’s needs but can grow with tomorrow’s technologies. Faster, smarter matches across software, cloud, data, AI/ML, and cybersecurity.", 
      img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200",
      color: "from-blue-50 to-indigo-50" 
    },
    { 
      title: "Executive & Leadership Hiring", 
      subtitle: "Strategic roles with cultural alignment.",
      desc: "Hire leaders who drive transformation. We combine AI insights with human expertise to deliver executives aligned with your culture, strategy, and long-term goals.", 
      img: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=1200",
      color: "from-indigo-50 to-purple-50" 
    },
    { 
      title: "Customized Talent Advisory", 
      subtitle: "From workforce planning to succession.",
      desc: "Beyond filling roles, we help you design a future-ready workforce with advisory on hiring frameworks, talent trends, and succession planning.", 
      img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1200",
      color: "from-purple-50 to-pink-50" 
    },
  ];

  return (
    <section className="py-24 px-6 lg:px-16 max-w-[1440px] mx-auto relative z-10 bg-white">
      <div className="text-center mb-16 max-w-4xl mx-auto">
        <h2 className="font-display font-extrabold text-4xl md:text-5xl text-slate-900 mb-6">Our Permanent Hiring Services</h2>
        <p className="text-lg md:text-xl text-slate-600">Tailored solutions to build your core team.</p>
      </div>
      
      <div className="flex flex-col gap-24 md:gap-32 w-full mx-auto pb-32">
        {services.map((service, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className={`overflow-hidden rounded-[3rem] shadow-xl border border-slate-100 flex flex-col ${idx % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-stretch bg-white`}
          >
            <div className={`w-full md:w-1/2 p-10 md:p-20 flex flex-col justify-center bg-gradient-to-br ${service.color}`}>
              <h4 className="text-indigo-600 font-bold text-sm md:text-base tracking-widest uppercase mb-4">{service.subtitle}</h4>
              <h3 className="font-display font-black text-3xl md:text-5xl text-slate-900 mb-6 leading-tight">{service.title}</h3>
              <p className="font-sans text-slate-600 text-lg md:text-xl leading-relaxed">{service.desc}</p>
            </div>
            <div className="w-full md:w-1/2 h-[400px] md:h-auto min-h-[500px] relative overflow-hidden">
              <img src={service.img} alt={service.title} className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-1000" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

// ─── FAQ ITEM COMPONENT ──────────────────────────────────────────────────────
const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-slate-200 py-4">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="w-full flex justify-between items-center text-left focus:outline-none group py-2"
      >
        <span className="font-display font-semibold text-lg text-slate-900 group-hover:text-indigo-600 transition-colors duration-300 pr-8">{question}</span>
        <span className={`ml-6 flex-shrink-0 transition-colors duration-300 ${isOpen ? 'text-indigo-600' : 'text-slate-400 group-hover:text-indigo-400'}`}>
          <svg className={`w-6 h-6 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>
      <motion.div 
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        className="overflow-hidden"
      >
        <p className="mt-4 text-slate-600 leading-relaxed pb-2">
          {answer}
        </p>
      </motion.div>
    </div>
  );
};

// ─── MAIN PAGE ──────────────────────────────────────────────────────────────
export default function PermanentHiring() {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 1000], [0, 400]);
  const heroScale = useTransform(scrollY, [0, 1000], [1, 1.2]);
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <div className="bg-white min-h-screen overflow-x-hidden text-slate-900 selection:bg-indigo-500 selection:text-white">

      {/* 1. NEW TWO-COLUMN HERO SECTION */}
      <section className="relative pt-32 pb-48 overflow-visible bg-gradient-to-b from-indigo-50/30 to-white">
        <FloatingParticles />
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          
          {/* Left Column - Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-start"
          >
            <div className="flex items-center gap-3 text-indigo-700 font-bold text-sm tracking-widest uppercase mb-8">
              <div className="w-10 h-10 rounded-lg bg-indigo-100 flex items-center justify-center">
                <Users className="w-6 h-6 text-indigo-600" />
              </div>
              <span>PERMANENT HIRING</span>
            </div>
            
            <h1 className="font-display font-black text-4xl lg:text-[3.5rem] text-slate-900 leading-[1.15] mb-6 tracking-tight">
              Building Strong Teams<br/>for a <span className="text-indigo-600">Stronger Future</span>
            </h1>
            
            <div className="w-16 h-1 bg-indigo-600 mb-8 rounded-full"></div>
            
            <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-xl leading-relaxed">
              We help you hire the right talent for long-term success. Our permanent hiring solutions ensure you get skilled, reliable, and culture-fit professionals who drive growth and add lasting value to your organization.
            </p>
            
            <div className="w-full max-w-[600px] mb-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 mb-4">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-indigo-600 fill-indigo-100 shrink-0" />
                  <span className="text-slate-800 font-semibold text-base whitespace-nowrap">Rigorous Screening Process</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-indigo-600 fill-indigo-100 shrink-0" />
                  <span className="text-slate-800 font-semibold text-base whitespace-nowrap">Industry Expert Recruiters</span>
                </div>
              </div>
              <div className="flex justify-center w-full sm:w-auto mt-5">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-indigo-600 fill-indigo-100 shrink-0" />
                  <span className="text-slate-800 font-semibold text-base whitespace-nowrap">Long-term Workforce Stability</span>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Right Column - Image & Floating Card */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[600px] w-full lg:ml-6"
          >
            {/* Stylish Circular Background Elements */}
            <div className="absolute -top-16 -right-16 w-96 h-96 border border-indigo-200/60 rounded-full z-0 hidden md:block" />
            <div className="absolute top-1/4 -left-20 w-[40rem] h-[40rem] border border-indigo-100 rounded-full z-0 hidden md:block" />
            
            {/* Stylish Image Container */}
            <div className="relative w-full h-full">
              {/* Decorative Offset Border */}
              <div className="absolute inset-0 border-2 border-indigo-200/50 translate-x-4 translate-y-4 rounded-tl-[8rem] rounded-br-[8rem] rounded-tr-2xl rounded-bl-2xl -z-10 transition-transform duration-700 hover:translate-x-6 hover:translate-y-6" />
              
              {/* Actual Image */}
              <div className="relative w-full h-full rounded-tl-[8rem] rounded-br-[8rem] rounded-tr-2xl rounded-bl-2xl overflow-hidden shadow-2xl z-10 border border-slate-100 bg-white">
                <img 
                  src={permanentHeroImg} 
                  alt="Permanent Hiring Handshake" 
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-900/10 to-transparent pointer-events-none"></div>
              </div>
            </div>
            
          </motion.div>
        </div>

        {/* Bottom Features Bar */}
        <div className="max-w-[1440px] mx-auto mt-16 md:mt-24 relative z-20 px-6 lg:px-16">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white rounded-[2rem] shadow-[0_20px_60px_rgba(0,0,0,0.05)] border border-slate-100 p-8 md:p-12"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-6 divide-y sm:divide-y-0 lg:divide-x divide-slate-100">
              {[
                { icon: Target, title: "Right Fit", desc: "We match the right talent with your job requirements." },
                { icon: Star, title: "Quality Talent", desc: "Access to skilled and pre-vetted professionals." },
                { icon: TrendingUp, title: "Business Growth", desc: "Strong teams that drive performance and growth." },
                { icon: Shield, title: "Retention Focused", desc: "We hire professionals who stay and grow." },
                { icon: Handshake, title: "End-to-End Support", desc: "From sourcing to onboarding, we've got you covered." }
              ].map((feature, idx) => (
                <div key={idx} className="flex flex-col items-center text-center px-4 pt-8 sm:pt-0">
                  <div className="w-16 h-16 rounded-full border-2 border-indigo-50 bg-white shadow-sm flex items-center justify-center mb-6">
                    <feature.icon className="w-8 h-8 text-indigo-600" strokeWidth={1.5} />
                  </div>
                  <h4 className="font-bold text-slate-900 mb-3 text-lg">{feature.title}</h4>
                  <p className="text-sm text-slate-500 leading-relaxed font-medium">{feature.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. WHY CHOOSE SECTION (From Screenshot) */}
      <section className="py-24 px-6 lg:px-16 max-w-[1440px] mx-auto relative z-10 bg-white">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="font-display font-extrabold text-4xl md:text-5xl text-brand-dark mb-6 text-black">Why Choose DABSLEK For<br/>Permanent Hiring?</h2>
          <p className="text-lg md:text-xl text-brand-muted leading-relaxed text-slate-600">Our AI-driven talent intelligence platform analyses millions of profiles, skills, and industry trends, helping us deliver candidates who aren't just qualified — but are the right fit for your business DNA.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "SMARTER TALENT MATCHING",
              img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800"
            },
            {
              title: "FASTER HIRING CYCLES",
              img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800"
            },
            {
              title: "FUTURE-PROOF HIRING",
              img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800"
            }
          ].map((card, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.8 }}
              className="group rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-indigo-500/10 hover:-translate-y-2 transition-all duration-500 cursor-pointer flex flex-col border border-slate-200 bg-[#0a0a0a]"
            >
              <div className="h-[350px] overflow-hidden relative">
                <img src={card.img} alt={card.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100" />
              </div>
              <div className="p-6 bg-[#0a0a0a]">
                <div className="pl-4 border-l-4 border-blue-600">
                  <h3 className="font-display font-bold text-white tracking-widest text-sm sm:text-base uppercase">{card.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. STICKY STACKED SCROLL (SERVICES) */}
      <StackedServices />

      {/* 4. WHEN TO CHOOSE SECTION */}
      <section className="py-24 px-6 lg:px-16 max-w-[1440px] mx-auto bg-slate-50 my-12 rounded-[40px] shadow-sm border border-slate-100">
        <div className="text-center mb-16">
          <h2 className="font-display font-extrabold text-4xl md:text-5xl text-slate-900 mb-6">When to Choose Permanent Staffing?</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 grid grid-cols-1 gap-8">
            {[
              { title: "Talent scales with Business", desc: "Your business requires specialised skills that evolve with industry trends." },
              { title: "Purpose creates value", desc: "You're expanding operations and need a core team to scale sustainably." },
              { title: "Leadership Defines Future", desc: "You're hiring for critical or leadership roles where continuity is essential." },
              { title: "Branding attracts top talent", desc: "You want to strengthen your employer brand by showcasing long-term opportunities." }
            ].map((item, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.6 }}
                className="flex gap-4 group"
              >
                <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center shrink-0 group-hover:bg-indigo-600 group-hover:shadow-[0_0_20px_rgba(79,70,229,0.4)] transition-all duration-500">
                  <Target className="w-6 h-6 text-indigo-600 group-hover:text-white transition-colors duration-500" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-xl text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors duration-300">{item.title}</h4>
                  <p className="text-slate-600">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="order-1 md:order-2 h-[500px] rounded-3xl overflow-hidden shadow-2xl">
            <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1000" alt="When to choose" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
          </div>
        </div>
      </section>

      {/* 5. FAQS SECTION */}
      <section className="py-24 px-6 lg:px-16 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display font-extrabold text-4xl md:text-5xl text-slate-900 mb-6">Frequently Asked Questions</h2>
        </div>
        <div className="flex flex-col gap-2">
          <FAQItem 
            question="What is permanent staffing?" 
            answer="Permanent staffing is the process of providing required candidates for long-term employment based on specified candidate requirements." 
          />
          <FAQItem 
            question="Why should companies choose permanent staffing services?" 
            answer="It reduces hiring time and costs, provides access to a wider talent pool including passive candidates, and ensures long-term alignment with your company's goals and culture." 
          />
          <FAQItem 
            question="How do permanent placement agencies ensure the right candidate fit?" 
            answer="We use a combination of AI-driven talent mapping, rigorous technical screening, behavioral assessments, and deep cultural alignment checks." 
          />
          <FAQItem 
            question="What are the benefits of working with a permanent recruitment agency?" 
            answer="You gain access to specialized recruiters, market insights, faster turnaround times, and guaranteed replacement if the candidate doesn't work out within a specific timeframe." 
          />
        </div>
      </section>

      <style dangerouslySetInnerHTML={{
        __html: `
        .outline-text-transparent {
          color: transparent;
          -webkit-text-stroke: 1px rgba(255, 255, 255, 0.2);
        }
        .outline-text-transparent-dark {
          color: transparent;
          -webkit-text-stroke: 1px rgba(0, 0, 0, 0.15);
        }
        .animate-gradient-x {
          background-size: 200% auto;
          animation: gradientX 3s linear infinite;
        }
        @keyframes gradientX {
          to {
            background-position: 200% center;
          }
        }
      `}} />
    </div>
  );
}
