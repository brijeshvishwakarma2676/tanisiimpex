import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowRight, Linkedin, Instagram, Facebook, Twitter } from 'lucide-react';
import { SITE, CATEGORIES } from '@/data';
import { Container } from '@/components/ui';

const socialIcons = { linkedin: Linkedin, instagram: Instagram, facebook: Facebook, twitter: Twitter };

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#022c22] text-white relative overflow-hidden border-t border-white/5">
      {/* Decorative dynamic top line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/25 to-transparent" />

      {/* Decorative ambient glowing backdrops inside footer */}
      <div className="absolute bottom-[-10%] right-[-10%] w-[350px] h-[350px] bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-[-10%] left-[-10%] w-[350px] h-[350px] bg-gold-500/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Main luxury footer */}
      <Container className="py-16 md:py-24 relative z-10 flex flex-col items-center">

        {/* Centered Brand Section */}
        <div className="flex flex-col items-center text-center space-y-6 mb-16 md:mb-20 w-full max-w-2xl">
          <Link to="/" className="flex flex-col items-center gap-4 md:gap-5 group">
            <img src="/images/logo.png" alt="Tanisi Impex" className="h-28 md:h-40 w-auto transition-transform duration-300 group-hover:scale-105" />
            <div>
              <h3 className="font-display font-black text-xl md:text-2xl tracking-widest uppercase">TANISI IMPEX</h3>
              <p className="text-gold-500 text-[10px] md:text-xs font-accent tracking-widest font-bold uppercase mt-1 md:mt-2">India to the World</p>
            </div>
          </Link>

          <p className="text-emerald-100/50 text-xs md:text-sm font-body leading-relaxed max-w-2xl">
            Elevating B2B sourcing from India with strict compliance, ISO verification, and customizable packaging across 50+ countries.
          </p>

          {/* Social pills */}
          <div className="flex gap-6 pt-2">
            {Object.entries(SITE.social).map(([platform, url]) => {
              const Icon = socialIcons[platform];
              return (
                <a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-white/50 hover:text-gold-400 hover:border-gold-500/30 hover:bg-white/10 transition-all duration-300"
                  aria-label={platform}
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 sm:gap-x-8 gap-y-12 lg:gap-16 w-full max-w-5xl">
          {/* Product Categories Column */}
          <div className="col-span-1">
            <h4 className="font-accent font-bold text-[10px] md:text-xs uppercase tracking-widest text-gold-400 mb-6 md:mb-8">Export Range</h4>
            <ul className="space-y-3 md:space-y-4">
              {CATEGORIES.slice(0, 6).map((cat) => (
                <li key={cat.id}>
                  <Link to={`/products/${cat.slug}`} className="text-xs md:text-sm text-emerald-100/50 hover:text-gold-400 transition-colors font-body flex items-start gap-1.5 md:gap-2 group">
                    <ArrowRight size={12} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-gold-500 shrink-0 mt-0.5 md:mt-1 hidden md:block" />
                    <span className="leading-snug">{cat.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Column */}
          <div className="col-span-1">
            <h4 className="font-accent font-bold text-[10px] md:text-xs uppercase tracking-widest text-gold-400 mb-6 md:mb-8">Corporate</h4>
            <ul className="space-y-3 md:space-y-4">
              {[
                { label: 'About Us', path: '/about' },
                { label: 'Export Process', path: '/export-process' },
                { label: 'Certifications', path: '/certifications' },
                { label: 'Global Reach', path: '/global-presence' },
                { label: 'Facility Infrastructure', path: '/infrastructure' },
                { label: 'Request a Quote', path: '/bulk-inquiry' },
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-xs md:text-sm text-emerald-100/50 hover:text-gold-400 transition-colors font-body flex items-start gap-1.5 md:gap-2 group">
                    <ArrowRight size={12} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-gold-500 shrink-0 mt-0.5 md:mt-1 hidden md:block" />
                    <span className="leading-snug">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Sourcing Hub Column */}
          <div className="col-span-2 lg:col-span-1 space-y-6 pt-4 lg:pt-0">
            <h4 className="font-accent font-bold text-[10px] md:text-xs uppercase tracking-widest text-gold-400 mb-4 md:mb-8">Global Sourcing Hub</h4>
            <ul className="space-y-3 md:space-y-4 font-body text-xs md:text-sm text-emerald-100/50">
              <li className="flex items-start gap-2.5 md:gap-3">
                <MapPin size={16} className="text-gold-500 shrink-0 mt-0.5 md:mt-1" />
                <span className="leading-snug max-w-[250px] lg:max-w-none">{SITE.address}</span>
              </li>
              <li>
                <a href={`mailto:${SITE.email}`} className="flex items-center gap-2.5 md:gap-3 hover:text-gold-400 transition-colors">
                  <Mail size={16} className="text-gold-500 shrink-0" />
                  <span>{SITE.email}</span>
                </a>
              </li>
              <li>
                <a href={`tel:${SITE.phone}`} className="flex items-center gap-2.5 md:gap-3 hover:text-gold-400 transition-colors">
                  <Phone size={16} className="text-gold-500 shrink-0" />
                  <span>{SITE.phone}</span>
                </a>
              </li>
            </ul>

            {/* Premium minimal subscription */}
            <div className="pt-2 md:pt-4">
              <span className="text-[10px] md:text-xs font-semibold uppercase tracking-wider text-emerald-300 block mb-2 md:mb-3 font-accent">
                RFQ Updates & Sourcing Brief
              </span>
              <form className="flex gap-2 max-w-sm" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="name@company.com"
                  className="flex-1 px-3 md:px-4 py-2.5 md:py-3 rounded-full bg-white/5 border border-white/10 text-[10px] md:text-xs text-white placeholder:text-white/30 focus:outline-none focus:border-gold-500/50 transition-colors font-body shadow-inner"
                />
                <button className="px-3 md:px-4 py-2.5 md:py-3 bg-gold-500 hover:bg-gold-400 text-emerald-950 rounded-full font-semibold text-xs transition-colors shrink-0 flex items-center justify-center">
                  <ArrowRight size={14} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </Container>

      {/* Sub footer */}
      <div className="border-t border-white/5 bg-[#011f18]/30">
        <Container className="py-8 flex flex-col items-center gap-6">
          {/* Corporate Compliance Strip */}
          <div className="w-full flex flex-wrap justify-center items-center gap-x-8 gap-y-3 text-[10px] font-accent uppercase tracking-wider text-emerald-100/40 border-b border-white/5 pb-6">
            <div className="flex items-center gap-2">
              <span className="text-gold-400 font-bold">GSTIN:</span>
              <span className="text-white/70 select-all font-mono">27AAMCT5095R1Z7</span>
            </div>
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/20 hidden md:block" />
            <div className="flex items-center gap-2">
              <span className="text-gold-400 font-bold">IEC Code:</span>
              <span className="text-white/70 select-all font-mono">AAMCT5095R</span>
            </div>
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/20 hidden md:block" />
            <div className="flex items-center gap-2">
              <span className="text-gold-400 font-bold">APEDA Reg:</span>
              <span className="text-white/70 select-all font-mono">RCMC/APEDA/25809/2025-2026</span>
            </div>
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/20 hidden md:block" />
            <div className="flex items-center gap-2">
              <span className="text-gold-400 font-bold">FSSAI Central Lic:</span>
              <span className="text-white/70 select-all font-mono">11526998000056</span>
            </div>
          </div>

          <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-emerald-100/30">
            <p className="font-body text-center sm:text-left">
              © {year} Tanisi Impex Private Limited. Premium static export directory. Made for worldwide trade partnerships.
            </p>
            <div className="flex gap-6">
              <Link to="/privacy" className="hover:text-gold-400 transition-colors font-body">Privacy Protocol</Link>
              <Link to="/terms" className="hover:text-gold-400 transition-colors font-body">Terms of Trade</Link>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}
