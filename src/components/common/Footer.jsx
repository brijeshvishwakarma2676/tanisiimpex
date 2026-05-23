import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Instagram, Facebook, Twitter, Globe, ArrowRight } from 'lucide-react';
import { SITE, CATEGORIES } from '@/data';
import { FooterBackgroundGradient, TextHoverEffect } from '@/components/ui/hover-footer';

const socialIcons = { linkedin: Linkedin, instagram: Instagram, facebook: Facebook, twitter: Twitter, globe: Globe };

export default function Footer() {
  const year = new Date().getFullYear();

  // Map categories to hover footer format
  const exportLinks = CATEGORIES.slice(0, 6).map((cat) => ({
    label: cat.name,
    href: `/products/${cat.slug}`,
  }));

  const corporateLinks = [
    { label: 'About Us', href: '/about' },
    { label: 'Export Process', href: '/export-process' },
    { label: 'Certifications', href: '/certifications' },
    { label: 'Global Reach', href: '/global-presence' },
    { label: 'Request a Quote', href: '/bulk-inquiry', pulse: true },
  ];

  const contactInfo = [
    { icon: <Mail size={16} className="text-gold-500" />, text: SITE.email, href: `mailto:${SITE.email}` },
    { icon: <Phone size={16} className="text-gold-500" />, text: SITE.phone, href: `tel:${SITE.phone}` },
    { icon: <MapPin size={16} className="text-gold-500" />, text: SITE.address, href: null },
  ];

  return (
    <footer className="bg-[#0B1522] relative overflow-hidden border-t border-white/5 text-white/90">
      <div className="max-w-7xl mx-auto px-6 py-12 md:p-14 z-40 relative">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8 md:gap-8 lg:gap-16 pb-8">
          
          {/* Brand section */}
          <div className="col-span-2 lg:col-span-1 flex flex-col space-y-4">
            <Link to="/" className="flex flex-col items-start gap-3 group">
              <img src="/images/logo.png" alt="Tanisi Impex" className="h-16 w-auto transition-transform duration-300 group-hover:scale-105" />
              <div>
                <span className="text-white text-lg md:text-xl font-display font-black tracking-widest uppercase">
                  TANISI IMPEX PVT. LTD.
                </span>
                <p className="text-gold-500 text-[8px] md:text-[9px] font-accent tracking-widest font-bold uppercase mt-0.5">
                  India to the World
                </p>
              </div>
            </Link>
            <p className="text-xs text-white/50 leading-relaxed font-body">
              Elevating B2B sourcing from India with strict compliance, ISO verification, and customizable packaging across 50+ countries.
            </p>
          </div>

          {/* Export Range */}
          <div className="col-span-1">
            <h4 className="text-white text-xs md:text-sm font-display font-bold uppercase tracking-widest mb-4">
              Export Range
            </h4>
            <ul className="space-y-2">
              {exportLinks.map((link) => (
                <li key={link.label} className="relative">
                  <Link
                    to={link.href}
                    className="text-xs text-white/60 hover:text-gold-400 transition-colors font-body"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Corporate Links */}
          <div className="col-span-1">
            <h4 className="text-white text-xs md:text-sm font-display font-bold uppercase tracking-widest mb-4">
              Corporate
            </h4>
            <ul className="space-y-2">
              {corporateLinks.map((link) => (
                <li key={link.label} className="relative w-fit block">
                  <Link
                    to={link.href}
                    className="text-xs text-white/60 hover:text-gold-400 transition-colors font-body"
                  >
                    {link.label}
                  </Link>
                  {link.pulse && (
                    <span className="absolute top-1 -right-3 w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse"></span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact section */}
          <div className="col-span-2 lg:col-span-1">
            <h4 className="text-white text-xs md:text-sm font-display font-bold uppercase tracking-widest mb-4">
              Global Sourcing Hub
            </h4>
            <ul className="space-y-3 text-xs text-white/60 font-body">
              {contactInfo.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <div className="mt-0.5 shrink-0">{item.icon}</div>
                  {item.href ? (
                    <a href={item.href} className="hover:text-gold-400 transition-colors break-words">
                      {item.text}
                    </a>
                  ) : (
                    <span className="leading-snug">{item.text}</span>
                  )}
                </li>
              ))}
            </ul>
            
            {/* Quick Email Form */}
            <form className="mt-4 flex gap-2 w-full" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Business Email"
                className="flex-1 px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-xs text-white placeholder:text-white/30 focus:outline-none focus:border-gold-500/50 transition-colors font-body"
              />
              <button className="px-3 py-2 bg-gold-500 hover:bg-gold-400 text-[#0B1522] rounded-lg font-bold transition-colors flex items-center justify-center">
                <ArrowRight size={14} />
              </button>
            </form>
          </div>
        </div>

        {/* Corporate Compliance Strip */}
        <div className="border-t border-white/10 pt-6 pb-5 mt-2">
          <div className="w-full flex flex-wrap justify-center items-center gap-x-4 gap-y-2 text-[8px] md:text-[9px] font-accent uppercase tracking-wider text-white/40">
            <div className="flex items-center gap-1">
              <span className="text-gold-500 font-bold">GSTIN:</span>
              <span className="select-all font-mono">27AAMCT5095R1Z7</span>
            </div>
            <div className="w-1 h-1 rounded-full bg-white/20 hidden md:block" />
            <div className="flex items-center gap-1">
              <span className="text-gold-500 font-bold">IEC Code:</span>
              <span className="select-all font-mono">AAMCT5095R</span>
            </div>
            <div className="w-1 h-1 rounded-full bg-white/20 hidden md:block" />
            <div className="flex items-center gap-1">
              <span className="text-gold-500 font-bold">APEDA Reg:</span>
              <span className="select-all font-mono">RCMC/APEDA/25809/2025-2026</span>
            </div>
            <div className="w-1 h-1 rounded-full bg-white/20 hidden md:block" />
            <div className="flex items-center gap-1">
              <span className="text-gold-500 font-bold">FSSAI Central Lic:</span>
              <span className="select-all font-mono">11526998000056</span>
            </div>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs space-y-3 md:space-y-0 text-white/40 font-body">
          {/* Social icons */}
          <div className="flex gap-4">
            {Object.entries(SITE.social).map(([platform, url]) => {
              const Icon = socialIcons[platform] || socialIcons.globe;
              return (
                <a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold-400 transition-colors"
                  aria-label={platform}
                >
                  <Icon size={14} />
                </a>
              );
            })}
          </div>

          {/* Copyright & Links */}
          <div className="flex flex-col md:flex-row items-center gap-3 text-[10px] md:text-xs">
            <p className="text-center md:text-left">
              &copy; {year} Tanisi Impex Pvt. Ltd. All rights reserved.
            </p>
            <div className="flex gap-3">
              <Link to="/privacy" className="hover:text-gold-400 transition-colors">Privacy</Link>
              <Link to="/terms" className="hover:text-gold-400 transition-colors">Terms</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Text hover effect - Optimized compact responsive height to prevent giant black voids */}
      <div className="w-full h-[100px] sm:h-[160px] lg:h-[240px] mt-4 flex items-end overflow-hidden pb-2">
        <TextHoverEffect text="TANISI IMPEX PVT. LTD." className="z-10 h-full scale-[1.05] origin-bottom md:scale-100" />
      </div>

      <FooterBackgroundGradient />
    </footer>
  );
}
