import { Link, useRouteError } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Home, Mail, ShieldAlert } from 'lucide-react';
import { Container, Button } from '@/components/ui';
import { FadeIn } from '@/components/animations';

export default function ErrorPage() {
  const error = useRouteError();
  
  // Determine if it's a 404 or a general exception
  const is404 = !error || error.status === 404;

  return (
    <>
      <Helmet>
        <title>{is404 ? 'Page Not Found — Tanisi Impex' : 'Application Advisory — Tanisi Impex'}</title>
        <meta name="description" content="The requested export directory page or trade terminal is unavailable. Navigate back to Tanisi Impex sourcing hub." />
      </Helmet>

      <section className="min-h-[70vh] flex items-center py-20 bg-[#FAF9F6] relative overflow-hidden">
        {/* Subtle background grids */}
        <div className="absolute inset-0 dot-pattern opacity-25 pointer-events-none" />
        
        {/* Elegant light glowing spot */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold-500/5 rounded-full blur-[120px] pointer-events-none" />

        <Container className="relative z-10 text-center">
          <FadeIn className="max-w-2xl mx-auto space-y-8">
            {/* Warning dynamic icon badge */}
            <div className="flex justify-center">
              <div className="w-16 h-16 rounded-3xl bg-gold-500/5 border border-gold-500/15 flex items-center justify-center text-gold-500 shadow-sm animate-pulse">
                <ShieldAlert size={28} />
              </div>
            </div>

            <div className="space-y-3">
              <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-gold-600 block font-accent">
                {is404 ? 'Navigation Advisory' : 'System Synchronizer'}
              </span>
              <h1 className="text-6xl md:text-7xl font-display font-black text-emerald-950 tracking-tight leading-none">
                {is404 ? '404' : '500'}
              </h1>
              <h2 className="text-xl md:text-2xl font-display font-bold text-emerald-900 tracking-wide mt-2">
                {is404 ? 'Requested Directory Not Found' : 'Component Synchronization Advisory'}
              </h2>
            </div>

            <p className="text-emerald-950/60 font-body text-sm md:text-base leading-relaxed max-w-lg mx-auto">
              {is404 
                ? 'The statutory trade terminal or product directory path you requested is currently unavailable or has been relocated within our updated global shipping framework.' 
                : 'Our B2B trade database is currently undergoing scheduled compliance updates. Please attempt to access this terminal again shortly.'}
            </p>

            {/* Quick-links container */}
            <div className="p-6 rounded-2xl bg-white border border-gold-500/10 shadow-[0_10px_30px_-15px_rgba(200,168,80,0.05)] max-w-md mx-auto space-y-4">
              <span className="text-[10px] font-accent uppercase font-bold tracking-widest text-emerald-950/40 block">
                Trade Gateway Recovery
              </span>
              <div className="grid grid-cols-2 gap-4">
                <Link to="/" className="flex flex-col items-center p-3 rounded-xl hover:bg-emerald-950/5 border border-transparent hover:border-gold-500/15 transition-all text-center group">
                  <Home size={18} className="text-emerald-800 group-hover:text-gold-500 transition-colors mb-1.5" />
                  <span className="text-xs font-semibold text-emerald-950/80 font-accent uppercase">Homepage</span>
                </Link>
                <Link to="/contact" className="flex flex-col items-center p-3 rounded-xl hover:bg-emerald-950/5 border border-transparent hover:border-gold-500/15 transition-all text-center group">
                  <Mail size={18} className="text-emerald-800 group-hover:text-gold-500 transition-colors mb-1.5" />
                  <span className="text-xs font-semibold text-emerald-950/80 font-accent uppercase">Trade Desk</span>
                </Link>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <Link to="/">
                <Button variant="secondary" className="group">
                  <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                  Return to Sourcing Hub
                </Button>
              </Link>
              <Link to="/bulk-inquiry">
                <Button className="btn-glow">
                  Request Bulk Quotation
                </Button>
              </Link>
            </div>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}
