import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container, SectionHeader } from '@/components/ui';
import { FadeIn } from '@/components/animations';
import { FAQS } from '@/data';
import { cn } from '@/lib/cn';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-24 bg-[#FAF9F6] relative overflow-hidden">
      {/* Subtle details */}
      <div className="absolute inset-0 dot-pattern opacity-30 pointer-events-none" />

      <Container size="sm" className="relative z-10">
        <FadeIn>
          <SectionHeader
            badge="Customer Support & Trade Compliance"
            title="Frequently Answered FAQ"
            subtitle="Transparent answers regarding compliance, samples, shipment MOQs, and delivery terms."
          />
        </FadeIn>

        <div className="space-y-4 max-w-3xl mx-auto">
          {FAQS.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <FadeIn key={i} delay={i * 0.05}>
                <div className={cn(
                  "rounded-2xl border transition-all duration-300 overflow-hidden bg-white/60 backdrop-blur-md",
                  isOpen ? "border-gold-500/30 shadow-[0_10px_30px_rgba(200,168,80,0.06)]" : "border-gold-500/10"
                )}>
                  <button
                    onClick={() => setOpenIndex(isOpen ? -1 : i)}
                    className="w-full flex items-center justify-between px-6 py-5 text-left cursor-pointer group"
                  >
                    <span className="font-display font-extrabold text-emerald-950 pr-4 text-sm uppercase tracking-wide group-hover:text-gold-600 transition-colors">
                      {faq.q}
                    </span>
                    <div className="w-8 h-8 rounded-full border border-gold-500/10 flex items-center justify-center shrink-0 bg-gold-500/5 group-hover:bg-gold-500/10 transition-colors">
                      <ChevronDown
                        size={16}
                        className={cn('text-gold-600 transition-transform duration-300', isOpen && 'rotate-180')}
                      />
                    </div>
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <div className="px-6 pb-6 text-sm text-emerald-950/60 font-body leading-relaxed border-t border-gold-500/10 pt-4 bg-gold-500/[0.01]">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
