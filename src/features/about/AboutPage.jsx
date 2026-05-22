import { Helmet } from 'react-helmet-async';
import { Target, Eye, Heart, Award, Users, Globe } from 'lucide-react';
import PageHero from '@/components/common/PageHero';
import { Container, SectionHeader } from '@/components/ui';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations';
import { TEAM, CERTIFICATIONS } from '@/data';

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About Us — Tanisi Impex | India's Trusted Export Partner</title>
        <meta name="description" content="Learn about Tanisi Impex — our mission, team, and journey in bridging India's finest products with global markets." />
      </Helmet>

      <PageHero
        title="About Tanisi Impex"
        subtitle="Bridging India's rich heritage with global markets through premium quality, trusted partnerships, and scalable export operations."
        breadcrumbs={[{ label: 'About Us' }]}
      />

      {/* Company Story */}
      <section className="py-section bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <FadeIn direction="right">
              <div>
                <SectionHeader badge="Our Story" title="From India to the World" align="left" />
                <div className="space-y-4 text-gray-600 font-body leading-relaxed">
                  <p>At Tanisi Impex, our team is the cornerstone of global trade excellence. With deep expertise in export-import operations, sourcing, quality assurance, and brand positioning, we deliver innovative, client-centric solutions across markets.</p>
                  <p>From curating premium gemstones and jewelry to managing agribusiness logistics, our professionals leverage strategic marketing, social media engagement, and robust customer relationship management to drive trust, visibility, and value for our global clientele.</p>
                  <p>Our commitment to quality and international standards has earned us the trust of buyers in over 50 countries, and we continue to expand our reach every day.</p>
                </div>
              </div>
            </FadeIn>
            <FadeIn direction="left">
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-premium">
                  <img src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=700&q=80" alt="Global shipping and export operations" className="w-full h-[400px] object-cover" loading="lazy" />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-emerald-900 text-white px-6 py-4 rounded-xl shadow-lg">
                  <p className="text-3xl font-display font-bold text-gold-400">15+</p>
                  <p className="text-sm font-body text-white/70">Years of Excellence</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-section bg-gray-50">
        <Container>
          <StaggerContainer className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Target, title: 'Our Mission', desc: 'To connect global buyers with India\'s finest products through transparent, efficient, and quality-driven export operations that create value for all stakeholders.' },
              { icon: Eye, title: 'Our Vision', desc: 'To become India\'s most trusted and preferred export partner for international buyers, known for premium quality, reliability, and scalable supply chains.' },
              { icon: Heart, title: 'Our Values', desc: 'Integrity in every transaction, quality without compromise, innovation in sourcing, and commitment to building lasting global partnerships.' },
            ].map(({ icon: Icon, title, desc }) => (
              <StaggerItem key={title}>
                <div className="bg-white rounded-2xl p-8 border border-gray-100 h-full hover-lift">
                  <div className="w-14 h-14 rounded-xl bg-emerald-900 flex items-center justify-center mb-6">
                    <Icon size={24} className="text-gold-400" />
                  </div>
                  <h3 className="text-xl font-display font-bold text-gray-900 mb-3">{title}</h3>
                  <p className="text-gray-600 font-body leading-relaxed">{desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      {/* Team */}
      <section className="py-section bg-white">
        <Container>
          <FadeIn>
            <SectionHeader
              badge="Leadership"
              title="Our Team"
              subtitle="Meet the leaders driving Tanisi Impex's global trade excellence."
            />
          </FadeIn>
          <StaggerContainer className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {TEAM.map((member) => (
              <StaggerItem key={member.name}>
                <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover-lift text-center p-8">
                  <div className="w-32 h-32 rounded-full mx-auto mb-6 overflow-hidden bg-gray-100 border-4 border-emerald-100">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" loading="lazy" />
                  </div>
                  <h3 className="text-xl font-display font-bold text-gray-900">{member.name}</h3>
                  <p className="text-gold-600 font-accent text-sm font-semibold uppercase tracking-wider mt-1">{member.role}</p>
                  <p className="text-gray-600 font-body mt-4 leading-relaxed text-sm">{member.bio}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      {/* Certifications */}
      <section className="py-section-sm bg-emerald-950">
        <Container>
          <FadeIn>
            <div className="text-center mb-10">
              <h2 className="text-h3 font-display text-white mb-4">Our Certifications</h2>
              <div className="section-divider mx-auto" />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {CERTIFICATIONS.map((cert) => (
                <div key={cert.name} className="bg-white/5 border border-white/10 rounded-xl p-5 text-center hover:border-gold-500/30 transition-colors">
                  <Award size={28} className="text-gold-400 mx-auto mb-3" />
                  <p className="text-white font-display font-bold">{cert.name}</p>
                  <p className="text-white/50 text-xs font-body mt-1">{cert.full}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}
