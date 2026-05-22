import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { Container } from '@/components/ui';

export default function PageHero({ title, subtitle, breadcrumbs = [] }) {
  return (
    <section className="relative bg-[#022c22] overflow-hidden border-b border-white/5">
      {/* Dynamic luxury dark background overlay pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#022c22]/70" />

      {/* Modern High-End Radial Lights */}
      <div className="absolute top-1/2 right-[10%] w-[350px] h-[350px] bg-emerald-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-[10%] w-[300px] h-[300px] bg-gold-600/5 rounded-full blur-[90px] pointer-events-none" />

      <Container className="relative z-10 pt-24 pb-16 lg:pt-32 lg:pb-24">
        {/* Breadcrumb */}
        {breadcrumbs.length > 0 && (
          <nav className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white/40 mb-6 font-accent" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-gold-400 transition-colors flex items-center gap-1.5">
              <Home size={12} className="text-gold-500" /> Home
            </Link>
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-2">
                <ChevronRight size={10} className="text-white/20" />
                {crumb.path ? (
                  <Link to={crumb.path} className="hover:text-gold-400 transition-colors">{crumb.label}</Link>
                ) : (
                  <span className="text-gold-400">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}

        <h1 className="text-h1 font-display font-black text-white tracking-tight leading-none mb-4">{title}</h1>
        
        {subtitle && (
          <p className="text-sm lg:text-base text-emerald-100/60 max-w-2xl font-body leading-relaxed">{subtitle}</p>
        )}
        
        <div className="section-divider mt-8" />
      </Container>
    </section>
  );
}
