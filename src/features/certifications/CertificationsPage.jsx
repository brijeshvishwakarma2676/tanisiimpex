import { Helmet } from 'react-helmet-async';
import { Award, ShieldCheck, CheckCircle } from 'lucide-react';
import PageHero from '@/components/common/PageHero';
import { Container, SectionHeader } from '@/components/ui';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations';
import { CERTIFICATIONS } from '@/data';

export default function CertificationsPage() {
  return (
    <>
      <Helmet>
        <title>Certifications — Tanisi Impex | Quality Assurance & Compliance</title>
        <meta name="description" content="Tanisi Impex holds ISO, FSSAI, APEDA, HACCP certifications. We ensure every product meets international quality and food safety standards." />
      </Helmet>

      <PageHero
        title="Our Certifications"
        subtitle="Quality is not just a promise — it's certified. Our products meet the most stringent international quality and food safety standards."
        breadcrumbs={[{ label: 'Certifications' }]}
      />

      <section className="py-section bg-white">
        <Container>
          <FadeIn>
            <SectionHeader badge="Quality Assurance" title="Internationally Recognized Standards" subtitle="Every product we export is backed by certifications that global buyers trust." />
          </FadeIn>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CERTIFICATIONS.map((cert) => (
              <StaggerItem key={cert.name}>
                <div className="bg-white rounded-2xl p-8 border border-gray-100 hover-lift text-center h-full group">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-900 flex items-center justify-center mx-auto mb-5 group-hover:bg-gold-500 transition-colors duration-300">
                    <Award size={28} className="text-gold-400 group-hover:text-emerald-950 transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-display font-bold text-gray-900 mb-2">{cert.name}</h3>
                  <p className="text-gray-500 font-body text-sm leading-relaxed">{cert.full}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      {/* Quality process */}
      <section className="py-section bg-gray-50">
        <Container>
          <FadeIn>
            <SectionHeader badge="Quality Control" title="Our Quality Process" subtitle="Multi-stage quality assurance ensures only the best products reach our buyers." />
          </FadeIn>
          <StaggerContainer className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { title: 'Source Verification', desc: 'Every supplier is vetted for quality standards, certifications, and production capability before onboarding.' },
              { title: 'Pre-Shipment Inspection', desc: 'Products undergo rigorous testing including lab analysis, visual inspection, and packaging verification.' },
              { title: 'Export Compliance', desc: 'Full documentation compliance with destination country regulations, labeling requirements, and import standards.' },
            ].map((item, i) => (
              <StaggerItem key={i}>
                <div className="bg-white rounded-2xl p-8 border border-gray-100 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <ShieldCheck size={24} className="text-emerald-600" />
                    <h3 className="text-lg font-display font-bold text-gray-900">{item.title}</h3>
                  </div>
                  <p className="text-gray-600 font-body leading-relaxed text-sm">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>
    </>
  );
}
