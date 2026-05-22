import { Shield, TrendingDown, Package, Truck, BarChart3, Headphones } from 'lucide-react';
import { Container, SectionHeader } from '@/components/ui';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations';
import { WHY_CHOOSE_US } from '@/data';

const iconMap = { Shield, TrendingDown, Package, Truck, BarChart3, Headphones };

export default function WhyChooseUs() {
  return (
    <section className="py-section bg-[#FAF9F6] relative overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-30 pointer-events-none" />

      {/* Decorative luxury radial background ambient light */}
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
                <div className="bg-white rounded-3xl p-8 border border-gray-200/60 shadow-[0_12px_40px_-15px_rgba(0,0,0,0.03)] hover:shadow-[0_30px_60px_-15px_rgba(200,168,80,0.12)] hover:border-gold-500/30 transition-all duration-500 group h-full relative overflow-hidden flex flex-col justify-between">
                  {/* Modern corner light highlight */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-gold-500/10 to-transparent rounded-tr-3xl transition-opacity duration-500 opacity-0 group-hover:opacity-100" />
                  
                  <div>
                    {/* Unique rounded gradient container for modern look */}
                    <div className="w-14 h-14 rounded-2xl bg-emerald-950/5 border border-emerald-950/10 flex items-center justify-center mb-8 group-hover:bg-emerald-950 group-hover:scale-105 transition-all duration-300">
                      <Icon size={24} className="text-emerald-800 group-hover:text-gold-400 transition-colors duration-300" />
                    </div>

                    <h3 className="text-lg font-display font-extrabold text-gray-900 mb-3 tracking-wide group-hover:text-emerald-950 transition-colors">
                      {item.title}
                    </h3>
                    
                    <p className="text-sm text-gray-500 font-body leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Sleek bottom active border accent */}
                  <div className="mt-8 pt-4 border-t border-gray-100/50 flex items-center text-xs font-semibold tracking-wider font-accent uppercase text-gray-400 group-hover:text-gold-600 transition-colors duration-300">
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
