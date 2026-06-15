import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Sparkles, Mail, Phone, MapPin, Send, ArrowRight,
  Clock, CheckCircle, MessageSquare, Building2,
  ExternalLink, ChevronDown,
  User, Briefcase, Users, Zap, Camera, Globe2, Share2
} from 'lucide-react';

import contactHero from '../assets/contact-hero.png';
import contactOffice from '../assets/contact-office.png';
import contactTeam from '../assets/contact-team.png';

/* ─── FadeIn ────────────────────────────────────────────────────── */
function FadeIn({ children, delay = 0, direction = 'up', className = '' }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.12 });
  const y = direction === 'up' ? 30 : direction === 'down' ? -30 : 0;
  const x = direction === 'left' ? 40 : direction === 'right' ? -40 : 0;
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y, x }}
      animate={isInView ? { opacity: 1, y: 0, x: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── FAQ data ───────────────────────────────────────────────────── */
const faqs = [
  {
    q: 'How quickly can DABSLEK provide candidates?',
    a: 'For most roles we deliver the first batch of pre-screened profiles within 48 hours. Niche or leadership roles typically take 5–7 business days.',
  },
  {
    q: 'Do you offer a replacement guarantee?',
    a: 'Yes. We provide a standard 90-day replacement guarantee. If a placed candidate exits within this window, we source a replacement at no extra cost.',
  },
  {
    q: 'Which cities do you operate in?',
    a: 'Our primary HQ is in Hyderabad. We source candidates Pan-India across Bengaluru, Mumbai, Delhi NCR, Chennai, Pune, and 15+ other cities.',
  },
  {
    q: 'Can you handle bulk hiring for field / delivery roles?',
    a: 'Absolutely. Our Delivery Executive Hiring vertical specializes in high-volume on-ground workforce sourcing for logistics, quick-commerce, and FMCG clients.',
  },
  {
    q: 'Do you manage payroll for contract staff?',
    a: 'Yes — our Payroll Processing service covers PF, ESI, Professional Tax, and complete compliance management for all contract employees.',
  },
];

/* ─── Main Component ────────────────────────────────────────────── */
export default function Contact() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', company: '', service: '', employees: '', message: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  const services = [
    'Permanent Hiring',
    'Contract / Flexi Staffing',
    'Payroll Processing',
    'RPO Solutions',
    'Delivery Executive Hiring',
    'College Campus Placements',
    'Other / General Inquiry',
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setFormSubmitted(true);
    }, 1200);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email Us',
      value: 'contact@dabslek.com',
      sub: 'We reply within 4 business hours',
      href: 'mailto:contact@dabslek.com',
      gradient: 'from-brand-indigo to-violet-600',
    },
    {
      icon: Phone,
      label: 'Call Us',
      value: '+91 80 4200 4200',
      sub: 'Mon–Sat, 9 AM – 7 PM IST',
      href: 'tel:+918042004200',
      gradient: 'from-brand-violet to-purple-500',
    },
    {
      icon: MapPin,
      label: 'Headquarters',
      value: 'Hyderabad, Telangana',
      sub: 'India — Pan-India operations',
      href: 'https://maps.google.com/?q=Hyderabad,Telangana',
      gradient: 'from-rose-500 to-pink-500',
    },
    {
      icon: Clock,
      label: 'Business Hours',
      value: 'Mon – Sat',
      sub: '9:00 AM – 7:00 PM IST',
      href: null,
      gradient: 'from-emerald-500 to-teal-500',
    },
  ];

  const whyContact = [
    { icon: Zap, text: '48-hour candidate delivery for most roles' },
    { icon: Users, text: '1000+ candidates placed since 2020' },
    { icon: CheckCircle, text: '90-day replacement guarantee on all placements' },
    { icon: Briefcase, text: 'Dedicated account manager from day one' },
  ];

  return (
    <div className="bg-white min-h-screen overflow-hidden">

      {/* ═══════════════════════════════════════════
          HERO SECTION — Full-bleed with image + overlay content
      ═══════════════════════════════════════════ */}
      <section className="relative w-full min-h-[92vh] flex items-end overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <img src={contactHero} alt="Contact DABSLEK" className="w-full h-full object-cover object-[75%_center]" />
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

        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 lg:px-16 pb-20 pt-40">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-indigo/20 backdrop-blur-sm border border-brand-indigo/30 text-[#818CF8] font-semibold text-xs tracking-wide mb-6">
              <MessageSquare className="w-3.5 h-3.5 animate-pulse" />
              <span>We're Ready to Help</span>
            </div>
            <h1 className="font-display font-black text-5xl sm:text-6xl lg:text-7xl text-white leading-[1.05] tracking-tight mb-6">
              Let's Build{' '}
              <span className="bg-gradient-to-r from-[#818CF8] to-[#C4B5FD] bg-clip-text text-transparent">
                Together
              </span>
            </h1>
            <p className="font-sans text-white/70 text-lg lg:text-xl leading-relaxed mb-10 max-w-2xl">
              Whether you're scaling a team or seeking your next opportunity — DABSLEK's experts are one message away.
            </p>
          </motion.div>

          {/* Inline Bullets Row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-16 max-w-4xl"
          >
            {whyContact.map((w, i) => {
              const Icon = w.icon;
              return (
                <div key={i} className="flex flex-col gap-2 p-5 rounded-2xl bg-white/8 backdrop-blur-sm border border-white/12">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center mb-1">
                    <Icon className="w-4 h-4 text-brand-violet" />
                  </div>
                  <span className="text-sm text-white/90 font-medium leading-snug">{w.text}</span>
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          CONTACT INFO CARDS ROW
      ═══════════════════════════════════════════ */}
      <section className="py-12 bg-slate-50 border-b border-brand-border/40">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {contactInfo.map((info, i) => {
              const Icon = info.icon;
              const Card = (
                <div className="flex items-start gap-4 p-5 rounded-[20px] bg-white border border-brand-border/50 hover:shadow-lg hover:shadow-brand-indigo/8 hover:-translate-y-1 transition-all duration-300 h-full group">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${info.gradient} flex items-center justify-center flex-shrink-0 shadow-md`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-brand-indigo uppercase tracking-widest mb-1">{info.label}</p>
                    <p className="font-display font-bold text-sm text-brand-dark group-hover:text-brand-indigo transition-colors">{info.value}</p>
                    <p className="text-xs text-brand-muted mt-0.5">{info.sub}</p>
                  </div>
                </div>
              );
              return (
                <FadeIn key={i} delay={i * 0.07}>
                  {info.href ? (
                    <a href={info.href} target={info.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="block h-full">
                      {Card}
                    </a>
                  ) : Card}
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          MAIN FORM + SIDEBAR
      ═══════════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

            {/* ── Left sidebar (5 cols) ── */}
            <div className="lg:col-span-5 flex flex-col gap-8">
              {/* Office image */}
              <FadeIn direction="right">
                <div className="relative rounded-[28px] overflow-hidden shadow-xl shadow-brand-indigo/10">
                  <img src={contactOffice} alt="DABSLEK office" className="w-full h-64 object-cover object-center" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/60 via-transparent to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5">
                    <p className="text-white font-display font-bold text-sm">DABSLEK HQ</p>
                    <p className="text-white/65 text-xs mt-0.5">Hyderabad, Telangana, India</p>
                  </div>
                </div>
              </FadeIn>

              {/* Team image */}
              <FadeIn direction="right" delay={0.1}>
                <div className="relative rounded-[28px] overflow-hidden shadow-lg">
                  <img src={contactTeam} alt="DABSLEK support team" className="w-full h-52 object-cover object-top" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/70 via-[#0F172A]/20 to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                    <div>
                      <p className="text-white font-bold text-sm">Our Support Team</p>
                      <p className="text-white/65 text-xs mt-0.5">Available Mon–Sat, 9AM–7PM</p>
                    </div>
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/90 backdrop-blur-sm">
                      <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                      <span className="text-white text-[10px] font-bold">Online Now</span>
                    </div>
                  </div>
                </div>
              </FadeIn>

              {/* Social links */}
              <FadeIn direction="right" delay={0.15}>
                <div className="p-6 rounded-[24px] bg-slate-50 border border-brand-border/50">
                  <p className="text-xs font-black text-brand-indigo uppercase tracking-widest mb-4">Follow Us</p>
                  <div className="flex flex-col gap-3">
                    {[
                      { icon: Share2, label: 'LinkedIn', handle: '@DABSLEK', href: 'https://linkedin.com', color: 'text-blue-600' },
                      { icon: Camera, label: 'Instagram', handle: '@dabslek_official', href: 'https://instagram.com', color: 'text-pink-500' },
                      { icon: Globe2, label: 'Twitter / X', handle: '@DABSLEK', href: 'https://twitter.com', color: 'text-sky-500' },
                    ].map((s, i) => {
                      const SIcon = s.icon;
                      return (
                        <a key={i} href={s.href} target="_blank" rel="noreferrer"
                          className="flex items-center gap-3 p-3 rounded-xl hover:bg-white hover:shadow-sm transition-all duration-200 group"
                        >
                          <SIcon className={`w-5 h-5 ${s.color} flex-shrink-0`} />
                          <div>
                            <p className="text-xs font-bold text-brand-dark group-hover:text-brand-indigo transition-colors">{s.label}</p>
                            <p className="text-[11px] text-brand-muted">{s.handle}</p>
                          </div>
                          <ArrowRight className="w-3.5 h-3.5 text-brand-muted ml-auto opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                        </a>
                      );
                    })}
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* ── Contact Form (7 cols) ── */}
            <div className="lg:col-span-7">
              <FadeIn direction="left">
                <div className="p-8 lg:p-10 rounded-[32px] bg-slate-50 border border-brand-border/50 shadow-sm">
                  {formSubmitted ? (
                    /* ── Success state ── */
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-16 flex flex-col items-center gap-5"
                    >
                      <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-brand-indigo to-brand-violet flex items-center justify-center shadow-xl shadow-brand-indigo/30">
                        <CheckCircle className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="font-display font-black text-2xl text-brand-dark">Message Sent!</h3>
                      <p className="text-brand-muted text-sm max-w-xs leading-relaxed text-center">
                        Thank you for reaching out to DABSLEK. Our staffing experts will review your request and contact you within 4 business hours.
                      </p>
                      <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-brand-pill border border-brand-indigo/15 text-brand-indigo text-xs font-semibold">
                        <Clock className="w-3.5 h-3.5" />
                        <span>Expected response: within 4 hours</span>
                      </div>
                      <button
                        onClick={() => { setFormSubmitted(false); setFormData({ name: '', email: '', phone: '', company: '', service: '', employees: '', message: '' }); }}
                        className="mt-2 text-xs font-semibold text-brand-indigo hover:text-brand-violet transition-colors underline underline-offset-2"
                      >
                        Send another message →
                      </button>
                    </motion.div>
                  ) : (
                    <>
                      {/* Form header */}
                      <div className="mb-8">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-pill border border-brand-indigo/15 text-brand-indigo text-xs font-semibold mb-3">
                          <Sparkles className="w-3 h-3" />
                          <span>Get a Free Consultation</span>
                        </div>
                        <h2 className="font-display font-extrabold text-2xl lg:text-3xl text-brand-dark leading-tight">
                          Tell Us About Your Hiring Needs
                        </h2>
                        <p className="text-brand-muted text-sm mt-2">
                          Fill in the details below — the more you share, the faster we can match you with the right talent.
                        </p>
                      </div>

                      <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                        {/* Row 1: Name + Email */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                          <div className="flex flex-col gap-1.5">
                            <label htmlFor="name" className="text-[10px] font-black text-brand-dark uppercase tracking-widest flex items-center gap-1.5">
                              <User className="w-3 h-3 text-brand-indigo" /> Full Name *
                            </label>
                            <input
                              type="text" id="name" required
                              value={formData.name}
                              onChange={e => setFormData({ ...formData, name: e.target.value })}
                              placeholder="Rahul Sharma"
                              className="h-12 px-4 rounded-xl bg-white border border-brand-border/70 focus:outline-none focus:border-brand-indigo focus:ring-2 focus:ring-brand-indigo/20 transition-all text-sm text-brand-dark placeholder:text-brand-muted/50"
                            />
                          </div>
                          <div className="flex flex-col gap-1.5">
                            <label htmlFor="email" className="text-[10px] font-black text-brand-dark uppercase tracking-widest flex items-center gap-1.5">
                              <Mail className="w-3 h-3 text-brand-indigo" /> Work Email *
                            </label>
                            <input
                              type="email" id="email" required
                              value={formData.email}
                              onChange={e => setFormData({ ...formData, email: e.target.value })}
                              placeholder="rahul@company.com"
                              className="h-12 px-4 rounded-xl bg-white border border-brand-border/70 focus:outline-none focus:border-brand-indigo focus:ring-2 focus:ring-brand-indigo/20 transition-all text-sm text-brand-dark placeholder:text-brand-muted/50"
                            />
                          </div>
                        </div>

                        {/* Row 2: Phone + Company */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                          <div className="flex flex-col gap-1.5">
                            <label htmlFor="phone" className="text-[10px] font-black text-brand-dark uppercase tracking-widest flex items-center gap-1.5">
                              <Phone className="w-3 h-3 text-brand-indigo" /> Phone Number
                            </label>
                            <input
                              type="tel" id="phone"
                              value={formData.phone}
                              onChange={e => setFormData({ ...formData, phone: e.target.value })}
                              placeholder="+91 98765 43210"
                              className="h-12 px-4 rounded-xl bg-white border border-brand-border/70 focus:outline-none focus:border-brand-indigo focus:ring-2 focus:ring-brand-indigo/20 transition-all text-sm text-brand-dark placeholder:text-brand-muted/50"
                            />
                          </div>
                          <div className="flex flex-col gap-1.5">
                            <label htmlFor="company" className="text-[10px] font-black text-brand-dark uppercase tracking-widest flex items-center gap-1.5">
                              <Building2 className="w-3 h-3 text-brand-indigo" /> Company Name
                            </label>
                            <input
                              type="text" id="company"
                              value={formData.company}
                              onChange={e => setFormData({ ...formData, company: e.target.value })}
                              placeholder="Acme Technologies Pvt Ltd"
                              className="h-12 px-4 rounded-xl bg-white border border-brand-border/70 focus:outline-none focus:border-brand-indigo focus:ring-2 focus:ring-brand-indigo/20 transition-all text-sm text-brand-dark placeholder:text-brand-muted/50"
                            />
                          </div>
                        </div>

                        {/* Row 3: Service + Team Size */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                          <div className="flex flex-col gap-1.5">
                            <label htmlFor="service" className="text-[10px] font-black text-brand-dark uppercase tracking-widest flex items-center gap-1.5">
                              <Briefcase className="w-3 h-3 text-brand-indigo" /> Service Needed *
                            </label>
                            <div className="relative">
                              <select
                                id="service" required
                                value={formData.service}
                                onChange={e => setFormData({ ...formData, service: e.target.value })}
                                className="w-full h-12 px-4 pr-10 rounded-xl bg-white border border-brand-border/70 focus:outline-none focus:border-brand-indigo focus:ring-2 focus:ring-brand-indigo/20 transition-all text-sm text-brand-dark appearance-none"
                              >
                                <option value="" disabled>Select a service…</option>
                                {services.map((s, i) => <option key={i} value={s}>{s}</option>)}
                              </select>
                              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-muted pointer-events-none" />
                            </div>
                          </div>
                          <div className="flex flex-col gap-1.5">
                            <label htmlFor="employees" className="text-[10px] font-black text-brand-dark uppercase tracking-widest flex items-center gap-1.5">
                              <Users className="w-3 h-3 text-brand-indigo" /> No. of Hires Needed
                            </label>
                            <div className="relative">
                              <select
                                id="employees"
                                value={formData.employees}
                                onChange={e => setFormData({ ...formData, employees: e.target.value })}
                                className="w-full h-12 px-4 pr-10 rounded-xl bg-white border border-brand-border/70 focus:outline-none focus:border-brand-indigo focus:ring-2 focus:ring-brand-indigo/20 transition-all text-sm text-brand-dark appearance-none"
                              >
                                <option value="">Select range…</option>
                                {['1–5', '6–20', '21–50', '51–100', '100+'].map((r, i) => <option key={i} value={r}>{r}</option>)}
                              </select>
                              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-muted pointer-events-none" />
                            </div>
                          </div>
                        </div>

                        {/* Message */}
                        <div className="flex flex-col gap-1.5">
                          <label htmlFor="message" className="text-[10px] font-black text-brand-dark uppercase tracking-widest flex items-center gap-1.5">
                            <MessageSquare className="w-3 h-3 text-brand-indigo" /> Message / Requirements *
                          </label>
                          <textarea
                            id="message" required rows="4"
                            value={formData.message}
                            onChange={e => setFormData({ ...formData, message: e.target.value })}
                            placeholder="Tell us about the roles you need to fill, required skills, experience levels, location preferences, and any specific timelines…"
                            className="p-4 rounded-xl bg-white border border-brand-border/70 focus:outline-none focus:border-brand-indigo focus:ring-2 focus:ring-brand-indigo/20 transition-all text-sm text-brand-dark placeholder:text-brand-muted/50 resize-none leading-relaxed"
                          />
                        </div>

                        {/* Privacy note */}
                        <p className="text-[11px] text-brand-muted leading-relaxed">
                          🔒 Your information is 100% confidential and will only be used to match you with the right DABSLEK service. We never sell or share your data.
                        </p>

                        {/* Submit */}
                        <button
                          type="submit"
                          disabled={loading}
                          className="relative overflow-hidden group h-14 px-8 rounded-2xl bg-gradient-to-r from-brand-indigo to-brand-violet text-white font-bold text-sm hover:shadow-xl hover:shadow-brand-indigo/30 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-3 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                          <span className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-out pointer-events-none" />
                          {loading ? (
                            <>
                              <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}>
                                <Send className="w-4 h-4" />
                              </motion.div>
                              <span className="relative z-10">Sending…</span>
                            </>
                          ) : (
                            <>
                              <span className="relative z-10">Send My Request</span>
                              <ArrowRight className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                            </>
                          )}
                        </button>
                      </form>
                    </>
                  )}
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          MAP / LOCATION SECTION
      ═══════════════════════════════════════════ */}
      <section className="py-16 bg-slate-50 border-t border-brand-border/40">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
          <FadeIn className="text-center mb-10">
            <h2 className="font-display font-extrabold text-3xl lg:text-4xl text-brand-dark">Find Us in{' '}
              <span className="bg-gradient-to-r from-brand-indigo to-brand-violet bg-clip-text text-transparent">Hyderabad</span>
            </h2>
            <p className="text-brand-muted text-sm mt-2">Pan-India operations · Based in the City of Pearls</p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="relative rounded-[28px] overflow-hidden border border-brand-border/50 shadow-lg" style={{ height: '380px' }}>
              <iframe
                title="DABSLEK Hyderabad Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.3027942178!2d78.24323050787597!3d17.41272930748764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              {/* Location label overlay */}
              <div className="absolute top-5 left-5 flex items-center gap-3 px-4 py-3 rounded-2xl bg-white shadow-lg border border-brand-border/40">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-indigo to-brand-violet flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="font-display font-bold text-xs text-brand-dark">DABSLEK Headquarters</p>
                  <p className="text-[11px] text-brand-muted">Hyderabad, Telangana, India</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          FAQ SECTION
      ═══════════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-0">
          <FadeIn className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-pill border border-brand-indigo/15 text-brand-indigo font-semibold text-xs tracking-wide mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Common Questions</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl lg:text-4xl text-brand-dark leading-tight">
              Frequently Asked Questions
            </h2>
          </FadeIn>

          <div className="flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <FadeIn key={i} delay={i * 0.07}>
                <div className="rounded-[20px] bg-slate-50 border border-brand-border/50 overflow-hidden">
                  <button
                    onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                    className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-white transition-colors duration-200"
                  >
                    <span className="font-display font-bold text-sm text-brand-dark leading-snug">{faq.q}</span>
                    <motion.div
                      animate={{ rotate: activeFaq === i ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                      className="flex-shrink-0"
                    >
                      <ChevronDown className="w-4 h-4 text-brand-muted" />
                    </motion.div>
                  </button>

                  <motion.div
                    initial={false}
                    animate={{ height: activeFaq === i ? 'auto' : 0, opacity: activeFaq === i ? 1 : 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    style={{ overflow: 'hidden' }}
                  >
                    <p className="px-5 pb-5 text-sm text-brand-muted leading-relaxed">
                      {faq.a}
                    </p>
                  </motion.div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
