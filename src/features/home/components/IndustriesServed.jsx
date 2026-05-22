import { ShoppingCart, UtensilsCrossed, Factory, Warehouse, Globe, Tag, Boxes, Leaf } from 'lucide-react';
import { Container, SectionHeader } from '@/components/ui';
import { StaggerContainer, StaggerItem, FadeIn } from '@/components/animations';
import { INDUSTRIES } from '@/data';

const iconMap = { ShoppingCart, UtensilsCrossed, Factory, Warehouse, Globe, Tag, Boxes, Leaf };

export default function IndustriesServed() {
  return (
    <section className="py-24 bg-[#FAF9F6] relative overflow-hidden">
      {/* Decorative details */}
      <div className="absolute inset-0 dot-pattern opacity-30 pointer-events-none" />

      <Container className="relative z-10">
        <FadeIn>
          <SectionHeader
            badge="B2B Sourcing Demands"
            title="Diverse Industries We Serve"
            subtitle="From international supermarket networks to boutique organic private-labels, our supply chain fits every standard."
          />
        </FadeIn>

        <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {INDUSTRIES.map((ind, i) => {
            const Icon = iconMap[ind.icon];
            return (
              <StaggerItem key={i}>
                <div className="flex flex-col items-center text-center p-8 rounded-3xl bg-white border border-gold-500/10 shadow-[0_8px_30px_rgb(0,0,0,0.015)] hover:shadow-[0_20px_45px_rgba(200,168,80,0.08)] hover:border-gold-500/30 transition-all duration-500 group">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-950/5 border border-emerald-950/10 flex items-center justify-center mb-5 group-hover:bg-emerald-950 transition-all duration-300">
                    <Icon size={24} className="text-emerald-800 group-hover:text-gold-400 transition-colors" />
                  </div>
                  <h3 className="text-xs font-accent font-bold uppercase tracking-wider text-emerald-950/80 group-hover:text-emerald-950 transition-colors">
                    {ind.name}
                  </h3>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </Container>
    </section>
  );
}
