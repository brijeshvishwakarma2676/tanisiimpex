import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { Container, Button } from '@/components/ui';
import { SITE } from '@/data';

export default function FinalCTA() {
  return (
    <section className="relative py-28 bg-[#022c22] overflow-hidden">
      {/* Delicate grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none" />

      {/* Modern High-End Radial Lights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-gold-600/5 rounded-full blur-[110px] pointer-events-none" />

      {/* Top golden gradient boundary line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />

      <Container className="relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-6"
        >
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full badge-premium text-[9px] font-bold uppercase tracking-wider font-accent">
            Secure Trade Partnership
          </span>

          <h2 className="text-h1 font-display text-white tracking-tight leading-none max-w-3xl mx-auto">
            Ready to Source <span className="text-gold-gradient block mt-2">Premium Indian Commodities?</span>
          </h2>

          <p className="text-sm lg:text-base text-emerald-100/60 font-body max-w-2xl mx-auto mb-10 leading-relaxed">
            Whether you require dynamic white-label/private labeling, specific laboratory compliance verifications, or a full logistics dispatch quotation, our B2B team is ready to respond within 24 hours.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link to="/bulk-inquiry">
              <Button size="lg" className="btn-glow group">
                Submit RFQ Request 
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <a
              href={`https://wa.me/${SITE.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline-white" size="lg">
                <MessageCircle size={16} /> Direct WhatsApp
              </Button>
            </a>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
