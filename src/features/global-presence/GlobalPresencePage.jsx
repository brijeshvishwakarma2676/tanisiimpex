import { Helmet } from 'react-helmet-async';
import { MapPin } from 'lucide-react';
import PageHero from '@/components/common/PageHero';
import { Container, SectionHeader } from '@/components/ui';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations';
import { GLOBAL_REGIONS, STATS } from '@/data';

export default function GlobalPresencePage() {
  return (
    <>
      <Helmet>
        <title>Global Presence — Tanisi Impex | Exporting to 50+ Countries</title>
        <meta name="description" content="Tanisi Impex exports to 50+ countries across Middle East, Europe, Africa, USA & Southeast Asia. Discover our global reach." />
      </Helmet>

      <PageHero
        title="Our Global Presence"
        subtitle="From the Middle East to Europe, Africa to North America — Tanisi Impex products reach buyers across the globe."
        breadcrumbs={[{ label: 'Global Presence' }]}
      />

      <section className="py-section bg-white">
        <Container>
          <FadeIn>
            <SectionHeader badge="Worldwide" title="Where We Export" subtitle="Our products are trusted by buyers in 50+ countries across 6 continents." />
          </FadeIn>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {GLOBAL_REGIONS.map((region) => (
              <StaggerItem key={region.region}>
                <div className={`rounded-2xl p-8 border h-full ${region.highlight ? 'bg-emerald-900 border-emerald-800 text-white' : 'bg-gray-50 border-gray-100'}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <MapPin size={20} className={region.highlight ? 'text-gold-400' : 'text-emerald-600'} />
                    <h3 className="text-xl font-display font-bold">{region.region}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {region.countries.map((country) => (
                      <span
                        key={country}
                        className={`px-3 py-1 rounded-full text-sm font-body ${region.highlight ? 'bg-white/10 text-white/80' : 'bg-white text-gray-600 border border-gray-200'}`}
                      >
                        {country}
                      </span>
                    ))}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>
    </>
  );
}
