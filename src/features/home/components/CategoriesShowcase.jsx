import { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
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

        {/* Single column layout for cinematic scroll on all devices */}
        <div className="flex flex-col gap-24 md:gap-40 items-center w-full max-w-5xl mx-auto mt-20 md:mt-32">
          {CATEGORIES.slice(0, visibleCount).map((cat, index) => (
            <RevealCard key={cat.id} cat={cat} index={index} />
          ))}
        </div>

        {/* Load More Button */}
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

  // Track the element's position in the viewport
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"]
  });

  // OPTIMIZATION: Smooth out the raw scroll values with a spring physics model.
  // This eliminates all lag and jitter, creating a buttery "Apple-like" feel.
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 20,
    mass: 0.5,
    restDelta: 0.001
  });

  // Cinematic clip-path expanding from center to full edges using smoothed progress
  const clipPath = useTransform(
    smoothProgress,
    [0, 1],
    [
      "inset(35% 35% 35% 35% round 32px)",
      "inset(0% 0% 0% 0% round 32px)"
    ]
  );

  // Parallax scaling effect on the image itself
  const scale = useTransform(smoothProgress, [0, 1], [1.25, 1]);
  
  // Subtle vertical movement for the container
  const y = useTransform(smoothProgress, [0, 1], [60, 0]);
  
  // Smooth opacity fade-in
  const opacity = useTransform(smoothProgress, [0, 1], [0.2, 1]);

  return (
    <motion.div 
      ref={ref} 
      style={{ y, opacity }} 
      // Changed from aspect-square to a cinematic portfolio canvas shape
      className="relative w-full aspect-[4/5] sm:aspect-square md:aspect-video flex-shrink-0"
    >
      <Link to={`/products/${cat.slug}`} className="block w-full h-full group outline-none">
        <motion.div 
          // Added will-change optimizations to force GPU acceleration and fix lag
          style={{ clipPath, willChange: "clip-path, transform" }}
          className="absolute inset-0 w-full h-full overflow-hidden bg-stone-900 shadow-[0_30px_60px_rgba(0,0,0,0.6)] transform-gpu"
        >
          {/* Parallax Image */}
          <motion.img 
            style={{ scale, willChange: "transform" }}
            src={cat.image} 
            alt={cat.name} 
            className="w-full h-full object-cover origin-center transition-transform duration-[1.5s] ease-out group-hover:scale-110 transform-gpu" 
            loading="lazy"
          />

          {/* Premium Dark Overlay */}
          <div className="absolute inset-0 bg-stone-950/20 group-hover:bg-stone-950/50 transition-colors duration-700 mix-blend-multiply pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950/95 via-stone-950/20 to-transparent opacity-90 pointer-events-none" />

          {/* Floating Index */}
          <div className="absolute top-6 right-6 md:top-8 md:right-8 font-mono text-sm md:text-base text-white/40 font-bold tracking-wider group-hover:text-gold-400 transition-colors duration-500 z-30 pointer-events-none">
            0{index + 1}
          </div>

          {/* Content Overlays */}
          <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end z-20 pointer-events-none">
            <div className="transform translate-y-4 md:translate-y-6 group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]">
              {/* Category Icon */}
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl md:rounded-[1.25rem] bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center text-2xl md:text-3xl mb-4 md:mb-6 group-hover:bg-gold-500/20 group-hover:border-gold-500/30 transition-all duration-500">
                {cat.icon}
              </div>

              <h3 className="text-3xl md:text-5xl font-display font-bold text-white tracking-wide mb-3 md:mb-4 group-hover:text-gold-400 transition-colors duration-500">
                {cat.name}
              </h3>
              
              <p className="text-sm md:text-lg text-white/70 font-body leading-relaxed md:leading-loose line-clamp-2 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-700 delay-100">
                {cat.tagline}
              </p>
            </div>

            {/* Action Link */}
            <div className="flex items-center gap-3 text-gold-400 text-xs md:text-sm font-accent font-bold tracking-[0.2em] uppercase mt-6 md:mt-8 opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 delay-200">
              Explore Portfolio <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform duration-500" />
            </div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}
