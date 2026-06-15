import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Cpu, Users, Award, ShieldCheck, Briefcase, FileText, CheckCircle, Globe, Truck, GraduationCap } from 'lucide-react';

export default function Services() {
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

  const serviceList = [
    {
      icon: Award,
      title: "Permanent Hiring",
      description: "Hiring talent for long-term roles aligned with company needs.",
      features: ["Vetted talent matches", "Culture-fit evaluation", "Compensation consulting", "Replacement guarantee"]
    },
    {
      icon: Briefcase,
      title: "Contract Hiring",
      description: "Flexible workforce for short-term and project-based roles.",
      features: ["On-demand contractor placement", "Flexible staff augmentation", "Quick scale-up/scale-down", "Project-based workforce"]
    },
    {
      icon: FileText,
      title: "Payroll Processing",
      description: "Complete payroll and compliance management.",
      features: ["Statutory compliance management", "End-to-end payroll administration", "Tax filings & declarations", "Error-free salary disbursement"]
    },
    {
      icon: ShieldCheck,
      title: "RPO (Recruitment Process Outsourcing)",
      description: "End-to-end recruitment outsourcing.",
      features: ["Dedicated recruiter alignment", "Employer branding enhancements", "Applicant tracking system (ATS) setups", "Hiring metrics & reporting dashboard"]
    },
    {
      icon: Truck,
      title: "Delivery Executive Hiring",
      description: "Workforce for logistics and delivery operations.",
      features: ["Quick delivery partner onboarding", "Background & document verification", "Bulk field agent recruitment", "Logistics workforce scaling"]
    },
    {
      icon: GraduationCap,
      title: "College Placements",
      description: "Hiring freshers through campus drives.",
      features: ["Campus hiring coordination", "Aptitude & technical screening", "Fresh talent onboarding support", "University partner alliances"]
    }
  ];

  return (
    <div id="services" className="relative bg-white min-h-screen pt-28 pb-16 overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-10 left-10 w-[300px] h-[300px] rounded-full bg-brand-indigo/5 blur-[120px]" />
        <div className="absolute bottom-10 right-10 w-[400px] h-[400px] rounded-full bg-brand-violet/5 blur-[100px]" />
      </div>

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 lg:px-12">
        
        {/* Header */}
        <div className="max-w-[800px] mx-auto text-center mb-16">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={0}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-pill border border-brand-indigo/10 text-brand-indigo font-semibold text-xs lg:text-sm tracking-wide mb-4 shadow-sm shadow-brand-indigo/5"
          >
            <Sparkles className="w-4 h-4 text-brand-indigo animate-pulse" />
            <span>End-to-End Recruitment Services</span>
          </motion.div>
          <motion.h1
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-brand-dark leading-tight tracking-tight mb-6"
          >
            Workforce Solutions <span className="bg-gradient-to-r from-brand-indigo-light to-brand-violet bg-clip-text text-transparent">Customized for You</span>
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={2}
            className="font-sans text-brand-muted text-base lg:text-[18px] leading-relaxed"
          >
            We help businesses build strong, scalable teams through reliable, efficient, and customized recruitment solutions tailored for both IT and Non-IT industries.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceList.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                custom={index + 3}
                className="p-8 rounded-[32px] bg-slate-50 border border-brand-border/60 hover:bg-white hover:shadow-xl hover:scale-[1.02] hover:border-brand-indigo/10 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="p-3.5 w-fit rounded-2xl bg-brand-pill text-brand-indigo mb-6">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-display font-extrabold text-xl text-brand-dark mb-3">
                    {service.title}
                  </h3>
                  <p className="text-brand-muted text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                <div className="border-t border-brand-border/40 pt-5">
                  <span className="text-[11px] font-bold text-brand-muted tracking-wider uppercase block mb-3">Core Expertise</span>
                  <ul className="flex flex-col gap-2">
                    {service.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex gap-2.5 items-center text-xs text-brand-dark">
                        <CheckCircle className="w-4 h-4 text-brand-indigo shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Industries & Sectors Section */}
        <div className="mt-24 border-t border-brand-border/40 pt-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Industries We Serve */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              className="p-8 rounded-[32px] bg-slate-50 border border-brand-border/60 hover:bg-white hover:shadow-xl transition-all duration-300"
            >
              <h3 className="font-display font-extrabold text-xl text-brand-dark mb-6 flex items-center gap-2">
                <Globe className="w-5 h-5 text-brand-indigo" />
                <span>Industries We Serve</span>
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {[
                  "IT Services", "BFSI", "Media & Marketing", "Pharma & Healthcare", 
                  "Telecom", "E-commerce & Retail", "Logistics & Supply Chain", 
                  "Food Delivery & Quick Commerce", "Education & Training", "Manufacturing & Operations"
                ].map((industry, i) => (
                  <span key={i} className="text-xs font-semibold text-brand-dark bg-brand-pill px-3.5 py-2 rounded-xl border border-brand-indigo/5 hover:border-brand-indigo/20 transition-all">
                    {industry}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Sectors We Work */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={2}
              className="p-8 rounded-[32px] bg-slate-50 border border-brand-border/60 hover:bg-white hover:shadow-xl transition-all duration-300"
            >
              <h3 className="font-display font-extrabold text-xl text-brand-dark mb-6 flex items-center gap-2">
                <Cpu className="w-5 h-5 text-brand-indigo" />
                <span>Sectors We Work</span>
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {[
                  "AI/ML", "FinTech", "RetailTech", "EdTech", 
                  "EV", "AgriTech", "Gaming", "SaaS"
                ].map((sector, i) => (
                  <span key={i} className="text-xs font-semibold text-brand-dark bg-brand-pill px-3.5 py-2 rounded-xl border border-brand-indigo/5 hover:border-brand-indigo/20 transition-all">
                    {sector}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

      </div>
    </div>
  );
}
