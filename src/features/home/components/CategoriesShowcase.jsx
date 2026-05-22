import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { CATEGORIES } from '@/data';
import { Container, SectionHeader } from '@/components/ui';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function CategoriesShowcase() {
  const [visibleCount, setVisibleCount] = useState(4);

  return (
    <section className="py-24 md:py-32 relative bg-stone-950 noise overflow-hidden">
      <Container className="relative z-10">
        <SectionHeader
          badge="Luxury B2B Trade Portfolio"
          title="Premium Export Portfolio"
          subtitle="Indulge in sourcing premium materials meticulously quality-controlled to meet luxury standards for buyers around the globe."
          dark
        />

        <div className="flex flex-col gap-24 md:gap-40 items-center w-full max-w-5xl mx-auto mt-20 md:mt-32">
          {CATEGORIES.slice(0, visibleCount).map((cat, index) => (
            <RevealCard key={cat.id} cat={cat} index={index} />
          ))}
        </div>

        {visibleCount < CATEGORIES.length && (
          <div className="flex justify-center mt-20 md:mt-32">
            <button 
              onClick={() => setVisibleCount(prev => prev + 4)}
              className="px-10 py-4 md:py-5 rounded-full border border-gold-500/40 text-gold-400 font-accent font-bold tracking-[0.2em] uppercase text-xs md:text-sm hover:bg-gold-500/10 hover:border-gold-500 transition-all duration-500"
            >
              Load More Portfolio
            </button>
          </div>
        )}
      </Container>
    </section>
  );
}

function RevealCard({ cat, index }) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"]
  });

  // Root performance fix: Removing useSpring, mix-blend-mode, and box-shadow. 
  // clip-path is incredibly fast on its own, but chokes if the browser has to recalculate 
  // complex shadow maps or blend modes on every single scroll frame.
  const clipPath = useTransform(
    scrollYProgress,
    [0, 1],
    [
      "inset(30% 30% 30% 30% round 32px)",
      "inset(0% 0% 0% 0% round 32px)"
    ]
  );

  const scale = useTransform(scrollYProgress, [0, 1], [1.2, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [40, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.4, 1]);

  return (
    <motion.div 
      ref={ref} 
      style={{ y, opacity }} 
      className="relative w-full aspect-[4/5] sm:aspect-square md:aspect-video flex-shrink-0"
    >
      <Link to={`/products/${cat.slug}`} className="block w-full h-full group outline-none">
        <motion.div 
          style={{ clipPath, willChange: "clip-path, transform" }}
          // Removed shadow-[0_30px_60px_...] to completely eliminate GPU paint lag on clip-path boundary changes
          className="absolute inset-0 w-full h-full overflow-hidden bg-stone-900 transform-gpu"
        >
          <motion.img 
            style={{ scale, willChange: "transform" }}
            src={cat.image} 
            alt={cat.name} 
            className="w-full h-full object-cover origin-center transition-transform duration-700 ease-out group-hover:scale-105 transform-gpu" 
            loading="lazy"
          />

          {/* Removed mix-blend-multiply which causes massive composite lag during scroll animations */}
          <div className="absolute inset-0 bg-stone-950/40 group-hover:bg-stone-950/60 transition-colors duration-500 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950/95 via-stone-950/20 to-transparent opacity-90 pointer-events-none" />

          <div className="absolute top-6 right-6 md:top-8 md:right-8 font-mono text-sm md:text-base text-white/40 font-bold tracking-wider group-hover:text-gold-400 transition-colors duration-500 z-30 pointer-events-none">
            0{index + 1}
          </div>

          <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end z-20 pointer-events-none">
            <div className="transform translate-y-4 md:translate-y-6 group-hover:translate-y-0 transition-transform duration-500 ease-out">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl md:rounded-[1.25rem] bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center text-2xl md:text-3xl mb-4 md:mb-6 group-hover:bg-gold-500/20 transition-all duration-500">
                {cat.icon}
              </div>

              <h3 className="text-3xl md:text-5xl font-display font-bold text-white tracking-wide mb-3 md:mb-4 group-hover:text-gold-400 transition-colors duration-500">
                {cat.name}
              </h3>
              
              <p className="text-sm md:text-lg text-white/70 font-body leading-relaxed md:leading-loose line-clamp-2 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                {cat.tagline}
              </p>
            </div>

            <div className="flex items-center gap-3 text-gold-400 text-xs md:text-sm font-accent font-bold tracking-[0.2em] uppercase mt-6 md:mt-8 opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
              Explore Portfolio <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform duration-300" />
            </div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}
