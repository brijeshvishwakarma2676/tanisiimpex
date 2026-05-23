import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle, Globe, ShieldCheck, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { Container, Button } from '@/components/ui';
import { SITE } from '@/data';

const trustItems = [
  { icon: ShieldCheck, label: 'Zero-Risk Sampling' },
  { icon: Globe, label: '50+ Countries Served' },
  { icon: Clock, label: 'Responds within 24h' },
];

export default function FinalCTA() {
  return (
    <section className="relative py-32 bg-[#0B1522] overflow-hidden">
      {/* Deep ambient glows */}
      <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-emerald-600/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gold-600/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-emerald-900/20 rounded-full blur-[100px] pointer-events-none" />

      {/* Top golden line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-8"
          >
            {/* Live badge */}
            <div className="flex justify-center">
              <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full badge-premium text-[10px] font-bold uppercase tracking-widest font-accent">
                <span className="relative flex h-2 w-2">
                  <span className="pulse-live absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                </span>
                Accepting B2B Inquiries — Secure Trade Partnership
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display text-white tracking-tight leading-[1.05] font-black">
              Ready to Source{' '}
              <span className="text-gold-gradient">Premium Indian Commodities?</span>
            </h2>

            <p className="text-sm lg:text-base text-emerald-100/55 font-body max-w-2xl mx-auto leading-relaxed">
              Whether you require white-label private labeling, specific laboratory compliance verifications, or a full logistics dispatch quotation — our B2B team responds within 24 hours.
            </p>

            {/* Trust micro-badges */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              {trustItems.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-semibold font-accent text-emerald-100/70 uppercase tracking-wide">
                  <Icon size={12} className="text-gold-400" />
                  {label}
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-6">
              <Link to="/bulk-inquiry">
                <Button size="lg" className="btn-glow btn-magnetic group">
                  Submit RFQ Request
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <a
                href={`https://wa.me/${SITE.whatsapp}?text=Hello%20Tanisi%20Impex%2C%20I%20am%20interested%20in%20sourcing%20products.`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline-white" size="lg" className="btn-magnetic">
                  <MessageCircle size={16} /> Chat on WhatsApp
                </Button>
              </a>
            </div>

            {/* Bottom footnote */}
            <p className="text-[10px] text-emerald-100/25 font-body pt-4">
              No commitment required. Free product catalog & sample pricing on first contact.
            </p>
          </motion.div>
        </div>
      </Container>

      {/* Bottom golden fade */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/15 to-transparent" />
    </section>
  );
}
