import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { CATEGORIES } from '@/data';
import { Container, SectionHeader } from '@/components/ui';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function CategoriesShowcase() {
  return (
    <section className="py-24 md:py-32 relative bg-stone-950 noise overflow-hidden">
      <Container className="relative z-10">
        <SectionHeader
          badge="Luxury B2B Trade Portfolio"
          title="Premium Export Portfolio"
          subtitle="Indulge in sourcing premium materials meticulously quality-controlled to meet luxury standards for buyers around the globe."
          dark
        />

        {/* Responsive Grid layout for the square cinematic reveals */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mt-16 md:mt-24">
          {CATEGORIES.map((cat, index) => (
            <RevealCard key={cat.id} cat={cat} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}

function RevealCard({ cat, index }) {
  const ref = useRef(null);

  // Track the element's position in the viewport
  const { scrollYProgress } = useScroll({
    target: ref,
    // Start animation when the top of the element enters the bottom of the viewport
    // End animation when the center of the element hits the center of the viewport
    offset: ["start end", "center center"]
  });

  // Cinematic clip-path expanding from center to full edges
  const clipPath = useTransform(
    scrollYProgress,
    [0, 1],
    [
      "inset(40% 40% 40% 40% round 32px)",
      "inset(0% 0% 0% 0% round 32px)"
    ]
  );

  // Parallax scaling effect on the image itself
  const scale = useTransform(scrollYProgress, [0, 1], [1.3, 1]);
  
  // Subtle vertical movement for the container
  const y = useTransform(scrollYProgress, [0, 1], [80, 0]);
  
  // Smooth opacity fade-in
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.div 
      ref={ref} 
      style={{ y, opacity }} 
      className="relative w-full aspect-square flex-shrink-0"
    >
      <Link to={`/products/${cat.slug}`} className="block w-full h-full group outline-none">
        <motion.div 
          style={{ clipPath }}
          className="absolute inset-0 w-full h-full overflow-hidden bg-stone-900 shadow-2xl"
        >
          {/* Parallax Image */}
          <motion.img 
            style={{ scale }}
            src={cat.image} 
            alt={cat.name} 
            className="w-full h-full object-cover origin-center transition-transform duration-[1.5s] ease-out group-hover:scale-110" 
            loading="lazy"
          />

          {/* Premium Dark Overlay */}
          <div className="absolute inset-0 bg-stone-950/30 group-hover:bg-stone-950/50 transition-colors duration-700 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950/95 via-stone-950/20 to-transparent opacity-90" />

          {/* Floating Index */}
          <div className="absolute top-6 right-6 font-mono text-sm text-white/40 font-bold tracking-wider group-hover:text-gold-400 transition-colors duration-500">
            0{index + 1}
          </div>

          {/* Content Overlays */}
          <div className="absolute inset-0 p-8 flex flex-col justify-end z-20">
            <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700 ease-out">
              {/* Category Icon */}
              <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center text-2xl mb-4 group-hover:bg-gold-500/20 group-hover:border-gold-500/30 transition-all duration-500">
                {cat.icon}
              </div>

              <h3 className="text-2xl md:text-3xl font-display font-bold text-white tracking-wide mb-2 group-hover:text-gold-400 transition-colors duration-500">
                {cat.name}
              </h3>
              
              <p className="text-sm text-white/70 font-body leading-relaxed line-clamp-2 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-700 delay-100">
                {cat.tagline}
              </p>
            </div>

            {/* Action Link */}
            <div className="flex items-center gap-2 text-gold-400 text-[11px] font-accent font-bold tracking-[0.2em] uppercase mt-6 opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 delay-200">
              Explore <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform duration-500" />
            </div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}
