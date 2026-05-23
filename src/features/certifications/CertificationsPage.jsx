import { Helmet } from 'react-helmet-async';
import { Award, ShieldCheck, CheckCircle2, Lock, FileText, Globe, Building } from 'lucide-react';
import PageHero from '@/components/common/PageHero';
import { Container, SectionHeader } from '@/components/ui';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations';

export default function CertificationsPage() {
  // Only public and mandatory trade certificates
  const publicLicenses = [
    {
      name: 'APEDA RCMC',
      full: 'Agricultural & Processed Food Products Export Development Authority',
      authority: 'Ministry of Commerce & Industry, Government of India',
      status: 'Active & Verified',
      number: 'RCMC/APEDA/25809/2025-2026',
      icon: Award,
      desc: 'Mandatory statutory license authorizing Tanisi Impex Private Limited to process and export premium Indian agricultural commodities including spices, grains, and makhana globally.',
    },
    {
      name: 'Import Export Code (IEC)',
      full: 'Primary Global Trade Authorization License',
      authority: 'Directorate General of Foreign Trade (DGFT), Government of India',
      status: 'Active & Compliant',
      number: 'AAMCT5095R',
      icon: Globe,
      desc: 'The fundamental legal code issued by DGFT Mumbai to conduct commercial shipping cargo, logistics distribution, and custom clearance worldwide.',
    },
    {
      name: 'FSSAI Central License',
      full: 'Food Safety & Standards Authority of India',
      authority: 'Ministry of Health & Family Welfare, Government of India',
      status: 'Compliant Food Handler',
      number: '11526998000056',
      icon: ShieldCheck,
      desc: 'Central category food safety regulatory license ensuring all processing, import, trading, and merchant export standards strictly adhere to hygienic parameters.',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Trade Compliance & Certifications — Tanisi Impex</title>
        <meta name="description" content="Tanisi Impex holds official APEDA, FSSAI, and DGFT IEC certifications. We ensure full compliance with international trade laws and food safety parameters." />
      </Helmet>

      <PageHero
        title="Verified Trade Compliance"
        subtitle="Full regulatory compliance under the statutory export boards of the Government of India."
        breadcrumbs={[{ label: 'Certifications & Licenses' }]}
      />

      {/* Main Public Credentials Grid */}
      <section className="py-24 bg-[#FAF9F6] relative overflow-hidden">
        {/* Subtle decorative dot background */}
        <div className="absolute inset-0 dot-pattern opacity-30 pointer-events-none" />

        <Container className="relative z-10">
          <FadeIn>
            <SectionHeader
              badge="Compliance Gateway"
              title="Mandatory Trade Licenses"
              subtitle="Our operations are fully registered and monitored by primary Indian export authorities, giving global buyers absolute confidence."
            />
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {publicLicenses.map((cert) => {
              const Icon = cert.icon;
              return (
                <StaggerItem key={cert.name}>
                  <div className="bg-white rounded-3xl p-8 border border-gold-500/10 hover:border-gold-500/30 hover:shadow-[0_20px_50px_rgba(200,168,80,0.08)] transition-all duration-500 flex flex-col justify-between h-full relative group">
                    <div>
                      {/* Active Status Badge */}
                      <div className="flex justify-between items-start mb-6">
                        <div className="w-14 h-14 rounded-2xl bg-emerald-950/5 border border-emerald-950/10 flex items-center justify-center group-hover:bg-emerald-950 transition-all duration-300">
                          <Icon size={24} className="text-emerald-800 group-hover:text-gold-400 transition-colors" />
                        </div>
                        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 text-[10px] font-bold uppercase tracking-wider font-accent">
                          <CheckCircle2 size={10} className="fill-emerald-500 text-white" /> {cert.status}
                        </span>
                      </div>

                      <h3 className="text-lg font-display font-extrabold text-emerald-950 group-hover:text-gold-600 transition-colors duration-300 mb-1">
                        {cert.name}
                      </h3>
                      <p className="text-xs font-accent font-bold uppercase tracking-wider text-emerald-950/40 mb-3">
                        {cert.authority}
                      </p>
                      
                      {/* Premium Certified License Number Tag */}
                      <div className="inline-block px-3 py-1.5 rounded-xl bg-gold-500/5 border border-gold-500/10 text-emerald-950 text-[10px] font-bold font-mono tracking-wide mb-4 select-all">
                        Lic No: {cert.number}
                      </div>

                      <p className="text-emerald-950/60 font-body text-xs leading-relaxed">
                        {cert.desc}
                      </p>
                    </div>

                    <div className="mt-8 pt-4 border-t border-gold-500/5 flex items-center gap-2 text-[10px] font-bold font-accent uppercase tracking-wider text-emerald-950/30">
                      <FileText size={12} /> Registered Entity: Tanisi Impex
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </Container>
      </section>

      {/* Security & Confidentiality Policy Banner */}
      <section className="py-20 bg-[#022c22] relative overflow-hidden">
        {/* Glowing backdrop */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-600/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />

        <Container className="relative z-10 max-w-4xl text-center">
          <FadeIn>
            <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-6">
              <Lock size={24} className="text-gold-400" />
            </div>

            <h2 className="text-2xl lg:text-3xl font-display font-extrabold text-white mb-4 tracking-tight">
              Trade Confidentiality & Security Policy
            </h2>
            <p className="text-emerald-100/60 font-body text-xs lg:text-sm leading-relaxed max-w-2xl mx-auto mb-8">
              To safeguard commercial sensitivity, proprietary logistics routing, and secure fiscal compliance records, select business documents—including state tax registrations (GSTIN), custom bond receipts, bank invoices, and private incorporation certificates—are kept strictly confidential and withheld from the public domain.
            </p>

            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gold-400 font-accent bg-white/5 px-6 py-3 rounded-full border border-gold-500/25">
              Verified importers can request certified copies of shipping bonds during order negotiation.
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* Quality Process */}
      <section className="py-24 bg-[#FAF9F6] border-t border-gold-500/10 relative overflow-hidden">
        <Container>
          <FadeIn>
            <SectionHeader
              badge="Standard Operations"
              title="Verified Quality Protocols"
              subtitle="Ensuring strict regulatory conformity across every single container load."
            />
          </FadeIn>
          <StaggerContainer className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { title: 'Source Vetting', desc: 'All agricultural farms, sourcing networks, and processing centers undergo strict evaluation for compliance before consignment selection.' },
              { title: 'Lab Certification', desc: 'Shipments can be verified for pesticide residues, moisture limits, and organic authenticity by custom lab parameters if requested.' },
              { title: 'Logistics Conformity', desc: 'Customs declaration papers, export phytosanitary documents, and bills of lading are handled in-house with absolute precision.' },
            ].map((item, i) => (
              <StaggerItem key={i}>
                <div className="bg-white rounded-3xl p-8 border border-gold-500/10 shadow-[0_12px_40px_rgba(200,168,80,0.02)] h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <ShieldCheck size={20} className="text-emerald-700" />
                    <h3 className="text-base font-display font-extrabold text-emerald-950 uppercase tracking-wide">{item.title}</h3>
                  </div>
                  <p className="text-emerald-950/60 font-body text-xs leading-relaxed">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>
    </>
  );
}
