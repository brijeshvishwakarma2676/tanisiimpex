import { Container } from '@/components/ui';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { CERTIFICATIONS } from '@/data';

export default function TrustStrip() {
  // Duplicate for infinite scroll illusion
  const items = [...CERTIFICATIONS, ...CERTIFICATIONS];

  return (
    <section className="py-8 bg-[#FAF9F6] border-b border-gold-500/10 overflow-hidden relative">
      {/* Fade edge masks */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#FAF9F6] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#FAF9F6] to-transparent z-10 pointer-events-none" />

      <Container>
        <div className="flex items-center gap-6 mb-5">
          <span className="text-[10px] text-emerald-950/40 font-accent uppercase tracking-widest font-bold shrink-0">
            Approved Trade Credentials
          </span>
          <div className="flex-1 h-px bg-gradient-to-r from-gold-500/20 to-transparent" />
          <div className="flex items-center gap-1.5 text-[10px] text-emerald-600 font-accent font-bold uppercase tracking-wider shrink-0">
            <span className="relative flex h-2 w-2">
              <span className="pulse-live absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            All Active
          </div>
        </div>
      </Container>

      {/* Auto-scrolling marquee */}
      <div className="flex overflow-hidden">
        <motion.div
          className="flex gap-4 shrink-0"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 28, ease: 'linear', repeat: Infinity }}
        >
          {items.map((cert, i) => (
            <div
              key={i}
              className="flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white border border-gold-500/15 shadow-[0_4px_16px_rgba(200,168,80,0.04)] hover:border-gold-500/35 hover:shadow-[0_8px_24px_rgba(200,168,80,0.08)] transition-all duration-300 shrink-0 group cursor-default"
              title={cert.full}
            >
              <CheckCircle size={12} className="text-emerald-600 group-hover:text-gold-500 transition-colors shrink-0" />
              <span className="text-xs font-bold text-emerald-950/80 font-accent uppercase tracking-wide">{cert.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
