import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, useInView, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import {
  Sparkles, ArrowRight, ArrowLeft, ArrowUpRight, CheckCircle, Users,
  Building2, Briefcase, Award, Code, Landmark, HeartPulse, Megaphone,
  Radio, ShoppingBag, Truck, Bike, GraduationCap, Factory, Zap,
  ShieldCheck, UserRound, ClipboardCheck, Sliders, ChevronLeft,
  ChevronRight, Star, Quote, RefreshCw, Scale, Headphones, Mail,
  Phone, MapPin, Globe, ShieldAlert, Check, Loader2
} from 'lucide-react';
import Hero from '../components/Hero';
import aboutCollaboration from '../assets/about-collaboration.png';
import permanentHiringCard from '../assets/permanent-hiring-card.jpg';
import contractHiringCard from '../assets/contract-hiring-card.jpg';
import rpoCard from '../assets/rpo-card.jpg';
import payrollProcessingCard from '../assets/payroll-processing-card.jpg';
import deliveryExecutiveCard from '../assets/delivery-executive-card.jpg';
import collegePlacementsCard from '../assets/college-placements-card.jpg';
import itServicesBg from '../assets/it-services-bg.jpg';
import bfsiBg from '../assets/bfsi-bg.jpg';
import pharmaBg from '../assets/pharma-bg.jpg';
import mediaBg from '../assets/media-bg.jpg';
import telecomBg from '../assets/telecom-bg.jpg';
import ecommerceBg from '../assets/ecommerce-bg.jpg';
import logisticsBg from '../assets/logistics-bg.jpg';
import quickCommerceBg from '../assets/quick-commerce-bg.jpg';
import edtechBg from '../assets/edtech-bg.jpg';
import manufacturingBg from '../assets/manufacturing-bg.jpg';

// Self-contained Animated Counter component for scrolling stats
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

export default function Home() {
  // Common animation configurations
  const fadeInUp = {
    hidden: { opacity: 0, y: 25 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        delay: custom * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    }),
  };

  const servicesContainerRef = useRef(null);
  const scrollServices = (direction) => {
    if (servicesContainerRef.current) {
      const scrollAmount = 344; // Card width (320px) + Gap (24px)
      servicesContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  const [activeIdx, setActiveIdx] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const index = Math.min(Math.floor(latest * 10), 9);
    setActiveIdx(index);
  });

  const scrollToSlide = (idx) => {
    if (targetRef.current) {
      const offsetTop = targetRef.current.offsetTop;
      const totalHeight = targetRef.current.offsetHeight - window.innerHeight;
      // Scroll to the midpoint of the slide's active scroll range
      const targetScroll = offsetTop + ((idx + 0.5) / 10) * totalHeight;
      window.scrollTo({
        top: targetScroll,
        behavior: 'smooth'
      });
    }
  };

  // Section 8: Hiring Process state
  const [activeStep, setActiveStep] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 5);
    }, 4500);
    return () => clearInterval(timer);
  }, []);
  const processSteps = [
    {
      title: "Requirement Understanding",
      desc: "We align closely with your executive team to map technical needs, culture fit, budget constraints, and growth metrics.",
      details: "Detailed onboarding questionnaire, talent landscape reports, and intake calls with engineering leads."
    },
    {
      title: "Candidate Sourcing",
      desc: "Leveraging our proprietary AI database and elite tech recruiters to build a highly targeted pipeline.",
      details: "Multi-channel sourcing across private networks, candidate databases, developer forums, and direct headhunting."
    },
    {
      title: "Screening & Shortlisting",
      desc: "Candidates undergo rigorous multi-stage technical and behavioral evaluation before matching.",
      details: "Aptitude tests, live coding reviews, soft skills verification, and cultural compatibility screenings."
    },
    {
      title: "Interview Coordination",
      desc: "We manage the entire calendar logistics, interview preparation feedback loops, and alignment.",
      details: "Panel setup, feedback collation, candidate briefing, and real-time scheduling coordination."
    },
    {
      title: "Onboarding & Support",
      desc: "Ensuring smooth transition, paperwork processing, compliance management, and replacement policy activation.",
      details: "Background verification tracking, continuous post-placement follow-ups, and transition coaching."
    }
  ];



  // Section 13: FAQ state
  const [activeFaq, setActiveFaq] = useState(null);
  const faqs = [
    {
      q: "How fast can you source candidates for a new project?",
      a: "Our typical turnaround time for initial profiles is 48 hours. For niche or leadership roles, we aim to provide a curated shortlist within 5-7 business days."
    },
    {
      q: "Do you handle payroll and compliance for contract staff?",
      a: "Yes, we provide end-to-end payroll management, including PF, ESI, Professional Tax, and full adherence to all national and regional labor laws."
    },
    {
      q: "What is your replacement policy if a candidate leaves?",
      a: "We offer a standard 90-day replacement guarantee. If a candidate leaves within this period, we source a replacement at no additional cost."
    },
    {
      q: "Which industries do you specialize in?",
      a: "We have deep expertise across IT & Tech, BFSI, Manufacturing, Logistics, Pharma, and E-commerce. Our specialized recruiters understand the unique demands of each sector."
    }
  ];

  return (
    <div className="bg-white">
      {/* 🚀 Render the existing completed Hero Section */}
      <Hero />

      {/* 📊 SECTION 2 – ANIMATED BUSINESS STATISTICS */}
      <section className="hidden lg:block relative z-10 w-full max-w-[1440px] mx-auto px-6 lg:px-12 py-12 lg:py-20 overflow-hidden">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {[
            { value: "1000+", label: "Candidates Placed", sub: "Successfully Sourced", icon: Users, color: "from-brand-indigo/10 to-brand-indigo/5 text-brand-indigo" },
            { value: "50+", label: "Enterprise Clients", sub: "Served with Pride", icon: Building2, color: "from-brand-violet/10 to-brand-violet/5 text-brand-violet" },
            { value: "10+", label: "Industries Covered", sub: "Cross-Sector Expertise", icon: Briefcase, color: "from-indigo-50 to-white text-brand-indigo-light" },
            { value: "4+", label: "Years of Excellence", sub: "Established in 2022", icon: Award, color: "from-amber-500/10 to-amber-500/5 text-amber-600" }
          ].map((stat, i) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={i}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                custom={i}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className="p-4 sm:p-5 rounded-[20px] bg-white border border-brand-border/60 shadow-[0_8px_30px_rgb(0,0,0,0.02)] backdrop-blur-md relative overflow-hidden flex flex-row items-center gap-4 group hover:shadow-[0_12px_40px_rgba(99,102,241,0.08)] duration-300 transition-all"
              >
                {/* Gradient background hover effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-indigo/5 via-transparent to-brand-violet/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className={`p-3 w-12 h-12 shrink-0 rounded-xl bg-gradient-to-tr ${stat.color} shadow-sm flex items-center justify-center`}>
                  <IconComponent className="w-5 h-5" />
                </div>

                <div className="relative z-10 flex flex-col text-left">
                  <h3 className="font-display font-extrabold text-2xl lg:text-3xl text-brand-dark tracking-tight leading-none mb-1">
                    <AnimatedCounter value={stat.value} />
                  </h3>
                  <h4 className="font-display font-bold text-xs lg:text-sm text-brand-dark leading-tight">{stat.label}</h4>
                  <p className="text-[10px] text-brand-muted mt-0.5 font-sans leading-none">{stat.sub}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* 🏢 SECTION 3 – ABOUT DABSLEK */}
      <section className="relative z-10 w-full max-w-[1440px] mx-auto px-6 lg:px-12 py-12 lg:py-20 border-t border-brand-border/40 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Column (Content) */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-brand-pill border border-brand-indigo/10 text-brand-indigo font-semibold text-xs tracking-wider uppercase mb-5">
              <Sparkles className="w-3.5 h-3.5 animate-pulse" />
              <span>Innovating Sourcing</span>
            </span>

            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-[46px] text-brand-dark leading-[1.15] mb-6">
              Empowering Businesses with <span className="bg-gradient-to-r from-brand-indigo-light to-brand-violet bg-clip-text text-transparent">Exceptional Talent</span>
            </h2>

            <p className="text-brand-muted text-sm sm:text-base leading-relaxed mb-6 font-sans">
              DABSLEK is an enterprise-grade workforce solutions company specializing in IT and Non-IT recruitment services. Founded with a vision to bridge the recruitment divide, we construct high-speed talent channels that empower Indian corporations to scale rapidly and maintain compliance.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-8">
              <div className="p-5 rounded-2xl bg-brand-bg-alt border border-brand-border/50 hover:bg-white hover:shadow-lg transition-all duration-300 text-left">
                <span className="font-display font-bold text-xs uppercase tracking-widest text-brand-indigo">Our Mission</span>
                <p className="text-xs text-brand-muted mt-2 leading-relaxed font-sans">To optimize client operational capacity by delivering pre-screened, high-velocity human resources that align with strategic long-term goals.</p>
              </div>
              <div className="p-5 rounded-2xl bg-brand-bg-alt border border-brand-border/50 hover:bg-white hover:shadow-lg transition-all duration-300 text-left">
                <span className="font-display font-bold text-xs uppercase tracking-widest text-brand-indigo">Our Vision</span>
                <p className="text-xs text-brand-muted mt-2 leading-relaxed font-sans">To become India’s most reliable talent architecture firm, setting global benchmarks in compliance-driven recruitment automation and retention.</p>
              </div>
            </div>

            <Link
              to="/about"
              className="relative overflow-hidden group h-12 px-6 rounded-xl border border-brand-indigo text-brand-indigo font-semibold text-sm flex items-center justify-center bg-transparent hover:scale-[1.02] active:scale-[0.98] hover:shadow-lg transition-all duration-300"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-brand-indigo to-brand-violet transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-out z-0 pointer-events-none" />
              <span className="relative z-10 group-hover:text-white transition-colors duration-300 flex items-center gap-2">
                Learn More About Us <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </div>

          {/* Right Column (Asymmetrical Leaf Image Shape Structure) */}
          <div className="lg:col-span-6 relative py-10 flex items-center justify-center">
            {/* Background Decorative Glow */}
            <div className="absolute w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-brand-indigo/15 to-brand-violet/15 blur-[60px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0" />

            {/* Main Interactive Stack */}
            <div className="relative w-full max-w-[580px] z-10 px-4">

              {/* Back Offset Card (Layer 1 - matching the leaf shape) */}
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-indigo to-brand-violet rounded-tl-[100px] rounded-br-[100px] rounded-tr-[32px] rounded-bl-[32px] translate-x-3 translate-y-3 opacity-15 blur-[1px] z-0" />

              {/* Image Container (Layer 2 - leaf shape) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative overflow-hidden rounded-tl-[100px] rounded-br-[100px] rounded-tr-[32px] rounded-bl-[32px] border-2 border-brand-border bg-white p-2.5 shadow-2xl z-10"
              >
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-tl-[90px] rounded-br-[90px] rounded-tr-[22px] rounded-bl-[22px]">
                  <img
                    src={aboutCollaboration}
                    alt="DABSLEK Workspace Team Collaboration"
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                  />
                  {/* Subtle Dark Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none" />
                </div>
              </motion.div>

            </div>
          </div>
        </div>
      </section>

      {/* 💼 SECTION 4 – PREMIUM SERVICES SHOWCASE */}
      <section className="relative z-10 w-full max-w-[1440px] mx-auto px-6 lg:px-12 py-12 lg:py-20 overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 text-center md:text-left">
          <div className="max-w-[700px] mx-auto md:mx-0">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-pill border border-brand-indigo/10 text-brand-indigo font-semibold text-xs tracking-wider uppercase mb-4">
              Our Offerings
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-brand-dark mb-3">
              Premium <span className="bg-gradient-to-r from-brand-indigo-light to-brand-violet bg-clip-text text-transparent">Staffing & Sourcing</span> Solutions
            </h2>
            <p className="text-brand-muted text-sm font-sans leading-relaxed max-w-[500px] mx-auto md:mx-0">
              DABSLEK supports diverse operations through pre-vetted sourcing, compliant HR systems, and accelerated placement tracks.
            </p>
          </div>

          {/* Slider Navigation Buttons (Desktop) */}
          <div className="hidden md:flex gap-3 shrink-0 self-end">
            <button
              onClick={() => scrollServices('left')}
              className="w-12 h-12 rounded-full bg-white border border-brand-border/60 hover:border-brand-indigo hover:text-brand-indigo flex items-center justify-center transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer"
              aria-label="Slide left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scrollServices('right')}
              className="w-12 h-12 rounded-full bg-white border border-brand-border/60 hover:border-brand-indigo hover:text-brand-indigo flex items-center justify-center transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer"
              aria-label="Slide right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Manual Horizontal Slider snap-scroll container */}
        <div
          ref={servicesContainerRef}
          className="flex gap-4 sm:gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-8 pt-4 -mx-6 px-6 lg:-mx-12 lg:px-12"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {/* CSS to hide webkit scrollbars for clean dashboard feel */}
          <style>{`
            div::-webkit-scrollbar {
              display: none;
            }
          `}</style>

          {[
            {
              title: "Permanent Hiring",
              desc: "Identify, pre-evaluate, and secure executive-level candidates built for long-term strategic alignment.",
              path: "/services/permanent-hiring",
              icon: UserRound,
              image: permanentHiringCard,
              features: ["90-Day Replacement Guarantee", "Executive Sourcing Integrity", "Multi-stage Technical Vetting", "100% Background Verifications"]
            },
            {
              title: "Contract Hiring",
              desc: "Add immediate technical or general workforce capacity through flexible billing and contracting structures.",
              path: "/services/contract-hiring",
              icon: ClipboardCheck,
              image: contractHiringCard,
              features: ["Rapid Onboarding Tracks", "Flexible Billing Models", "Scale Operations Instantly", "Full SLA & Compliance Vetting"]
            },
            {
              title: "Recruitment Process Outsourcing (RPO)",
              desc: "Transfer your entire recruiting operations to us—from job profiles to screening, tracking, and final offers.",
              path: "/services/rpo",
              icon: Sliders,
              image: rpoCard,
              features: ["Dedicated Recruitment Squads", "Advanced ATS Integrations", "Optimized Cost Per Hire", "Transparent Pipeline Metrics"]
            },
            {
              title: "Payroll Processing",
              desc: "Offload compliance administration, employee payouts, taxes, PF/ESI management, and custom reporting.",
              path: "/services/payroll-processing",
              icon: Scale,
              image: payrollProcessingCard,
              features: ["Automated Disbursements", "Full PF/ESI Compliance", "Regional Tax Declarations", "Employee Helpdesk Support"]
            },
            {
              title: "Delivery Executive Hiring",
              desc: "Rapid bulk-sourcing and onboarding of operations specialists, field staff, and logistics fleets.",
              path: "/services/delivery-executive-hiring",
              icon: Truck,
              image: deliveryExecutiveCard,
              features: ["High-volume gig sourcing", "Instant geo-onboarding", "Document authenticity checks", "Fleet operations managers"]
            },
            {
              title: "Campus & College Placements",
              desc: "Coordinate placements with Tier-1 and Tier-2 institutes across India to source top fresh graduate talent.",
              path: "/services/college-placements",
              icon: GraduationCap,
              image: collegePlacementsCard,
              features: ["Direct placement liaison", "Custom aptitude screenings", "Scalable freshers hiring", "Statewide college outreach"]
            }
          ].map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={idx}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                custom={idx}
                whileHover={{ y: -8 }}
                tabIndex="0"
                className="w-[280px] sm:w-[320px] h-[400px] sm:h-[420px] flex-shrink-0 snap-center sm:snap-start rounded-[28px] border border-brand-border/40 relative overflow-hidden group shadow-md hover:shadow-2xl focus:shadow-2xl transition-all duration-500 bg-brand-dark outline-none cursor-pointer"
              >
                {/* The Image (Visible by default) */}
                <img
                  src={service.image}
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-in-out scale-100 group-hover:scale-105 z-0"
                />

                {/* Default Gradient Overlay (Covering bottom portion, expanding on hover/focus with backdrop blur) */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/30 to-transparent group-hover:bg-brand-dark/90 group-hover:backdrop-blur-sm group-focus:bg-brand-dark/90 group-focus:backdrop-blur-sm transition-all duration-500 z-10 pointer-events-none" />

                {/* Content Container */}
                <div className="absolute inset-0 p-6 z-20 flex flex-col justify-end text-white text-left h-full">
                  {/* Top Bar (Icon + Title) */}
                  <div className="mb-3">
                    <div className="p-3.5 rounded-2xl bg-white/20 backdrop-blur-md text-white w-fit mb-4 group-hover:bg-brand-indigo shadow-lg transition-colors duration-300">
                      <Icon className="w-5 h-5 drop-shadow-md" />
                    </div>
                    <h3 className="font-display font-extrabold text-xl transition-all duration-300 drop-shadow-lg text-white">
                      {service.title}
                    </h3>
                  </div>

                  {/* Bottom Bar (Slides up on Hover or Tap) */}
                  <div className="flex flex-col gap-4">
                    {/* Container for Description and Bullet list */}
                    <div className="overflow-hidden max-h-0 opacity-0 group-hover:max-h-[250px] group-hover:opacity-100 group-focus:max-h-[250px] group-focus:opacity-100 transition-all duration-700 ease-in-out flex flex-col gap-3">
                      <p className="text-white/80 text-xs leading-relaxed font-sans">
                        {service.desc}
                      </p>
                      <div className="flex flex-col gap-1.5 pt-1.5 border-t border-white/10">
                        <span className="text-[9px] font-bold tracking-widest text-brand-indigo-light uppercase">Key Solutions:</span>
                        <ul className="flex flex-col gap-1.5">
                          {service.features.map((feature, fIdx) => (
                            <li key={fIdx} className="flex items-center gap-1.5 text-white text-[11px] font-medium">
                              <Check className="w-3 h-3 text-brand-indigo-light shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Explore Link */}
                    <Link
                      to={service.path}
                      className="flex items-center gap-1.5 text-xs font-bold text-white hover:text-brand-indigo-light transition-colors group/link w-fit cursor-pointer mt-1"
                    >
                      Explore Service
                      <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 duration-300 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* 🏭 SECTION 5 – INDUSTRIES WE SERVE (Premium Sticky Scroll Slides) */}
      <div ref={targetRef} className="relative h-[1500vh] bg-[#090D16]">
        {/* Sticky viewport container */}
        <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#090D16] text-white">
          <AnimatePresence initial={false}>
            {[
              {
                title: "IT Services & Software",
                icon: Code,
                desc: "Powering tech giants and fast-growing SaaS startups with elite software developers, devops leads, and systems engineers.",
                image: itServicesBg,
                points: ["Fullstack Developers", "Cloud & DevOps Architects", "Data Scientists & ML Leads", "Cybersecurity Engineers"]
              },
              {
                title: "BFSI & FinTech",
                icon: Landmark,
                desc: "Sourcing elite financial analysts, risk managers, tax professionals, and chartered accountants for leading firms.",
                image: bfsiBg,
                points: ["Investment Advisors", "Financial Risk Analysts", "Chartered Accountants", "Regulatory Compliance Officers"]
              },
              {
                title: "Pharma & Healthcare",
                icon: HeartPulse,
                desc: "Bridging clinical research and healthcare delivery with verified laboratory scientists, nurses, and operational leads.",
                image: pharmaBg,
                points: ["Certified Lab Technicians", "Senior Nursing Staff", "Clinical Trial Coordinators", "Medical Sales Representatives"]
              },
              {
                title: "Media & Marketing",
                icon: Megaphone,
                desc: "Placing creative innovators and digital campaign specialists who drive brand growth and campaign success.",
                image: mediaBg,
                points: ["Creative & Art Directors", "Paid Media Managers", "Senior UI/UX Designers", "Digital Growth Strategists"]
              },
              {
                title: "Telecommunications",
                icon: Radio,
                desc: "Connecting telecom network infrastructure leaders with RF planning engineers and field installation supervisors.",
                image: telecomBg,
                points: ["RF Planning Engineers", "Fiber Network Technicians", "Field Deployment Managers", "NOC Operations Specialists"]
              },
              {
                title: "E-commerce & Retail",
                icon: ShoppingBag,
                desc: "Category managers, merchandising analysts, and store operations coordinators.",
                image: ecommerceBg,
                points: ["Category Growth Leads", "Digital Merchants", "Retail Store Directors", "Inventory Analysts"]
              },
              {
                title: "Logistics & Supply Chain",
                icon: Truck,
                desc: "Optimizing warehouse operations and transport logistics with experienced supervisors and inventory planners.",
                image: logisticsBg,
                points: ["Supply Chain Leads", "Warehouse Supervisors", "Fleet Coordinators", "Inventory Planners"]
              },
              {
                title: "Quick Commerce & Delivery",
                icon: Bike,
                desc: "Managing high-volume fleet recruitment, gig workers onboarding, and fulfillment operations.",
                image: quickCommerceBg,
                points: ["Gig Delivery Fleets Sourced", "Compliance Onboarding Leads", "Fulfillment Hub Managers", "Last-Mile Delivery Leads"]
              },
              {
                title: "Education & EdTech",
                icon: GraduationCap,
                desc: "Connecting institutes and training academies with aptitude coordinators and corporate placement advisor teams.",
                image: edtechBg,
                points: ["Placement Directors", "Technical Aptitude Trainers", "Career Advisors", "Institutional Liaisons"]
              },
              {
                title: "Manufacturing & Heavy Industries",
                icon: Factory,
                desc: "Ensuring industrial safety compliance, plant supervisors excellence, and mechanical inspectors.",
                image: manufacturingBg,
                points: ["Plant Operations Supervisors", "EH&S Compliance Leads", "Quality Control Inspectors", "Precision Machine Operators"]
              }
            ].map((ind, idx) => {
              if (idx !== activeIdx) return null;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="absolute inset-0 w-full h-full flex flex-col justify-center pt-24 pb-16"
                >
                  {/* Full-bleed Background Image with Dark Overlay */}
                  <div className="absolute inset-0 z-0 bg-[#090D16]">
                    <img
                      src={ind.image}
                      alt={ind.title}
                      className="w-full h-full object-cover filter brightness-[0.8] contrast-[1.05]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#090D16] via-[#090D16]/60 to-transparent" />
                  </div>

                  {/* Content Container */}
                  <div className="relative z-10 w-full max-w-[90%] sm:max-w-[85%] mx-auto px-4 sm:px-8">
                    <div className="w-full text-left">
                      {/* Breadcrumb Indicator */}
                      <span className="text-orange-500 font-bold text-xs uppercase tracking-widest mb-3 block drop-shadow-md">
                        Sector Focus &bull; {idx + 1} of 10
                      </span>

                      {/* Heading */}
                      <h3 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-orange-500 tracking-tight leading-none mb-6 drop-shadow-md">
                        {ind.title}
                      </h3>

                      {/* Description */}
                      <p className="text-white/90 text-sm sm:text-base leading-relaxed mb-8 font-sans max-w-2xl drop-shadow-md">
                        {ind.desc}
                      </p>

                      {/* Subheading */}
                      <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-4 drop-shadow-md">
                        How We Help:
                      </h4>

                      {/* Numbered List with Horizontal Dividers */}
                      <div className="border-t border-white/20 w-full max-w-3xl">
                        {ind.points.map((point, pIdx) => (
                          <div
                            key={pIdx}
                            className="border-b border-white/20 py-4 flex items-center justify-between text-white/95 text-sm sm:text-base font-semibold drop-shadow-md"
                          >
                            <div className="flex items-center gap-4">
                              <span className="text-orange-500 font-display font-black tracking-wide">
                                {String(pIdx + 1).padStart(2, '0')}
                              </span>
                              <span>{point}</span>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* White Solid Button */}
                      <Link
                        to="/contact"
                        className="inline-flex items-center justify-center gap-2 mt-8 bg-white hover:bg-gray-100 active:scale-95 text-black font-extrabold text-sm px-7 py-3.5 rounded-lg shadow-xl transition-all duration-300"
                      >
                        <span>Request Talent Map</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>

          {/* Vertical Dots Navigation - Scroll progress indicator */}
          <div className="absolute right-4 sm:right-10 top-1/2 -translate-y-1/2 z-30 hidden md:flex flex-col gap-3">
            {[
              "IT Services", "BFSI & FinTech", "Pharma & Healthcare", "Media & Marketing",
              "Telecoms", "E-commerce & Retail", "Logistics", "Quick Commerce",
              "Education & EdTech", "Manufacturing"
            ].map((title, idx) => {
              const isActive = idx === activeIdx;
              return (
                <button
                  key={idx}
                  onClick={() => scrollToSlide(idx)}
                  className="group flex items-center justify-end gap-3 focus:outline-none cursor-pointer py-1"
                  aria-label={`Go to slide ${idx + 1}`}
                >
                  <span className={`text-[10px] font-display font-bold tracking-wider uppercase transition-all duration-300 pointer-events-none hidden lg:inline-block ${isActive ? 'text-orange-500 opacity-100' : 'text-white/30 opacity-0 group-hover:opacity-75'}`}>
                    {title}
                  </span>

                  <div className="relative w-6 h-6 flex items-center justify-center">
                    <motion.div
                      animate={{
                        width: isActive ? 10 : 6,
                        height: isActive ? 10 : 6,
                        backgroundColor: isActive ? "#f97316" : "rgba(255,255,255,0.25)"
                      }}
                      className="rounded-full transition-all duration-300"
                    />
                    {isActive && (
                      <motion.div
                        layoutId="activeDotRing"
                        className="absolute inset-0 rounded-full border border-orange-500/50"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Visual Scroll Down Indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2 animate-pulse opacity-50 pointer-events-none">
            <span className="text-[10px] uppercase tracking-widest font-bold text-white">Scroll</span>
            <div className="w-[1px] h-8 bg-gradient-to-b from-white to-transparent" />
          </div>

        </div>
      </div>

      {/* 🚀 SECTION 6 – EMERGING SECTORS */}
      <section className="relative z-10 w-full max-w-[1440px] mx-auto px-6 lg:px-12 py-12 lg:py-20 overflow-hidden">
        <div className="max-w-[800px] mx-auto text-center mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-pill border border-brand-indigo/10 text-brand-indigo font-semibold text-xs tracking-wider uppercase mb-4">
            Next-Gen Sourcing
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-brand-dark mb-4">
            Emerging & <span className="bg-gradient-to-r from-brand-indigo-light to-brand-violet bg-clip-text text-transparent">High-Growth Sectors</span>
          </h2>
          <p className="text-brand-muted text-sm sm:text-base max-w-lg mx-auto font-sans">
            We actively build talent pools for new-age industries requiring highly specialized, hard-to-find skillsets.
          </p>
        </div>

        {/* High-Growth Sectors Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mt-12 max-w-5xl mx-auto">
          {[
            { label: "AI & Machine Learning", desc: "Data Scientists & ML Engineers", color: "from-brand-indigo to-blue-500" },
            { label: "FinTech", desc: "Blockchain & Payment Systems", color: "from-blue-500 to-cyan-500" },
            { label: "SaaS", desc: "Cloud Architecture & DevOps", color: "from-brand-violet to-purple-500" },
            { label: "EdTech", desc: "E-Learning & Platform Dev", color: "from-purple-500 to-pink-500" },
            { label: "RetailTech", desc: "E-commerce & Supply Chain", color: "from-pink-500 to-rose-500" },
            { label: "EV & Mobility", desc: "Embedded Systems & IoT", color: "from-emerald-500 to-teal-500" },
            { label: "AgriTech", desc: "Agri-data & Smart Farming", color: "from-teal-500 to-cyan-500" },
            { label: "Gaming", desc: "AR/VR & Unity Developers", color: "from-amber-500 to-orange-500" }
          ].map((sector, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              custom={i}
              whileHover={{ scale: 1.02 }}
              className="relative group rounded-full bg-white border border-brand-border/60 shadow-[0_4px_20px_rgb(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgba(99,102,241,0.06)] overflow-hidden transition-all duration-300 p-3 sm:p-4 pr-6 sm:pr-8 flex items-center justify-between gap-4 cursor-pointer"
            >
              {/* Subtle hover background glow */}
              <div className={`absolute inset-0 bg-gradient-to-r ${sector.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 pointer-events-none`} />

              <div className="flex items-center gap-4 sm:gap-5 z-10">
                {/* Number Badge */}
                <div className="relative w-12 h-12 sm:w-14 sm:h-14 flex-shrink-0 flex items-center justify-center rounded-full bg-slate-50 border border-brand-border/40 group-hover:border-transparent transition-colors duration-300 shadow-inner">
                  <div className={`absolute inset-0 rounded-full bg-gradient-to-tr ${sector.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`} />
                  <span className={`font-black text-lg sm:text-xl text-transparent bg-clip-text bg-gradient-to-tr ${sector.color}`}>
                    {(i + 1).toString().padStart(2, '0')}
                  </span>
                </div>

                {/* Text Content */}
                <div className="flex flex-col justify-center">
                  <h3 className="font-display font-bold text-base sm:text-lg text-brand-dark leading-tight mb-0.5 group-hover:text-brand-indigo transition-colors duration-300">
                    {sector.label}
                  </h3>
                  <p className="text-[11px] sm:text-xs font-sans text-brand-muted truncate max-w-[160px] sm:max-w-[220px]">
                    {sector.desc}
                  </p>
                </div>
              </div>

              {/* Action Arrow */}
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-slate-50 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-indigo/10 transition-colors duration-300 z-10">
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-brand-muted group-hover:text-brand-indigo transition-colors duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ⭐ SECTION 7 – WHY CHOOSE DABSLEK */}
      <section className="relative z-10 w-full max-w-[1440px] mx-auto px-6 lg:px-12 py-12 lg:py-20 border-t border-brand-border/40 overflow-hidden">
        <div className="max-w-[800px] mx-auto text-center mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-pill border border-brand-indigo/10 text-brand-indigo font-semibold text-xs tracking-wider uppercase mb-4">
            Our Differentiators
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-brand-dark mb-4">
            Why Forward-Thinking Businesses <span className="bg-gradient-to-r from-brand-indigo-light to-brand-violet bg-clip-text text-transparent">Choose DABSLEK</span>
          </h2>
          <p className="text-brand-muted text-sm sm:text-base max-w-lg mx-auto font-sans">
            We provide strategic advantages through fast processes, strict compliance, and high candidate retention metrics.
          </p>
        </div>

        {/* Tree Layout (Timeline) */}
        <div className="relative max-w-5xl mx-auto py-10 px-2 sm:px-0 mt-8">
          {/* Central Trunk Line */}
          <div className="absolute left-[39px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-brand-indigo/10 via-brand-indigo/20 to-transparent md:-translate-x-1/2" />

          <div className="flex flex-col gap-5 md:gap-8 relative z-10">
            {[
              {
                title: "Fast Hiring Process",
                desc: "By combining proprietary sourcing networks with automated parsing, we slash days-to-hire by 45%.",
                icon: Zap,
                color: "text-amber-500",
                bgColor: "bg-amber-50"
              },
              {
                title: "Pre-Screened Candidates",
                desc: "Every candidate undergoes initial verification checks, coding assessments, and cultural vetting.",
                icon: ShieldCheck,
                color: "text-emerald-500",
                bgColor: "bg-emerald-50"
              },
              {
                title: "Dedicated Account Manager",
                desc: "Say goodbye to ticket portals. Your organization receives a direct, single point of contact manager.",
                icon: UserRound,
                color: "text-brand-indigo",
                bgColor: "bg-brand-indigo/10"
              },
              {
                title: "End-to-End Recruitment",
                desc: "From profile generation to coordinate interviewing and onboarding support, we handle it all.",
                icon: ClipboardCheck,
                color: "text-brand-violet",
                bgColor: "bg-brand-violet/10"
              },
              {
                title: "Customized Sourcing Strategy",
                desc: "We build specific sourcing maps tailored to your exact tech stack, legacy systems, and budget constraints.",
                icon: Sliders,
                color: "text-indigo-500",
                bgColor: "bg-indigo-50"
              }
            ].map((feature, i) => {
              const Icon = feature.icon;
              const isEven = i % 2 === 0;

              return (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  custom={i}
                  className={`relative flex flex-col md:flex-row items-start md:items-center w-full group ${isEven ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Branch Node (Icon in the center) */}
                  <div className="absolute left-[20px] md:left-1/2 md:-translate-x-1/2 top-8 md:top-1/2 md:-translate-y-1/2 flex items-center justify-center z-20">
                    <div className="w-10 h-10 rounded-full bg-brand-pill border-[4px] border-white flex items-center justify-center shadow-sm group-hover:border-brand-indigo/10 transition-colors duration-300">
                      <div className="w-3 h-3 rounded-full bg-brand-indigo group-hover:scale-150 transition-transform duration-300" />
                    </div>
                  </div>

                  {/* Content Container */}
                  <div className={`w-full md:w-1/2 pl-[70px] md:pl-0 ${isEven ? 'md:pr-10 lg:pr-12 md:text-right' : 'md:pl-10 lg:pl-12 md:text-left'}`}>
                    <div className={`relative py-2 transition-all duration-300 overflow-hidden text-left ${isEven ? 'md:text-right' : ''} group-hover:-translate-y-1`}>

                      <div className={`flex items-center gap-3 mb-2 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                        <div className={`p-2 rounded-lg ${feature.bgColor} ${feature.color} shadow-sm group-hover:scale-110 transition-transform duration-300 shrink-0`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <h3 className="font-display font-extrabold text-base sm:text-lg text-brand-dark group-hover:text-brand-indigo transition-colors duration-300">
                          {feature.title}
                        </h3>
                      </div>

                      <p className={`text-brand-muted text-xs sm:text-[13px] leading-relaxed font-sans ${isEven ? 'md:ml-auto' : ''} max-w-sm`}>
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 🔄 SECTION 8 – OUR HIRING PROCESS */}
      <section className="relative z-10 w-full max-w-[1440px] mx-auto px-6 lg:px-12 py-20 border-t border-brand-border/40">
        <div className="max-w-[800px] mx-auto text-center mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-pill border border-brand-indigo/10 text-brand-indigo font-semibold text-xs tracking-wider uppercase mb-4">
            How It Works
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-brand-dark mb-4">
            Our Structured <span className="bg-gradient-to-r from-brand-indigo-light to-brand-violet bg-clip-text text-transparent">Hiring Process</span>
          </h2>
          <p className="text-brand-muted text-sm sm:text-base max-w-lg mx-auto font-sans">
            A highly optimized, transparent timeline designed to deliver quality outcomes with minimum corporate friction.
          </p>
        </div>

        {/* Interactive Timeline Layout */}
        <div className="max-w-5xl mx-auto">
          {/* Horizontal Indicator Steps (Desktop) / Vertical Steps List (Mobile) */}
          <div className="hidden lg:grid grid-cols-5 gap-4 mb-10 relative">
            {/* Animated Connector Line */}
            <div className="absolute top-[28px] left-[10%] right-[10%] h-[3px] bg-slate-100 z-0">
              <motion.div
                className="h-full bg-gradient-to-r from-brand-indigo to-brand-violet"
                initial={{ width: '0%' }}
                whileInView={{ width: `${(activeStep / 4) * 100}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              />
            </div>

            {processSteps.map((step, idx) => (
              <button
                key={idx}
                onClick={() => setActiveStep(idx)}
                className="relative z-10 flex flex-col items-center text-center cursor-pointer group"
              >
                <div className={`w-14 h-14 rounded-full border-4 ${activeStep === idx
                  ? "bg-brand-indigo border-white text-white shadow-lg shadow-brand-indigo/35 scale-110"
                  : "bg-white border-slate-100 text-brand-muted hover:border-brand-indigo/25 hover:text-brand-indigo"
                  } flex items-center justify-center font-display font-extrabold text-base transition-all duration-300`}>
                  {idx + 1}
                </div>
                <h4 className={`font-display font-bold text-xs mt-4 max-w-[140px] ${activeStep === idx ? "text-brand-indigo" : "text-brand-muted group-hover:text-brand-dark"
                  } transition-colors duration-300`}>
                  {step.title}
                </h4>
              </button>
            ))}
          </div>

          {/* Active Step Panel Container */}
          <div className="p-5 sm:p-8 rounded-2xl sm:rounded-[32px] bg-brand-bg-alt border border-brand-border/60 relative overflow-hidden min-h-[160px] flex flex-col justify-center">
            {/* Ambient background light */}
            <div className="absolute top-[-10%] right-[-10%] w-[180px] h-[180px] rounded-full bg-brand-indigo/5 blur-[50px]" />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-8 items-center"
              >
                <div className="md:col-span-8 flex flex-col text-left">
                  <span className="text-[10px] font-extrabold tracking-widest text-brand-indigo uppercase">Step {activeStep + 1} of 5</span>
                  <h3 className="font-display font-extrabold text-xl sm:text-2xl text-brand-dark mt-1.5 mb-3">
                    {processSteps[activeStep].title}
                  </h3>
                  <p className="text-brand-muted text-xs sm:text-sm leading-relaxed mb-3.5 font-sans">
                    {processSteps[activeStep].desc}
                  </p>
                  <div className="flex gap-2.5 items-center text-xs text-brand-dark font-bold">
                    <CheckCircle className="w-4 h-4 text-brand-indigo" />
                    <span>{processSteps[activeStep].details}</span>
                  </div>
                </div>

                <div className="md:col-span-4 p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-white border border-brand-border/40 shadow-sm flex flex-col justify-center items-center text-center">
                  <span className="text-[10px] font-bold text-brand-muted uppercase tracking-wider">Hiring Velocity</span>
                  <span className="font-display font-black text-2xl sm:text-3xl text-brand-indigo mt-0.5">18 Days</span>
                  <span className="text-[9px] text-brand-muted mt-0.5 leading-none font-sans">Avg. sourcing cycle time</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Mobile Step Selectors (Only visible on mobile) */}
          <div className="flex lg:hidden justify-center gap-2 mt-6">
            {processSteps.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`w-3.5 h-3.5 rounded-full transition-all duration-300 ${activeStep === idx ? "bg-brand-indigo w-8" : "bg-slate-200"
                  }`}
                aria-label={`Go to step ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>



      {/* 🏏 SECTION 10 – STRATEGIC PARTNERSHIP HIGHLIGHT */}
      <section className="relative w-full py-24 bg-[#090D16] text-white overflow-hidden border-y border-brand-indigo/15">
        {/* Background Lights overlay */}
        <div className="absolute inset-0 z-0 opacity-40 pointer-events-none overflow-hidden">
          {/* Spotlight Beams */}
          <div className="absolute top-0 left-1/4 w-[350px] h-[350px] rounded-full bg-orange-500/10 blur-[100px] animate-pulse-slow" />
          <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] rounded-full bg-brand-violet/10 blur-[120px]" />

        </div>

        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left Content (8 Columns) */}
            <div className="lg:col-span-8 flex flex-col text-left items-start">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 font-bold text-xs uppercase tracking-wider mb-5 border border-orange-500/30">
                Official Staffing Partner
              </span>

              <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-[44px] text-white leading-tight mb-6">
                Official Staffing & Workforce Solutions Partner – <span className="bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-500 bg-clip-text text-transparent">Sunrisers Hyderabad</span>
              </h2>

              <p className="text-[#94A3B8] text-sm sm:text-base leading-relaxed mb-6 font-sans">
                Our capability to manage elite operations is reflected in our association with the Tata IPL franchise Sunrisers Hyderabad (SRH). Running staffing logistics at the highest professional level demands precision, scalability, and fast execution—metrics DABSLEK delivers daily.
              </p>

              <div className="flex flex-wrap gap-6 mt-4">
                <div className="flex gap-3 items-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-orange-500" />
                  <span className="font-display font-bold text-xs text-white uppercase tracking-wider">Tata IPL 2025</span>
                </div>
                <div className="flex gap-3 items-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  <span className="font-display font-bold text-xs text-white uppercase tracking-wider">Elite Sourcing Integrity</span>
                </div>
                <div className="flex gap-3 items-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                  <span className="font-display font-bold text-xs text-white uppercase tracking-wider">National Brand Credibility</span>
                </div>
              </div>
            </div>

            {/* Right Badge (4 Columns) */}
            <div className="lg:col-span-4 flex justify-center items-center relative">
              {/* Stadium lighting circles */}
              <div className="absolute w-[240px] h-[240px] rounded-full border border-orange-500/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 animate-pulse" />

              <motion.div
                whileHover={{ scale: 1.05, rotate: 1 }}
                className="relative z-10 p-8 rounded-[36px] bg-gradient-to-tr from-[#1E1715] to-[#2D1D16] border border-orange-500/30 text-center w-full max-w-[280px] shadow-[0_20px_50px_rgba(249,115,22,0.15)] flex flex-col items-center"
              >
                {/* IPL Cup Image */}
                <div className="w-44 h-44 sm:w-56 sm:h-56 relative mb-4 flex justify-center items-center">
                  <div className="absolute inset-0 bg-gradient-to-t from-orange-500/30 to-amber-400/10 blur-2xl rounded-full animate-pulse" />
                  <img
                    src="/ipl-cup.png"
                    alt="IPL 2025 Cup"
                    className="w-full h-full object-contain relative z-10 drop-shadow-2xl hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <span className="text-[10px] font-bold text-orange-400 uppercase tracking-widest leading-none">Official</span>
                <span className="font-display font-black text-lg text-white mt-1 uppercase tracking-tight">Workforce Partner</span>
                <p className="text-[10px] text-[#94A3B8] font-sans mt-3 leading-relaxed">
                  Reflecting compliance, speed, and premium operational scale at national levels.
                </p>
                <div className="w-full h-[1px] bg-orange-500/20 my-5" />
                <span className="text-[11px] font-extrabold text-amber-400 uppercase tracking-widest">IPL 2025 Campaign</span>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* 🛡️ SECTION 11 – TRUST & COMPLIANCE */}
      <section className="relative z-10 w-full max-w-[1440px] mx-auto px-6 lg:px-12 py-20">
        <div className="max-w-[800px] mx-auto text-center mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-pill border border-brand-indigo/10 text-brand-indigo font-semibold text-xs tracking-wider uppercase mb-4">
            Security & Guarantee
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-brand-dark mb-4">
            Compliance & Sourcing <span className="bg-gradient-to-r from-brand-indigo-light to-brand-violet bg-clip-text text-transparent">Guarantees</span>
          </h2>
          <p className="text-brand-muted text-sm sm:text-base max-w-lg mx-auto font-sans">
            Our processes adhere to regional labour acts, including immediate replacement guarantees and verified backgrounds.
          </p>
        </div>

        {/* 4 Premium Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Background Verification", desc: "Digital and manual checking of past profiles, academic qualifications, and identity indices.", icon: ShieldAlert, color: "bg-red-50 text-red-500" },
            { title: "Replacement Guarantee", desc: "Standardized replacement guarantee parameters within 90 days of hiring, securing investment.", icon: RefreshCw, color: "bg-amber-50 text-amber-500" },
            { title: "Compliance Management", desc: "100% compliance with PF, ESI, Professional Tax, and national labour regulatory norms.", icon: ShieldCheck, color: "bg-emerald-50 text-emerald-500" },
            { title: "Account Support", desc: "Dedicated HR executive mapping and escalation desks open for client operating panels.", icon: Headphones, color: "bg-brand-pill text-brand-indigo" }
          ].map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={i}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                custom={i}
                whileHover={{ y: -6 }}
                className="p-6 rounded-[24px] bg-white border border-brand-border/60 hover:shadow-xl hover:border-brand-indigo/10 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className={`p-3.5 w-fit rounded-xl ${card.color} mb-5 shadow-sm`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-display font-bold text-base text-brand-dark mb-2">{card.title}</h3>
                  <p className="text-brand-muted text-xs leading-relaxed font-sans">{card.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ❓ SECTION 13 – FREQUENTLY ASKED QUESTIONS */}
      <section id="faq" className="relative z-10 w-full max-w-[1000px] mx-auto px-6 lg:px-12 pt-16 pb-12 border-t border-brand-border/40">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-pill border border-brand-indigo/10 text-brand-indigo font-semibold text-xs tracking-wider uppercase mb-4">
            Got Questions?
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-brand-dark mb-4">
            Frequently Asked <span className="bg-gradient-to-r from-brand-indigo-light to-brand-violet bg-clip-text text-transparent">Questions</span>
          </h2>
          <p className="text-brand-muted text-sm sm:text-base max-w-lg mx-auto font-sans">
            Clear, transparent answers to help you understand how DABSLEK transforms your hiring pipeline.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${activeFaq === idx ? 'bg-white border-brand-indigo/30 shadow-lg shadow-brand-indigo/5' : 'bg-slate-50 border-brand-border/60 hover:border-brand-indigo/20 hover:bg-white'}`}
            >
              <button
                onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                className="w-full flex items-center justify-between p-5 sm:p-6 text-left cursor-pointer focus:outline-none"
              >
                <span className={`font-display font-bold text-base sm:text-lg transition-colors duration-300 pr-4 ${activeFaq === idx ? 'text-brand-indigo' : 'text-brand-dark'}`}>
                  {faq.q}
                </span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${activeFaq === idx ? 'bg-brand-indigo text-white rotate-90' : 'bg-brand-pill text-brand-indigo'}`}>
                  <ChevronRight className="w-5 h-5" />
                </div>
              </button>

              <AnimatePresence>
                {activeFaq === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-5 sm:px-6 pb-6 text-brand-muted font-sans text-sm sm:text-base leading-relaxed border-t border-brand-border/30 pt-4 mt-2 mx-5 sm:mx-6">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
