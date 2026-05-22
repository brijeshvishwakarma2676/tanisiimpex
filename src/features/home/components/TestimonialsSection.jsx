import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight, MapPin, Star } from 'lucide-react';
import { Container } from '@/components/ui';
import { FadeIn } from '@/components/animations';
import { TESTIMONIALS } from '@/data';

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const t = TESTIMONIALS[current];

  const next = () => setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
  const prev = () => setCurrent((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <section className="py-24 bg-[#FAF9F6] relative overflow-hidden border-t border-gold-500/10">
      {/* Delicate background patterns */}
      <div className="absolute inset-0 dot-pattern opacity-30 pointer-events-none" />

      {/* Modern High-End Radial Lights */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-gold-500/5 rounded-full blur-[110px] pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading and trust context */}
          <div className="lg:col-span-5 space-y-6">
            <FadeIn>
              <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full badge-premium text-[9px] font-bold uppercase tracking-wider font-accent">
                International Recognition
              </span>
              <h2 className="text-h2 font-display font-black text-emerald-950 tracking-tight mt-3">
                What Our Global Partners Say
              </h2>
              <p className="text-sm text-emerald-950/60 font-body leading-relaxed max-w-sm">
                Discover why leading supermarket networks, agricultural importers, and handicraft distributors across 50+ countries prefer Tanisi Impex.
              </p>
              
              {/* Gold Stars Rating Indicator */}
              <div className="flex items-center gap-1 pt-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-gold-500 text-gold-500" />
                ))}
                <span className="text-xs font-bold text-emerald-950/80 ml-2 font-accent uppercase tracking-wider">
                  5.0 Trade Rating
                </span>
              </div>
            </FadeIn>
          </div>

          {/* Right Column: Sliding Testimonial glass card */}
          <div className="lg:col-span-7">
            <FadeIn>
              <div className="relative rounded-3xl glass-card-light border border-gold-500/10 p-8 lg:p-12 shadow-[0_15px_50px_-20px_rgba(200,168,80,0.08)] bg-white/60">
                <Quote size={32} className="text-gold-500/20 mb-6" />
                
                <div className="min-h-[140px] flex items-center">
                  <AnimatePresence mode="wait">
                    <motion.blockquote
                      key={current}
                      initial={{ opacity: 0, x: 15 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -15 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="text-base lg:text-lg text-emerald-950 font-body leading-relaxed italic"
                    >
                      "{t.quote}"
                    </motion.blockquote>
                  </AnimatePresence>
                </div>

                <div className="mt-8 pt-6 border-t border-gold-500/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={current}
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      transition={{ duration: 0.25 }}
                    >
                      <p className="font-display font-extrabold text-emerald-950 text-sm tracking-wide">{t.author}</p>
                      <p className="text-xs text-emerald-950/50 font-body">{t.role}, {t.company}</p>
                    </motion.div>
                  </AnimatePresence>

                  <div className="flex items-center gap-4">
                    {/* Location Badge */}
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={current}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-xs font-semibold tracking-wider uppercase font-accent text-emerald-950/40 flex items-center gap-1"
                      >
                        <MapPin size={12} className="text-gold-500" /> {t.country}
                      </motion.div>
                    </AnimatePresence>

                    {/* Navigation buttons */}
                    <div className="flex items-center gap-2">
                      <button
                        onClick={prev}
                        className="w-9 h-9 rounded-full border border-gold-500/15 flex items-center justify-center text-emerald-950/60 hover:text-gold-600 hover:border-gold-500/40 hover:bg-gold-500/5 transition-all duration-300 cursor-pointer"
                        aria-label="Previous testimonial"
                      >
                        <ChevronLeft size={16} />
                      </button>
                      <button
                        onClick={next}
                        className="w-9 h-9 rounded-full border border-gold-500/15 flex items-center justify-center text-emerald-950/60 hover:text-gold-600 hover:border-gold-500/40 hover:bg-gold-500/5 transition-all duration-300 cursor-pointer"
                        aria-label="Next testimonial"
                      >
                        <ChevronRight size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </Container>
    </section>
  );
}
