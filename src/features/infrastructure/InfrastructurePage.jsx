import { Helmet } from 'react-helmet-async';
import { Factory, Warehouse, FlaskConical, Truck } from 'lucide-react';
import PageHero from '@/components/common/PageHero';
import { Container, SectionHeader } from '@/components/ui';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations';

const facilities = [
  { icon: Factory, title: 'Processing Units', desc: 'State-of-the-art processing facilities equipped with modern machinery for cleaning, grading, and packaging.', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80' },
  { icon: FlaskConical, title: 'Quality Lab', desc: 'In-house quality control laboratory for testing purity, moisture content, aflatoxin levels, and microbiological parameters.', image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=600&q=80' },
  { icon: Warehouse, title: 'Warehousing', desc: 'Climate-controlled warehousing facilities ensuring optimal storage conditions for perishable and dry goods.', image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80' },
  { icon: Truck, title: 'Logistics Hub', desc: 'Strategic location near major ports with dedicated logistics infrastructure for efficient container stuffing and dispatch.', image: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5eb95?auto=format&fit=crop&w=600&q=80' },
];

export default function InfrastructurePage() {
  return (
    <>
      <Helmet>
        <title>Infrastructure — Tanisi Impex | Manufacturing & Processing Facilities</title>
        <meta name="description" content="Explore Tanisi Impex's state-of-the-art processing units, quality labs, warehousing, and logistics infrastructure." />
      </Helmet>

      <PageHero
        title="Our Infrastructure"
        subtitle="Modern processing facilities, quality labs, and warehousing infrastructure designed for scalable export operations."
        breadcrumbs={[{ label: 'Infrastructure' }]}
      />

      <section className="py-section bg-white">
        <Container>
          <StaggerContainer className="space-y-16">
            {facilities.map((facility, i) => {
              const Icon = facility.icon;
              const isReversed = i % 2 !== 0;
              return (
                <StaggerItem key={i}>
                  <div className={`grid lg:grid-cols-2 gap-10 items-center ${isReversed ? 'lg:direction-rtl' : ''}`}>
                    <FadeIn direction={isReversed ? 'left' : 'right'}>
                      <div className="rounded-2xl overflow-hidden shadow-elevated">
                        <img src={facility.image} alt={facility.title} className="w-full h-[300px] object-cover" loading="lazy" />
                      </div>
                    </FadeIn>
                    <FadeIn direction={isReversed ? 'right' : 'left'}>
                      <div className={isReversed ? 'lg:order-first' : ''}>
                        <div className="w-14 h-14 rounded-xl bg-emerald-900 flex items-center justify-center mb-5">
                          <Icon size={26} className="text-gold-400" />
                        </div>
                        <h3 className="text-h3 font-display text-gray-900 mb-3">{facility.title}</h3>
                        <p className="text-gray-600 font-body leading-relaxed">{facility.desc}</p>
                      </div>
                    </FadeIn>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </Container>
      </section>
    </>
  );
}
