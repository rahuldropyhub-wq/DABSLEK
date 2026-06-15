import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, MapPin, Briefcase, DollarSign, Search, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Jobs() {
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

  const [searchTerm, setSearchTerm] = useState('');

  const jobOpenings = [
    {
      title: "Senior Backend Developer (Node.js)",
      department: "IT Engineering",
      location: "Bangalore (Hybrid)",
      type: "Full-Time",
      salary: "₹18 - 25 LPA"
    },
    {
      title: "DevOps Architect",
      department: "IT Infrastructure",
      location: "Remote",
      type: "Contract-to-Hire",
      salary: "₹25 - 35 LPA"
    },
    {
      title: "Senior Accounts Manager",
      department: "Non-IT (Finance)",
      location: "Mumbai",
      type: "Full-Time",
      salary: "₹12 - 16 LPA"
    },
    {
      title: "HR Business Partner",
      department: "Human Resources",
      location: "Bangalore",
      type: "Full-Time",
      salary: "₹10 - 14 LPA"
    },
    {
      title: "Clinical Nurse Specialist",
      department: "Non-IT (Healthcare)",
      location: "Delhi NCR",
      type: "Full-Time",
      salary: "₹6 - 9 LPA"
    },
    {
      title: "Business Development Representative",
      department: "Sales & Marketing",
      location: "Pune (On-site)",
      type: "Full-Time",
      salary: "₹8 - 12 LPA"
    }
  ];

  const filteredJobs = jobOpenings.filter(job =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div id="jobs" className="relative bg-white min-h-screen pt-28 pb-16 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/3 right-0 w-[300px] h-[300px] rounded-full bg-brand-indigo/5 blur-[120px]" />
        <div className="absolute bottom-1/3 left-0 w-[350px] h-[350px] rounded-full bg-brand-violet/5 blur-[100px]" />
      </div>

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="max-w-[800px] mx-auto text-center mb-12">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={0}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-pill border border-brand-indigo/10 text-brand-indigo font-semibold text-xs lg:text-sm tracking-wide mb-4 shadow-sm shadow-brand-indigo/5"
          >
            <Sparkles className="w-4 h-4 text-brand-indigo animate-pulse" />
            <span>Active Placements</span>
          </motion.div>
          <motion.h1
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-brand-dark leading-tight tracking-tight mb-6"
          >
            Find Your Next <span className="bg-gradient-to-r from-brand-indigo-light to-brand-violet bg-clip-text text-transparent">Career Opportunity</span>
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={2}
            className="font-sans text-brand-muted text-base lg:text-[18px] leading-relaxed mb-8"
          >
            We connect skilled professionals with industry-leading organizations. Explore DABSLEK's active listings and find your perfect role today.
          </motion.p>

          {/* Search bar */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={3}
            className="relative max-w-md mx-auto"
          >
            <input
              type="text"
              placeholder="Search by title, department, or location..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full h-12 pl-12 pr-4 rounded-2xl bg-slate-50 border border-brand-border/85 focus:bg-white focus:outline-none focus:border-brand-indigo focus:ring-1 focus:ring-brand-indigo transition-all duration-300 text-sm placeholder-[#64748B]"
            />
            <Search className="absolute top-1/2 left-4 -translate-y-1/2 w-5 h-5 text-brand-muted" />
          </motion.div>
        </div>

        {/* Jobs List */}
        <div className="max-w-[1000px] mx-auto flex flex-col gap-5">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                custom={index + 4}
                className="p-6 rounded-[24px] bg-slate-50 border border-brand-border/60 hover:bg-white hover:shadow-xl hover:scale-[1.01] hover:border-brand-indigo/10 transition-all duration-300 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
              >
                <div className="flex flex-col gap-2">
                  <span className="text-[10px] font-bold text-brand-indigo uppercase tracking-wider bg-brand-pill px-2.5 py-1 rounded-full w-fit">
                    {job.department}
                  </span>
                  <h3 className="font-display font-extrabold text-lg sm:text-xl text-brand-dark">
                    {job.title}
                  </h3>
                  <div className="flex flex-wrap gap-4 text-xs text-brand-muted font-sans mt-1">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-brand-muted" />
                      <span>{job.location}</span>
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Briefcase className="w-3.5 h-3.5 text-brand-muted" />
                      <span>{job.type}</span>
                    </span>
                    <span className="flex items-center gap-1.5">
                      <DollarSign className="w-3.5 h-3.5 text-brand-muted" />
                      <span>{job.salary}</span>
                    </span>
                  </div>
                </div>

                <Link
                  to="/contact"
                  className="relative overflow-hidden group h-11 px-6 rounded-xl bg-gradient-to-r from-brand-indigo to-brand-violet text-white text-xs font-semibold hover:shadow-lg hover:shadow-brand-indigo/20 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-1.5 transition-all duration-300 shrink-0 w-full sm:w-auto"
                >
                  <span className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/25 to-transparent -skew-x-12 -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-out pointer-events-none" />
                  <span className="relative z-10">Apply Now</span>
                  <ArrowRight className="relative z-10 w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-300" />
                </Link>
              </motion.div>
            ))
          ) : (
            <div className="text-center p-12 text-brand-muted text-sm font-sans">
              No matching job opportunities found. Try searching for other keywords.
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
