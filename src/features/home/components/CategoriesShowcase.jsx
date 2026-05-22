import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Container, SectionHeader } from '@/components/ui';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations';
import { CATEGORIES } from '@/data';

export default function CategoriesShowcase() {
  return (
    <section className="py-section bg-[#FAF9F6] relative overflow-hidden">
      {/* Decorative dynamic background dot pattern */}
      <div className="absolute inset-0 dot-pattern opacity-40 pointer-events-none" />

      <Container className="relative z-10">
        <FadeIn>
          <SectionHeader
            badge="Luxury B2B Trade Portfolio"
            title="Premium Export Portfolio"
            subtitle="Indulge in sourcing premium materials meticulously quality-controlled to meet luxury standards for buyers around the globe."
          />
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {CATEGORIES.map((cat) => (
            <StaggerItem key={cat.id}>
              <Link
                to={`/products/${cat.slug}`}
                className="group block relative rounded-3xl overflow-hidden aspect-[4/3.5] img-zoom border border-gray-100/80 shadow-[0_8px_30px_rgb(0,0,0,0.015)] hover:shadow-[0_20px_45px_rgba(200,168,80,0.1)] hover:border-gold-500/20 transition-all duration-500 bg-white"
              >
                {/* Image */}
                <div className="absolute inset-0 w-full h-full">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  {/* Ultra smooth double gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-950/40 to-transparent opacity-85 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-90" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-emerald-950/50 to-transparent opacity-40" />
                </div>

                {/* Subtle gold accent line at the top of the card on hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold-500 to-transparent transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />

                {/* Premium Card Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end z-20">
                  <div className="transform translate-y-3 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                    {/* Glassic Icon container */}
                    <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center text-xl mb-4 group-hover:bg-gold-500/20 group-hover:border-gold-500/30 transition-all duration-500">
                      {cat.icon}
                    </div>

                    <h3 className="text-lg font-display font-extrabold text-white tracking-wide mb-1 group-hover:text-gold-400 transition-colors duration-300">
                      {cat.name}
                    </h3>
                    
                    <p className="text-xs text-white/60 font-body leading-relaxed line-clamp-2 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                      {cat.tagline}
                    </p>
                  </div>

                  <div className="flex items-center gap-1.5 text-gold-400 text-xs font-accent font-semibold tracking-wider uppercase mt-4 opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-75">
                    Explore Directory <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}
