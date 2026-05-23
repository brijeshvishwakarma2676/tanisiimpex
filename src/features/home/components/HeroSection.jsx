import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, Shield, Award, Package, ShieldCheck, Plane } from 'lucide-react';
import { Container, Button } from '@/components/ui';

export default function HeroSection() {
  return (
    <section className="relative min-h-[100vh] flex items-center bg-emerald-950 overflow-hidden pt-20 lg:pt-0">
      {/* Premium dark grid pattern with clean styling */}
      <div className="absolute inset-0 grid-pattern opacity-40" />

      {/* Modern High-End Radial Lights */}
      <div className="absolute top-1/4 right-[10%] w-[600px] h-[600px] bg-emerald-700/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-[5%] w-[500px] h-[500px] bg-gold-600/10 rounded-full blur-[130px] pointer-events-none" />

      {/* Decorative luxury abstract lines (Stripe/Linear style) */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-25 pointer-events-none hidden lg:block">
        <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] rounded-full border border-emerald-500/10" />
        <div className="absolute top-[-10%] right-[-5%] w-[700px] h-[700px] rounded-full border border-emerald-400/5" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full border border-gold-500/10" />
      </div>

      <Container className="relative z-10 py-12 lg:py-24">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-8">
            {/* Elegant glass pill badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full badge-premium text-[10px] sm:text-xs font-semibold uppercase tracking-wider font-accent">
                <Globe size={13} className="animate-spin-slow text-gold-400" />
                Global Cargo Dispatch & Domestic Wholesale Logistics
              </span>
            </motion.div>

            {/* Cinematic bold heading */}
            <motion.h1
              className="text-hero font-display text-white tracking-tight leading-none"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              Shipping Premium Indian Foods & Spices{' '}
              <span className="text-gold-gradient block mt-2">Worldwide & Pan-India</span>
            </motion.h1>

            {/* Elegant refined body copy */}
            <motion.p
              className="text-base lg:text-lg text-emerald-100/70 font-body leading-relaxed max-w-xl"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              Tanisi Impex is a premier trading house sourcing and shipping India's finest agricultural commodities, pure whole spices, makhana (fox nuts), mushrooms, and handicraft assets. We handle bulk wholesale freight seamlessly—dispatched either to domestic terminals within India or to major container ports globally.
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-wrap gap-4 pt-2"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link to="/bulk-inquiry">
                <Button size="lg" className="btn-glow group">
                  Request a Quote
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </Link>
              <Link to="/products">
                <Button variant="outline-white" size="lg">
                  Explore Catalog
                </Button>
              </Link>
            </motion.div>

            {/* Modern micro-features */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-8 border-t border-emerald-900/40 max-w-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              {[
                { icon: ShieldCheck, label: 'Quality Certified', sub: 'ISO & FSSAI Standards' },
                { icon: Award, label: 'Freight Ready', sub: 'Global & Pan-India' },
                { icon: Package, label: 'Commodity Range', sub: 'Spices, Foods & Crafts' },
              ].map(({ icon: Icon, label, sub }) => (
                <div key={label} className="space-y-1">
                  <div className="flex items-center gap-2">
                    <Icon size={16} className="text-gold-400" />
                    <span className="text-xs font-semibold uppercase tracking-wider text-emerald-200">{label}</span>
                  </div>
                  <p className="text-xs text-emerald-100/40 pl-6">{sub}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right side high-end glass interactive container */}
          <div className="lg:col-span-5 relative hidden lg:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative p-8 rounded-3xl glass-card border-sweep overflow-hidden"
            >
              {/* Subtle inner grid */}
              <div className="absolute inset-0 grid-pattern opacity-10" />

              <div className="relative z-10 space-y-6">
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <span className="text-[10px] font-semibold uppercase tracking-widest text-gold-400">Export Registry</span>
                    <h3 className="text-lg font-display font-bold text-white">Tanisi Impex Global</h3>
                  </div>
                  <span className="px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-400 text-[10px] font-semibold uppercase tracking-wider border border-emerald-500/20">
                    Live Status
                  </span>
                </div>

                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-2">
                    <div className="flex justify-between text-xs">
                      <span className="text-emerald-200/50">Consignment Route</span>
                      <span className="text-white font-medium text-[10px] uppercase tracking-wider">India Hubs ➔ Worldwide & Domestic</span>
                    </div>
                    <div className="relative w-full h-6 mt-2 flex items-center overflow-hidden">
                      {/* Straight tracking line */}
                      <div className="absolute inset-x-0 top-1/2 border-t-[1.5px] border-dashed border-white/20" />
                      
                      <motion.div
                        className="absolute text-gold-400 top-1/2 -translate-y-1/2 flex items-center justify-center bg-emerald-950 px-1"
                        initial={{ left: '-10%' }}
                        animate={{ left: '110%' }}
                        transition={{
                          left: { repeat: Infinity, duration: 5, ease: "linear" }
                        }}
                      >
                        <Globe size={14} className="animate-spin-slow text-gold-400" />
                      </motion.div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                      <span className="text-[9px] text-emerald-200/50 uppercase block tracking-wider">Global Reach</span>
                      <span className="text-sm font-display font-bold text-white uppercase">50+ Countries</span>
                    </div>
                    <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                      <span className="text-[9px] text-emerald-200/50 uppercase block tracking-wider">Domestic Distribution</span>
                      <span className="text-sm font-display font-bold text-white uppercase">Pan-India Cargo</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-xs text-emerald-200/50">Need direct consultation?</span>
                  <Link to="/bulk-inquiry" className="text-xs font-semibold text-gold-400 hover:text-gold-300 flex items-center gap-1">
                    RFQ Portal <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>

      {/* Elegant smooth bottom wave separation */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </section>
  );
}
