import { Shield, TrendingDown, Package, Truck, BarChart3, Headphones } from 'lucide-react';
import { Container, SectionHeader } from '@/components/ui';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations';
import { WHY_CHOOSE_US } from '@/data';

const iconMap = { Shield, TrendingDown, Package, Truck, BarChart3, Headphones };

const chipLabels = {
  'Certified Quality': 'ISO Verified',
  'Competitive Pricing': 'Best-in-Class',
  'Custom Packaging': 'OEM Ready',
  'Reliable Logistics': 'On-Time Guaranteed',
  'Scalable Supply': 'Flexible MOQ',
  'Dedicated Support': '24 / 7 Active',
};

export default function WhyChooseUs() {
  return (
    <section className="py-section bg-[#FAF9F6] relative overflow-hidden section-glow-bottom">
      <div className="absolute inset-0 dot-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />

      <Container className="relative z-10">
        <FadeIn>
          <SectionHeader
            badge="Institutional Strengths"
            title="Sovereign Grade Trust & Reliability"
            subtitle="We guarantee premium, reliable global operations by combining deep Indian production heritage with modern QA frameworks."
          />
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_CHOOSE_US.map((item, i) => {
            const Icon = iconMap[item.icon];
            return (
              <StaggerItem key={i}>
                <div className="bg-white rounded-3xl p-8 border border-gold-500/10 card-elevated card-shine h-full relative overflow-hidden flex flex-col justify-between group">
                  {/* Top corner glow on hover */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-gold-500/8 to-transparent rounded-tr-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  <div>
                    <div className="flex justify-between items-start mb-8">
                      <div className="w-14 h-14 rounded-2xl bg-emerald-950/5 border border-emerald-950/10 flex items-center justify-center group-hover:bg-emerald-950 group-hover:scale-110 transition-all duration-300">
                        <Icon size={24} className="text-emerald-800 group-hover:text-gold-400 transition-colors duration-300" />
                      </div>
                      <span className="chip">{chipLabels[item.title] || 'Verified'}</span>
                    </div>

                    <h3 className="text-lg font-display font-extrabold text-emerald-950 mb-3 tracking-wide group-hover:text-emerald-800 transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-sm text-emerald-950/55 font-body leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-8 pt-4 border-t border-gold-500/8 flex items-center gap-2 text-xs font-semibold tracking-wider font-accent uppercase text-emerald-950/30 group-hover:text-gold-600 transition-colors duration-300">
                    <span className="relative flex h-2 w-2">
                      <span className="pulse-live absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
                    </span>
                    Compliant Framework
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </Container>
    </section>
  );
}



