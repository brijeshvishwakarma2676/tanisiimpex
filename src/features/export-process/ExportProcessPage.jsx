import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, FileCheck, Ship, PackageCheck, ClipboardCheck, Handshake, Search } from 'lucide-react';
import PageHero from '@/components/common/PageHero';
import { Container, Button, SectionHeader } from '@/components/ui';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations';
import { EXPORT_STEPS } from '@/data';

const stepIcons = [Search, Handshake, FileCheck, ClipboardCheck, PackageCheck, Ship];

export default function ExportProcessPage() {
  return (
    <>
      <Helmet>
        <title>Export Process — Tanisi Impex | How We Work With International Buyers</title>
        <meta name="description" content="Discover Tanisi Impex's streamlined export process — from inquiry to delivery. Transparent, efficient, and buyer-focused." />
      </Helmet>

      <PageHero
        title="Our Export Process"
        subtitle="A transparent, streamlined process designed to make international sourcing effortless. From your first inquiry to doorstep delivery."
        breadcrumbs={[{ label: 'Export Process' }]}
      />

      <section className="py-section bg-white">
        <Container>
          <FadeIn>
            <SectionHeader badge="Step by Step" title="How We Work" subtitle="Every step is designed to build trust and deliver value." />
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {EXPORT_STEPS.map((step, i) => {
              const Icon = stepIcons[i];
              return (
                <StaggerItem key={i}>
                  <div className="relative bg-white rounded-2xl p-8 border border-gray-100 hover-lift h-full">
                    <div className="absolute -top-4 -left-2 w-10 h-10 rounded-full bg-gold-500 text-emerald-950 flex items-center justify-center font-display font-bold text-sm shadow-gold">
                      {step.step}
                    </div>
                    <div className="w-14 h-14 rounded-xl bg-emerald-50 flex items-center justify-center mb-5 mt-2">
                      <Icon size={26} className="text-emerald-700" />
                    </div>
                    <h3 className="text-lg font-display font-bold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-600 font-body leading-relaxed text-sm">{step.description}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-section-sm bg-emerald-950 text-center">
        <Container>
          <FadeIn>
            <h2 className="text-h3 font-display text-white mb-4">Ready to Start?</h2>
            <p className="text-white/60 font-body mb-8 max-w-xl mx-auto">Begin your export journey with Tanisi Impex today. Our team is ready to guide you through every step.</p>
            <Link to="/bulk-inquiry"><Button size="lg">Request a Quote <ArrowRight size={18} /></Button></Link>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}
